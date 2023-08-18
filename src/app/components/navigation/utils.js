export const handleSocialLinkClick = (link) => {
  window.open(link, '_blank').focus()
}

const handleCloseMobileNav = (menus) => {
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

export const handleOpenMobileNav = () => {
  const burgers = document.querySelectorAll('.navbar-burger')
  const menus = document.querySelectorAll('.navbar-menu')

  burgers?.forEach((burger) => {
    burger.addEventListener('click', () => {
      menus?.forEach((menu) => {
        menu.classList.toggle('hidden')
      })
    })
  })

  handleCloseMobileNav(menus)
}
