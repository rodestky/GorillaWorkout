import React from 'react';
import Spark from '../../assets/Spark.svg';
import heroclasses from './Hero.module.css';
import {motion} from 'framer-motion';
import {PiArrowDownLight} from 'react-icons/pi';
import {IconContext} from 'react-icons';
import banner from './banner.jpeg';

const titleVariants = {
	visible: {
		transition: {
			staggerChildren: 0.8,
		},
	},
};

const titleChildAnimate = {
	hidden: {y: 70, opacity: 0},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 2,
			ease: [0.2, 0.65, 0.3, 0.9],
		},
	},
};

const imageAnimation = {
	hidden: {opacity: 0, y: 60},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			staggerChildren: 1,
			duration: 1.3,
		},
	},
};

const Hero = () => {
	const browseDetailsCaller = event => {
		event.preventDefault();
		event.stopPropagation();
		window.scrollTo(0, document.getElementById('about-us').offsetTop);
	};

	return (
		<aside>
			<motion.div
				variants={titleVariants}
				initial='hidden'
				animate='visible'
				className={heroclasses.title}>
				<motion.img
					variants={imageAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{once: true, amount: 0.8}}
					src={Spark}
					alt='spark'
					className={heroclasses.element}
				/>
				<motion.p variants={titleChildAnimate}>Encuentra tu </motion.p>
				<motion.p variants={titleChildAnimate} className={heroclasses['title-italic']}>
				mejor  
				</motion.p>
				<motion.p variants={titleChildAnimate}>version</motion.p>
			</motion.div>
			<div>
				<IconContext.Provider value={{size: '4em', color: 'white'}}>
					<motion.div
						variants={imageAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{once: true, amount: 0.8}}
						className={heroclasses['fitness-image__wrapper']}>
						<img
							src={banner}
							alt='fitness'
							className={heroclasses['fitness-image']}
						/>


						<div className={heroclasses['fitness-text__wrapper']}>
							<p>
							Combinando entrenamiento funcional de alta intensidad con una comunidad que te impulsa a dar lo mejor de ti. 
							</p>
						</div>
						<button className={heroclasses['btn-scroll']} onClick={browseDetailsCaller}>
							<PiArrowDownLight className={heroclasses['btn-scroll__arrow']} />
						</button>
					</motion.div>
				</IconContext.Provider>
			</div>
		</aside>
	);
};

export default Hero;
