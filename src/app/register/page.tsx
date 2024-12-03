'use client'
import React, { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
	const [formData, setFormData] = useState<any>({
		firstName: "",
		lastName: "",
		userId: "",
		email: "",
		password: "",
		acceptTerms: false,
	});

	const handleSubmit = (e:any) => {
		e.preventDefault();
		// Add signup logic here
	};

	return (
		<div className='max-w-6xl mx-auto px-5 md:px-20 lg:px-5  py-16 font-urbanist'>
			<h1 className='text-3xl font-light mb-5 text-center'>
				Create an account
			</h1>
			<hr className='mb-10' />

			<form
				onSubmit={handleSubmit}
				className='space-y-6 max-w-3xl mx-auto'>
				{[
					{ label: "First Name", name: "firstName", type: "text" },
					{ label: "Last Name", name: "lastName", type: "text" },
					{ label: "Choose User Id", name: "userId", type: "text" },
					{ label: "Email Address", name: "email", type: "email" },
					{ label: "Password", name: "password", type: "password" },
				].map((field) => (
					<div key={field.name} className='space-y-2'>
						<label className='block font-urbanist'>
							{field.label}{" "}
							<span className='text-red-500'>*</span>
						</label>
						<input
							type={field.type}
							value={formData[field.name]}
							onChange={(e) =>
								setFormData({
									...formData,
									[field.name]: e.target.value,
								})
							}
							className='w-full border-b border-gray-300 py- focus:outline-none font-urbanist'
							required
						/>
					</div>
				))}

				<div className='flex items-start gap-2'>
					<input
						type='checkbox'
						id='terms'
						checked={formData.acceptTerms}
						onChange={(e) =>
							setFormData({
								...formData,
								acceptTerms: e.target.checked,
							})
						}
						className='mt-1'
						required
					/>
					<label
						htmlFor='terms'
						className='text-sm text-gray-500 font-urbanist'>
						Your personal data will be used to support your
						experience throughout this website, to manage access to
						your account, and for other purposes described in our
						privacy policy
					</label>
				</div>

				<button
					type='submit'
					className='w-[25%] md:w-[20%] bg-black text-white py-2 hover:bg-gray-800 transition-colors'>
					Login
				</button>

				<div className='md:text-center lg:space-y-2  flex lg:block items-center justify-between '>
					<p className='md:mb-5'>Already have an account?</p>
					<Link
						href='/login'
						className='text-gray-800 hover:text-gray-600 uppercase lg:mt-4 flex  items-center gap-2 lg:justify-center'>
						Login
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='6'
								viewBox='0 0 16 6'
								fill='none'>
								<path
									d='M15.7828 3.28284C15.9391 3.12663 15.9391 2.87337 15.7828 2.71716L13.2373 0.171573C13.081 0.0153632 12.8278 0.0153632 12.6716 0.171573C12.5154 0.327783 12.5154 0.581048 12.6716 0.737258L14.9343 3L12.6716 5.26274C12.5154 5.41895 12.5154 5.67222 12.6716 5.82843C12.8278 5.98464 13.081 5.98464 13.2373 5.82843L15.7828 3.28284ZM0.5 3.4H15.5V2.6H0.5V3.4Z'
									fill='black'
								/>
							</svg>
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
