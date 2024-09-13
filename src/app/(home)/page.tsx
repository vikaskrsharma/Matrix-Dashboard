import RevenueLeakage from '@/components/Dashboard/revenue-leakage'
import Navbar from '@/components/navbar'
// import { type ChartConfig } from "@/components/ui/chart"


const HomePage = () => {

    return (
        <div className='bg-[#F1F5F9]'>
            <div className='flex gap-[20px]'>
                <div className='min-w-[250px] max-w-[250px] h-screen bg-commonGradient'>
                    <Navbar />
                </div>

                <div className='dashboard pt-[30px] pr-[30px]  w-full'>
                    <div className=' bg-white w-full rounded-[8px]'>
                        <RevenueLeakage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage