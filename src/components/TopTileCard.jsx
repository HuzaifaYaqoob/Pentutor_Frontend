import React from 'react'

const TopTileCard = ({ bgColor, icon, title, value, active, onClick, tooltip }) => {
    return (
        <div
            // onClick={onClick}
            className={` relative flex flex-row  p-5 gap-[11px] rounded-[11px] border ease-in-out duration-75 cursor-pointer  ${active ? "border-[#19BEEC] border-2 " : ""}`}>
            <div className={` ${""} rounded-[6px]  items-center justify-center flex`}>
                {icon}
            </div>

            <div className="flex flex-col  font-semibold text-[#626164]">
                <p className="text-base flex items-center gap-2">
                    {title}
                    {
                        tooltip &&
                        <span className='cursor-pointer group relative z-[1000]'>
                            <p className='bg-[#19BEEC] rounded-md text-white text-xs px-3 py-1 font-[400] group-hover:block hidden absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2'>{tooltip}</p>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 0C5.21442 0 3.95772 0.381218 2.8888 1.09545C1.81988 1.80968 0.986755 2.82484 0.494786 4.01256C0.00281635 5.20028 -0.125905 6.50721 0.124899 7.76809C0.375702 9.02896 0.994767 10.1872 1.90381 11.0962C2.81285 12.0052 3.97104 12.6243 5.23191 12.8751C6.49279 13.1259 7.79972 12.9972 8.98744 12.5052C10.1752 12.0132 11.1903 11.1801 11.9046 10.1112C12.6188 9.04228 13 7.78558 13 6.5C12.9982 4.77665 12.3128 3.12441 11.0942 1.90582C9.87559 0.687223 8.22335 0.00181989 6.5 0ZM6.25 3C6.39834 3 6.54334 3.04399 6.66668 3.1264C6.79002 3.20881 6.88614 3.32594 6.94291 3.46299C6.99968 3.60003 7.01453 3.75083 6.98559 3.89632C6.95665 4.0418 6.88522 4.17544 6.78033 4.28033C6.67544 4.38522 6.5418 4.45665 6.39632 4.48559C6.25083 4.51453 6.10003 4.49967 5.96299 4.44291C5.82594 4.38614 5.70881 4.29001 5.6264 4.16668C5.54399 4.04334 5.5 3.89833 5.5 3.75C5.5 3.55109 5.57902 3.36032 5.71967 3.21967C5.86032 3.07902 6.05109 3 6.25 3ZM7 10C6.73478 10 6.48043 9.89464 6.29289 9.7071C6.10536 9.51957 6 9.26521 6 9V6.5C5.86739 6.5 5.74022 6.44732 5.64645 6.35355C5.55268 6.25978 5.5 6.13261 5.5 6C5.5 5.86739 5.55268 5.74021 5.64645 5.64645C5.74022 5.55268 5.86739 5.5 6 5.5C6.26522 5.5 6.51957 5.60536 6.70711 5.79289C6.89464 5.98043 7 6.23478 7 6.5V9C7.13261 9 7.25979 9.05268 7.35355 9.14644C7.44732 9.24021 7.5 9.36739 7.5 9.5C7.5 9.63261 7.44732 9.75978 7.35355 9.85355C7.25979 9.94732 7.13261 10 7 10Z" fill="#19BEEC" />
                            </svg>
                        </span>
                    }
                </p>
                <p className="text-4xl">{value || 0}</p>
            </div>
            {/* {active && */}
            <span className={` ${active ? "opacity-100 absolute " : "opacity-0 "} ease-in-out duration-75   -top-2.5 -right-2.5 bg-white`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" fill='#19BEEC' /></svg>
            </span>
            {/* } */}
        </div>
    )
}

export default TopTileCard