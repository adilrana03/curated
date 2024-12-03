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
		<div className='max-w-5xl mx-auto lg:px-4 md:px-28 px-5 py-16 space-y-16 font-urbanist'>
			{/* Hero Section */}
			<div className='text-center space-y-2 font-urbanist text-[#333]'>
				<Image
					src={img}
					alt='JAMES WALES'
					// width={400}
					// height={400}
					className='mx-auto mb-6 md:w-[400px] md:h-[400px] w-[240px] h-[200px]'
				/>
				<h2 className='text-[16px] md:text-[18px] xl:text-[22px] 2xl:text-[26px]'>
					JAMES WALES
				</h2>

				<p className='text-[12px] lg:text-[14px]'>
					Nur Al-din Hussein Khan: The Residency Vakil, Poona
				</p>
				<p className='text-sm'>1792</p>
				<p className='text-sm'>OIL ON CANVAS</p>
			</div>

			{/* Services Section */}
			<div className='space-y-12 font-urbanist'>
				<h1 className='text-[18px] lg:text-[22px] text-[#333]  md:text-center '>
					OUR SERVICES
				</h1>

				<div className='lg:text-cente font-urbanist'>
					<h3 className='mb-4 text-[14px] md:text-[16px] xl:text-[22px] 2xl:text-[]'>
						WHAT WE DO:
					</h3>
					<div className='flex flex-wrap lg:w-[60%] justify-start lg:justify-cente gap-6 '>
						{services.map((service) => (
							<span
								key={service}
								className='px-4 py-2 bg-[#F4F4F4] rounded-md text-[9px] md:text-[12px] xl:text-[16px] '>
								{service}
							</span>
						))}
					</div>
				</div>

				{/* Appraisals Section */}
				<div className='space-y-4 font-urbanist text-[#333]'>
					<h1 className='text-[14px] md:text-[16px] lg:text-[22px] font-urbanist'>
						Appraisals, Formal Valuations, and Auction Estimates
					</h1>
					<p className='text-gray-700  text-[10px] md:text-[12px] lg:text-[14px]'>
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
				<div className='space-y-4 font-urbanist text-[#333]'>
					<h1 className='text-[14px] md:text-[16px] lg:text-[22px]'>
						A Bespoke Art Advisory Service
					</h1>
					<p className='text-gray-700  text-[10px] md:text-[12px] lg:text-[14px]'>
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
				<div className='space-y-4 bg-[#F4F4F4] p-5 font-urbanist text-[#333]'>
					<h1 className='text-[14px] md:text-[16px] lg:text-[22px]'>
						What Services Are Included?
					</h1>
					<ul className='list-disc pl-6 space-y-2 text-gray-700 text-[10px] md:text-[12px] lg:text-[14px]'>
						{includedServices.map((service) => (
							<li key={service} className='text-gray-700 '>
								{service}
							</li>
						))}
					</ul>
				</div>

				{/* Private Sales Section */}
				<div className='space-y-4 font-urbanist text-[#333]'>
					<h1 className='text-[14px] md:text-[16px] lg:text-[22px]'>
						ARTFI CURATED PRIVATE SALES: A discrete option for art
						lovers
					</h1>
					<p className='text-[#333] text-[10px] md:text-[12px] lg:text-[14px]'>
						Artfi Curated Private Sales personalizes in delivering a
						confidential and efficient service on behalf of our
						clients. Our team of specialists have extensive
						knowledge of client interests accumulated over years of
						research and experience. We can, therefore, facilitate
						discreet transactions between buyers and sellers based
						on expressed preferences.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
