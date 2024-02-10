'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pt-2'>
				<li>JavaScript</li>
				<li>Java</li>
				<li>React</li>
				<li>Node.js</li>
				<li>MongoDB</li>
				<li>PostgreSQL</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pt-2'>
				<li>Full Stack Developer - CodeCool, Romania</li>
				<li>Liceul Victor Frunza, Ramnicu Sarat, Buzau</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul className='list-disc pt-2'>
				<li>SGP MApN, Cristian, Brasov</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const tabContent = TAB_DATA.find((item) => item.id === tab).content;

	return (
		<section id='about' className='text-white'>
			<div className='flex flex-col md:flex-row gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<div className='flex items-center md:w-1/2'>
					<Image src='/images/about-image.png' alt='About Image' width={500} height={500} />
				</div>
				<div className='mt-4 md:mt-0 text-left flex flex-col w-full md:w-1/2'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>{/* ... (your existing text content) */}</p>
					<div className='flex flex-row justify-start mt-8 '>
						<TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							Education
						</TabButton>
						<TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
							Experience
						</TabButton>
					</div>
					<div className='mt-8' style={{ height: '300px', overflowY: 'auto' }}>
						{tabContent}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
