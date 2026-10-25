'use client';

const busStops = [
	{
		id: 1,
		name: 'Central Station',
		image_url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
	},
	{
		id: 2,
		name: 'Riverside Park',
		image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
	},
	{
		id: 3,
		name: 'Old Town Square',
		image_url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
	},
	{
		id: 4,
		name: 'Airport Terminal',
		image_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
	},
];

import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useState } from 'react';

export default function StopsPage() {
	const [stops, setStops] = useState<Record<string, any>[] | null>(null);

	return (
		<main className='flex flex-col items-center py-8'>
			<div className='w-7xl max-w-[95vw]'>
				<h1 className='mb-4 font-bold text-3xl'>Zastávky</h1>
				<div className='gap-4 grid sm:grid-cols-2 xl:grid-cols-3'>
					{stops ? (
						stops.length ? (
							stops.map((stop) => (
								<Link className='hover:scale-[1.03] transition-transform' href={`/stops/${stop.id}`} key={stop.id}>
									<article className='flex flex-col shadow aspect-4/3 text-light'>
										<div className='flex justify-between items-center gap-x-8 bg-primary-dark px-6 py-4'>
											<h2 className='font-bold text-xl'>{stop.name}</h2>
											<svg className='text-xl' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
												<path d='M0 0h24v24H0z' fill='none' />
												<path fill='currentColor' d='M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z' />
											</svg>
										</div>
										<div className='relative grow'>
											<Image loading={'eager'} src={stop.image_url} sizes={'(max-width: 768px) 90vw, 30vw'} fill alt={stop.name} />
										</div>
									</article>
								</Link>
							))
						) : (
							<p className='col-span-3'>Žádné zastávky k zobrazení</p>
						)
					) : (
						Array.from({ length: 6 }, (_, idx) => idx + 1).map((idx) => (
							<article key={idx} className='flex flex-col shadow w-full aspect-4/3 text-light'>
								<div className='flex justify-between items-center gap-x-8 bg-primary-dark px-6 py-4'>
									<Skeleton className='rounded-full w-36 h-7'></Skeleton>
									<Skeleton className='rounded-full w-6 h-6'></Skeleton>
								</div>
								<Skeleton className='rounded-none animate-none shimmer grow'></Skeleton>
							</article>
						))
					)}
				</div>
			</div>
		</main>
	);
}
