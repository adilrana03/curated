"use client";
import React, { useState } from "react";

const Subscribe = () => {
	const [formData, setFormData] = useState({ fullName: "", email: "" });
	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle newsletter subscription
		console.log(formData);
	};
	return (
		<div>
			<div className=' mx-auto border-t py-6 px-5 w-full md:w-[80%] lg:w-full'>
				<div className=' mb-8 text-[#333] font-urbanist'>
					<h2 className='lg:text-[22px] md:text-[18px] text-[14px] font-light mb-4'>
						Sign up for latests updates
					</h2>
					<p className='text-gray-600 lg:text-[14px] md:text-[12px] text-[10px]'>
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

export default Subscribe;
