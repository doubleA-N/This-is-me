import React, { useEffect } from 'react'
import { animateScroll as scroll, scroller } from 'react-scroll'
import PropTypes from 'prop-types'
import MeSection from '../me-section'
import AboutSection from '../about-section'

const Section = ({ section }) => {
  useEffect(() => {
    const scrollToElements = () => {
      scroller.scrollTo(section, {
        duration: 1500,
        delay: 2,
        smooth: true,
        offset: -120,
      })
    }

    if (section) {
      scrollToElements()
    } else {
      scroll.scrollToTop()
    }
  }, [section])

  return (
    <React.Fragment>
      <MeSection />
      <AboutSection />
    </React.Fragment>
  )
}

Section.propTypes = {
  section: PropTypes.number,
}

export default Section
