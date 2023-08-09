'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { ICONS, ICON_SIZE } from '/src/app/components/commons/icons/const'
import DesktopNavigation from './desktop'
import MobileNavigation from './mobile'

const Navigation = () => {
  const handleOpenMobileNav = () => {
    // open
    const burgers = document.querySelectorAll('.navbar-burger')
    const menus = document.querySelectorAll('.navbar-menu')

    burgers?.forEach((burger) => {
      burger.addEventListener('click', () => {
        menus?.forEach((menu) => {
          menu.classList.toggle('hidden')
        })
      })
    })

    // close
    const closes = document.querySelectorAll('.navbar-close')
    const backdrops = document.querySelectorAll('.navbar-backdrop')

    closes?.forEach((close) => {
      close.addEventListener('click', () => {
        menus?.forEach((menu) => {
          menu.classList.toggle('hidden')
        })
      })
    })

    backdrops?.forEach((backdrop) => {
      backdrop.addEventListener('click', () => {
        menus?.forEach((menu) => {
          menu.classList.toggle('hidden')
        })
      })
    })
  }

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', handleOpenMobileNav(), true)

    return () => {}
  }, [])

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow">
        <DesktopNavigation />
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-violet-700 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <MobileNavigation />
    </div>
  )
}

export default Navigation
