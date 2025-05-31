import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutTimeline.module.css';
import studyImg from '../assets/2024-timeline.JPG';
import startUni from '../assets/2020-timeline.jpeg';


const timelineData = [
  {
    year: '2020',
    title: 'Starting Computer Engineering at Politecnico di Milano',
    description: 'This was where it all began. I stepped into the world of technology through a challenging and rewarding academic journey. Over the years, I explored programming through multiple languages, built a solid foundation in algorithms, object-oriented design, and systems architecture, and tackled a wide range of core engineering subjects. From electronics and digital systems to physics, calculus, probability, and statistics, the program gave me a deep and well-rounded understanding of both software and hardware. What truly elevated the experience was the people I met. I had the chance to work alongside passionate and brilliant classmates who challenged me to grow and made the journey both inspiring and rewarding.',
    image: startUni,
  },
  {
    year: '2024',
    title: 'Graduated and Took My First Step Into the Industry',
    description: 'After completing my degree, I joined a company as an R&D Software Engineer and got the chance to apply what I had studied to real-world challenges. It was a fast-paced and eye-opening experience that helped me grow quickly, not only as a developer but also in how I approach problems, teamwork, and deadlines. I had the opportunity to draw on my engineering background, strengthen my problem-solving skills, and see the real impact of my work by contributing to the development of electric and hybrid systems.',
    image: studyImg,
  },
  {
    year: '2025',
    title: 'Ready for a New Adventure',
    description: 'After careful consideration, I’ve decided to take the next step in my career by seeking new opportunities abroad, ideally in Zurich. Having covered my role as an R&D Software Engineer for almost a year, I now feel ready to move forward, join an international team, and contribute to real-world software products. I’m excited by the idea of working on scalable, high-impact systems, collaborating with developers from diverse backgrounds, and growing in a truly global and dynamic environment.',
  },
];

export default function AboutTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>My Journey</h2>

      <div className={styles.timelineWrapper} ref={ref}>
        <motion.div className={styles.progressLine} style={{ height }} />

        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.year}>{item.year}</div>
              <div className={styles.content}>
                {item.image && (
                  <img src={item.image} alt={`${item.year} visual`} className={styles.image} />
                )}
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
