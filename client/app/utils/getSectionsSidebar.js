import { IoMdHome, IoIosNotifications, IoMdWallet } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import { RiExchangeDollarLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineChecklistRtl } from "react-icons/md";

export const getSectionsSidebar = () => {
    return [
        {
            tag: 'profile',
            text: 'Mi Perfil',
            icon: <FaUserCircle className="text-3xl" />,
            show: true
        },
        {
            tag: 'home',
            text: <a href="/home">Inicio</a>,
            icon: <IoMdHome className="text-3xl" />,
            show: true
        },
        {
            tag: 'noti',
            text: 'Notificaciones',
            icon: <IoIosNotifications className="text-3xl" />,
            show: true
        },
        {
            tag: 'loan',
            text: <a href="/LoanApplication">Crear Solicitud de Préstamo</a>,
            icon: <IoMdWallet className="text-3xl" />,
            show: true

        },
        {
            tag: 'investor',
            text: 'Invertir',
            icon: <IoTrendingUpSharp className="text-3xl" />,
            show: true
        },
        {
            tag: 'movements',
            text: 'Mis movimientos',
            icon: <RiExchangeDollarLine className="text-3xl" />,
            show: true,
            subsections: [
                {
                    tag: 'loanRequests',
                    text: 'Mis Solicitudes',
                    icon: <MdOutlineChecklistRtl className="text-3xl" />
                },
                {
                    tag: 'myInvestments',
                    text: 'Mis Inversiones',
                    icon: <IoTrendingUpSharp className="text-3xl" />
                },
                {
                    tag: 'balanceHistory',
                    text: 'Historial de Saldo',
                    icon: <RiMoneyDollarBoxLine className="text-3xl" />
                },
            ]
        },
        {
            tag: 'help',
            text: 'Ayuda',
            icon: <BiHelpCircle className="text-3xl" />,
            show: true
        }
    ].filter((sec) => sec.show)
}