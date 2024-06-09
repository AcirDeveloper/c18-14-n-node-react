import './globals.css'
import { inter } from './utils/fonts'
import { Providers } from './providers'
import { NavbarTop } from './components/Navbar/NavbarTop'

export const metadata = {
	title: 'Boomerang P2P',
	description: '',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<Providers>
					<main className='h-screen-minus-100px'>
						<NavbarTop />
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}
