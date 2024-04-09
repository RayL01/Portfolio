
import Head from 'next/head';
import Image from 'next/image';


import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillGoogleCircle, AiFillApple, AiOutlineTwitter } from 'react-icons/ai';
import deved from "../../public/assets/dev-ed-wave.png";

import padmatch from "../../public/assets/padmatch.png";
import { FaGooglePlay, FaApple, FaVuejs } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import { DiSwift } from "react-icons/di";
import aayats from "../../public/assets/aayats.jpg";




import { BiLogoFirebase, BiLogoFlutter, BiLogoAws, BiLogoDocker, BiLogoSpringBoot, BiLogoAngular, BiLogoVuejs, BiLogoUnity, BiLogoJava, BiLogoMongodb, BiLogoPostgresql, BiLogoReact } from "react-icons/bi";

import { SiKotlin, SiCplusplus, SiMysql, SiRedis, SiNginx } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import ActiveSlider from "../components/ActiveSlider";





export default function Home() {



  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ray Liu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen text-black dark:text-white">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="text-xl font-burton ">
              Developed by Ray Liu
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl ' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-2 text-white rounded-md ml-8' href="/assets/CV.pdf">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 dark:text-white'>
            <h2 className='text-5xl py-2 text-cyan-400'>Ray Liu</h2>
            <h3 className='text-2xl py-2'>CS Student & software developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto dark:text-white'>
              Welcome to my personal website! I&lsquo;m Hongrui(Ray) Liu, currently a CS student @ Northeastern University. I am passionate about web development and software engineering. And I am currently looking for a full-time/intern software engineer position.
            </p>
          </div>
          <div className='text-5xl flex justify-center space-x-6 py-3 text-gray dark:text-white'>
            <a href="https://www.linkedin.com/in/hongrui-ray-liu/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/RayL01" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>

          </div>
          <div className='overflow-hidden relative mx-auto bg-gradient-to-b from-teal-400 to-teal-950 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' alt='profile pic' unoptimized={false} />
          </div>
        </section>



        {/* internship section */}
        <section>
          <div >
            <h1 className='text-3xl py-1 font-burton dark:text-white' >Professional Experiences</h1>
            {/* <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the begining of my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies, consulted for
              <span className='text-teal-500'> agencies </span>
              consulted for
              <span className='text-teal-500'> start-ups </span>
              and collaborated with talented people to create digital lives for both business and consumer use
            </p> */}
          </div>
          <div className='bg-gray space-y-6 pb-6'>
            <div className='p-6 rounded-lg shadow-lg relative dark:bg-gray-800'>
              <div>
                <h3 className='text-xl text-gray-800 font-semibold mb-2 dark:text-white'>
                  Founding software enginner @ Aayats
                </h3>
                <p className='text-teal-500 mb-4'>
                  Ayyats, Atlanta, Georgia — Dec 2023 - Present
                </p>
                <p className='text-gray-700 mb-4 italic dark:text-white'>
                  At Ayyats, I demonstrated significant leadership by spearheading the design and implementation of a scalable and highly available backend system using MongoDB and Azure Blob Storage. I led the engineering team in developing an AI-driven, full-stack mobile application, achieving key milestones towards a successful beta launch. My initiation of weekly technical stand-up meetings significantly enhanced team communication and alignment with project objectives, showcasing my commitment to fostering a culture of excellence and collaboration.
                </p>
              </div>
              <div className='flex justify-end'>
                <div className='w-20 h-20 relative'>
                  <Image src={aayats} layout='fill' objectFit='contain' alt='Aayats logo' unoptimized={false} />
                </div>
              </div>
            </div>



            <div className='p-6 rounded-lg shadow-lg relative dark:bg-gray-800'>
              <h3 className='text-xl text-gray-800 font-semibold mb-2 dark:text-white'>
                Mobile Software Engineer Intern @ PadMatch
              </h3>
              <p className='text-teal-500 mb-4'>
                PadMatch, Boston, Massachusetts — July 2023 - Present
              </p>
              <p className='text-gray-700 mb-4 italic dark:text-white' >
                In this internship, I&lsquo;m mainly responsible for the development of the mobile application. I&lsquo;m using Flutter to build the app and Spring Boot as the backend. I&lsquo;m also responsible for the design of the app as well as a tight collaboration with the UI/UX designer.
              </p>

              <div className='flex flex-wrap justify-start items-center mt-4'>

                <div className='flex-grow'>
                  <a href='https://play.google.com/store/apps/details?id=com.padmatch.residentspad&hl=en_US&gl=US' target='_blank' rel='noopener noreferrer' className='flex items-center mr-4'>
                    <FaGooglePlay className='text-4xl text-green-700' />
                    <span className='ml-2 dark:text-white'>Google Play</span>
                  </a>
                  <a href='https://apps.apple.com/us/app/residentspad/id6471167177' target='_blank' rel='noopener noreferrer' className='flex items-center'>
                    <FaApple className='text-4xl text-black dark:text-white' />
                    <span className='ml-2 dark:text-white'>App Store</span>
                  </a>
                </div>
                {/* Image container */}
                <div className='w-20 h-20 relative '>
                  <Image src={padmatch} layout='fill' objectFit='contain' alt='padmatch logNormalSummary' unoptimized={false} />
                </div>
              </div>
            </div>





            <div className=' shadow-lg rounded-lg p-6 dark:bg-gray-800'>
              <h3 className='text-xl text-gray-800 font-semibold dark:text-white'>Software Engineering Intern</h3>
              <p className='text-teal-500'>Chongqing Kungang Technology Co., Ltd., China — May 2021 - July 2021</p>
              <p className='text-gray-700 mb-4 mr-12 italic dark:text-white'>
                Here I was responsible for the development of the backend of a chemical industry safety management system . I was using Spring Boot framework to build the backend and MySQL as the database. I was also responsible for the testing of the backend with JUnit.
              </p>
            </div>
            <div className=' shadow-lg rounded-lg p-6 dark:bg-gray-800'>
              <h3 className='text-xl text-gray-800 font-semibold dark:text-white'>Software Engineering Intern</h3>
              <p className='text-teal-500'>Beijing Qianfeng Internet Technology Co., Ltd, China — May 2020 - July 2020</p>
              <p className='text-gray-700 mb-4 mr-12 italic dark:text-white'>
                Developed a medical appointment web application with some passionate team members...
              </p>
            </div>
          </div>
        </section>


        {/* project section */}
        <section className='my-10 '>
          <h1 className='text-3xl py-3 font-burton dark:text-white' >projects</h1>
          <ActiveSlider />

        </section>



        {/* about me section
         */}
        <section className=" py-8">
          <div className="max-w-6xl mx-auto px-4 text-black dark:text-white">
            <h2 className="text-2xl font-bold text-center mb-8">—— More About Me ——</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-300 shadow rounded">
                <h3 className="font-semibold text-lg mb-2">Dev <span>/</span></h3>
                <p>iTerm2 & VS Code & IDEA</p>
              </div>
              <div className="p-4 border border-gray-300 shadow rounded">
                <h3 className="font-semibold text-lg mb-2">Tech Skills</h3>
                <div className="flex flex-wrap items-center justify-start space-x-4 text-2xl">
                  <BiLogoSpringBoot />
                  <BiLogoJava />
                  <SiMysql />
                  <BiLogoMongodb />
                  <BiLogoPostgresql />
                  < SiRedis />
                  < BiLogoReact />
                  < BiLogoAngular />
                  < BiLogoDocker />
                  < SiNginx />
                  < BiLogoAws />
                  < BiLogoFlutter />
                  < SiKotlin />
                  < DiSwift />
                  < BiLogoFirebase />
                  <FaVuejs />
                </div>
              </div>

              <div className="p-4 border border-gray-300 shadow rounded">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-lg">Email </h3>
                  <AiOutlineMail className="text-lg" /> {/* 调整图标的大小类以匹配文字大小 */}
                </div>
                <p>wooshadyyy@gmail.com</p>
              </div>

            </div>
          </div>
        </section>











      </main>
    </div>
  )
}
