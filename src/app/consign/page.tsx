"use client";
import React, { useState } from "react";
import { Camera, User, FileText } from "lucide-react";

const ConsignForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<any>({
		artistName: "",
		title: "",
		category: "",
		year: "",
		medium: "",
		height: "",
		width: "",
		depth: "",
		unit: "",
		editionNumber: "",
		sizeOfEdition: "",
		isEdition: false,
		isSigned: "",
		hasAuthenticity: "",
		provenance: "",
		acquireLocation: "",
		workLocation: "",
		hasPriceInMind: "",
		price: "",
		mobile: "",
		email: "",
		photos: [],
	});
	const artists = [
		"",
		"Salman Khan",
		"Pablo Picasso",
		"M.F. Hussain",
		"Sacha Jaffery",
	];

	const renderStepIndicator = () => (
		<div className='flex justify-center items-center gap-16 mb-16'>
			<div
				className={`text-center ${
					step >= 1 ? "text-black" : "text-gray-400"
				}`}>
				<div className=''>
					<User className='w-10 h-10 mx-auto bg-gray-100 p-2 rounded-full' />
				</div>
				<span>Confirm Artist/Designer</span>
			</div>
			<div className='border-t border-gray-300 w-16' />
			<div
				className={`text-center ${
					step >= 2 ? "text-black" : "text-gray-400"
				}`}>
				<div className=' '>
					<FileText className='w-10 h-10 mx-auto bg-gray-100 p-2 rounded-full' />
				</div>
				<span>Describe the work</span>
			</div>
			<div className='border-t border-gray-300 w-16' />
			<div
				className={`text-center  ${
					step >= 3 ? "text-black" : "text-gray-400"
				}`}>
				<div className=' rounded-full '>
					<Camera className='w-10 h-10 mx-auto bg-gray-100 p-2 rounded-full' />
				</div>
				<span>Upload Photos</span>
			</div>
		</div>
	);

	const renderStep1 = () => (
		<div className='space-y-6'>
			<h2 className='text-xl mb-4 text-center py-4'>
				Enter details about the work by
			</h2>
			<div>
				<label className='block mb-2'>
					Select Artist/Designer Name{" "}
					<span className='text-red-500'>*</span>
				</label>
				<select
					value={formData.artistName}
					onChange={(e) =>
						setFormData({ ...formData, artistName: e.target.value })
					}
					className='w-full border-b border-gray-300 py-2 focus:outline-none'
					required>
					{artists.map((artist) => (
						<option
							key={artist}
							value={artist === "Select an artist" ? "" : artist}>
							{artist}
						</option>
					))}
				</select>
			</div>
			<button
				onClick={() => setStep(2)}
				className='bg-black text-white px-8 py-2 hover:bg-gray-800'>
				Next
			</button>
		</div>
	);

	const renderStep2 = () => (
		<div className='space-y-6'>
			<h2 className='text-xl mb-6'>
				Enter the name of the artist/designer who created the work
			</h2>
			<p className='text-sm text-gray-600'>
				To ensure a quick response please provide much information as
				possible.
			</p>

			<input
				type='text'
				placeholder='Title *'
				className='w-full border-b border-gray-300 py-2'
				value={formData.title}
				onChange={(e) =>
					setFormData({ ...formData, title: e.target.value })
				}
				required
			/>

			<div className='grid grid-cols-2 gap-6'>
				<input
					type='text'
					placeholder='Category *'
					className='w-full border-b  border-gray-300 py-2'
					value={formData.category}
					onChange={(e) =>
						setFormData({ ...formData, category: e.target.value })
					}
					required
				/>
				<input
					type='text'
					placeholder='Year *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.year}
					onChange={(e) =>
						setFormData({ ...formData, year: e.target.value })
					}
					required
				/>
			</div>

			<input
				type='text'
				placeholder='Medium *'
				className='w-full border-b border-gray-300 py-2'
				value={formData.medium}
				onChange={(e) =>
					setFormData({ ...formData, medium: e.target.value })
				}
				required
			/>

			<div className='grid grid-cols-2 gap-6'>
				<input
					type='text'
					placeholder='Height *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.height}
					onChange={(e) =>
						setFormData({ ...formData, height: e.target.value })
					}
					required
				/>
				<input
					type='text'
					placeholder='Width *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.width}
					onChange={(e) =>
						setFormData({ ...formData, width: e.target.value })
					}
					required
				/>
				<input
					type='text'
					placeholder='Depth'
					className='w-full border-b border-gray-300 py-2'
					value={formData.depth}
					onChange={(e) =>
						setFormData({ ...formData, depth: e.target.value })
					}
				/>
				<input
					type='text'
					placeholder='Unit *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.unit}
					onChange={(e) =>
						setFormData({ ...formData, unit: e.target.value })
					}
					required
				/>
			</div>

			<div className='grid grid-cols-2 gap-6'>
				<input
					type='text'
					placeholder='Edition Number *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.editionNumber}
					onChange={(e) =>
						setFormData({
							...formData,
							editionNumber: e.target.value,
						})
					}
					required
				/>
				<input
					type='text'
					placeholder='Size of Edition'
					className='w-full border-b border-gray-300 py-2'
					value={formData.sizeOfEdition}
					onChange={(e) =>
						setFormData({
							...formData,
							sizeOfEdition: e.target.value,
						})
					}
				/>
			</div>

			<div className='flex items-center gap-2'>
				<input
					type='checkbox'
					id='edition'
					checked={formData.isEdition}
					onChange={(e) =>
						setFormData({
							...formData,
							isEdition: e.target.checked,
						})
					}
				/>
				<label htmlFor='edition'>This is an Edition</label>
			</div>

			<div className='space-y-4'>
				<p>Is this worked signed? *</p>
				<div className='flex gap-4'>
					<label className='flex items-center gap-2'>
						<input
							type='radio'
							name='signed'
							value='yes'
							checked={formData.isSigned === "yes"}
							onChange={(e) =>
								setFormData({
									...formData,
									isSigned: e.target.value,
								})
							}
						/>
						Yes
					</label>
					<label className='flex items-center gap-2'>
						<input
							type='radio'
							name='signed'
							value='no'
							checked={formData.isSigned === "no"}
							onChange={(e) =>
								setFormData({
									...formData,
									isSigned: e.target.value,
								})
							}
						/>
						No
					</label>
				</div>
			</div>

			<div className='space-y-4'>
				<p>Does this work come with a certificate of authenticity? *</p>
				<div className='flex gap-4'>
					<label className='flex items-center gap-2'>
						<input
							type='radio'
							name='authenticity'
							value='yes'
							checked={formData.hasAuthenticity === "yes"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasAuthenticity: e.target.value,
								})
							}
						/>
						Yes
					</label>
					<label className='flex items-center gap-2'>
						<input
							type='radio'
							name='authenticity'
							value='no'
							checked={formData.hasAuthenticity === "no"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasAuthenticity: e.target.value,
								})
							}
						/>
						No
					</label>
				</div>
			</div>

			<input
				type='text'
				placeholder='Where did you acquire this work? *'
				className='w-full border-b border-gray-300 py-2'
				value={formData.acquireLocation}
				onChange={(e) =>
					setFormData({
						...formData,
						acquireLocation: e.target.value,
					})
				}
				required
			/>

			<input
				type='text'
				placeholder='What city is the work located in? *'
				className='w-full border-b border-gray-300 py-2'
				value={formData.workLocation}
				onChange={(e) =>
					setFormData({ ...formData, workLocation: e.target.value })
				}
				required
			/>

			<div className='grid grid-cols-2 gap-6'>
				<input
					type='text'
					placeholder='Mobile Number *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.mobile}
					onChange={(e) =>
						setFormData({ ...formData, mobile: e.target.value })
					}
					required
				/>
				<input
					type='email'
					placeholder='Email *'
					className='w-full border-b border-gray-300 py-2'
					value={formData.email}
					onChange={(e) =>
						setFormData({ ...formData, email: e.target.value })
					}
					required
				/>
			</div>

			<div className='flex gap-4'>
				<button
					onClick={() => setStep(1)}
					className='bg-gray-500 text-white px-8 py-2'>
					Previous
				</button>
				<button
					onClick={() => setStep(3)}
					className='bg-black text-white px-8 py-2'>
					Next
				</button>
			</div>
		</div>
	);

	const renderStep3 = () => (
		<div className='space-y-6'>
			<div className="text-center">
				<h2 className='text-xl mb-4'>Upload photos</h2>
				<p>
					Take a quick snapshot of the work so we can better assess
					the condition of the work.
				</p>
			</div>
                <h2 className="text-xl">Choose File</h2>
			<div className='border-2 border-dashed border-gray-300 p-8 text-center'>
				<input
					type='file'
					multiple
					accept='image/*'
					className='hidden'
					id='file-upload'
					onChange={(e) =>
						setFormData({ ...formData, photos: e.target.files })
					}
				/>
				<label
					htmlFor='file-upload'
					className='cursor-pointer text-gray-500'>
					Click here to upload
				</label>
			</div>
			<div className='flex gap-4'>
				<button
					onClick={() => setStep(2)}
					className='bg-gray-500 text-white px-8 py-2'>
					Previous
				</button>
				<button type='submit' className='bg-black text-white px-8 py-2'>
					Submit
				</button>
			</div>
		</div>
	);

	return (
		<div className='max-w-5xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-light text-center mb-12'>
				Consign With Us
			</h1>
			{renderStepIndicator()}
			<form className='mt-8'>
				{step === 1 && renderStep1()}
				{step === 2 && renderStep2()}
				{step === 3 && renderStep3()}
			</form>
		</div>
	);
};

export default ConsignForm;
