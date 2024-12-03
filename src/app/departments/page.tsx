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
		<div className='max-w-6xl mx-auto lg:px-4 md:px-20 px-5 py-16'>
			<div className='grid md:grid-cols-2 gap-16 items-start mb-8'>
				{/* Left Column - Image and Caption */}
				<div className='space-y-6 text-center font-urbanist '>
					<Image
						src={img}
						alt='IBRAHIM EL-SALAHI'
				
						className='mx-auto w-[240px] h-[240px] md:h-[600px] md:w-[600px]'
					/>
					<div className='space-y-2'>
						<h2 className='lg:text-[21px] md:text-[18px] text-[16px]  font-medium'>
							IBRAHIM EL-SALAHI
						</h2>
						<p className='text-gray-700 lg:text-[14px] text-[12px] '>
							Head of the Undersecretary
						</p>
						<p className='text-gray-700 lg:text-[12px]  text-[12px] '>
							2000
						</p>
						<p className='text-gray-700 lg:text-[12px] md:text-[10px] text-[10px] '>
							OIL ON CANVAS
						</p>
					</div>
				</div>

				{/* Right Column - Departments */}
				<div className='space-y-8 font-urbanist text-[#333]'>
					<h1 className='lg:text-[21px] md:text-[18px] text-[16px]  font-light'>
						SPECIALIST DEPARTMENTS
					</h1>
					<div className='space-y-4 lg:text-[16px] md:text-[12px] text-[9px] '>
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
