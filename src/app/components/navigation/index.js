'use client'
import React, { useEffect } from 'react'
import DesktopNavigation from './desktop'
import MobileNavigation from './mobile'
import { handleOpenMobileNav } from './utils'

const Navigation = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', handleOpenMobileNav(), true)

    return () => {
      document.removeEventListener(
        'DOMContentLoaded',
        handleOpenMobileNav(),
        true,
      )
    }
  }, [])

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow">
        <DesktopNavigation />
        <span className="lg:hidden font-bold">This is me!</span>
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
