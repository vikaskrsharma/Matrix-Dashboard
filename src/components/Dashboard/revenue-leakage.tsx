import React from 'react'
import ChartComponent from './chart'
import ToggleButton from './ToggleButton'
import CategorySelect from './CategorySelect'

const RevenueLeakage = () => {
    return (
        <div className='revenue-leakage'>
            <div className='chart-header flex justify-between items-center pt-[23px] pl-[24px] pr-[21px]'>
                <div className='header-text flex items-end'>
                    <h1 className='text-[26px] font-semibold leading-[31.47px] text-left text-black'>Revenue Rate</h1>
                    <p className='text-[14px] font-medium leading-[20px] text-left text-[#64748b] ml-[15px] '>Monthly Run Rate Revenue</p>
                </div>
                <div className='header-action flex gap-4'>
                    <ToggleButton />
                    <CategorySelect />
                </div>
            </div>
            <div className='p-[20px] bg-white'>
                <ChartComponent />
            </div>
        </div>
    )
}

export default RevenueLeakage