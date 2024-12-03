"use client";
import { useState, useEffect } from "react";
import Subscribe from "../Subscribe";

const AuctionPage = ({ type }: any) => {
	const [formData, setFormData] = useState({ fullName: "", email: "" });
	const [pageType, setPageType] = useState("ongoing");
	console.log(type);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const path = window.location.pathname;
			if (path.includes("ongoing")) setPageType("ongoing");
			else if (path.includes("upcoming")) setPageType("upcoming");
			else if (path.includes("past")) setPageType("past");
		}
	}, []);

	const titles: any = {
		ongoing: "Ongoing Auctions",
		upcoming: "Upcoming Auctions",
		past: "Past Auctions",
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle newsletter subscription
		console.log(formData);
	};

	if (typeof window === "undefined") return null;

	return (
		<div className='max-w-4xl mx-auto lg:px-4 px-5  py-16'>
			<div className='text-center mb-16 font-urbanist'>
				<h1 className='lg:text-[22px] text-[#333] font-light mb-4'>
					{titles[pageType]}
				</h1>
				<p className='text-gray-600 lg:text-[14px]'>
					Currently, there are no {pageType} auctions to display...
				</p>
			</div>
			<Subscribe />
		</div>
	);
};

export default AuctionPage;
