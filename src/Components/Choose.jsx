import React from 'react'

const Choose = () => {
    return (
        <div>
            <div className='flex p-10  space-x-4'>
                <div className='w-[50%]'>
                    <p className='text-blue-600 font-semibold'>A Reputed Brand</p>
                    <br />
                    <h1 className='text-5xl font-bold text-gray-600'>Why <i className=' text-white text-5xl bg-blue-700 font-bold px-3'>Choose Us ?</i></h1>
                    <br />
                    <p className='my-6 text-gray-500 font-semibold leading-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque est  <br />illum iste eligendi facere unde explicabo velit aliquid in reiciendis odio,<br /> esse, vitae quis quisquam, animi recusandae molestias. Porro?</p>
                    <div className='flex items-center space-x-10 mb-10'>
                        <div>
                            <h1 className='text-2xl font-semibold text-slate-600'>94000+</h1>
                            <p className='text-md text-purple-800 font-semibold'>Orders</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-slate-600'>11000+</h1>
                            <p className='text-md text-purple-800 font-semibold'>Customers</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-slate-600'>1500+</h1>
                            <p className='text-md text-purple-800 font-semibold'>Chefs</p>
                        </div>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <button className='bg-blue-700 px-10 py-3 text-white font-semibold rounded-md'>Order Now</button>
                        <div className='flex items-center space-x-2'>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img className='rounded-3xl' src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Choose