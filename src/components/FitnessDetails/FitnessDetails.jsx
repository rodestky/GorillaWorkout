import React from 'react';
import Wrapper from '../UI/Wrapper';
import fitnessdetclasses from './FitnessDetails.module.css';
import BlankCard from '../UI/BlankCard';
import {motion} from 'framer-motion';
import {useMediaQuery} from '../../hooks/useMediaQuery';
import sentadilla from './sentadilla.jpeg';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
		width: '100%',
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const fadeinAnimate = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const featureNumAnimate = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const FitnessDetails = () => {
	const isSmallDevices = useMediaQuery('(350px < width < 766px)');

	return (
		<Wrapper>
			<div id='about-us' className={fitnessdetclasses['fitnessdetails-info']}>
				<motion.div
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{once: true, amount: 0.8}}>
					<p className={fitnessdetclasses['fitnessd-title']}>Levantamos tu</p>
					<p className={fitnessdetclasses['fitnessd-title__italic']}>Confianza</p>
				</motion.div>
				<motion.hr
					variants={lineanimate}
					initial='initial'
					whileInView='start'
					viewport={{once: true, amount: 0.8}}
					className={fitnessdetclasses.whitehr}
				/>
				<div className={fitnessdetclasses['fitness-featurecard']}>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							♾️
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							CUERPOS TRANSFORMADOS
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							100+
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							Clientes Felices
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							10+ Años
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							DE EXPERIENCIA
						</motion.p>
					</BlankCard>
				</div>
				<div className={fitnessdetclasses['fitnessdetails-img__withinfo']}>
				<motion.img
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					transition={{ease: [0.2, 0.65, 0.3, 0.9], duration: 2}}
					viewport={{once: true, amount: 0.8}}
					src={sentadilla} // Reemplaza la URL con la imagen local
					alt='Fitness Details'
				/>
					<div className={fitnessdetclasses['fitness-details']}>
						<motion.p
							variants={fadeinAnimate}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}>
							En Gorilla Workout,  trasciende el ejercicio 👣 buscamos transformar vidas a través de un enfoque integral, personalizado y comunitario. Aquí encontrarás el equilibrio perfecto entre entrenamiento físico, orientación nutricional y un ambiente inclusivo que te impulsará a descubrir tu mejor versión. Con el respaldo de entrenadores certificados y un equipo comprometido con tu bienestar, estarás rodeado de apoyo en cada paso de tu transformación. ¡Únete a nuestra manada y alcanza tus metas con fuerza y determinación!
						</motion.p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default FitnessDetails;
