import React from 'react';
import packageclasses from './Package.module.css';
import PackageCard from '../UI/PackageCard';
import { motion } from 'framer-motion';
import { CgGym } from 'react-icons/cg';
import { FaCrown } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Badge from '../Badge/Badge';

const mainTitleAnimation = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const lineanimate = {
  hidden: {
    width: 0,
  },
  visible: {
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

const cardreveal = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

const plans = [
  { name: '4 Clases', price: '28.000 CLP' },
  { name: '9 Clases', price: '45.000 CLP' },
  { name: '13 Clases', price: '50.000 CLP' },
  { name: '17 Clases', price: '55.000 CLP' },
  { name: '21 Clases', price: '60.000 CLP' },
  { name: 'Full Clases', price: '65.000 CLP' },
];

const features = [
  'Clases grupales',
  'Coach personal',
  'Horarios flexibles',
  'Entrenamiento avanzado',
  'Acceso a equipos',
];

const Package = () => {
  const PackageCardMotion = motion(PackageCard);
  return (
    <aside className={packageclasses['package-wrapper']}>
      <div id="package" className={packageclasses['package-info__div']}>
        <motion.h3
          variants={mainTitleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className={packageclasses.title}
        >
          Planes que te cambiarán
        </motion.h3>
        <motion.hr
          variants={lineanimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.p
          variants={fadeinAnimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          En Gorilla Workout, creemos que cada persona tiene un objetivo único y un camino diferente hacia el éxito. Por eso, hemos diseñado planes que se adaptan a tus necesidades, metas y ritmo de vida. ¡Elige tu plan y comienza a transformar tu vida hoy!
        </motion.p>
        <IconContext.Provider value={{ size: '2.5em' }}>
          <div className={packageclasses['package-card__info']}>
            {plans.map((plan, index) => (
              <PackageCardMotion
                key={index}
                variants={cardreveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                bgcolor={index % 2 === 0 ? 'dark' : 'light'}
              >
                {index === plans.length - 1 ? <FaCrown /> : <CgGym />}
                <div style={{ marginTop: '1.6em' }}>
                  <Badge bgcolor={index === plans.length - 1 ? '#FFD700' : '#f35508'}>
                    {index === plans.length - 1 ? 'Premium' : 'Gold'}
                  </Badge>
                  <div className={packageclasses['package-card__cost']}>
                    <h4>{plan.name}</h4>
                    <p>{plan.price}</p>
                  </div>
                  <ul className={packageclasses['package-card__featurelist']}>
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={packageclasses['package-card__featureitem']}
                      >
                        <BsFillCheckCircleFill size="1.5rem" />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </PackageCardMotion>
            ))}
          </div>
        </IconContext.Provider>
        <div className={packageclasses['package-footer']}>
          <p>Valor de una clase: 8.000 CLP</p>
          <p>Matrícula: 10.000 CLP</p>    
        </div>
      </div>
    </aside>
  );
};

export default Package;
