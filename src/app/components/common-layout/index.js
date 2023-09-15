'use client'
import React, { useState } from 'react'
import Navigation from '../navigation'
import Section from '../sections'

const CommonLayout = () => {
  const [section, setSection] = useState('0')

  return (
    <React.Fragment>
      <Navigation section={section} setSection={setSection} />
      <Section section={section} setSection={setSection} />
    </React.Fragment>
  )
}

export default CommonLayout
