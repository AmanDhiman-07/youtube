import React from 'react'

const Hero = () => {
    return (
        <div className='flex p-10 items-center space-x-4'>
            <div className='w-[50%] '>
                <h1 className='text-5xl font-bold text-gray-600'>Delicious & Affordable</h1>
                <br />
                <i className=' text-white text-5xl bg-blue-700 font-bold px-3'>Meals Near You...</i>
                <br />
                <p className='my-6 text-gray-500 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Similique <br /> provident cum  labore, soluta ad quas corporis cupiditate error.</p>
                <div className='flex space-x-5 items-center'>
                    <button className='bg-blue-600 px-10 py-3 text-white font-semibold rounded-md'>Order Now</button>
                    <div className='flex items-center space-x-2'>
                        <svg className='h-12 w-12 text-gray-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="playIcon"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <button className='text-gray-500 font-semibold'>Meet The Chefs</button>
                    </div>
                </div>
            </div>
            <div className='w-[50%]'>
                <img className='rounded-3xl' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
            </div>
        </div>
    )
}

export default Hero