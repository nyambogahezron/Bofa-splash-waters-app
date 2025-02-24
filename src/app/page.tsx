'use client';

import Hero from '@/components/sections/Hero';
import HomeHeader from '@/components/sections/HomeHeader';

export default function Home() {
	return (
		<main className='min-h-screen bg-background'>
			<HomeHeader />
			<Hero />
		</main>
	);
}
