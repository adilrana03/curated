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
		<div className='max-w-4xl mx-auto px-4 py-16 space-y-16'>
			{/* Hero Section */}
			<div>
				<Image
					src={about}
					alt='Art Gallery'
					className='w-full mx-auto h-[480px] object-cover'
				/>
			</div>

			{/* About Section */}
			<div className='space-y-12'>
				<h1 className='text-2xl font-light'>About Us</h1>
				<p className='text-gray-700'>
					Artfi Curated Art is a premier art house based in Dubai,
					United Arab Emirates. we have been working as an art
					advisory and gallery for the last decade focusing on South
					Asian and Middle Eastern art.
				</p>

				<div>
					<h2 className='text-xl font-light mb-4'>
						THE STORY OF Alturaash Art
					</h2>
					<p className='text-gray-700'>
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
					<h3 className='text-lg font-light mb-4'>
						Areas of interest for Alturaash Art are as follow
					</h3>
					<div className='flex flex-wrap gap-4'>
						{areas.map((area, index) => (
							<span key={index} className='text-gray-700'>
								{area}
							</span>
						))}
					</div>
				</div>

				<div>
					<h2 className='text-xl font-light mb-2'>
						INDIAN ART AND ITS AUCTION SEGMENT
					</h2>
					<h3 className='text-lg mb-4'>
						VIEW THE WONDER OF THIS GROWING AREA IN THE ART WORLD
					</h3>
					<p className='text-gray-700'>
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

				{/* Newsletter Section */}
				{/* Newsletter Section */}
				<div className='space-y-6 py-8'>
					<h2 className='text-xl font-light'>
						Sign up for latests updates
					</h2>
					<form className='space-y-6 max-w-full'>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200'
						/>
						<input
							type='email'
							placeholder='Email'
							className='w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200'
						/>
						<button
							type='submit'
							className='px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
