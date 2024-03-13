'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
	{
		id: 1,
		title: 'GoBiz - Ecommerce Website',
		description:
			'GoBiz is a streamlined Ecommerce platform focused on enhancing online buying and selling. Offering a user-friendly interface and advanced features, it prioritizes efficiency, user experience, and information security.',
		features:
			'Technologies include Stripe for secure payments, Google OAuth for user authentication, bcrypt.js for password encryption, and JWT for managing authentication sessions.',
		image: '/images/projects/gobiz.jpeg',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/AlinDedu/gobiz',
		previewUrl: 'https://gobiz.onrender.com/',
	},
	{
		id: 2,
		title: 'Mask Stock',
		description:
			'The Hospital Management System is a web application designed for efficient hospital data management, featuring user authentication and hospital order management through a user-friendly interface.',
		features:
			'Efficiently manage hospital records with user authentication, order management, and a user-friendly interface, utilizing React, React hooks, and a RESTful API for server-side interactions.',
		image: '/images/projects/mask-stock.jpeg',
		tag: ['All', 'Web'],
		gitUrl: 'https://github.com/AlinDedu/mask-stock-AlinDedu',
	},
	{
		id: 3,
		title: 'Math Game',
		description:
			"This is my first Android Application. It's a small application that can be used by kids and grown ups to test their math knowledge",
		features:
			'The app is built using Java, the primary programming language for Android development, along with Gradle, the build automation tool widely adopted within the Android development community.',
		image: '/images/projects/math-game.png',
		tag: ['All', 'Mobile'],
		gitUrl: 'https://github.com/AlinDedu/first-android-app-math-game',
	},
	// {
	// 	id: 4,
	// 	title: 'Project 4',
	// 	description: 'Project 4 Description',
	// 	image: '/images/projects/1.jpg',
	// 	tag: ['All', 'Mobile'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
	// {
	// 	id: 5,
	// 	title: 'Project 5',
	// 	description: 'Project 5 Description',
	// 	image: '/images/projects/1.jpg',
	// 	tag: ['All', 'Web'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
	// {
	// 	id: 6,
	// 	title: 'Project 6',
	// 	description: 'Project 6 Description',
	// 	image: '/images/projects/1.jpg',
	// 	tag: ['All', 'Web'],
	// 	gitUrl: '/',
	// 	previewUrl: '/',
	// },
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filterProjects = projectsData.filter((project) => project.tag.includes(tag));

	const cardVariants = {
		initial: {
			y: 50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
				<ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
				<ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
			</div>
			{filterProjects.length === 0 && (
				<div className='text-center text-2xl font-semibold text-white mt-8 mb-8 md:mt-12 md:mb-12'>
					<p>No projects finished yet</p>
				</div>
			)}
			<ul ref={ref} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-12'>
				{filterProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							features={project.features}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
