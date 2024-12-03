"use client";
import { useState, useEffect } from "react";
import Subscribe from "../Subscribe";

const ExibitionPage = ({ type }: any) => {
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
		ongoing: "Ongoing Exibition",
		upcoming: "Upcoming Exibition",
		past: "Past Exibition",
	};



	if (typeof window === "undefined") return null;

	return (
		<div className='max-w-4xl mx-auto px-4 py-16'>
			<div className='text-center mb-16'>
				<h1 className='text-3xl font-light mb-4'>{titles[pageType]}</h1>
				<p className='text-gray-600'>
					Currently, there are no {pageType} exhibition to display...
				</p>
				<hr className='my-12' />
			</div>

			<Subscribe/>
		</div>
	);
};

export default ExibitionPage;
