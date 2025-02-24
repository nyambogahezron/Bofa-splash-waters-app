import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className='relative min-h-screen bg-[#F5F9FF] overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
							Professionally treated water, all over the house
						</h1>
						<p className='text-lg text-gray-600 mb-8'>
							Vivamus non posuere nisl, id auctor ligula. vitae lobortis nisi
						</p>
						<Button
							size='lg'
							className='bg-[#0099FF] hover:bg-blue-600 text-white px-8'
						>
							Find Solution
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative'
					>
						<Image
							src='https://images.unsplash.com/photo-1519873174361-37788c5a73c7?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='Water Purifier'
							width={600}
							height={600}
							className='rounded-lg'
						/>
						<div className='absolute inset-0 bg-blue-500/10 rounded-lg'></div>
					</motion.div>
				</div>
			</div>

			{/* Wave decoration */}
			<div className='absolute bottom-0 left-0 right-0'>
				<svg viewBox='0 0 1440 200' className='w-full'>
					<path
						fill='white'
						fillOpacity='1'
						d='M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
		</section>
	);
}
