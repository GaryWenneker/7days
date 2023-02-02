import React from 'react'
import nav from '../settings/main.json'
import Link from '../resolvers/Link'

import DarkmodeToggle from './DarkmodeToggle'
import Container from './UI/Container'

import { useState } from "react"; // import state

export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="flex h-16 border-b bg-white text-black dark:border-zinc-800 dark:bg-black dark:text-white">
      <Container className="m-auto flex items-center justify-between gap-20">
        <Link to="/" className="flex text-2xl font-bold ">
          <img alt="7Dagen" className='max-h-10 mr-4' src="/sites/default/files/logo.png" /> 7Dagen
        </Link>
        <div className="flex items-center">

          <div className="flex items-center justify-between border-b border-gray-400 py-8">

            <nav className="flex gap-4">
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? " bg-white text-black dark:border-zinc-800 dark:bg-black dark:text-white showMenuNav" : "hideMenuNav"}>
                  <div
                    className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    {nav.nav.map((item, i) => (
                      <li>
                        <Link to={item.permalink} key={i}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                {nav.nav.map((item, i) => (
                  <li>
                    <Link to={item.permalink} key={i}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* <nav className="flex gap-4">          
            {nav.nav.map((item, i) => (
              <Link to={item.permalink} key={i}>
                {item.name}
              </Link>
            ))}
          </nav> */}

          <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-zinc-800">
            <DarkmodeToggle />

            {/* <a
              href="https://github.com/clean-commit/gatsby-starter-henlo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 block text-slate-400 transition-colors hover:text-slate-500 dark:hover:text-slate-300"
            >
              <div className="sr-only">Henlo on GitHub</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </Container>
    </header>
  )
}
