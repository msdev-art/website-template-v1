import Image from 'next/image'

import stars from '@/public/icons/stars.svg'
import profile from '@/public/icons/profile.svg'

export default function ReviewCard() {

	return (

		<div className="w-[95vw] max-w-sm px-2 pb-4 mt-16 m-auto filter drop-shadow-xl">

			<picture className="block mb-8">

				<Image src={profile} alt="" width={100} height={100} />

			</picture>

			<p className="mb-4 after:block after:bg-black-100 after:w-full after:h-[1px] after:mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed recusandae rerum unde similique ratione sapiente necessitatibus natus mollitia nam iusto.</p>

			<div className="flex justify-between">

				<span>

					Ion Popescu

				</span>

				<picture>

					<Image src={stars} alt="" width={91} height={15} />

				</picture>

			</div>

		</div>

	)

}
