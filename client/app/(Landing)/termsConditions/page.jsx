import './terminos.css'
import images from '../../utils/Images'

const Term = () => {
	return (
		<main className='flex items-center justify-center'>
			<div className='bg-[#112F63] w-11/12 flex  mx-auto text-white relative z-30 mt-10 rounded-3xl h-[90vh]'>
				<div className='custom-scrollbar overflow-y-scroll h-[85vh] px-14 mt-4'>
					<h1 className='text-4xl mt-4'>Términos y Condiciones de Boomerang</h1>
					<h3 className='mt-10 text-xl'>Última actualización: 5/6/2024</h3>
					<p className='mt-10 text-xl text-left text-balance max-w-xl'>
						Bienvenido a Boomerang, una aplicación web que facilita préstamos peer-to-peer,
						permitiendo a los usuarios realizar transacciones financieras de manera segura. Al
						utilizar nuestra aplicación, aceptas cumplir con los siguientes términos y condiciones.
						Si no estás de acuerdo con alguno de estos términos, no debes utilizar Boomerang.
					</p>
					<img src={images.terminos} className='w-[20vw] md:ml-[70%] md:-mt-[25%]' />
					<p className='mt-20 mb-4'>
						1. Aceptación de los Términos Al acceder, registrarte o utilizar la aplicación web
						Boomerang, aceptas estos Términos y Condiciones y nuestra Política de Privacidad. Si no
						aceptas estos términos, no utilices la aplicación.
					</p>
					<p className='mb-4'>
						2. Elegibilidad Para utilizar Boomerang, debes ser mayor de 18 años y tener la capacidad
						legal para formar un contrato vinculante. Al registrarte, declaras y garantizas que
						cumples con estos requisitos.
					</p>
					<p className='mb-4'>
						3. Registro y Verificación Para utilizar los servicios de Boomerang, debes registrarte y
						proporcionar información precisa, completa y actualizada según se solicite en el
						formulario de registro. Al registrarte, aceptas que Boomerang verifique tu identidad
						utilizando la información proporcionada y cualquier otro método que consideremos
						necesario.
					</p>
					<p className='mb-4'>
						4. Uso de la Aplicación Te comprometes a utilizar Boomerang únicamente para fines
						legales y de acuerdo con estos Términos y Condiciones. Está prohibido: Utilizar la
						aplicación para actividades fraudulentas o ilegales. Falsificar tu identidad o
						proporcionar información falsa. Interferir con el funcionamiento de la aplicación o los
						servidores de Boomerang.
					</p>
					<p className='mb-4'>
						5. Transacciones Boomerang facilita transacciones financieras entre usuarios. Al
						utilizar nuestra plataforma para solicitar o invertir en préstamos, aceptas cumplir con
						todos los términos específicos de cada transacción. Boomerang no garantiza el
						cumplimiento de las obligaciones de los usuarios en relación con las transacciones.
					</p>
					<p className='mb-4'>
						6. Seguridad Boomerang se compromete a proteger la información personal y financiera de
						sus usuarios mediante medidas de seguridad técnicas y administrativas adecuadas. Sin
						embargo, no podemos garantizar la seguridad absoluta de los datos transmitidos a través
						de Internet.
					</p>
					<p className='mb-4'>
						7. Tarifas y Comisiones Boomerang puede cobrar tarifas por el uso de ciertos servicios.
						Las tarifas aplicables se detallarán en la aplicación y se te informarán antes de
						completar cualquier transacción sujeta a tarifas.
					</p>
					<p className='mb-4'>
						8. Limitación de Responsabilidad Boomerang no será responsable por ningún daño
						indirecto, incidental, especial, consecuente o punitivo que surja del uso de la
						aplicación o de la imposibilidad de utilizarla. Nuestra responsabilidad total en
						relación con cualquier transacción se limitará a la cantidad de la transacción en
						cuestión.
					</p>
					<p className='mb-4'>
						9. Modificaciones a los Términos Boomerang se reserva el derecho de modificar estos
						Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas una vez
						publicadas en la aplicación. Es tu responsabilidad revisar periódicamente estos
						términos.
					</p>
					<p className='mb-4'>
						10. Terminación Podemos suspender o cancelar tu acceso a la aplicación en cualquier
						momento, sin previo aviso, si consideramos que has violado estos Términos y Condiciones
						o por cualquier otro motivo a nuestra discreción.
					</p>
					<p className='mb-4'>
						11. Ley Aplicable Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
						las leyes del [país/estado], sin dar efecto a sus principios de conflictos de leyes.
					</p>
					<p className='mb-4'>
						12. Contacto Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor
						contacta a nuestro equipo de soporte.
					</p>

					<p className=' mt-12 text-xl  text-balance max-w-7xl'>
						Al aceptar estos términos y utilizar Boomerang, estás de acuerdo en cumplir con todas
						las disposiciones aquí contenidas. Gracias por confiar en Boomerang para tus necesidades
						de préstamos peer-to-peer.
					</p>
					<a href='/register'>
						<button className='bg-transparent border-solid border-1 border-[#FFA629] ml-[80%] py-1 px-3 mt-6 rounded-2xl hover:text-xl'>
							Cancelar
						</button>
					</a>
					<a href='/register'>
						<button className='bg-[#FFA629] text-black hover:text-xl py-1.5 px-3 ml-4 rounded-2xl mb-6'>
							Acepto
						</button>
					</a>
				</div>
			</div>
			<div className=' absolute lg:z-0 w-full lg:h-[459.83px] bg-gradient-to-br mt-5 from-green-500 to-blue-950'></div>
		</main>
	)
}
export default Term
