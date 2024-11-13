import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className='flex items-center justify-between p-10'>
                <div className='flex items-center space-x-2'>
                    <img className='h-10' src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                    <h1 className='text-2xl font-bold'>Treact</h1>
                </div>
                <div className='flex items-center space-x-14'>
                    <ul className='space-x-10 font-semibold text-base'>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Price</a>
                        <a href="#">Contact Us</a>
                    </ul>
                    <div>
                        <ul className='space-x-7'>
                            <a  className='font-semibold' href="#">Login</a>
                            <button className='bg-blue-600 rounded-md px-8 py-2 text-white  font-semibold'>Sign Up</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav