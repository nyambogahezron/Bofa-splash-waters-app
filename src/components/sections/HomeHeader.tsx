import React from 'react';
import { motion } from 'framer-motion';
import { Link, Mail, Phone } from 'lucide-react';
import Navbar from '../Navbar';

export default function HomeHeader() {
	return (
		<motion.header className='relative w-screen min-h-20 flex flex-col bg-blue shadow-sm'>
			<motion.div className='text-white py-2'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='flex space-x-6'
					>
						<div className='flex items-center space-x-2'>
							<Phone className='h-4 w-4' />
							<span>123 456 7890</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Mail className='h-4 w-4' />
							<span>support@watersplash.com</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex space-x-4'
					>
						<Link href='#' className='hover:opacity-80'>
							<span className='sr-only'>Facebook</span>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
							</svg>
						</Link>
						<Link href='#' className='hover:opacity-80'>
							<span className='sr-only'>Twitter</span>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
							</svg>
						</Link>
					</motion.div>
				</div>
			</motion.div>
			<Navbar />
		</motion.header>
	);
}
