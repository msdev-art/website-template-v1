import Image from 'next/image'
import {useState, useEffect} from 'react'

import logo from '@/public/icons/logo.svg'

function MobileMenu( {open} ) {

	let height = 400;

	return (

		<div className={`absolute flex flex-col justify-center items-center top-[110px] overflow-hidden transition-all duration-300 linear w-full shadow-xl  bg-white ${open ?  'h-64' : 'h-0'}`}>

				<ul className="space-y-4 pl-4 text-center">

					<li className="font-bold text-black-200 text-xl"><a href="/">ACASĂ</a></li>

					<li className="font-bold text-black-200 text-xl"><a href="/despre">DESPRE</a></li>

					<li className="font-bold text-black-200 text-xl"><a href="/proiecte">PROIECTE</a></li>

					<li className="font-bold text-black-200 text-xl"><a href="/testimoniale">TESTIMONIALE</a></li>

					<li className="font-bold text-black-200 text-xl"><a href="/contact">CONTACT</a></li>

				</ul>

		</div>

	)

}

export default function Navbar() {

const [open, setOpen] = useState(false);

	return (

		<nav>

			<div className="fixed flex justify-center items-center w-full h-[110px] bg-white z-10">

				<div className="flex justify-between items-center w-[90vw] xl:w-[70vw]">

					<Image src={logo} alt="logo" width={100} height={18} />

					<ul className="hidden lg:flex space-x-8">

						<li className="font-bold text-black-200 text-xl"><a href="/" id="/" className="after:block after:relative after:w-0 after:h-1 after:bg-yellow after:transition-all after:duration-300 hover:after:w-[100%]">ACASĂ</a></li>

						<li className="font-bold text-black-200 text-xl"><a href="/despre" id="despre" className="after:block after:relative after:w-0 after:h-1 after:bg-yellow after:transition-all after:duration-300 hover:after:w-[100%]">DESPRE</a></li>

						<li className="font-bold text-black-200 text-xl"><a href="/proiecte" id="proiecte" className="after:block after:relative after:w-0 after:h-1 after:bg-yellow after:transition-all after:duration-300 hover:after:w-[100%]">PROIECTE</a></li>

						<li className="font-bold text-black-200 text-xl"><a href="/testimoniale" className="after:block after:relative after:w-0 after:h-1 after:bg-yellow after:transition-all after:duration-300 hover:after:w-[100%]">TESTIMONIALE</a></li>

						<li className="font-bold text-black-200 text-xl"><a href="/contact" className="after:block after:relative after:w-0 after:h-1 after:bg-yellow after:transition-all after:duration-300 hover:after:w-[100%]">CONTACT</a></li>
						
					</ul>

					<button aria-label="menu" className="lg:hidden flex flex-col space-y-1" onClick={()=>{setOpen(!open)}}>

						<span className="w-8 h-1 bg-black-100" />
						
						<span className="w-8 h-1 bg-black-100"/>

						<span className="w-8 h-1 bg-black-100"/>
							
					</button>

				</div>
				
				<MobileMenu open={open} />

			</div>

		</nav>

	)

}
