
const ListItem = () =>{
    return(
        <li className='flex items-center gap-3 mb-2'>
            <span className='w-2 h-2 rounded-full bg-yellow-450 block'></span>
            <p>Conceptual Study Environment</p>
        </li>
    )
}

const WhyChoose = () =>{
    return(
        <div className='container mx-auto px-10 mb-10 mt-32'>
            <div className='mb-7'>
                <h3 className='text-indigo-900 font-bold text-4xl capitalize w-full text-center'>Why Choose <span className='text-yellow-500'> Pen Tutor</span></h3>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lectus vitae porta sit. Ornare orci vitae, sit pharetra sed. Sollicitudin nunc libero tellus platea maecenas blandit. Velit amet, aliquet suscipit amet, libero commodo ante.</p>
            </div>
            
        </div>
    )
}

export default WhyChoose