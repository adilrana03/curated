"use client";
import { useState, useEffect } from "react";

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
		<div className='max-w-4xl mx-auto px-4 py-16'>
			<div className='text-center mb-16'>
				<h1 className='text-3xl font-light mb-4'>{titles[pageType]}</h1>
				<p className='text-gray-600'>
					Currently, there are no {pageType} auctions to display...
				</p>
				<hr className='my-12' />
			</div>

			<div className='max-w-xl mx-auto'>
				<div className='text-center mb-8'>
					<h2 className='text-2xl font-light mb-4'>
						Sign up for latests updates
					</h2>
					<p className='text-gray-600'>
						Receive the best features, latest news about actions,
						exibitions and more delivered to your inbox.
					</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<input
							type='text'
							placeholder='Full Name'
							value={formData.fullName}
							onChange={(e) =>
								setFormData({
									...formData,
									fullName: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-600'
						/>
					</div>
					<div>
						<input
							type='email'
							placeholder='Email'
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-600'
						/>
					</div>
					<button
						type='submit'
						className='bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors'>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuctionPage;
