"use client";
import { useState, useEffect } from "react";
import Subscribe from "../Subscribe";
import img from "@/assets/ae-mohabbat.png";
import img2 from "@/assets/Container (1).png";
import img3 from "@/assets/Container (2).png";


import Image from "next/image";

const ExhibitionPage = ({ type }:any) => {
    // const router = useRouter();
	const [exhibitionData] = useState<any>({
		past: {
			title: "Ae Mohabbat",
			description: "AE MOHABBAT: TRAVERSING HISTORICAL ROMANCES...",
			date: "Oct 10 - Apr 13, 2024",
			location: "NEW DELHI",
			image: img,
		},
		ongoing: {
			title: "Current Exhibition",
			description: "Description for ongoing exhibition...",
			date: "Present - Future Date",
			location: "DUBAI",
			image: img2, // Change image
		},
		upcoming: {
			title: "Future Exhibition",
			description: "Description for upcoming exhibition...",
			date: "Future Date Range",
			location: "MUMBAI",
			image: img3, // Change image
		},
	});

	  const handleDetailClick = () => {
			window.location.href = `/exhibition/${type}/details`;
			// Or for smoother navigation:
			// router.push(`/exhibition/${type}/details`);
		};
		const handleBrowseClick = () => {
			window.location.href = `/exhibition/browse`;
			// Or for smoother navigation:
			// router.push(`/exhibition/${type}/details`);
		};

	if (!exhibitionData[type]) {
		return (
			<div className='max-w-4xl mx-auto lg:px-4 px-5 md:px-[100px] py-16'>
				<div className='text-center mb-16 font-urbanist'>
					<h1 className='lg:text-[22px] md:text-[18px] text-[14px] font-light mb-4'>
						{type} Exhibition
					</h1>
					<p className='text-gray-600 lg:text-[14px] text-[12px]'>
						Currently, there are no {type} exhibitions to display...
					</p>
				</div>
				<Subscribe />
			</div>
		);
	}

	const currentExhibition:any = exhibitionData[type];

	return (
		<div className='max-w-4xl mx-auto lg:px-4 px-5 md:px-[100px] md:py-16 py-6'>
			<h1 className='text-center text-2xl font-light mb-12'>
				{type.charAt(0).toUpperCase() + type.slice(1)} Exhibition
			</h1>

			<div className='space-y-8 mb-10'>
				<Image
					src={currentExhibition.image}
					alt={currentExhibition.title}
					className='w-[316px] h-[262px] md:w-[528px] md:h-[520px]  mx-auto'
				/>

				<div className='text-center space-y-4'>
					<h2 className='text-xl font-medium'>
						{currentExhibition.title}
					</h2>
					<p className='text-gray-700 max-w-2xl mx-auto'>
						{currentExhibition.description}
					</p>
					<p className='text-gray-600'>{currentExhibition.date}</p>
					<p className='text-gray-600 uppercase'>
						{currentExhibition.location}
					</p>
				</div>

				<div className='flex flex-col md:flex-row w-full justify-center gap-4 mt-8 font-urbanist'>
					<button
						className='px-6 py-2 border w-full border-gray-300 hover:bg-gray-50 '
						onClick={handleBrowseClick}>
						Browse Exhibition
					</button>
					<button
						className='px-6 py-2 w-full border border-gray-300 hover:bg-gray-50 '
						onClick={handleDetailClick}>
						Exhibition Detail
					</button>
					<button className='px-6 py-2 w-full border border-gray-300 hover:bg-gray-50 '>
						Download Catalog
					</button>
				</div>
			</div>
			<Subscribe />
		</div>
	);
};

export default ExhibitionPage;





















// const ExibitionPage = ({ type }: any) => {
// 	const [pageType, setPageType] = useState("ongoing");
// 	console.log(type);
// 	useEffect(() => {
// 		if (typeof window !== "undefined") {
// 			const path = window.location.pathname;
// 			if (path.includes("ongoing")) setPageType("ongoing");
// 			else if (path.includes("upcoming")) setPageType("upcoming");
// 			else if (path.includes("past")) setPageType("past");
// 		}
// 	}, []);

// 	const titles: any = {
// 		ongoing: "Ongoing Exibition",
// 		upcoming: "Upcoming Exibition",
// 		past: "Past Exibition",
// 	};

// 	if (typeof window === "undefined") return null;

// 	return (
// 		<div className='max-w-4xl mx-auto lg:px-4 px-5 md:px-[100px] py-16'>
// 			<div className='text-center mb-16 font-urbanist'>
// 				<h1 className='lg:text-[22px] md:text-[18px] text-[14px] font-light mb-4'>
// 					{titles[pageType]}
// 				</h1>
// 				<p className='text-gray-600 lg:text-[14px] text-[12px]'>
// 					Currently, there are no {pageType} exhibition to display...
// 				</p>
// 			</div>
// 			<Subscribe />
// 		</div>
// 	);
// };

// export default ExibitionPage;
