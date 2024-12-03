import React from "react";
import Image from "next/image";
import img from '@/assets/Container (1).png'
const ServicesPage = () => {
	const services = [
		"Auction",
		"EXHIBITION",
		"PUBLICATION",
		"ART ADVISORY",
		"APPRAISAL, VALUATION & AUCTION ESTIMATE",
		"PRIVATE SALE",
	];

	const includedServices = [
		"identifying potential acquisitions",
		"customising viewings",
		"coordinating gallery and studio visits",
		"negotiating prices and payment terms",
		"market research",
		"framing",
		"shipping",
		"installation",
		"collection management services",
	];

	return (
		<div className='max-w-5xl mx-auto px-4 py-16 space-y-16'>
			{/* Hero Section */}
			<div className='text-center space-y-2'>
				<Image
					src={img}
					alt='JAMES WALES'
					width={400}
					height={400}
					className='mx-auto mb-6'
				/>
				<h2 className='text-lg font-medium'>JAMES WALES</h2>
				<p className='text-sm'>
					Nur Al-din Hussein Khan: The Residency Vakil, Poona
				</p>
				<p className='text-sm'>1792</p>
				<p className='text-sm'>OIL ON CANVAS</p>
			</div>

			{/* Services Section */}
			<div className='space-y-12'>
				<h1 className='text-2xl text-center'>OUR SERVICES</h1>

				<div className='text-center'>
					<h3 className='mb-4'>WHAT WE DO:</h3>
					<div className='flex flex-wrap w-[60%] justify-center gap-4'>
						{services.map((service) => (
							<span
								key={service}
								className='px-4 py-2 bg-[#F4F4F4] rounded-md'>
								{service}
							</span>
						))}
					</div>
				</div>

				{/* Appraisals Section */}
				<div className='space-y-4'>
					<h3 className='text-xl'>
						Appraisals, Formal Valuations, and Auction Estimates
					</h3>
					<p className='text-gray-700'>
						Appraisals and formal valuations are provided by Artfi
						Curated for private collections. We provide the same
						service for museums, trustees, and corporations and also
						conduct auction estimates for artworks that are covered
						in our field of expertise. Alturaash Art can also assist
						clients with specialist services and guidance on how
						best to approach sales of works to ensure they achieve
						the highest returns.
					</p>
				</div>

				{/* Advisory Service Section */}
				<div className='space-y-4'>
					<h3 className='text-xl'>A Bespoke Art Advisory Service</h3>
					<p className='text-gray-700'>
						Artfi Curated Art offers individualized services and
						total discretion without compromising on the full
						experience. Right input, representing each client like
						how it should have been, as well as seasoned collectors
						to buy art at the right price from the right platform
						and ensure that it includes the critical factors that
						are of interest to our clients such as a price database,
						an art market index, and comparable.
					</p>
				</div>

				{/* Included Services Section */}
				<div className='space-y-4 bg-[#F4F4F4] p-5'>
					<h3 className='text-xl'>What Services Are Included?</h3>
					<ul className='list-disc pl-6 space-y-2'>
						{includedServices.map((service) => (
							<li key={service} className='text-gray-700 '>
								{service}
							</li>
						))}
					</ul>
				</div>

				{/* Private Sales Section */}
				<div className='space-y-4'>
					<h3 className='text-xl'>
						ARTFI CURATED PRIVATE SALES: A discrete option for art
						lovers
					</h3>
					<p className='text-gray-700'>
						Artfi Curated Private Sales personalizes in delivering a
						confidential and efficient service on behalf of our
						clients. Our team of specialists have extensive
						knowledge of client interests accumulated over years of
						research and experience. We can, therefore, facilitate
						discreet transactions between buyers and sellers based
						on expressed preferences.
					</p>
				</div>

				{/* Newsletter Section */}
				<div className='space-y-6 w-full'>
					<h3 className='text-xl'>Sign up for latests updates:</h3>
					<form className='max-w-full space-y-6'>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
						/>
						<input
							type='email'
							placeholder='Email'
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
						/>
						<button
							type='submit'
							className='bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
