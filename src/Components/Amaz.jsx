import React from 'react'

const Amaz = () => {
    return (
        <div className='my-36'>
            <h1 className='text-6xl font-bold text-slate-600 text-center'>Amazing <i className='text-white bg-blue-600 '>Services.</i></h1>
            <div className='flex items-center justify-center my-24 space-x-14'>
                <div className='h-80 w-60'>
                    <center>
                        <img className='bg-slate-100 rounded-full h-20' src="https://treact.owaiskhan.me/static/media/shop-icon.048628c95dd89e631ac8c652d04238fb.svg" alt="" />
                        <h1 className='p-2 text-2xl font-semibold text-slate-600'>230+ Locations</h1>
                        <p className='text-slate-500 font-semibold text-sm'>Lorem ipsum dolor sit amet consecte elit.</p>
                        <button className='text-purple-600 font-semibold'>Learn More --</button>
                    </center>
                </div>
                <div className='h-80 w-60'>
                    <center>
                        <img className='bg-slate-100 rounded-full h-20' src="https://treact.owaiskhan.me/static/media/chef-icon.866e076bd2347712ef1d5cb77189d5fb.svg" alt="" />
                        <h1 className='p-2 text-2xl font-semibold text-slate-600'>Professional Chefs</h1>
                        <p className='text-slate-500 font-semibold text-sm'>Lorem ipsum d consectetur adipisicing elit.</p>
                        <button className='text-purple-600 font-semibold'>Learn More --</button>
                    </center>
                </div>
                <div className='h-80 w-60'>
                    <center>
                        <img className='bg-slate-100 rounded-full h-20' src="https://treact.owaiskhan.me/static/media/celebration-icon.0d9bb9633fcda75b7632a11eaf12bbac.svg" alt="" />
                        <h1 className='p-2 text-2xl font-semibold text-slate-600'>Birthday Catering</h1>
                        <p className='text-slate-500 font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur .</p>
                        <button className='text-purple-600 font-semibold'>Learn More --</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Amaz