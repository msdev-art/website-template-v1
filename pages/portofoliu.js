import Layout from '@/components/layout'
import Banner from '@/components/banner'
import GetOffer from '@/components/get_offer'
import ShowcaseCard from '@/components/showcase_card'

import hero from '@/public/images/home-1.jpg'

export default function Proiecte() {

	return (

		<Layout>

			<Banner imgSrc={hero} title="Portofoliu" />

			<section id="portofoliu" className="mt-12 max-w-[90vw] m-auto">

				<ShowcaseCard

				imgSource={hero}

				title="Casa Blanca"

				description="Scurtă descriere despre proiect"

				/>

				<ShowcaseCard  imgSource={hero} />

				<ShowcaseCard  imgSource={hero} />

				<ShowcaseCard  imgSource={hero} />

				<ShowcaseCard  imgSource={hero} />

				<ShowcaseCard  imgSource={hero} />

			</section>

			<GetOffer imgSource={hero} />

		</Layout>

	)

}
