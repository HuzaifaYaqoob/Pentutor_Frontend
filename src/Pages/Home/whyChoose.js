
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
        <div className='container mx-auto px-10 mb-10'>
            <div className='mb-7'>
                <h3 className='text-indigo-900 font-bold text-4xl capitalize w-full text-center'>Why Choose Pen Tutor</h3>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat lectus vitae porta sit. Ornare orci vitae, sit pharetra sed. Sollicitudin nunc libero tellus platea maecenas blandit. Velit amet, aliquet suscipit amet, libero commodo ante.</p>
            </div>
            <div className='flex items-center mt-10'>
                <ul className='w-full'>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </ul>
                <div className='w-full'>
                    <img className='rounded-lg w-96 overflow-hidden' src={process.env.PUBLIC_URL + '/images/conceptualImage.png'} alt="Conceptual Image" />

                </div>
            </div>
        </div>
    )
}

export default WhyChoose