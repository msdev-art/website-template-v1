import Image from 'next/image'

export default function Banner({ title, imgSrc }) {

	return (

		<div className="relative flex items-center justify-center w-full min-h-[35vh]">

			<h2 className="font-bold text-3xl md:text-5xl text-white text-center mt-24">{ title }</h2>

			<picture className="block absolute top-0 left-0 w-[100%] h-[100%] z-[-1]">

				<Image src={imgSrc} alt="" className="absolute object-cover w-[100%] h-[100%] brightness-[0.35]" />

			</picture>

		</div>

	)

}
