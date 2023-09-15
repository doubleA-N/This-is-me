import React from 'react'
import { Element } from 'react-scroll'
import MyTimeline from './timeline'

const AboutSection = ({}) => {
  return (
    <Element
      name={'1'}
      className="my-20 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <span className="text-violet-700 text-5xl font-bold">About</span>
        <span className="text-gray-700 text-l">Here's My Experience</span>
        <MyTimeline />
      </div>
    </Element>
  )
}

export default AboutSection
