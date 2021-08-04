

const OurServices = () =>{
    return(
        <div className='mt-20'>
            <div className='mb-16'>
                <h3 className='w-full text-center text-4xl text-indigo-900 font-bold capitalize'>Our Services</h3>
            </div>
            <div className='container rounded-xl bg-yellow-450 mx-auto flex items-center justify-between'>
                 <div className='flex-1 pl-10 pr-5'>
                    <h3 className='text-indigo-900 font-bold mb-5 text-2xl'>Home Tutoring</h3>
                    <p className='text-gray-800 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lectus vitae porta sit. Ornare orci vitae, sit</p>
                    <button className='py-1 px-3 bg-indigo-900 rounded text-white'>Read More</button>
                 </div>
                 <div>
                     <img className='w-80' src={process.env.PUBLIC_URL + '/images/babyStudent.png'} alt="" />

                 </div>
            </div>
        </div>
    )
}

export default OurServices