'use client'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { getSectionsSidebar } from '../utils/getSectionsSidebar'

export default function Layout({ children }) {
	const [selectedTag, setSelectedTag] = useState('home')
	const sectionsSidebar = getSectionsSidebar()
	return (
		<div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
			<Sidebar
				sectionsSidebar={sectionsSidebar}
				selectedTag={selectedTag}
				onTagChange={tag => setSelectedTag(tag)}
			/>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
		</div>
	)
}
