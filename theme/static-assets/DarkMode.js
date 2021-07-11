const body = document.body

const ToggleTheme = () => {
  const sun = document.querySelector('.feather-sun')
  const moon = document.querySelector('.feather-moon')

  body.classList.toggle('light')

  if (body.className === '') {
    sun.style.display = 'none'
    moon.style.display = 'block'

    localStorage.setItem('theme', 'dark')
  } else {
    sun.style.display = 'block'
    moon.style.display = 'none'

    localStorage.setItem('theme', 'light')
  }
}

const SetTheme = () => {
  const sun = document.querySelector('.feather-sun')
  const moon = document.querySelector('.feather-moon')

  if (
    localStorage.getItem('theme') === 'dark' ||
    localStorage.getItem('theme') === null
  ) {
    sun.style.display = 'none'
    moon.style.display = 'block'
  } else {
    sun.style.display = 'block'
    moon.style.display = 'none'

    body.classList.toggle('light')
  }
}
