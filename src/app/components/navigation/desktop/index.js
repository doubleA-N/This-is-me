import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ICONS, ICON_SIZE } from '../../commons/icons/const'
import DesktopSeparateIcon from '../../commons/icons/desktopSeparateIcon'
import Icon from '../../commons/icons'
import { NAVIGATION_LINKS, NAVIGATION_MENUS } from '../const'
import { handleSocialLinkClick } from '../utils'

const DesktopNavigation = ({ section, setSection }) => {
  const setSectionToScroll = (idx) => {
    setSection && setSection(`${idx}`)
  }

  return (
    <React.Fragment>
      <Icon
        className="text-3xl font-bold leading-none"
        onClick={() => setSectionToScroll(0)}
        src={ICONS.thisIsMe}
        size={ICON_SIZE.extraLarge}
        alt="Picture of the author"
      />
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        {NAVIGATION_MENUS.map((menu, idx) => (
          <div
            key={idx}
            className="lg:flex lg:items-center gap-4 cursor-pointer"
          >
            <li>
              <span
                className={clsx(
                  'text-sm text-gray-400 hover:text-violet-700 hover:font-bold',
                  {
                    'text-violet-700 font-bold': section === `${idx}`,
                  },
                )}
                onClickCapture={() => setSectionToScroll(idx)}
              >
                {menu.title}
              </span>
            </li>
            {menu.shouldShowNextMenu && <DesktopSeparateIcon />}
          </div>
        ))}
      </ul>
      <div className="hidden lg:flex lg:items-center gap-2 cursor-pointer">
        {NAVIGATION_LINKS.map((icon, idx) => (
          <Icon
            key={idx}
            src={icon.src}
            size={ICON_SIZE.medium}
            alt={icon.alt}
            onClick={() => handleSocialLinkClick(icon.link)}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

DesktopNavigation.propTypes = {
  section: PropTypes.number,
  setSection: PropTypes.func,
}

export default DesktopNavigation
