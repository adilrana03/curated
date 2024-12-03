'use client'
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import img1 from '@/assets/Container.png'
import img2 from "@/assets/Container (2).png";
import img3 from '@/assets/image 46.png'
import Image from "next/image";
import ServiceGrid from "./Services";



const artworks = [
	{
		id: 1,
		title: "Modern & Contemporary South Asian Art",
		image: img1,
		description:
			"It was in the early 1970s that Krishen Khanna first explored the subject of bandwallas, or members of local brass bands engaged to play at weddings and other public ceremonies.",
		carouselText: "Carousel 1",
	},
	{
		id: 2,
		title: "Classical Indian Paintings",
		image:img2,
		description:
			"The rich tradition of miniature paintings in India spans centuries, showcasing intricate details and vibrant colors that tell stories of royal courts.",
		carouselText: "Carousel 2",
	},
	{
		id: 3,
		title: "Contemporary Sculptures",
		image:img3,
		description:
			"Modern sculptors have redefined the boundaries of form and material, creating powerful statements about society and culture.",
		carouselText: "Carousel 3",
	},
	{
		id: 4,
		title: "Digital Art Collections",
		image: img1,
		description:
			"The emergence of digital art has transformed the landscape of contemporary art, bringing new perspectives to traditional themes.",
		carouselText: "Carousel 4",
	},
];

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeCarousel, setActiveCarousel] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % artworks.length);
			setActiveCarousel((prev) => (prev + 1) % artworks.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className='flex  justify-center bg-white border-b'>
				{/* Left Sidebar */}
				<div className='w-1/4 p-8 border-gray-200 text-[13px] text-[#000] font-urbanist  items-center hidden lg:flex flex-col md:justify-center'>
					{artworks.map((artwork, index) => (
						<div
							key={artwork.id}
							className={`md:py-6 cursor-pointer transition-colors border-b ${
								activeCarousel === index
									? "text-black"
									: "text-gray-400"
							}`}
							onClick={() => {
								setCurrentIndex(index);
								setActiveCarousel(index);
							}}>
							{artwork.carouselText}
						</div>
					))}
				</div>

				{/* Main Content */}
				<div className='md:flex-1 md:flex font-urbanist'>
					{/* Image */}
					<div className='md:w-[60%] p-12'>
						<Image
							src={artworks[currentIndex].image}
							alt={artworks[currentIndex].title}
							className='w-full md:h-[550px] object-cover'
						/>
					</div>

					{/* Text Content */}
					<div className='md:w-1/4 md:p-8 p-4 flex flex-col justify-center text-center md:text-left'>
						<h2 className='lg:text-[20px] md:text-[18px] text-[14px]  text-[#333]  mb-6 '>
							{artworks[currentIndex].title}
						</h2>
						<p className='mb-8 lg:text-[13px] md:text-[14px] text-[10px]  text-[#333]'>
							{artworks[currentIndex].description}
						</p>
						<button className='flex items-center text-[12px] text-black hover:text-gray-600 transition-colors justify-center md:justify-start'>
							LEARN MORE{" "}
							<ArrowRightIcon className='ml-2 w-4 h-4' />
						</button>
					</div>
				</div>
			</div>
			<ServiceGrid />
		</>
	);
};

export default Hero;
