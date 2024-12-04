"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import img from "@/assets/image 61.png";

const LotDetail = ({ id }: any) => {
	const [mounted, setMounted] = useState(false);
	const [openSection, setOpenSection] = useState("description");

	const lotData = {
		artist: "ABDUL AZIZ RAIBA",
		estimate: "USD 10,000 - USD 20,000",
		startingBid: "USD 10,000",
		timeLeft: { days: 8, hours: 21, minutes: 11, seconds: 40 },
		description: {
			title: "AE MOHABBAT: TRAVERSING HISTORICAL ROMANCES",
			text: "Fusing a story with pictorial elements, Pradiptaa Chakroborty rediscovers, and re-contextualizes historical romances in a unique genre of modernist moorings in a painting by bringing it forward with his own personal idioms.",
			details: [
				{ label: "Artist", value: "ABDUL AZIZ RAIBA" },
				{ label: "Signature", value: "Signed on th lower right" },
				{ label: "Year", value: "1980" },
				{ label: "Medium", value: "Acrylic on canvas" },
				{ label: "Size", value: "30×40" },
			],
		},
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleSection = (section: string) => {
		setOpenSection(openSection === section ? "" : section);
	};

	return (
		<div className='max-w-7xl mx-auto px-4 py-8'>
			<div className='flex justify-between items-center mb-8'>
				<button onClick={() => window.history.back()}>
					← Upcoming Auction
				</button>
				<h1>Lot {id}</h1>
				<button>Next Lot →</button>
			</div>

			<div className='grid md:grid-cols-2 gap-12'>
				<div className='space-y-6'>
					<h2 className='text-2xl'>{lotData.artist}</h2>
					<p>Est. {lotData.estimate}</p>
					<p>Starting Bid: {lotData.startingBid}</p>
					<p>Buy Premium:</p>

					<div className='space-y-2'>
						<p>Starts in</p>
						<div className='flex gap-2'>
							<span className='bg-gray-200 px-3 py-1 rounded'>
								{lotData.timeLeft.days}Days{" "}
								{lotData.timeLeft.hours}hour
							</span>
							<span className='bg-gray-200 px-3 py-1 rounded'>
								{lotData.timeLeft.minutes}min{" "}
								{lotData.timeLeft.seconds}sec
							</span>
						</div>
					</div>

					<button className='border px-6 py-2 hover:bg-gray-50'>
						Register to Bid →
					</button>
				</div>

				<Image
					src={img}
					alt={lotData.artist}
					width={600}
					height={400}
					className='rounded-lg'
				/>
			</div>

			<div className='mt-12 space-y-4'>
				{[
					"Description",
					"Condition Report",
					"Provenance",
					"Literature",
					"Catalogue Note",
				].map((section) => (
					<div key={section} className='border rounded-lg'>
						<button
							className='w-full px-6 py-4 flex justify-between items-center'
							onClick={() =>
								toggleSection(section.toLowerCase())
							}>
							{section}
							{openSection === section.toLowerCase() ? (
								<ChevronUp />
							) : (
								<ChevronDown />
							)}
						</button>

						{openSection === section.toLowerCase() &&
							section === "Description" && (
								<div className='px-6 py-4'>
									<p className='mb-4'>
										{lotData.description.text}
									</p>
									<ul className='space-y-2'>
										{lotData.description.details.map(
											(detail) => (
												<li key={detail.label}>
													{detail.label}:{" "}
													{detail.value}
												</li>
											)
										)}
									</ul>
								</div>
							)}
					</div>
				))}
			</div>
		</div>
	);
};

export default LotDetail;
