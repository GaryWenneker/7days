import React from 'react';
import Container from '../components/UI/Container';

export default function Searchbox({ data }) {


  function popupWindow(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
  }

  function searchGoogle (value) {
    popupWindow(`https://www.google.nl/search?q=site%3A7dagen.netlify.app+${value}`, 'google', window, 1240, 800);
  }

  function searchBing (value) {
    popupWindow(`https://www.bing.com/search?q=site%3A7dagen.netlify.app+${value}`, 'google', window, 1240, 800);
  }
  

  return (
    <section className='py-10 lg:py-16 pt-0 lg:pt-0'>
      <Container>
        <label htmlFor='default-search' className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" 
                className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" 
            id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Zoeken met Google binnen deze site..." required
            
            onKeyPress={event => {
                if (event.key === 'Enter') {
                  searchGoogle(event.target.value)
                }
              }}
            />
        </div>
      </Container>
      <Container className='py-5'>
        <label htmlFor='default-search' className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" 
                className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" 
            id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Zoeken met Bing binnen deze site..." required
            
            onKeyPress={event => {
                if (event.key === 'Enter') {
                  searchBing(event.target.value)
                }
              }}
            />
        </div>
      </Container>
    </section>    
  );
}
