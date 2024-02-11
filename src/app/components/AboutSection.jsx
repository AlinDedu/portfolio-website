'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2'>
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
			<ul className='list-disc pl-2'>
				<li>Full Stack Developer - CodeCool, Romania</li>
				<li>Liceul Victor Frunza, Ramnicu Sarat, Buzau</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul className='list-disc pl-2'>
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
			<div className='flex flex-col xl:flex-row gap-8 items-center pt-8 px-4 xl:gap-16 sm:pt-16 xl:px-16'>
				<div className='flex items-center xl:w-1/2'>
					<Image src='/images/about-image.png' alt='About Image' width={500} height={500} />
				</div>
				<div className='mt-4 xl:mt-0 text-left flex flex-col w-full xl:w-1/2'>
					<h2 className='text-4xl font-bold text-white mb-4 text-center'>About Me</h2>
					<p className='text-base lg:text-lg'>
						I am a full stack web developer with a passion for creating interactive and responsive web applications. I
						have experience working with JavaScript, Java, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS, and
						Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player
						and I am excited to work with others to create amazing applications.
					</p>
					<div className='flex flex-row justify-start mt-8'>
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
					<div className='mt-8' style={{ height: '300px' }}>
						{tabContent}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
