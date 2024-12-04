'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	  const [isOpen, setIsOpen] = useState(false);
		const [expandedItem, setExpandedItem] = useState(null);

		const toggleExpand = (key:any) => {
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
			<div className='xl:hidden absolute top-8 left-4'>
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<X className='w-6 h-6 bg-black' />
					) : (
						<Menu className='w-6 h-6' />
					)}
				</button>
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
						className='block hover:text-gray-600'>
						Services
					</Link>
					<Link
						href='/departments'
						className='block hover:text-gray-600'>
						Departments
					</Link>

					<div className='pt-4 border-t'>
						<Link
							href='/login'
							className='block hover:text-gray-600'>
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
