import React from "react";
import Image from "next/image";
import about from '@/assets/image 46.png'

const AboutUs = () => {
	const areas = [
		"VISUAL ARTWORKS",
		"CINEMA AND SPORTS MEMORABILIA",
		"Books",
		"VINTAGE AND CLASSIC CARS",
		"JEWELLERY AND WATCHES",
	];

	return (
		<div className='max-w-4xl mx-auto lg:px-4 md:px-[120px] px-5 py-16 space-y-16'>
			{/* Hero Section */}
			<div>
				<Image
					src={about}
					alt='Art Gallery'
					className='w-full mx-auto h-[480px] object-cover'
				/>
			</div>

			{/* About Section */}
			<div className='space-y-12 font-urbanist'>
				<h1 className=' text-[16px] md:text-[16px] text-[#333] xl:text-[21px] mb-4 space-x-1'>
					About Us
				</h1>
				<p className='text-[#333] text-[12px]  xl:text-[14px] 2xl:text-[]'>
					Artfi Curated Art is a premier art house based in Dubai,
					United Arab Emirates. we have been working as an art
					advisory and gallery for the last decade focusing on South
					Asian and Middle Eastern art.
				</p>

				<div>
					<h1 className=' text-[16px] md:text-[16px] text-[#333] xl:text-[21px] 2xl:text-[] mb-4'>
						THE STORY OF Alturaash Art
					</h1>
					<p className='text-[#333] text-[12px]  xl:text-[14px] '>
						Established in 2010, we have been working as an art
						advisory group for the last decade, focusing on Indian
						and Middle Eastern art. We are now at an exciting point
						in our company's growth, with the platform moving toward
						Starting our very own curation house. Artfi Curated Art
						will primarily work in the modern & contemporary segment
						of South Asian, Middle Eastern, Islamic, and African
						arts.
					</p>
				</div>

				<div>
					<h3 className='font-light mb-4 text-[16px] md:text-[16px] text-[#333] xl:text-[21px]'>
						Areas of interest for Alturaash Art are as follow
					</h3>
					<div className='flex flex-wrap gap-4'>
						{areas.map((area, index) => (
							<span
								key={index}
								className='text-[#333333] bg-[#F4F4F4] p-2'>
								{area}
							</span>
						))}
					</div>
				</div>

				<div className='bg-[#FAFAFA] p-6 text-[12px] md:text-[16px] lg:text-[18px]'>
					<h2 className='  mb-2'>
						INDIAN ART AND ITS AUCTION SEGMENT
					</h2>
					<h3 className=' mb-4'>
						VIEW THE WONDER OF THIS GROWING AREA IN THE ART WORLD
					</h3>
					<p className='text-gray-700 text-[10px] md:text-[12px] lg:text-[14px]'>
						Indian art is witnessing a boom in sales like never
						before. Artfi Curated Art is based in Dubai, with its
						exhibition space in Dubai and New Delhi. Due to its
						growing market size, we will also focus on the Modern &
						Contemporary Indian art segment with the great USPs that
						the UAE grants to its business house for their
						international clientele. Artfi Curated aims to create a
						parallel auction platform to open an international
						gateway for the Indian art segment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
