import Image from 'next/image'
import Link from 'next/link'

export default function GetOffer({ imgSource }) {

	return (

			<section id="cere-oferta" className="relative m-auto mt-24 lg:flex lg:items-center lg:justify-center lg:w-[85vw] lg:h-96">

				<div className="flex flex-col justify-center items-center text-center py-12 ">
					
					<h2 className="font-bold text-3xl text-white mb-4">Hai să discutăm despre proiectul tău</h2>

					<p className="text-xl text-white mb-4">Acest text trebuie să încurajeze utilizatorul să acționeze.</p>

					<Link href="/" target="_blank"><div className="flex items-center justify-center font-bold text-black-200 w-[200px] h-12 bg-yellow">AFLĂ MAI MULTE</div></Link>

				</div>

				<picture className="block absolute w-[100%] h-[100%] top-0 left-0 z-[-1]">

					<Image src={imgSource} alt="" className="object-cover w-[100%] h-[100%] brightness-[0.25]" />	

				</picture>

			</section>

	)

}
