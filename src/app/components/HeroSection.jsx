/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
	const downloadCV = () => {
		const filename = 'alin-dedu-CV.pdf';
		const link = document.createElement('a');
		link.href = `/${filename}`;
		link.download = filename;
		link.click();
	};

	return (
		<section className='lg:py-16'>
			<div className='grid grid-cols-1 sm:grid-cols-11'>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
					<h1 className='text-white mb-4 text-4xl sm:5xl lg:text-8xl lg:leading-normal font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
							Hello, I'm{' '}
						</span>{' '}
						<br></br>
						<TypeAnimation
							sequence={['Alin', 1000, 'Full Stack Dev', 1000]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos voluptatum quibusdam autem porro?
						Culpa vel cumque animi laudantium expedita non consequatur, similique, sit beatae voluptatibus velit
						veritatis corrupti dolor!
					</p>
					<div>
						<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
							Hire Me
						</button>
						<button
							className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
							onClick={downloadCV}>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-3 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px] w-[250px] h-[250px]  relative'>
						<Image
							className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
							src='/images/portfolio-website-hero-image.png'
							alt='hero-image'
							width={400}
							height={400}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
