"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [expandedItem, setExpandedItem] = useState(null);

	const toggleExpand = (key: any) => {
		setExpandedItem(expandedItem === key ? null : key);
	};
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

						<Link href='/services' className=' hover:text-gray-600'>
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
						<Link href='/login' className=' hover:text-gray-600'>
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

			{/* Mobile Menu Button */}
			<div className='xl:hidden absolute top-7 left-4'>
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<X className='w-6 h-6 bg-black' />
					) : (
						<Menu className='w-6 h-6' />
					)}
				</button>
			</div>

			<div className='xl:hidden absolute top-7 right-4'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'>
					<path
						d='M20.0268 19.0473L15.6985 14.7199C16.953 13.2137 17.5786 11.282 17.4451 9.32635C17.3116 7.37075 16.4293 5.54191 14.9817 4.22027C13.5341 2.89863 11.6327 2.18595 9.67308 2.23048C7.71344 2.27502 5.8464 3.07334 4.46036 4.45938C3.07432 5.84542 2.276 7.71246 2.23146 9.67211C2.18692 11.6318 2.8996 13.5331 4.22124 14.9807C5.54288 16.4283 7.37173 17.3106 9.32733 17.4441C11.2829 17.5776 13.2147 16.9521 14.7208 15.6976L19.0483 20.0259C19.1125 20.0901 19.1888 20.1411 19.2728 20.1758C19.3567 20.2106 19.4467 20.2285 19.5375 20.2285C19.6284 20.2285 19.7184 20.2106 19.8023 20.1758C19.8863 20.1411 19.9626 20.0901 20.0268 20.0259C20.0911 19.9616 20.142 19.8853 20.1768 19.8014C20.2116 19.7174 20.2295 19.6274 20.2295 19.5366C20.2295 19.4457 20.2116 19.3557 20.1768 19.2718C20.142 19.1878 20.0911 19.1115 20.0268 19.0473ZM3.63172 9.85476C3.63172 8.62376 3.99675 7.42041 4.68065 6.39688C5.36456 5.37334 6.33662 4.5756 7.47391 4.10451C8.6112 3.63343 9.86264 3.51018 11.07 3.75033C12.2773 3.99049 13.3863 4.58327 14.2568 5.45371C15.1272 6.32416 15.72 7.43317 15.9602 8.64051C16.2003 9.84786 16.0771 11.0993 15.606 12.2366C15.1349 13.3739 14.3372 14.3459 13.3136 15.0298C12.2901 15.7137 11.0867 16.0788 9.85574 16.0788C8.20559 16.077 6.62354 15.4206 5.45671 14.2538C4.28988 13.087 3.63355 11.5049 3.63172 9.85476Z'
						fill='#333333'
					/>
				</svg>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 xl:hidden font-urbanist ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<button
					onClick={() => setIsOpen(false)}
					className='absolute top-4 right-4'
					aria-label='Close menu'>
					<X className='w-6 h-6' />
				</button>

				<div className='p-6 pt-16 space-y-6'>
					<Link
						href='/'
						className='block hover:text-gray-600'
						onClick={() => setIsOpen(false)}>
						Home
					</Link>

					<Link
						href='/about'
						className='block hover:text-gray-600'
						onClick={() => setIsOpen(false)}>
						About us
					</Link>

					{Object.entries(navItems).map(([key, item]) => (
						<div key={key} className='space-y-2'>
							<button
								onClick={() => toggleExpand(key)}
								className='flex items-center justify-between w-full'>
								<span>{item.label}</span>
								<ChevronDown
									className={`w-4 h-4 transition-transform duration-200 ${
										expandedItem === key ? "rotate-180" : ""
									}`}
								/>
							</button>
							<div
								className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${
									expandedItem === key
										? "max-h-48"
										: "max-h-0"
								}`}>
								{item.items.map((subItem) => (
									<Link
										key={subItem.label}
										href={subItem.href}
										className='block py-1 text-gray-600 hover:text-gray-800'
										onClick={() => setIsOpen(false)}>
										{subItem.label}
									</Link>
								))}
							</div>
						</div>
					))}

					<Link
						href='/services'
						className='block hover:text-gray-600'
						onClick={() => setIsOpen(!isOpen)}>
						Services
					</Link>
					<Link
						href='/departments'
						className='block hover:text-gray-600'
						onClick={() => setIsOpen(!isOpen)}>
						Departments
					</Link>

					<div className='pt-4 border-t'>
						<Link
							href='/login'
							className='block hover:text-gray-600'
							onClick={() => setIsOpen(!isOpen)}>
							Log In
						</Link>
					</div>
				</div>
			</div>

			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden'
					onClick={() => setIsOpen(false)}
				/>
			)}
		</nav>
	);
};

export default Navbar;
