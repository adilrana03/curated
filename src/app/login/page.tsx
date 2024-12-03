'use client'
import Link from "next/link";
import { useState } from "react";
const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const handleSubmit = (e:any) => {
		e.preventDefault();
		// Add login logic here
	};

	return (
		<div className='max-w-5xl mx-auto px-5 md:px-20 lg:px-4 py-16 text-[#333]'>
			<h1 className='lg:text-[28px] md:text-[24px] text-[20px] mb-5 font-light  font-urbanist  text-center'>
				Login
			</h1>
            <hr className="mb-10" />

			<form onSubmit={handleSubmit} className='space-y-6 font-urbanist max-w-2xl mx-auto'>
				<div className='space-y-2 text-[14px] md:text-[18px] xl:text-[22px]'>
					<label className='block'>
						Username or Email Address{" "}
						<span className='text-red-500'>*</span>
					</label>
					<input
						type='email'
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						className='w-full border-b border-gray-300 py-2 focus:outline-none'
						required
					/>
				</div>

				<div className='space-y-2 text-[14px] md:text-[18px] xl:text-[22px] font-urbanist'>
					<label className='block'>
						Password <span className='text-red-500'>*</span>
					</label>
					<input
						type='password'
						value={formData.password}
						onChange={(e) =>
							setFormData({
								...formData,
								password: e.target.value,
							})
						}
						className='w-full border-b border-gray-300 py-2 focus:outline-none'
						required
					/>
				</div>

				<div className='flex items-center justify-between font-urbanist'>
					<label className='flex items-center space-x-2'>
						<input
							type='checkbox'
							checked={formData.rememberMe}
							onChange={(e) =>
								setFormData({
									...formData,
									rememberMe: e.target.checked,
								})
							}
							className='form-checkbox'
						/>
						<span>Remember Me</span>
					</label>
					<Link
						href='/forgot-password'
						className='text-gray-600 hover:text-gray-800'>
						Forgot Password?
					</Link>
				</div>

				<button
					type='submit'
					className='w-[25%] md:w-[20%] bg-black text-white py-2 hover:bg-gray-800 transition-colors font-urbanist'>
					Login
				</button>

				<div className='text-center font-urbanist'>
					<p className="mb-4">Don't have an account?</p>
					<Link
						href='/register'
						className='text-gray-800 hover:text-gray-600'>
						Register
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
