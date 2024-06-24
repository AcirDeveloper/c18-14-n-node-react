'use client'
import { useState } from 'react'
import { TiMediaPlayReverse, TiMediaPlay } from 'react-icons/ti'
import { CgLogOut } from 'react-icons/cg'

const sectionsMovements = ['loanRequests', 'myInvestments', 'balanceHistory']
export const Sidebar = ({ sectionsSidebar, selectedTag, onTagChange = () => {} }) => {
	const [expanded, setExpanded] = useState(true)
	const [openSubsections, setOpenSubsections] = useState(null)
	const [isMovements, setIsMovements] = useState(false)
	const [isMovementsSelected, setIsMovementsSelected] = useState(false)

	const onExpanded = () => {
		setExpanded(!expanded)
	}

	const onSelectedTag = tag => {
		if (tag === 'movements') {
			setOpenSubsections(openSubsections !== tag ? tag : null)
			setIsMovementsSelected(true)
			return
		}
		onTagChange(tag)
		setOpenSubsections(null)
		setIsMovements(sectionsMovements.includes(tag) ? true : false)
		setIsMovementsSelected(sectionsMovements.includes(tag) ? true : false)
	}

	return (
		<aside className='h-full'>
			<nav
				className={`relative h-full flex flex-col bg-[#112F63] rounded-tl-none rounded-bl-none rounded-tr-3xl rounded-br-3xl custom-shadow`}
			>
				{/* Boton para reducir */}
				<div
					className='absolute w-[20px] h-[23px] bg-[#112F63] rounded-lg rounded-bl-none rounded-tl-none flex justify-center items-center right-[-15px] top-8 cursor-pointer'
					onClick={onExpanded}
				>
					{expanded ? (
						<TiMediaPlayReverse className='text-sm text-white' />
					) : (
						<TiMediaPlay className='text-sm text-white' />
					)}
				</div>
				{/* ItemsSidebar*/}
				<ul className={`flex-1 ${expanded ? 'px-[9px]' : ''} pt-[50px]`}>
					{sectionsSidebar.map(({ tag, text, icon, subsections }) => {
						const isOpenSubsection = openSubsections === tag && subsections
						const isSelectedTag =
							selectedTag === tag || (tag === 'movements' && isMovementsSelected)
						const itemSidebarClasses = `relative flex items-center py-2 
                                my-1 rounded-lg cursor-pointer
                                transition-colors group mt-[14px]
                                ${expanded ? 'px-3 custom-shadow' : 'px-[21px] h-10 rounded-none'} 
                                ${isSelectedTag && !expanded ? 'custom-drop-shadow2' : ''}
                                ${
																	!expanded && tag === 'movements' && isMovementsSelected
																		? 'custom-drop-shadow2'
																		: ''
																}
                                ${isOpenSubsection ? 'rounded-bl-none rounded-br-none' : ''}
                                ${
																	isSelectedTag
																		? 'bg-[#D8E6FE] text-[#112F63]'
																		: 'bg-[#112F63] text-[#ffffff]'
																}`

						return (
							<div
								key={tag}
								className={`relative font-bold ${
									isOpenSubsection ? 'custom-drop-shadow rounded-lg' : ''
								}`}
							>
								{/* itemSidebar */}
								<li className={itemSidebarClasses} onClick={() => onSelectedTag(tag)}>
									{icon}
									<span
										className={`overflow-hidden transition-all text-sm ${
											expanded ? 'w-52 ml-3' : 'w-0'
										}`}
									>
										{text}
									</span>
								</li>
								{/* SubItems cuando sidebar esta expanded*/}
								{expanded && (
									<div
										className={`relative overflow-hidden transition-all duration-500 ease-in-out 
                                                ${
																									isOpenSubsection
																										? 'max-h-[1000px] opacity-100 rounded-lg'
																										: 'max-h-0 opacity-0'
																								}`}
									>
										{subsections?.map(({ tag, text, icon }, index) => (
											<li
												key={tag}
												className={`overflow-hidden transition-all ease-in-out delay-150 
                                                        flex items-center py-2 
                                                        ${expanded ? 'px-3 ' : 'px-[21px]'} 
                                                        cursor-pointer text-[#ffffff] transition-colors group
                                                        ${
																													index < subsections.length - 1
																														? 'border-b border-black '
																														: 'rounded-lg'
																												}`}
												onClick={event => {
													event.stopPropagation()
													onSelectedTag(tag)
												}}
											>
												{icon}
												<span
													className={`overflow-hidden text-sm ${
														expanded ? 'w-[190px] ml-3' : 'w-0'
													}`}
												>
													{text}
												</span>
											</li>
										))}
									</div>
								)}
								{/* SubItems cuando sidebar esta contraido*/}
								{!expanded && (
									<div
										className={`absolute top-0 -right-[255px] overflow-hidden transition-all duration-500 ease-in-out bg-[#112F63] text-[#ffffff]
                                                ${
																									isOpenSubsection
																										? 'max-h-[1000px] opacity-100 rounded-lg rounded-tl-none rounded-bl-none'
																										: 'max-h-0 opacity-0'
																								}`}
									>
										{subsections?.map(({ tag, text, icon }, index) => (
											<li
												key={tag}
												className={` ease-in-out delay-150 
                                                        flex items-center py-2 
                                                        px-3 cursor-pointer text-[#ffffff]  group
                                                        ${
																													index < subsections.length - 1
																														? 'border-b border-black '
																														: 'rounded-lg'
																												}`}
												onClick={event => {
													event.stopPropagation()
													onSelectedTag(tag)
												}}
											>
												{icon}
												<span className={`ml-3 text-sm w-[190px]`}>{text}</span>
											</li>
										))}
									</div>
								)}
							</div>
						)
					})}
				</ul>
				{/* Cerrar Sesion */}
				<div
					className={`relative flex items-center py-2 ${expanded ? 'px-3 ' : 'px-[21px]'} my-1
                    rounded-lg cursor-pointer font-bold
                   text-[#ffffff] transition-colors group mb-[26px] hover:text-[#FFA629]
               `}
				>
					<CgLogOut className='text-2xl ' />
					<span
						className={`overflow-hidden  text-sm 
                    ${expanded ? 'w-52 ml-3' : 'w-0'}`}
					>
						Cerrar Sesión
					</span>
				</div>
			</nav>
		</aside>
	)
}
