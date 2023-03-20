import Layout from '@/components/layout'
import Banner from '@/components/banner'
import GetOffer from '@/components/get_offer'
import ShowcaseCard from '@/components/showcase_card'
import Meta from '@/components/meta'

import hero from '@/public/images/home-2.jpg'
import img1 from '@/public/images/home-1.jpg'
import img3 from '@/public/images/home-3.jpg'
import img4 from '@/public/images/home-4.jpg'
import img5 from '@/public/images/home-5.jpg'
import img6 from '@/public/images/home-6.jpg'

export default function Portofoliu() {

	const title="Company Name | Proiecte";
	const link="proiecte";
	const description="";
	const keywords="";

	return (

		<Layout>

			<Meta

			title={title}

			link={link}

			description={description}

			keywords={keywords}

			/>

			<Banner imgSrc={hero} title="Proiecte" />

			<section id="portofoliu" className="mt-12 max-w-[90vw] m-auto sm:flex sm:flex-wrap sm:justify-center">

				<div className="flex flex-col items-center">

					<ShowcaseCard

					imgSource={hero}

					/>

					<ShowcaseCard  imgSource={img1} />

				</div>

				<div className="flex flex-col items-center">

					<ShowcaseCard  imgSource={img3} />

					<ShowcaseCard  imgSource={img4} />

				</div>
				
				<div classNAme="flex flex-col items-center">

					<ShowcaseCard  imgSource={img5} />

					<ShowcaseCard  imgSource={img6} />

				</div>

			</section>

			<GetOffer imgSource={hero} />

		</Layout>

	)

}
