'use client'
import React, { useState } from 'react'
import Navigation from '../navigation'
import Section from '../sections'

const CommonLayout = () => {
  const [section, setSection] = useState(0)

  return (
    <React.Fragment>
      <Navigation setSection={setSection} />
      <Section section={section} />
    </React.Fragment>
  )
}

export default CommonLayout
