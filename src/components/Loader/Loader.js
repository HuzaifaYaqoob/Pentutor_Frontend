

const Loader = () => {

    return (
        <div
            className='fixed top-0 left-0 bottom-0 right-0 w-full bg-white overflow-hidden h-screen z-50 flex items-center justify-center'
        >
            <div>
                <img className='w-40 ' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
                <span className='w-10 h-10 bg-transparent border-4 border-yellow-400 block ronf animate-spin mt-6 mx-auto rounded-full' style={{ borderLeftColor: '#313D6A' }}>

                </span>
            </div>
        </div>
    )
}

export default Loader