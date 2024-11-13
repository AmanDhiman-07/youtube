import React from 'react'

const Checkout = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-10'>
                <h1 className='text-5xl font-bold'>Checkout our <i className='bg-blue-700 text-white'>menu.</i></h1>
                <div className='p-4 bg-slate-200 rounded-md'>
                    <ul className='space-x-10 font-semibold text-slate-500'>
                        <a className='bg-blue-700 text-white px-5 py-2' href="#">Starters</a>
                        <a href="#">Main</a>
                        <a href="#">Soup</a>
                        <a href="#">Desserts</a>
                    </ul>
                </div>
            </div>

            <div className='p-10 flex items-center justify-around'>
                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>5.0 <span className='text-xs text-gray-500'>(87)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Veg Mixer</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Tomato Salad & Carrot</p>
                        <h1 className='text-xl font-bold'>$5.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.8 <span className='text-xs text-gray-500'>(32)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Macaroni</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Cheese Pizza</p>
                        <h1 className='text-xl font-bold'>$2.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.9 <span className='text-xs text-gray-500'>(89)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Nelli</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Hamburger & Fires</p>
                        <h1 className='text-xl font-bold'>$7.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.6 <span className='text-xs text-gray-500'>(12)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Jalapeno Poppers</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Crispy soyabeans</p>
                        <h1 className='text-xl font-bold'>$8.99</h1>
                    </div>
                </div>
            </div>
            <div className='p-10 flex items-center justify-around'>
                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>5.0 <span className='text-xs text-gray-500'>(87)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Veg Mixer</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Tomato Salad & Carrot</p>
                        <h1 className='text-xl font-bold'>$5.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.8 <span className='text-xs text-gray-500'>(32)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Macaroni</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Cheese Pizza</p>
                        <h1 className='text-xl font-bold'>$2.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.9 <span className='text-xs text-gray-500'>(89)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Nelli</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Hamburger & Fires</p>
                        <h1 className='text-xl font-bold'>$7.99</h1>
                    </div>
                </div>


                <div className='h-[50vh] w-[20vw] bg-slate-200 rounded-xl'>
                    <div className='relative'>
                        <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" />
                        <div className='flex items-center bg-slate-100 absolute bottom-3 px-4 py-1 rounded-full left-3'>
                            <svg className='fill-current text-yellow-500 h-5 w-5' viewBox="0 0 1792 1792"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <p className='font-semibold text-gray-700'>4.6 <span className='text-xs text-gray-500'>(12)</span></p>
                        </div>
                    </div>
                    <div className='p-4 space-y-2'>
                        <h1 className='text-blue-800 font-semibold text-xl'>Jalapeno Poppers</h1>
                        <p className='text-sm text-gray-600 font-semibold'>Crispy soyabeans</p>
                        <h1 className='text-xl font-bold'>$8.99</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout