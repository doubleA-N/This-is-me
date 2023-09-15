import React, { useEffect } from 'react'
import { animateScroll as scroll, scroller } from 'react-scroll'
import PropTypes from 'prop-types'
import MeSection from '../me-section'
import AboutSection from '../about-section'

const Section = ({ section, setSection }) => {
  useEffect(() => {
    const scrollToElements = () => {
      scroller.scrollTo(section, {
        duration: 1000,
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
      <MeSection setSection={setSection} />
      <AboutSection setSection={setSection} />
    </React.Fragment>
  )
}

Section.propTypes = {
  section: PropTypes.number,
  setSection: PropTypes.func,
}

export default Section
