import Head from 'next/head'

export default function Meta({ description, keywords}) {

	return (

			<Head>

				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="theme-color" content=""/>

				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" href="/images/favicon-32x32.png"/>
				<link rel="icon" type="image/png" href="/images/favicon-16x16.png"/>
				<link rel="manifest" href=""/>
				<link rel="canonical" href="https://operadesigns.ro/"/>
				<meta name="msapplication-Tilecolor" content=""/>
				<meta name="theme-color" content=""/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://operadesigns.ro/"/>
				<meta property="og:image" content=""/>
				<meta property="og:image:secure_url" content=""/> 

				<title>Opera Designs - Design și dezvoltare website de prezentare</title>
				<meta property="og:title" content="Opera Designs - Design și dezvoltare website de prezentare"/>

				<meta name="description" content={description}/>
				<meta property="og:description" content={description}/>

				<meta name="keywords" content={keywords}/>

			</Head>


	)

}
