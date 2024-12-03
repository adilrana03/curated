'use client'
import { useState } from "react";
const BuyNowPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		interestedArtist: "",
		mobile: "",
		priceEstimate: "",
		location: "",
		address: "",
	});

	const handleSubmit = (e:any) => {
		e.preventDefault();
		// Add form submission logic
	};

	return (
		<div className='max-w-4xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-light text-center mb-4'>Buy Now</h1>
			<p className='text-gray-700 text-center mb-12'>
				Thank you for showing interest in our private sale. Please fill
				the form and our specialist will revert to your interest
			</p>

			<form onSubmit={handleSubmit} className='space-y-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<label className='block'>
							Name <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='block'>
							Email <span className='text-red-500'>*</span>
						</label>
						<input
							type='email'
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='block'>
							Interested Artist{" "}
							<span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={formData.interestedArtist}
							onChange={(e) =>
								setFormData({
									...formData,
									interestedArtist: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='block'>
							Mobile Number{" "}
							<span className='text-red-500'>*</span>
						</label>
						<input
							type='tel'
							value={formData.mobile}
							onChange={(e) =>
								setFormData({
									...formData,
									mobile: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='block'>
							Price Estimate{" "}
							<span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={formData.priceEstimate}
							onChange={(e) =>
								setFormData({
									...formData,
									priceEstimate: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label className='block'>
							Location <span className='text-red-500'>*</span>
						</label>
						<input
							type='text'
							value={formData.location}
							onChange={(e) =>
								setFormData({
									...formData,
									location: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py-2 focus:outline-none'
							required
						/>
					</div>
				</div>

				<div>
					<label className='block'>
						Address <span className='text-red-500'>*</span>
					</label>
					<input
						type='text'
						value={formData.address}
						onChange={(e) =>
							setFormData({
								...formData,
								address: e.target.value,
							})
						}
						className='w-full border-b border-gray-300 py-2 focus:outline-none'
						required
					/>
				</div>

				<div className='flex justify-end'>
					<button
						type='submit'
						className='bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default BuyNowPage;
