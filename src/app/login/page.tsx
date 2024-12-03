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
		<div className='max-w-md mx-auto px-4 py-16'>
			<h1 className='text-3xl font-light mb-12'>Login</h1>

			<form onSubmit={handleSubmit} className='space-y-6'>
				<div className='space-y-2'>
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

				<div className='space-y-2'>
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

				<div className='flex items-center justify-between'>
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
					className='w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors'>
					Login
				</button>

				<div className='text-center'>
					<p>Don't have an account?</p>
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
