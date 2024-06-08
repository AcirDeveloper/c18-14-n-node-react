// src/subscriber/LoanApplicationSubscriber.ts
import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';
import { LoanApplication, LoanApplicationStatus } from '../entities/loan-application.entity';
import { PaymentOrder } from '../entities/payment-order.entity';
import { AppDataSource } from '../database/data-source';

@EventSubscriber()
export class LoanApplicationSubscriber implements EntitySubscriberInterface<LoanApplication> {
  listenTo() {
    return LoanApplication;
  }

  async afterUpdate(event: UpdateEvent<LoanApplication>) {
    try {
      if (event.entity && event.entity.status === LoanApplicationStatus.APPROVED && event.databaseEntity.status !== LoanApplicationStatus.APPROVED) {
        const paymentOrderRepository = AppDataSource.getRepository(PaymentOrder);
        const loanApplication = event.entity;
    
        console.log("Iniciando creación de cuotas.")
        const principal = loanApplication.capital as number;
        const annualInterestRate: number = loanApplication.interest_rate as number/ 100; // Convertir porcentaje a decimal
        const monthlyInterestRate: number = annualInterestRate / 12; // Tasa de interés mensual
        const numberOfPayments = loanApplication.loan_installments; // Número de pagos totales
        // Calcular el monto de la cuota mensual utilizando la fórmula del pago de una anualidad
        const monthlyPayment: number = (monthlyInterestRate * principal) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));


        for (let i = 0; i < numberOfPayments; i++) {
            const newPaymentOrder = paymentOrderRepository.create();
            newPaymentOrder.loanApplication = loanApplication as LoanApplication;
            newPaymentOrder.payment_order_number = i+1;
            newPaymentOrder.amount = parseFloat(monthlyPayment.toString());
            newPaymentOrder.due_date = new Date();
            newPaymentOrder.due_date.setMonth(newPaymentOrder.due_date.getMonth() + i + 1);
            
            await paymentOrderRepository.save(newPaymentOrder);
        }
        console.log("Cuotas generadas correctamente.")
    }
    } catch (error) {
      throw new Error(error.message);
    }
    
  }
}
