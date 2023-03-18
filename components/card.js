import Image from 'next/image'

export default function Card({ source, service, content }) {

	return (

		<div className="text-center pb-16 md:px-4">

			<picture className="flex items-center justify-center m-auto mb-4 w-24 h-24 border-4 border-yellow rounded-full">

				<Image src={source} alt="" width={50} height={35} />

			</picture>

			<h2 className="mb-4 font-bold text-black-200 text-3xl">
				
				{service}

			</h2>

			<p className="text-lg text-black-100 m-0">

				{content}

			</p>

		</div>

	)

}
