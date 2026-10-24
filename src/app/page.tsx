'use client';

import { getHealth, getTeam, Team } from '@/api/generated';
import { useEffect, useState } from 'react';

export default function Home() {
	const [health, setHealth] = useState('');
	const [team, setTeam] = useState<Team | undefined>();
	useEffect(() => {
		getHealth().then((health) => setHealth(health.data.status));
		getTeam().then((team) => setTeam(team.status == 200 ? team.data : undefined));
	}, []);
	return (
		<main className='flex justify-center items-center grow'>
			<div className='flex flex-col bg-primary shadow-lg'>
				<div className='bg-primary-dark px-6 py-4'>
					<h1 className='font-bold text-xl'>Think different Academy</h1>
				</div>
				<div className='px-6 py-4'>
					<p>
						Status: <b>{health.toUpperCase()}</b>
					</p>
					<p>
						Team: <b>{team ? team.name : ''}</b>
					</p>
					<p>
						Členové: <b>{team ? team.members.join(', ') : ''}</b>
					</p>
				</div>
			</div>
		</main>
	);
}
