import Form from '@/components/form'
import Layout from '@/components/layout'
import GetOffer from '@/components/get_offer'
import Banner from '@/components/banner'

import hero from '@/public/images/home-2.jpg'

export default function Contact() {

	return (

		<Layout>

			<Banner imgSrc={hero} title="Contact" />

			<section id="contact-form" className="flex flex-col lg:flex-row w-[90%] xl:max-w-[70%] m-auto my-24 ">

				<Form />
			
				<div className="bg-black-200 w-[90%] max-w-[20rem] h-[28rem] mx-auto my-8 px-8 py-8 ">

					<div className="pb-8">

						<h2 className="border-l-4 border-yellow pl-2 mb-4 font-bold text-2xl text-white">Adresă</h2>

						<p className="text-md text-white">Baia Mare, Maramureș</p>

					</div>

					<div className="pb-8">

						<h2 className="border-l-4 border-yellow pl-2 mb-4 font-bold text-2xl text-white">Telefon</h2>

						<p className="text-md text-white">0771 123 123</p>

					</div>

					<div className="pb-8">

						<h2 className="border-l-4 border-yellow pl-2 mb-4 font-bold text-2xl text-white">E-mail</h2>

						<p className="text-md text-white">companie@gmail.com</p>

					</div>

					<div className="pb-8">

						<h2 className="border-l-4 border-yellow pl-2 mb-4 font-bold text-2xl text-white">Program</h2>

						<p className="text-md text-white">Luni - Vineri | 08:00 - 17:00 </p>

					</div>

				</div>

			</section>

		</Layout>

	)

}
