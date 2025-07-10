import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../../assets/news/banner.png';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className='w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className='md:w-1/2 w-full flex items-center md:justify-end'
        variants={imageVariants}
      >
        <motion.img 
          src={bannerImg} 
          alt='Books banner'
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      <motion.div className='md:w-1/2 w-full' variants={containerVariants}>
        <motion.h1 
          className='md:text-5xl text-2xl font-medium mb-7' 
          variants={textVariants}
        >
          New Release this week
        </motion.h1>
        
        <motion.p 
          className='mb-10'
          variants={textVariants}
        >
          It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
        </motion.p>
        
        <motion.button 
          className='bg-primary px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-yellow-600 text-white transition-all duration-200 cursor-pointer'
          variants={buttonVariants}
          whileHover="hover"
        >
          Subscribe
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Banner;