import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/Container (2).png";
import Subscribe from "@/components/Subscribe";

const DepartmentsPage = () => {
	const departments = [
		"Modern and Contemporary South Asian Art",
		"Modern and Contemporary Middle Eastern Art",
		"Islamic Art",
		"Modern and Contemporary African Art",
		"Classic and Historical Automobiles",
		"Sports Memorabilia",
		"Cinema Memorabilia",
		"Prints and Photographs",
		"Antiquarian and Rare Books",
		"Automobilia",
	];

	return (
		<div className='max-w-6xl mx-auto px-4 py-16'>
			<div className='grid lg:grid-cols-2 gap-16 items-start mb-8'>
				{/* Left Column - Image and Caption */}
				<div className='space-y-6 text-center'>
					<Image
						src={img}
						alt='IBRAHIM EL-SALAHI'
						width={600}
						height={600}
						className='mx-auto'
					/>
					<div className='space-y-2'>
						<h2 className='text-2xl font-medium'>
							IBRAHIM EL-SALAHI
						</h2>
						<p className='text-gray-700'>
							Head of the Undersecretary
						</p>
						<p className='text-gray-700'>2000</p>
						<p className='text-gray-700'>OIL ON CANVAS</p>
					</div>
				</div>

				{/* Right Column - Departments */}
				<div className='space-y-8'>
					<h1 className='text-3xl font-light'>
						SPECIALIST DEPARTMENTS
					</h1>
					<div className='space-y-4'>
						{departments.map((department) => (
							<Link
								href={`/departments/${department
									.toLowerCase()
									.replace(/\s+/g, "-")}`}
								key={department}
								className='block py-3 px-6 bg-gray-50 hover:bg-gray-100 transition-colors rounded-md'>
								{department}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div>
				<Subscribe />
			</div>
		</div>
	);
};

export default DepartmentsPage;
