import BalanceCard from '../../components/BalanceCard/BalanceCard'
import { BalanceStatistics } from '../../components/BalanceCard/BalanceStatistics'
import MyActivities from '../../components/MyActivities/MyActivities'
import images from '../../utils/Images'

export default function Home() {
	return (
		<div className='flex w-full h-full gap-3'>	
			<div className='w-3/5 flex flex-col gap-7'>
				<div className='flex w-full gap-5 h-56'>
					<div className='w-3/5'>
						<BalanceCard />
					</div>
					<div className='w-2/5 flex justify-end'>
						<img src={images.balanceMoney} className='object-cover w-[251px] h-56'/>
					</div>
				</div>
				{/*Mis movimientos*/}
				<div className='h-full'>
					<h1 className='text-blue-950 text-3xl font-semibold'>Mis Movimientos</h1>
					<MyActivities/>
				</div>
			</div>
			<div className='w-2/5 flex flex-col justify-between gap-10'>
				<BalanceStatistics/>
				<div className='w-full flex h-[134px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl justify-between'
				style={{ boxShadow: '-3px 8px 4px 0px rgba(0, 0, 0, 0.25);' }}>
					<div className='w-[65%] bg-[#0F9547] rounded-tl-2xl rounded-bl-2xl p-4 flex items-center'>
						<p className='text-xl text-center text-neutral-100 font-medium leading-normal tracking-tight'>
							¿Sabías que tu inversión está segura?
						</p>
					</div>
					<div className='w-[35%] p-3 flex justify-center rounded-br-2xl'>
						<img src={images.security} className='object-cover w-4/5'/>
					</div>
				</div>
			</div>
		</div>
	)
}
