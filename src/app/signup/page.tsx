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
		<div className='max-w-3xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-light mb-12 text-center'>
				Create an account
			</h1>

			<form onSubmit={handleSubmit} className='space-y-6'>
				{[
					{ label: "First Name", name: "firstName", type: "text" },
					{ label: "Last Name", name: "lastName", type: "text" },
					{ label: "Choose User Id", name: "userId", type: "text" },
					{ label: "Email Address", name: "email", type: "email" },
					{ label: "Password", name: "password", type: "password" },
				].map((field) => (
					<div key={field.name} className='space-y-2'>
						<label className='block'>
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
							className='w-full border-b border-gray-300 py- focus:outline-none'
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
					<label htmlFor='terms' className='text-sm text-gray-600'>
						Your personal data will be used to support your
						experience throughout this website, to manage access to
						your account, and for other purposes described in our
						privacy policy
					</label>
				</div>

				<button
					type='submit'
					className='w-full md:w-[20%] bg-black text-white py-2 hover:bg-gray-800 transition-colors'>
					Login
				</button>

				<div className='text-center space-y-2'>
					<p className="mb-5">Already have an account?</p>
					<Link
						href='/login'
						className='text-gray-800 hover:text-gray-600 uppercase mt-4 '>
						Login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
