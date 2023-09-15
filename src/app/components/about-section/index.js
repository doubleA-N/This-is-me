import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'
import MyTimeline from './timeline'

const AboutSection = ({ setSection }) => {
  const { inView, ref } = useInView()

  useEffect(() => {
    if (inView) {
      setSection('1')
    }
  }, [inView])

  return (
    <Element
      name={'1'}
      className="my-20 flex flex-col justify-center items-center"
    >
      <div ref={ref} className="flex flex-col items-center">
        <span className="text-violet-700 text-5xl font-bold">About</span>
        <span className="text-gray-700 text-l">Here's My Experience</span>
        <MyTimeline />
      </div>
    </Element>
  )
}

export default AboutSection
