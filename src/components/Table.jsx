import { useEffect } from "react"




const TableRow = ({ data, isHeader, isLast }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                {
                    data && data.map((itm, index) => {
                        return (
                            <>
                                <div className={`overflow-hidden flex-1 border ${!isLast ? 'border-b-gray-300' : ''} ${data.length == index + 1 ? 'border-r-0' : 'border-r-gray-300'} border-t-0 border-l-0 px-2 capitalize py-1 ${isHeader ? 'font-bold' : 'text-gray-700'}`}>
                                    {itm}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}



const Table = ({ header, data }) => {

    useEffect(() => {
        console.log('i m called')
        console.log(data)
    }, [])
    return (
        <>
            <div className="border-[1px] border-gray-300">
                <TableRow data={header} isHeader={true} />
                {
                    data && data.map((itm, index) => {
                        return (
                            <TableRow data={itm} isHeader={false} isLast={index + 1 == data.length} />
                        )
                    })
                }
            </div>
        </>
    )
}



export default Table