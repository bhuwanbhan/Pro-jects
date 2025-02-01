import React from 'react';

import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';



function Layout() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
  
  ];
 

  
  return (

    <>
    <div className='grid m-4  sm:grid-cols-2  '>
        <div className='ms-80 min-h-[100] bg-slate-300  w-95 rounded   shadow-xl '>
        <LineChart
      width={400}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
           
        </div>
        <div className='ms-30 bg-slate-400 shadow-xl min-h-[100]:  rounded   '>

       
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />

        </div>
     </div>
    <div className='grid  m-6   sm:grid-cols-2  '>
        <div className='ms-80 min-h-[100] bg-slate-500  w-95 rounded   shadow-xl '>

        <LineChart
      width={400}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
        </div>
        <div className='ms-30 bg-slate-400 shadow-xl min-h-[100]:  rounded '>
        <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
        </div>
        
     </div>

     <div>
        <div className='me-4 min-h-[100px] rounded bg-amber-50 shadow-xl border-y-2 '>
       <div className='ms-75'>
       <h3>Latest reviews</h3>
       <p>Payment received across all channel</p>
       <div className='flex gap-40'>
       <button className='border-2 w-6 h-6 rounded'></button>
       <p>PRODUCT</p>
       <p>CUSTOMER</p>
       <p>RATING</p>
       <p>REVIEW</p>
       
       </div>
       </div>
     
        </div>
       
     </div>

   
    </>
  )
}

export default Layout;