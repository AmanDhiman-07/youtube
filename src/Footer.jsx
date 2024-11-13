import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-gradient-to-t from-white to-gray-300 flex justify-between px-12 py-20 border-b-2 border-gray-400'>
                <div className='flex items-center w-[60%] justify-between'>
                    <div>
                        <h1 className='font-semibold text-xl'>Main</h1>
                        <br />
                        <ul className='leading-8 font-semibold text-sm text-gray-600'>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Support</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Product</h1>
                        <br />
                        <ul className='leading-8 font-semibold text-sm text-gray-600'>
                            <li>Log In</li>
                            <li>Personal</li>
                            <li>Business</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Press</h1>
                        <br />
                        <ul className='leading-8 font-semibold text-sm text-gray-600'>
                            <li>Logos</li>
                            <li>Events</li>
                            <li>Stories</li>
                            <li>Office</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Legal</h1>
                        <br />
                        <ul className='leading-8 font-semibold text-sm text-gray-600'>
                            <li>GDPR</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <h1 className='text-xl font-semibold my-5'>Subscribe to our Newsletter</h1>
                    <p className='text-sm text-gray-500 mb-5'>We deliver high quality blog posts written by <br /> professionals weekly. And we promise no spam.</p>
                    <div>
                        <input className='px-6 py-3 rounded-l-md bg-[#dfe1e4]' type="text" placeholder='Your Email Address' />
                        <button className='bg-[#5011CC] font-semibold text-white px-6 py-3 rounded-r-md'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between px-10 py-20'>
                <div className='flex items-center space-x-2'>
                    <img className='h-8' src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                    <h1 className='text-2xl font-bold text-gray-800'>Treact Inc.</h1>
                </div>
                <div>
                    <h1 className='text-gray-400 font-semibold text-lg'>© 2018 Treact Inc. All Rights Reserved.</h1>
                </div>
                <div className='flex items-center space-x-5'>
                    <svg className='w-28 fill-current text-white bg-black rounded-full' fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg>
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg>
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path></svg>
                </div>
            </div>
        </>
    )
}

export default Footer