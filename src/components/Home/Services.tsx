import { ArrowRight } from "lucide-react";
import Link from "next/link";
const ServiceGrid = () => {
	const services = [
		{
			title: "Auctions & Exhibitions",
			description:
				"Browse our most exclusive and latest events, we bring auctions, exhibitions from our various departments and an updated calendar of our upcoming auctions and exhibitions here.",
			link: "/auctions-exhibitions",
		},
		{
			title: "Get Estimate and Consign With Us",
			description:
				"Get free valuation and consign your art or obect in 3 easy step",
			link: "/consign",
		},
		{
			title: "How to Buy with Us",
			description:
				"A complete guide on how to buy art and objects from us.",
			link: "/how-to-buy",
		},
		{
			title: "How to Sell with Us",
			description:
				"A complete guide on how to Sell art and objects with us.",
			link: "/how-to-sell",
		},
		{
			title: "Private Sales at Alturaash",
			description:
				"Know and Discover private sales\nEnquire about available works for immediate purchase",
			link: "/private-sales",
		},
	];

	return (
		<div className='max-w-7xl mx-auto px-[20px] md:px-[50px] lg:px-4 py-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-12 gap-8 font-urbanist'>
				{services.map((service, index) => (
					<div key={index} className='space-y-4 font-urbanist'>
						<h2 className='lg:text-[21px] md:text-[16px] text-[14px] font-light md:w-[50%]'>
							{service.title}
						</h2>
						<p className='text-[#333] whitespace-pre-line text-[10px] md:text-[12px] xl:text-[13px] 2xl:text-[16px] md:w-[80%]'>
							{service.description}
						</p>
						<Link
							href={service.link}
							className='inline-flex items-center text-black hover:text-gray-600 mt-4 md:text-[12px] text-[10px]'>
							LEARN MORE
							<ArrowRight className='ml-2 w-4 h-4' />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceGrid;
