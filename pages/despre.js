import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/layout'
import Banner from '@/components/banner'
import GetOffer from '@/components/get_offer'

import check from '@/public/icons/check.svg'
import hero from '@/public/images/home-2.jpg'

export default function Despre() {

	return (

		<Layout>

			<Banner title="Despre" imgSrc={hero} />
			<section id="despre" className="w-[90vw] m-auto lg:w-[75vw]">

				<div className="mt-24 xl:flex xl:justify-between ">

					<picture className="block relative mt-24 mx-auto w-44 h-60 before:absolute before:top-4 before:right-4 before:block before:bg-yellow before:w-44 before:h-60 md:w-[30rem] md:h-[38rem] lg:before:top-4 lg:before:right-4 md:before:w-[30rem] md:before:h-[38rem] xl:mx-0">

						<Image src={hero} alt="" className="absolute object-cover w-[100%] h-[100%]" />

					</picture>

					<div className="mt-24 lg:max-w-lg">

						<h2 className="font-bold text-black-200 text-5xl mb-8">Titlu - O descriere a companiei</h2>

						<p className="text-lg text-black-100 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!</p>

						<p className="font-bold text-lg text-black-100">Listă opțională</p>

						<ul className="text-lg text-black-100 mt-4">

							<li className="flex">

								<Image src={check} alt="" width={20} height={20} />
									
								<span className="ml-2">List item about something</span>

							</li>

							<li className="flex">

								<Image src={check} alt="" width={20} height={20} />
									
								<span className="ml-2">List item about something</span>

							</li>

							<li className="flex">

								<Image src={check} alt="" width={20} height={20} />
									
								<span className="ml-2">List item about something</span>

							</li>

						</ul>
							                     
						<p className="text-lg text-black-100 my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis dolor consectetur dolorem inventore modi tenetur ex odit, amet beatae ad, doloribus tempora quae ab nulla minus temporibus at veritatis!</p>

						<Link href="/" target="_blank"><div className="flex items-center justify-center font-bold text-black-200 w-[200px] h-12 bg-yellow">AFLĂ MAI MULTE</div></Link>

					</div>

				</div>

			</section>

			<GetOffer imgSource={hero} />

		</Layout>

	)

}
