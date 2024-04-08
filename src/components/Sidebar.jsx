import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>


            <div className='bg-white border-2 py-4 p-3 m-2 rounded-xl w-100 h-100 hidden md:block fixed left-0 inset-y-0'>

                <div className='mb-8'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,33.4v3.1c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V20.8"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,14.5v-3c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4V28"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M32.5,27.9v-11c0-1.2-1.1-2.2-2.3-2l-9,1.4c-1,0.2-1.7,1-1.7,2v12.6"></path><ellipse cx="16.3" cy="30.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" rx="3.3" ry="2.9"></ellipse><ellipse cx="29.3" cy="27.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" rx="3.3" ry="2.9"></ellipse><line x1="32.5" x2="23.8" y1="19.5" y2="20.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                        </svg>

                    </div>
                    <div>
                        E-Music
                    </div>
                </div>


                <ul className='my-6 mt-8 flex flex-col items-center'>
                    <li className='my-4 flex items-center hover:cursor-pointer'>
                        <Link to="/" className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                                <path d="M 30.996094 6.015625 C 30.933594 6.015625 30.875 6.019531 30.8125 6.03125 C 30.75 6.046875 30.6875 6.0625 30.625 6.085938 C 30.566406 6.113281 30.511719 6.144531 30.453125 6.179688 C 30.425781 6.199219 30.386719 6.207031 30.359375 6.230469 L 18 16.460938 L 18 13.058594 C 18 12.503906 17.554688 12.058594 17 12.058594 C 16.445313 12.058594 16 12.503906 16 13.058594 L 16 18.058594 C 16 18.074219 16.007813 18.089844 16.011719 18.109375 L 14 19.769531 L 14 9.054688 C 14 8.503906 13.554688 8.054688 13 8.054688 C 12.445313 8.054688 12 8.503906 12 9.054688 L 12 21.058594 C 12 21.167969 12.03125 21.273438 12.0625 21.375 L 1.359375 30.230469 C 0.933594 30.582031 0.878906 31.210938 1.226563 31.636719 C 1.425781 31.875 1.714844 32 2 32 C 2.226563 32 2.453125 31.925781 2.640625 31.769531 L 6 28.988281 L 6 54 L 3 54 C 2.445313 54 2 54.449219 2 55 C 2 55.550781 2.445313 56 3 56 L 59 56 C 59.554688 56 60 55.550781 60 55 C 60 54.449219 59.554688 54 59 54 L 56 54 L 56 28.988281 L 59.359375 31.769531 C 59.546875 31.925781 59.773438 32 60 32 C 60.285156 32 60.570313 31.875 60.769531 31.640625 C 61.121094 31.210938 61.0625 30.582031 60.636719 30.230469 L 31.636719 6.230469 C 31.609375 6.207031 31.574219 6.199219 31.542969 6.179688 C 31.484375 6.140625 31.429688 6.109375 31.363281 6.085938 C 31.304688 6.0625 31.25 6.046875 31.1875 6.03125 C 31.125 6.019531 31.0625 6.015625 30.996094 6.015625 Z M 31 8.296875 L 54 27.332031 L 54 44 L 38 44 L 38 36 C 38 34.898438 37.101563 34 36 34 L 26 34 C 24.898438 34 24 34.898438 24 36 L 24 44 L 8 44 L 8 27.332031 Z M 31 18 C 28.242188 18 26 20.242188 26 23 C 26 25.757813 28.242188 28 31 28 C 33.757813 28 36 25.757813 36 23 C 36 20.242188 33.757813 18 31 18 Z M 31 19.792969 C 32.769531 19.792969 34.207031 21.230469 34.207031 23 C 34.207031 24.769531 32.769531 26.207031 31 26.207031 C 29.230469 26.207031 27.792969 24.769531 27.792969 23 C 27.792969 21.230469 29.230469 19.792969 31 19.792969 Z M 26 36 L 36 36 L 36 53.949219 L 26 53.949219 Z M 33 43 C 32.445313 43 32 43.449219 32 44 L 32 46 C 32 46.550781 32.445313 47 33 47 C 33.554688 47 34 46.550781 34 46 L 34 44 C 34 43.449219 33.554688 43 33 43 Z M 8 46 L 24 46 L 24 54 L 8 54 Z M 38 46 L 54 46 L 54 54 L 38 54 Z M 11 48 C 10.445313 48 10 48.449219 10 49 L 10 51 C 10 51.550781 10.445313 52 11 52 C 11.554688 52 12 51.550781 12 51 L 12 49 C 12 48.449219 11.554688 48 11 48 Z M 16 48 C 15.445313 48 15 48.449219 15 49 L 15 51 C 15 51.550781 15.445313 52 16 52 C 16.554688 52 17 51.550781 17 51 L 17 49 C 17 48.449219 16.554688 48 16 48 Z M 21 48 C 20.445313 48 20 48.449219 20 49 L 20 51 C 20 51.550781 20.445313 52 21 52 C 21.554688 52 22 51.550781 22 51 L 22 49 C 22 48.449219 21.554688 48 21 48 Z M 41 48 C 40.445313 48 40 48.449219 40 49 L 40 51 C 40 51.550781 40.445313 52 41 52 C 41.554688 52 42 51.550781 42 51 L 42 49 C 42 48.449219 41.554688 48 41 48 Z M 46 48 C 45.445313 48 45 48.449219 45 49 L 45 51 C 45 51.550781 45.445313 52 46 52 C 46.554688 52 47 51.550781 47 51 L 47 49 C 47 48.449219 46.554688 48 46 48 Z M 51 48 C 50.445313 48 50 48.449219 50 49 L 50 51 C 50 51.550781 50.445313 52 51 52 C 51.554688 52 52 51.550781 52 51 L 52 49 C 52 48.449219 51.554688 48 51 48 Z"></path>
                            </svg>
                            <div className='text-sm'>
                                Home
                            </div>
                        </Link>
                    </li>
                    <li className='my-6 flex items-center hover:cursor-pointer'>
                        <Link to="/search" className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 128 128">
                                <path fill="#fff" d="M108.9,108.9L108.9,108.9c-2.3,2.3-6.1,2.3-8.5,0L87.7,96.2c-2.3-2.3-2.3-6.1,0-8.5l0,0c2.3-2.3,6.1-2.3,8.5,0l12.7,12.7C111.2,102.8,111.2,106.6,108.9,108.9z"></path><path fill="#fff" d="M52.3 17.299999999999997A35 35 0 1 0 52.3 87.3A35 35 0 1 0 52.3 17.299999999999997Z" transform="rotate(-45.001 52.337 52.338)"></path><path fill="#fff" d="M52.3 17.299999999999997A35 35 0 1 0 52.3 87.3A35 35 0 1 0 52.3 17.299999999999997Z" transform="rotate(-45.001 52.337 52.338)"></path><path fill="#71c2ff" d="M52.3 84.3c-1.7 0-3-1.3-3-3s1.3-3 3-3c6.9 0 13.5-2.7 18.4-7.6 6.4-6.4 9-15.5 6.9-24.4-.4-1.6.6-3.2 2.2-3.6 1.6-.4 3.2.6 3.6 2.2C86 55.8 82.9 67.1 75 75 68.9 81 60.9 84.3 52.3 84.3zM73 35c-.8 0-1.5-.3-2.1-.9L70.7 34c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0l.2.2c1.2 1.2 1.2 3.1 0 4.2C74.5 34.7 73.8 35 73 35z"></path><path fill="#444b54" d="M52.3 90.3c-9.7 0-19.5-3.7-26.9-11.1-14.8-14.8-14.8-38.9 0-53.7 14.8-14.8 38.9-14.8 53.7 0h0C94 40.3 94 64.4 79.2 79.2 71.8 86.6 62.1 90.3 52.3 90.3zM52.3 20.4c-8.2 0-16.4 3.1-22.6 9.4-12.5 12.5-12.5 32.8 0 45.3C42.2 87.4 62.5 87.4 75 75c12.5-12.5 12.5-32.8 0-45.3C68.7 23.5 60.5 20.4 52.3 20.4zM111 98.3L98.3 85.6c-1.7-1.7-4-2.6-6.4-2.6-1.4 0-2.7.3-3.9.9l-2.5-2.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l2.5 2.5c-.6 1.2-.9 2.5-.9 3.9 0 2.4.9 4.7 2.6 6.4L98.3 111c1.8 1.8 4.1 2.6 6.4 2.6s4.6-.9 6.4-2.6l0 0C114.5 107.5 114.5 101.8 111 98.3zM106.8 106.8c-1.2 1.2-3.1 1.2-4.2 0L89.8 94.1c-.6-.6-.9-1.3-.9-2.1s.3-1.6.9-2.1c.6-.6 1.3-.9 2.1-.9s1.6.3 2.1.9l12.7 12.7C108 103.7 108 105.6 106.8 106.8z"></path>
                            </svg>
                            <div className='text-sm'>
                                Search
                            </div>
                        </Link>
                    </li>
                </ul>








            </div>



        </>
    )
}

export default Sidebar;



const Location = () => {
    return (
        <>

        </>
    )
}