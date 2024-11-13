import React from 'react'

const Hero_Two = () => {
    return (
        <div className='my-20'>
            <div className='flex p-10 items-center space-x-12 justify-between'>
                <div className=''>
                    <img className='rounded-3xl max-w-screen-sm' src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
                </div>
                <div className=''>
                    <p className='text-blue-700 font-semibold my-5'>Established Since 2014</p>
                    <h1 className='text-6xl leading-tight font-bold text-gray-600'>We've been serving <br /> for <i className=' text-white text-5xl bg-blue-700 font-bold px-3'>over 5 years.</i></h1>
                    <br />

                    <p className='my-6 text-gray-400 font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.   <br /> provident cum  labore, soluta ad quas corporis cupiditate error.</p>
                    <p className='my-6 text-gray-400 font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.   <br /> provident cum  labore, soluta ad quas corporis </p>
                    <div className='flex space-x-5 items-center'>
                        <button className='bg-blue-700 px-10 py-3 text-white font-semibold rounded-md'>Latest offer</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_Two