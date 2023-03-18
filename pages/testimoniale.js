import GetOffer from '@/components/get_offer'
import Layout from '@/components/layout'
import ReviewCard from '@/components/review_card'
import Banner from '@/components/banner'

import hero from '@/public/images/home-2.jpg'

export default function Testimoniale() {

	return (

		<Layout>
			
			<Banner imgSrc={hero} title="Ce spun clienții" />

			<section id="testimoniale" className="flex flex-wrap m-auto justify-center items-center md:max-w-[90%] lg:max-w-[90%] xl:max-w-[70%]">

				<ReviewCard />

				<ReviewCard />

				<ReviewCard />

				<ReviewCard />

				<ReviewCard />

				<ReviewCard />

			</section>

		<GetOffer imgSource={hero} />

		</Layout>

	)

}
