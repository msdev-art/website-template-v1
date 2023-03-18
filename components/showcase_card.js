import Image from 'next/image'

export default function ShowcaseCard({ imgSource }) {

	return (

		<div className="max-w-[24rem] mx-4 mb-8 px-2 pt-2 pb-4">

			<picture className="block">

				<Image src={imgSource} alt="" className="" />

			</picture>

		</div>

	)

}
