import React from 'react'

const Customer = () => {
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-center text-6xl font-bold'>Customers <i className='bg-blue-700 text-white p-2'>Loves Us.</i></h1>
            </div>

            <div className='my-20  flex items-center justify-evenly space-x-6'>
                <div className='h-40 w-60 leading-7 my-10'>
                    <center>
                    <img className='w-20 h-20 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80" alt="" />
                    <p className='text-center text-slate-500 font-semibold'>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
                    <h1 className='font-semibold'>- Charlotte Hale</h1>
                    </center>
                </div>
                <div className='h-40 w-60 leading-7 '>
                    <center>
                    <img className='w-20 h-20 rounded-full' src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80" alt="" />
                    <p className='text-center text-slate-500 font-semibold'>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
                    <h1 className='font-semibold'>
                    - Adam Cuppy</h1>
                    </center>
                </div>
                <div className='h-40 w-60 leading-7 '>
                    <center>
                    <img className='w-20 h-20 rounded-full' src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80" alt="" />
                    <p className='text-center text-slate-500 font-semibold'>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
                    <h1 className='font-semibold'>- Steven Marcetti </h1>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Customer