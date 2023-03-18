import Image from 'next/image'
import Link from 'next/link'

import logoWhite from '@/public/icons/logo-white.svg'

export default function Footer() {

	return (

		<footer className="bg-black-200 text-white">

			<div className="lg:flex lg:justify-around pt-8">

				<div className="flex flex-col justify-center items-center py-12">

					<picture className="block max-w-[8rem] lg:max-w-[10rem]">

						<Image src={logoWhite} alt="" width={220} height={100} />

					</picture>

				</div>
				
				<div className="flex flex-wrap justify-between text-md w-[90%] max-w-xs mx-auto lg:max-w-[50%] lg:text-lg lg:mx-0">

					<ul className="pt-8">

						<h2 className="font-bold after:block after:bg-yellow after:w-24 after:h-0.5">INFORMAȚII</h2>

						<div className="pt-4 space-y-2">

							<li><Link href="/">Acasă</Link></li>

							<li><Link href="/">Servicii</Link></li>

							<li><Link href="/">Despre</Link></li>

							<li><Link href="/">Testimoniale</Link></li>

							<li><Link href="/">Contact</Link></li>

						</div>

					</ul>

					<ul className="pt-8">

						<h2 className="font-bold after:block after:bg-yellow after:w-24 after:h-0.5">SERVICII</h2>

						<div className="pt-4 space-y-2">

							<li>Serviciu 1</li>

							<li>Serviciu 3</li>

							<li>Serviciu 3</li>

							<li>Serviciu 4</li>

							<li>Serviciu 5</li>

						</div>

					</ul>

					<ul className="pt-8">

						<h2 className="font-bold after:block after:bg-yellow after:w-24 after:h-0.5">CONTACT</h2>

						<div className="pt-4 space-y-2">

							<li>Baia Mare, Maramureș</li>

							<li>companie@gmail.com</li>

							<li>0771 123 123</li>

						</div>

					</ul>

				</div>

			</div>

			<div className="flex flex-col text-center space-y-2 pb-12 pt-24">

				<p>Creat de  <a href="https://operadesigns.ro" className="text-yellow">Opera Designs</a></p>

				<p>Copyright - 2023</p>

			</div>

		</footer>

	)

}
