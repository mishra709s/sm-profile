'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// About data
const about = {
  title: 'About Me',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, incidunt. Animi, consequatur ipsam, placeat facilis soluta ut, iste ab eius dolore vel magnam quos! Mollitia ipsam iure odit laudantium necessitatibus!',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Soubhagya Mishra',
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: '/in/soubhagyamishra/',
    },
    {
      fieldName: 'Mob',
      fieldValue: '+91 7090003800',
    },
    {
      fieldName: 'Github',
      fieldValue: 'https://github.com/mishra709s',
    },
    {
      fieldName: 'Email',
      fieldValue: 'msoubhagya94@mail.com',
    },
    {
      fieldName: 'Twitter',
      fieldValue: '@msoubhagya94',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, Odia',
    },
  ],
}

// Experience Data
const experience = {
  icon: '',
  title: 'My Experience',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, incidunt. Animi, consequatur ipsam, placeat facilis soluta ut, iste ab eius dolore vel magnam quos! Mollitia ipsam iure odit laudantium necessitatibus!',
  items: [
    {
      companyName: 'Pepper Content',
      position: 'Frontend Developer',
      duration: '2021-present',
    },
    {
      companyName: 'Moolya Software',
      position: 'Frontend Developer',
      duration: '2017-2021',
    },
    {
      companyName: 'Freecharge',
      position: 'Frontend Developer',
      duration: '2017-2017',
    },
    {
      companyName: 'Java Technocrat',
      position: 'Trainer',
      duration: '2016-2017',
    },
  ],
}

// Education Data
const education = {
  icon: '',
  title: 'My Education',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, incidunt. Animi, consequatur ipsam, placeat facilis soluta ut, iste ab eius dolore vel magnam quos! Mollitia ipsam iure odit laudantium necessitatibus!',
  items: [
    {
      institutionName: 'Mahavir Institute of Engineering & Technology',
      degree: 'Computer Science',
      duration: '2012-2016',
    },
    {
      institutionName: 'Biju Pattanaik COllege of Science and Education',
      degree: 'Science',
      duration: '2010-2012',
    },
    {
      institutionName: 'Prabhujee ENglish MEdium School',
      degree: 'Schooling',
      duration: '2010',
    },
  ],
}

// Skills Data
const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, incidunt. Animi, consequatur ipsam, placeat facilis soluta ut, iste ab eius dolore vel magnam quos! Mollitia ipsam iure odit laudantium necessitatibus!',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <FaReact />,
      name: 'React 19',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node Js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience content */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.companyName}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education content */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 leading-snug">
                            {item.institutionName}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills content */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#23232] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about content */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
