"use client";
import { useState, useEffect } from "react";
import Subscribe from "../Subscribe";
import img from "@/assets/ae-mohabbat.png";
import img2 from "@/assets/Container (1).png";
import img3 from "@/assets/Container (2).png";
import Image from "next/image";
import Link from "next/link";

const AuctionPage = ({ type }: any) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const [activeTab, setActiveTab] = useState("lots");
	const [auctionData] = useState({
		lots: [
			{
				id: 1,
				artist: "ABDUL AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img,
			},
			{
				id: 2,
				artist: "ABDUL2 AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img2,
			},
			{
				id: 3,
				artist: "ABDUL3 AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img3,
			},
			{
				id: 4,
				artist: "ABDUL AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img,
			},
			{
				id: 5,
				artist: "ABDUL AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img2,
			},
			{
				id: 6,
				artist: "ABDUL AZIZ RAIBA",
				subtitle: "Untyl",
				estimate: "USD 10,000 - USD 20,000",
				startingBid: "USD 10,000",
				image: img3,
			},
		],
		details: `Ae Mohabbat unravels 6 works as the exemplification of an experimental approach to the genre of storytelling. Encompassing painting, Pradiptaa creates resonant yet romantic articulations of the Indian miniaturist tradition by inserting new dialogues that are romantic but more realistic in nature. The stories of romance across regions and boundaries caste and creed form a rich archive of imagery. 

Not young, not beautiful but strong and full of character and vigor, perhaps older in age these characters bring us close to human reality framed in a format of gorgeous gravitas. His visual vocabulary engages a multiplicity of themes including translation as narrative, the exploration of deviation as a means to cultivate new associations, and issues concerning social customs, scale, and time. The narrative is a central aspect of Pradiptaa's practice. It is not only crucial to the traditional format of miniature painting, but it also appears in his engagement with the art of telling short stories in one frame. Pradiptaa harnesses the spirit of the heroines he picks, they have ruled hearts and minds for centuries.

This show seeks to salute the spirit of medieval maidens who cut across societal pressures to create their own stories even as it personifies the beauty of folk traditions in storytelling.`,
		overview: `Modern Age Contemporary Sale is a curated collection showcasing the finest works from contemporary artists across South Asia. This auction features masterpieces that blend traditional artistic elements with modern interpretations.
The collection includes works that explore themes of cultural heritage, social narratives, and artistic innovation. Each piece represents a unique perspective on contemporary South Asian art, making this auction a significant event for collectors and art enthusiasts.
Highlights include works from renowned artists who have contributed to shaping the modern art landscape in the region. The auction presents an opportunity to acquire pieces that represent both artistic excellence and cultural significance.`,
		timeLeft: { days: 8, hours: 21, minutes: 11, seconds: 40 },
	});
	if (!mounted) return null;

	if (typeof window === "undefined") return null;

	const renderContent = () => {
		switch (activeTab) {
			case "lots": {
				return (
					<div className='p-4 max-w-7xl bg-[#FAFAFA]'>
						<div className='flex justify-center gap-4 mb-8'>
							<select className='border border-black p-2  md:w-40 w-[30%]'>
								<option>Sort By</option>
							</select>
							<div className='flex gap-4 w-[70%] lg:w-auto'>
								<input
									type='search'
									placeholder='Lot'
									className='border p-2 w-[50%] lg:w-auto border-black'
								/>
								<input
									type='search'
									placeholder='Search'
									className='border p-2  w-[50%] lg:w-auto border-black'
								/>
							</div>
						</div>

						<div className='grid md:grid-cols-3 gap-6 lg:px-20 font-urbanist'>
							{auctionData.lots.map((lot) => (
								<div
									key={lot.id}
									className='border rounded-lg p-4'>
									<Image
										src={lot.image}
										alt={lot.artist}
										className='w-full mb-4'
									/>
									<h3 className='text-lg font-medium'>
										{lot.artist}
									</h3>
									<p className='text-gray-600'>
										{lot.subtitle}
									</p>
									<p className='mb-1'>Est: {lot.estimate}</p>
									<p className='mb-4'>
										Starting Bid: {lot.startingBid}
									</p>
									<Link
										href={`/auction/${lot.id}`}
										className='w-full border border-gray-300 py-2 hover:bg-gray-50 inline-block text-center'>
										MORE INFO →
									</Link>
								</div>
							))}
						</div>
					</div>
				);
			}
			case "overview":
				return (
					<div className='max-w-7xl mx-auto py-8 px-4 font-urbanist'>
						<h2 className='text-2xl font-light mb-6 text-center'>Overview</h2>
						<p className='text-gray-700 leading-relaxed whitespace-pre-line font-urbanist'>
							{auctionData.overview}
						</p>
					</div>
				);

			case "details":
				return (
					<div className='max-w-7xl mx-auto py-8 px-4 font-urbanist'>
						<h2 className='text-2xl font-light mb-6 text-center'>
							Auction Detail
						</h2>
						<p className='text-gray-700 leading-relaxed whitespace-pre-line font-urbanist'>
							{auctionData.details}
						</p>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className='max-w-7xl mx-auto px-4 lg:py-16 md:py-12 py-6 font-urbanist'>
			<h1 className='text-2xl text-center mb-8'>{type} Auction</h1>

			<div className='flex flex-col-reverse md:grid md:grid-cols-2  gap-10 mb-12 bg-[#FAFAFA] md:p-8 p-4 rounded-lg'>
				<div className='space-y-6 lg:w-[70%] text-center md:text-left tracking-wider my-auto'>
					<h2 className='lg:text-3xl font-light'>
						Modern Age Contemporary Sale
					</h2>
					<p className='text-[#333] lg:text-xl font-ligh tracking-[2px] mb-3'>
						Dubai | Online Auction | Modern and Contemporary Middle
						Eastern Art
					</p>
					<div>
						<a href='/conditions' className='underline '>
							Conditions of Sale
						</a>
					</div>

					<div className='space-y-2 md:flex items-center justify-between gap-4'>
						<p className='py-1 mt-2'>Starts in</p>
						<div className='flex gap-2 lg:text-lg text-sm justify-center md:justify-normal'>
							<span className='bg-gray-200 px-3 py-1 rounded '>
								{`${auctionData.timeLeft.days}Days ${auctionData.timeLeft.hours}hour`}
							</span>
							<span className='bg-gray-200 px-3 py-1 rounded'>
								{`${auctionData.timeLeft.minutes}min ${auctionData.timeLeft.seconds}sec`}
							</span>
						</div>
					</div>

					<button className='border border-gray-300 px-6 py-2 hover:bg-gray-100 flex justify-center md:justify-start mx-auto md:mx-0'>
						Register to Bid
					</button>
				</div>

				<div className='space-y-4'>
					<Image
						src={img}
						alt='Featured Artwork'
						className='w-full lg:w-[560px] lg:h-[290px] rounded-lg'
					/>
					<p className='text-center text-gray-600'>
						Modern and Contemporary Fine Art Sale from the artists
						of Modern Age.
					</p>
				</div>
			</div>

			<div className='border-b mb-8 mx-auto w-full'>
				<div className='flex gap-8 mb-4 justify-center'>
					<button
						className={`pb-2 ${
							activeTab === "lots"
								? "border-b-2 border-black"
								: "text-gray-500"
						}`}
						onClick={() => setActiveTab("lots")}>
						Lots
					</button>
					<button
						className={`pb-2 ${
							activeTab === "overview"
								? "border-b-2 border-black"
								: "text-gray-500"
						}`}
						onClick={() => setActiveTab("overview")}>
						Overview
					</button>
					<button
						className={`pb-2 ${
							activeTab === "details"
								? "border-b-2 border-black"
								: "text-gray-500"
						}`}
						onClick={() => setActiveTab("details")}>
						Auction Details
					</button>
				</div>
			</div>

			{renderContent()}
		</div>
	);
};

export default AuctionPage;
