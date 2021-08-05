
import React from 'react'

import { Bar } from 'react-chartjs-2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DashboardChart = (props) => {
    const chartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
            {
                label: 'Analytic',
                backgroundColor: props.color,
                data: [90, 60, 52, 40, 55, 15, 5, 28, 42, 58]
            }
        ]
    }

    return (
        <>
            <div className='bg-white rounded pentutor-shadow py-4 px-10 mt-20 mb-10'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-gray-900 text-xl'>Analytics</h3>
                    <div className='py-2 px-2 pentutor-shadow bg-white flex items-center gap-10 cursor-pointer'>
                        <p>Last 30 Days</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                <div>
                    <Bar
                        data={chartData}
                        options={{
                            legend: {
                                display: false
                            }
                        }}
                    />
                </div>
            </div>
            <p className='capitalize pl-10'><span className='font-bold'>Note: </span>This graph shows the statistics of your course performance.</p>
        </>
    )
}

export default DashboardChart