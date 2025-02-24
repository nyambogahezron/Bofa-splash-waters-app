import React from 'react';
import { motion } from 'framer-motion';

export default function ab() {
	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='space-y-6'
					>
						<h2 className='text-2xl font-semibold text-[#0099FF]'>
							Emergency Water Purification
						</h2>
						<h3 className='text-4xl font-bold text-gray-900'>
							Have a Water Purification issue? We can help!
						</h3>
						<p className='text-gray-600'>
							Vivamus non posuere nisl, id auctor ligula. Phasellus into vitae
							lobortis nisi, ut aliquam mauris. Crazy vitae erosers metus.
							Suspendisse imperdiet massa metus, lacinia and.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className='space-y-6'
					>
						<div className='bg-[#F5F9FF] p-6 rounded-lg flex items-start space-x-4'>
							<div className='flex-shrink-0'>
								<div className='w-12 h-12 bg-[#0099FF] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13 10V3L4 14h7v7l9-11h-7z'
										/>
									</svg>
								</div>
							</div>
							<div>
								<h4 className='text-sm font-semibold text-[#0099FF]'>
									Same Day
								</h4>
								<h5 className='text-xl font-bold text-gray-900 mb-2'>
									Emergency
								</h5>
								<p className='text-gray-600'>
									Vivamus non posuere nislid auctor ligula.
								</p>
							</div>
						</div>

						<div className='bg-[#F5F9FF] p-6 rounded-lg flex items-start space-x-4'>
							<div className='flex-shrink-0'>
								<div className='w-12 h-12 bg-[#0099FF] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
							</div>
							<div>
								<h4 className='text-sm font-semibold text-[#0099FF]'>
									No Call Out
								</h4>
								<h5 className='text-xl font-bold text-gray-900 mb-2'>Charge</h5>
								<p className='text-gray-600'>
									Vivamus non posuere nislid auctor ligula.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
