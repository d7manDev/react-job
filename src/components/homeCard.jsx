import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.jsx';
function HomeCards() {
	return (
		<>
			<section className='dark:bg-black py-4'>
				<div className='container-xl lg:container m-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
						<Card bg='motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md bg-black dark:border-2 dark:border-white'>
							<h2 className='text-2xl font-bold text-white'>
								For Developers
							</h2>
							<p className='mt-2 mb-4 text-indigo-50'>
								Browse our React jobs and start your career
								today
							</p>
							<Link
								to='/jobs'
								className='inline-block bg-yellow-400 text-black rounded-lg px-4 py-2 hover:bg-gray-700'
							>
								Browse Jobs
							</Link>
						</Card>
						<Card bg='bg-indigo-300 motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md'>
							<h2 className='text-2xl font-bold'>
								For Employers
							</h2>
							<p className='mt-2 mb-4'>
								List your job to find the perfect developer for
								the role
							</p>
							<Link
								to='/add-job'
								className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
							>
								Add Job
							</Link>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeCards;
