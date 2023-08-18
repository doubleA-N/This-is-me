import React from 'react'
import { ICONS, ICON_SIZE } from '../../commons/icons/const'
import Icon from '../../commons/icons'
import CloseIcon from '../../commons/icons/closeIcon'
import { NAVIGATION_LINKS, NAVIGATION_MENUS } from '../const'
import { handleSocialLinkClick } from '../utils'

const MobileNavigation = () => {
  return (
    <div className="navbar-menu relative z-50 hidden">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Icon
            alt="Picture of the author"
            className="mr-auto text-3xl font-bold leading-none"
            size={ICON_SIZE.jumbo}
            src={ICONS.thisIsMe}
          />
          <CloseIcon />
        </div>
        <div>
          <ul>
            {NAVIGATION_MENUS.map((menu, idx) => (
              <li key={idx} className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-violet-200 hover:text-violet-600 rounded"
                  href="#"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex justify-end gap-4 flex-end pt-6">
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
        </div>
      </nav>
    </div>
  )
}

export default MobileNavigation
