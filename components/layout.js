import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

export default function Layout({children}) {

	return (

		<>

		<header>

			<Navbar />

		</header>

		<main>

			{children}

		</main>

		<Footer />

		</>
	)

}
