
export default function Form() {


	return (

		<div className="flex flex-col max-w-[30rem] p-2 m-auto shadow-lg ">

			<h2 className="font-bold text-2xl text-gray-400 pb-8">Lasă-ne un mesaj</h2>

			<p className="text-md text-black-100 mb-8">Dacă ai orice fel de întrebare sau nelămurire nu ezita să ne suni sau să ne trimiți un mesaj. Răspundem la fiecare apel telefonic sau e-mail.</p>

			<form name="Contact" method="POST" action="/succes" netlify-honeypot="bot-field" data-netlify="true" className="flex flex-col space-y-4 xl:max-w-xl mb-16">

				<input type="hidden" name="form-name" value="Contact"/>

					<p className="hidden">

					 <label>

						 Don’t fill this out if you’re human: <input name="bot-field" />

					 </label>

					</p>

				<div className="flex flex-col">

					<label htmlFor="name" className="text-gray text-xl pb-2">Nume și Prenume</label>

					<input type="text" id="name" name="name" required placeholder="ex. Popescu Andrei" className="bg-transparent border-b-2 border-black-100 border-opacity-50 text-gray-300 text-sm p-2 mb-8" />

					<label htmlFor="phone" className="text-gray text-xl pb-2">Telefon</label>

					<input type="tel" id="phone" name="phone" required placeholder="ex. 0774 123 123" className="bg-transparent border-b-2 border-black-100 border-opacity-50  text-gray-300 text-sm p-2 mb-8" />

					<label htmlFor="email" className="text-gray text-xl pb-2">E-mail</label>

					<input type="email" id="email" name="email" required placeholder="example@company.ro" className="bg-transparent border-b-2 border-black-100 border-opacity-50  text-gray-300 text-sm p-2 mb-8"/>

					<label htmlFor="how" className="text-gray text-xl pb-2">Cum ai aflat de noi</label>

					<input type="text" id="how" name="hear" required placeholder="Cum ai aflat de noi " className="bg-transparent border-b-2 border-black-100 border-opacity-50 text-gray-300 text-sm p-2 mb-8"/>

					<label htmlFor="message" className="text-gray text-xl pb-2">Mesaj</label>
					
					<textarea id="message" name="message" required placeholder="Mesajul tău ..." rows="4" className="block bg-transparent border-b-2 border-black-100 border-opacity-50  text-gray-300 text-sm p-2 mb-8" />

					<div className="flex justify-center items-center w-full h-full pt-4">

						<button aria-label="trimite" type="submit" id="submit" value="Trimite" className="w-32 h-12 bg-yellow text-black-200 font-bold">TRIMITE</button>

					</div>

				</div>

			</form>

		</div>

	);

}
