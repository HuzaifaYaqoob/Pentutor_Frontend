import React from 'react'
import Svgs from '../Assets/svgs';

const Popup = (props) => {
    return (
        <>
            {
                props.open ? (
                    <div className='fixed inset-0 h-[100vh] w-[100vw] z-[4444] flex justify-center items-center'>
                        <div
                            className='bg-black/30 absolute inset-0 z-[1]'
                        // onClick={() => { props.close(false); props.onclose() }}
                        ></div>
                        <div className={`relative overflow-hidden bg-white shadow-2xl rounded-2xl ${props.size == 'md' ? 'lg:w-[30vw]' : 'lg:w-[50vw]'} w-[90vw] z-[2] slide-in-elliptic-top-fwd`}>
                            <div className='sticky top-0 bg-white z-[22]'>
                                <div className='absolute top-0 right-0 bg-indigo-900 px-[1.6rem] py-[1rem] rounded-bl-2xl cursor-pointer' onClick={() => { props.close(false); props.onclose() }} >
                                    <Svgs.Close />
                                </div>
                                <h1 className={`${props.size == 'md' ? 'p-[1rem]' : 'p-[1.2rem]'} font-semibold text-xl`}>{props.heading ? props.heading : 'Add prop heading'}</h1>
                                <hr />
                            </div>
                            <div className='px-[1.2rem] overflow-y-auto overflow-x-hidden scroll-hidden max-h-[80vh]'>
                                {props.children ? props.children : 'Add prop children!'}
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </>
    )
}

Popup.defaultProps = {
    close: () => { },
    open: true,
    children: <></>,
    onclose: () => { }
}

export default Popup