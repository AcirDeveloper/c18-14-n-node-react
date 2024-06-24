"use client"
import { Slider } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import "./loan.css"
import Validation from "../../components/validation/validation";
import images from "../../utils/Images";

const Loan = () => {

    const [interestRate, setInterestRate] = useState('$00,00 (0%)');
    const [installmentValue, setInstallmentValue] = useState('$00,00');
    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        monto: "",
        proyecto: "",
        description: "",
        vacio: "",

    })


    //lo que hago aca es para que cuando se mueva el slider aumenta segun su valor   
    const handleSliderChange = (value) => {
        if (value === 1) {
            setInterestRate('$00,00 (0%)');
            setInstallmentValue('$00,00');
        } else {
            setInterestRate(`$${value * 10},00 (${value}%)`);
            setInstallmentValue(`$${value * 100},00`);
        }
    };

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        //valido los errores
        setErrors(
            Validation({
                ...data,
                [event.target.name]: event.target.value
            })
        )
    }


    //lo uso para el slider por que no meda poner 2 medias. //para mi resolucion y para la de 1920x1080
    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1440);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    const montoClass = errors.monto ? "flex justify-start rounded-xl bg-transparent border-solid border-2  border-red-700 xl:mt-2 xl:-ml-[40vh] xl:w-[60vh] h-[37px] 2xl:h-[57px]" : "flex justify-start rounded-xl bg-transparent border-solid border-2 border-[#113f63]  xl:mt-2 xl:-ml-[40vh] xl:w-[60vh] h-[37px] 2xl:h-[57px]";
    const proyectoClass = errors.proyecto ? "bg-transparent border-solid border-2 border-red-700 rounded-2xl xl:w-[60vh] xl:ml-[31vh] mt-2" : "bg-transparent border-solid border-2 border-[#113f63] rounded-2xl xl:w-[60vh] xl:ml-[31vh] mt-2"
    const descriptionClass = errors.description ? "bg-transparent border-solid border-2 border-red-700 rounded-2xl xl:w-[60vh] xl:ml-[31vh] mt-2" : "bg-transparent border-solid border-2 border-[#113f63] rounded-2xl xl:w-[60vh] xl:ml-[31vh] mt-2"

    return (
        <div className=" flex flex-col items-center text-[#112F63]">
            <h1 className="xl:mr-[67%] xl:text-3xl text-[#112F63] 2xl:text-5xl ">Solicitud de Préstamo</h1>
            <div className="bg-[#D8E6FE] flex  border-l-3 border-b-4 2xl:border-l-5 2xl:border-b-6 border-slate-300 xl:w-[80vw] xl:h-[87vh] 2xl:h-[68vh]  rounded-[30px] xl:mt-4 2xl:text-2xl">
                <h2 className="text-xl text-[#112F63] xl:px-9 xl:py-7 2xl:text-4xl ">Completar el formulario</h2>
                <form className="flex xl:mt-20 flex-col 2xl:text-2xl">

                    <label className="xl:-ml-[40vh] 2xl:mt-6">Monto a solicitar</label>
                    <div className={montoClass} >
                        <img src="/images/dolar.png" className="w-8 h-8  2xl:w-12 2xl:h-12 " />
                        <input placeholder="Ej: 20.000,00--" name="monto" type="text" value={data.monto} onChange={handleChange} className="bg-transparent ml-1 text-black w-[100%]" />
                        {errors.monto &&
                            <div >
                                <img src={images.error} className="xl:w-[20px] xl:h-[20px] xl:mr-2 xl:mt-2 xl:ml-[14vh]" />
                                <p className="text-red-700 mt-4 -ml:-72 xl:max-w-full">{errors.monto}</p>
                            </div>
                        }
                    </div>
                    <label className="xl:ml-[25vh] xl:-mt-[12.8%] px-10  2xl:px-16 2xl:-mt-[10%]" >Proyecto a financiar</label>
                    <Textarea maxlength="100" name="proyecto" type="text" value={data.proyecto} onChange={handleChange} className={proyectoClass}
                        classNames={{
                            innerWrapper: "bg-transparent xl:h-[7vh]",
                            inputWrapper: ["bg-transparent  overflow-auto",
                            ],
                            input: ["overflow-visible"]
                        }} />
                    {errors.proyecto &&
                        <div >
                            <img src={images.error} className="xl:w-[20px] xl:h-[20px] xl:mr-2 xl:-mt-10 xl:ml-[84vh]" />
                            <p className="text-red-700 mt-4 -ml:-72 xl:max-w-full">{errors.poryecto}</p>
                        </div>
                    }

                    <div className="xl:-ml-[40vh] xl:mt-2 2xl:w-[40vw]">
                        <label>Número de Cuotas</label>
                        {isScreenSmall ? (<Slider
                            size="sm"
                            color="warning"
                            step={1}
                            showTooltip={true}
                            alwaysShowTooltip={true}
                            formatOptions={{ style: "decimal" }}
                            maxValue={12}
                            minValue={1}
                            defaultValue={1}
                            marks={[
                                {
                                    value: 1,
                                    label: "1",
                                },
                                {
                                    value: 12,
                                    label: "12",
                                },
                            ]}
                            className="max-w-96 text-[#113f63]  mt-8 "
                            onChange={handleSliderChange}
                        />
                        ) : (
                            <Slider
                                size="lg"
                                color="warning"
                                step={1}
                                showTooltip={true}
                                alwaysShowTooltip={true}
                                formatOptions={{ style: "decimal", fontSize: '2em' }}
                                maxValue={12}
                                minValue={1}
                                defaultValue={1}
                                marks={[
                                    {
                                        value: 1,
                                        label: <span style={{ fontSize: '1.5em' }}>1</span>,
                                    },
                                    {
                                        value: 12,
                                        label: <span style={{ fontSize: '1.5em' }}>12</span>,
                                    },
                                ]}
                                className="max-w-[34vw] text-[#113f63] mt-8 text-4xl"
                                onChange={handleSliderChange}
                            />
                        )}

                    </div>
                    <div className="xl:-mt-20">
                        <label className="ml-[31vh] mt-4">Cuéntanos tus Proyectos</label>
                        <Textarea name="description" type="text" value={data.description} className={descriptionClass} onChange={handleChange}
                            classNames={{
                                innerWrapper: "bg-transparent xl:h-[20vh]",
                                inputWrapper: ["bg-transparent overflow-hidden"
                                ],
                                input: ["overflow-visible"]
                            }} />
                        {errors.description &&
                            <div >
                                <img src={images.error} className="xl:w-[20px] xl:h-[20px] xl:mr-2 xl:-mt-10 xl:ml-[84vh]" />
                                <p className="text-red-700 mt-6 ml-[50vh] xl:max-w-full">{errors.description}</p>
                            </div>
                        }
                    </div>
                    <div className="flex xl:w-[28vw] xl:-ml-[40vh] xl:-mt-20 rounded-lg border-dotted border-2 border-black text-[#113f63] 2xl:-mt-36">
                        <div className="flex flex-col border-dotted border-r-2 border-black xl:px-7 xl:py-2">
                            <label htmlFor="interest-rate" className="mb-2 font-bold ">Tasa de Interés</label>
                            <p id="interest-rate" className="p-2 border-2 border-gray-200 rounded-md text-black">{interestRate}</p>
                        </div>
                        <div className="flex flex-col px-7 py-2">
                            <label htmlFor="installment-value" className="mb-2 font-bold ">Valor de Cuota</label>
                            <p id="installment-value" className="p-2 border-2 border-gray-200 rounded-md text-black">{installmentValue}</p>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold xl:-ml-[30vh] mt-2 2xl:text-4xl 2xl:-ml-[34vh]">Monto total a pagar</h1>
                    <h2 className="text-black font-bold text-xl xl:-ml-[16vh] 2xl:text-3xl 2xl:-ml-[20vh]">0,00</h2>
                    <button className="bg-[#FFA629] xl:w-[14vw] rounded-3xl xl:py-2 mt-8 mx-auto ml-14 2xl:ml-28"> solicitar Préstamo</button>
                </form>
            </div>
        </div>
    )
}
export default Loan