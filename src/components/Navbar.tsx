import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/Logo.png";

const Navbar = () => {
	const navItems = {
		auctions: {
			label: "Auctions",
			items: [
				{
					label: "Ongoing Auctions",
					href: "/auction/ongoing",
				},
				{
					label: "Upcoming Auctions",
					href: "/auction/upcoming",
				},
				{ label: "Past Auctions", href: "/auction/past" },
			],
		},
		exhibitions: {
			label: "Exhibitions",
			items: [
				{
					label: "Ongoing Exhibitions",
					href: "/exhibition/ongoing",
				},
				{
					label: "Upcoming Exhibitions",
					href: "/exhibition/upcoming",
				},
				{
					label: "Past Exhibitions",
					href: "/exhibition/past",
				},
			],
		},
	};

	return (
		<nav className='w-full md:px-[120px] py-6 border-b border-gray-100'>
			<div className='container mx-auto items-center justify-between'>
				{/* Logo */}
				<div className='flex-1 pb-8'>
					<Link href='/'>
						<Image
							src={logo}
							alt='Artfi Curated'
							className='w-[20%] md:w-[155px] mx-auto'
						/>
					</Link>
				</div>

				<div className='hidden xl:flex justify-between text-[#333333] md:text-[] xl:text-[16px] 2xl:text-[] font-urbanist'>
					<div className='flex space-x-8'>
						<Link
							href='/about'
							className='text-gray-800 hover:text-gray-600'>
							About us
						</Link>

						{Object.entries(navItems).map(([key, item]) => (
							<div key={key} className='relative group'>
								<button className=' hover:text-gray-600 flex items-center'>
									{item.label}
									<ChevronDown className='ml-1 w-4 h-4' />
								</button>
								{/* Dropdown Menu */}
								<div className='absolute left-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
									<div className='py-2'>
										{item.items.map((subItem) => (
											<Link
												key={subItem.label}
												href={subItem.href}
												className='block px-4 py-2  text-gray-700 hover:bg-gray-100'>
												{subItem.label}
											</Link>
										))}
									</div>
								</div>
							</div>
						))}

						<Link
							href='/services'
							className=' hover:text-gray-600'>
							Services
						</Link>
						<Link
							href='/departments'
							className=' hover:text-gray-600'>
							Departments
						</Link>
					</div>

					{/* Right Section */}
					<div className='flex-1 flex justify-end items-center space-x-6'>
						<Link
							href='/login'
							className=' hover:text-gray-600'>
							Log In
						</Link>
						<div className='relative'>
							<button className='text-gray-800 hover:text-gray-600'>
								<Search className='w-5 h-5' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
