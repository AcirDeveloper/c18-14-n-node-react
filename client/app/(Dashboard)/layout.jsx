'use client'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { getSectionsSidebar } from '../utils/getSectionsSidebar'

export default function Layout({ children }) {
	const [selectedTag, setSelectedTag] = useState('home')
	const sectionsSidebar = getSectionsSidebar()
	return (
		<div className='flex h-screen'>
			<Sidebar
				sectionsSidebar={sectionsSidebar}
				selectedTag={selectedTag}
				onTagChange={tag => setSelectedTag(tag)}
			/>
			<div className='flex-grow p-6 '>{children}</div>
		</div>
	)
}
