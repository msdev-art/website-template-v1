import { useState, useEffect } from 'react'
import Image from 'next/image'

import Meta from '@/components/meta'
import Layout from '@/components/layout'
import Card from '@/components/card'
import GetOffer from '@/components/get_offer'

import hero from '@/public/images/home-2.jpg'
import check from '@/public/icons/check.svg'
import icon1 from '@/public/icons/excavator.png'
import icon2 from '@/public/icons/engineer.png'
import icon3 from '@/public/icons/construction.png'

export default function Home() {

	const title = "Company name | Short description"
	const link = ""
	const description="Description about the services that the company provides. Include keywords"
	const keywords="keyword"

	return (

		<>

		<Meta

		title={title}

		link={link}

		description={description}

		keywords={keywords}

		/>

		<Layout>

			<section id="hero" className="flex flex-col items-center h-[100vh] pt-48">

				<div className="flex flex-col items-center text-center max-w-[95vw] margin-auto sm:max-w-[45rem] xl:max-w-[60rem] xl:mt-24">

					<h1 className="font-bold text-4xl text-white mb-20 after:block after:absolute after:left-[50%] after:-ml-12 after:w-24 after:h-1 after:bg-yellow after:mt-4 lg:text-6xl md:text-5xl">Titlul principal cu cuvinte cheie și locație</h1>

					<p className="text-lg text-white mb-8">Ce alte servicii se oferă cu cuvinte cheie și locații. De preferat 2-3 rânduri.</p>

					<div className="flex items-center justify-center font-bold text-center text-md text-black-200 w-48 h-12 bg-yellow"><a href="/" target="_blank" className="">CONTACTEAZĂ-NE</a></div>

				</div>
				
				<picture className="absolute top-[110px] left-0 z-[-1] w-[100%] h-[100%] brightness-50">

					<Image src={hero} alt="" className="object-cover w-[100%] h-[100%]" />

				</picture>

			</section>

			<section id="services" className="">

				<div className="flex flex-col items-center relative -mt-32 justify-between m-auto py-12 px-4 w-[90%] bg-white border-t-8 border-t-yellow rounded-t-lg shadow-lg lg:flex-row lg:w-[70%]">

					<div className="my-8">

						<Card

							source={icon1}

							service="Serviciu 1"

							content="Descriere a serviciului oferit cu cuvinte cheie. 1 - 2 rânduri."

							/>

					</div>

					<div className="my-8">

						<Card

							source={icon2}

							service="Serviciu 2"

							content="Descriere a serviciului oferit cu cuvinte cheie. 1 - 2 rânduri."

						/>

					</div>

					<div className="my-8">

						<Card

							source={icon3}

							service="Serviciu 3"

							content="Descriere a serviciului oferit cu cuvinte cheie. 1 - 2 rânduri."

						/>

					</div>

				</div>

			</section>

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

						<a href="/" target="_blank"><div className="flex items-center justify-center font-bold text-black-200 w-[200px] h-12 bg-yellow">AFLĂ MAI MULTE</div></a>

					</div>

				</div>

			</section>

			<section id="more-info" className="w-[90vw] m-auto lg:w-[75vw]">

				<div className="mt-24 xl:flex xl:flex-row-reverse xl:justify-between">

					<picture className="block relative mt-24 mx-auto w-44 h-60 before:absolute before:top-4 before:right-4 before:block before:bg-yellow before:w-44 before:h-60 md:w-[30rem] md:h-[38rem] lg:before:top-4 lg:before:-right-4 md:before:w-[30rem] md:before:h-[38rem] xl:mx-0">

						<Image src={hero} alt="" className="absolute object-cover w-[100%] h-[100%]" />

					</picture>

					<div className="mt-24 lg:max-w-lg">

						<h2 className="font-bold text-black-200 text-5xl mb-8">Conținut extra - O descriere a unui serviciu</h2>

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

						<a href="/" target="_blank"><div className="flex items-center justify-center font-bold text-black-200 w-[200px] h-12 bg-yellow">AFLĂ MAI MULTE</div></a>

					</div>

				</div>

			</section>

			<GetOffer imgSource={hero} />	

		</Layout>

		</>

	)

}
