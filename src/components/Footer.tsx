import { MapPin } from "lucide-react";

const Footer = () => {
	const locations = {
		dubai: {
			title: "Dubai",
			address:
				"API Trio Office Tower,\nOffice Suite 2701 - 2705,\nSheikh Zayed Road, Dubai, U.A.E",
			hours: "Sun-Thurs: 10:00 am to 7:00 pm\nSat: 12:00 pm – 6:00 pm",
			tel: "+971-4-3197562",
		},
		delhi: {
			title: "Delhi",
			address: "147, DLF South Court Mall,\nSaket\nNew Delhi-110017",
			hours: "Tuesday - Sunday: 11 am to 7 pm",
			tel: "+91-11-41679797",
		},
	};

	const links = {
		link: [
			"Conditions of Sale",
			"How to sell with us",
			"How to buy with us",
		],
		quickLink: [
			["Artist", "Privacy", "Contact", "Terms"],
			["Consign","Publication", "Metaverse"],
		],
	};

	return (
		<footer className='bg-white pt-16 pb-8 border-t '>
			<div className='container mx-auto px-4 ml-5 lg:ml-auto'>
				<div className='grid grid-cols-2 mx-auto md:grid-cols-4 lg:grid-cols-4 gap-8'>
					{/* Dubai */}
					<div className='space-y-4'>
						<div className='flex items-center gap-2'>
							<MapPin className='w-5 h-5' />
							<h3 className='text-[12px] lg:text-[21px] font-urbanist text-[#000]'>
								{locations.dubai.title}
							</h3>
						</div>
						<div className='space-y-2 lg:text-[13px] md:text-[10px] text-[8px] font-urbanist text-[#333]'>
							<p className='whitespace-pre-line'>
								{locations.dubai.address}
							</p>
							<p className='whitespace-pre-line'>
								{locations.dubai.hours}
							</p>
							<p>Tel: {locations.dubai.tel}</p>
						</div>
					</div>

					{/* Delhi */}
					<div className='space-y-4'>
						<div className='flex items-center gap-2'>
							<MapPin className='w-5 h-5' />
							<h3 className='text-[12px] lg:text-[21px] font-urbanist text-[#000]'>
								{locations.delhi.title}
							</h3>
						</div>
						<div className='space-y-2 lg:text-[13px] md:text-[10px] text-[8px] font-urbanist text-[#333]'>
							<p className='whitespace-pre-line'>
								{locations.delhi.address}
							</p>
							<p className='whitespace-pre-line'>
								{locations.delhi.hours}
							</p>
							<p>Tel: {locations.delhi.tel}</p>
						</div>
					</div>

					{/* Links */}
					<div className='space-y-4'>
						<h3 className='text-[12px] lg:text-[21px] font-urbanist text-[#000]'>
							LINK
						</h3>
						<div className='space-y-2 lg:text-[13px] md:text-[10px] text-[8px] font-urbanist text-[#333]'>
							{links.link.map((link) => (
								<p
									key={link}
									className='hover:text-gray-600 cursor-pointer'>
									{link}
								</p>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h3 className='text-[12px] lg:text-[21px] font-urbanist text-[#000]'>
							Quick Link
						</h3>
						<div className='grid grid-cols-3 gap-4'>
							{links.quickLink.map((column, idx) => (
								<div
									key={idx}
									className='space-y-2 lg:text-[13px] md:text-[10px] text-[8px] font-urbanist text-[#333]'>
									{column.map((link) => (
										<p
											key={link}
											className='hover:text-gray-600 cursor-pointer'>
											{link}
										</p>
									))}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-center mt-16 pt-8 border-t'>
					© 2024 Artfi Curated - All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
