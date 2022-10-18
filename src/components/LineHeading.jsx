


const LineHeader = ({ text, isDoubleLine, icon, btn, bgClass, line }) => {
    return (
        <>
            <div className="w-full relative flex items-end justify-between my-5">
                {
                    isDoubleLine ?
                        <span className={`block ${bgClass} flex-1 h-[3px]`}></span>
                        :
                        <></>
                }
                <div className={`${bgClass} ${isDoubleLine ? 'rounded-full rounded-bl-none rounded-br-none' : 'rounded-full rounded-br-none'} px-6 py-2 max-w-max flex items-center gap-4`}>
                    {icon}
                    <p className="capitalize text-white text-xl font-bold">{text}</p>

                </div>
                {
                    btn && btn
                }
                {
                    line &&
                    <span className={`block ${bgClass} flex-1 h-[3px]`}></span>
                }
            </div>
        </>
    )
}

LineHeader.defaultProps = {
    text: 'Heading',
    isDoubleLine: false,
    icon: <></>,
    bgClass: 'bg-[#F5BB07]',
    line: true
}

export default LineHeader