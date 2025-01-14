import React from 'react';

const Hero = ({
	title = 'Jobs for a React Dev 💼',
	sub = 'Find the React job that fits your skills and needs ',
}) => {
	return (
		<>
			<section className='dark:bg-black bg-indigo-700 py-20 mb-4'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
					<div className='text-center'>
						<h1 className='motion-blur-in-md motion-ease-in motion-translate-x-in-25 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
							{title}
						</h1>
						<p className='my-4 sm:text-center text-xl text-yellow-50 hover:text-indigo-500'>
							{sub}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
