import Link from 'next/link'
import React from 'react'

const menus =[
  {
    id:1,
    url : '/whoami',
    name : 'whoami'
  },
  {
    id:2,
    url : '/projects',
    name : 'projects'
  },
]

const Header = () => {
  return (
    <header>
      <div>
        <h1
          className='hidden'
        >Soohan Portflio</h1>
      </div>

      <section
        className='header-mobile'
      >
        <div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </div>
        <ul>

        </ul>
      </section>

      <nav>
        <ul>
        {
          menus.map(menu => (
            <li>
              <Link
                href={menu.url}
              >{menu.name}
              </Link>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  )
}

export default Header