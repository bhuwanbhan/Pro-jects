import React from 'react'
import "./Layout.css"
import { faPause,  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';




function Layout() {
 const dataset = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
  ];


  const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];



  return (

    <>

    <div className='ms-80 mt-8'>
    <div className=' h-screen items-center justify-center  text-4xl font-bold'>Ecommerce Dashboard
      
    <div className='text-xl font-medium text-slate-500 '>Here’s what’s going on at your business right now</div>
  

  <div className='flex gap-5'>
    <div className='text-xl font-thin space-x-3'>
    <FontAwesomeIcon icon={faStar} className='icon1 mt-15' /> <span className='order1'>57 new orders </span>
   <p className='text1 text-xl  ms-10'>Awating processing</p>
    </div>
    <div className='text-xl font-thin space-x-3'>
    <FontAwesomeIcon icon={faPause} className='mt-15' /> <span className='order2'>5 orders </span>
   <p className='text2 text-xl  ms-10'>On hold</p>
    </div>
    <div className='text-xl font-thin space-x-3'>
    <FontAwesomeIcon icon={faStar} className='mt-15' /> <span className='order3'>15 products</span>
   <p className='text3 text-xl  ms-10'>Out of stock</p>

</div>
    </div>
    <p className='border-b-1 mt-5 text-gray-400'></p> 

    <div className='mt-10 flex space-x-150 '>
      <h4 className='text-xl'>Total sell </h4>
    
      
      <div className='date flex text-xl'>
        <input type="text" placeholder='mar 1  -31,2022' className='text-xl font-thin border-1 rounded w-75' />
      </div>
    </div>
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      margin={{ left: 35, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />

<div className=' date text-xl font-thin flex gap-90 ms-10'>
  <p>01 may</p>
  <p>15 may</p>
  <p>30 may</p>
</div>

<div>

    <div className='grid grid-cols-2 gap-4 mt-5'>
    <div className='bg-gray-50 rounded-lg shadow-xl min-h-[50px]'>
       <p className='text-xl ms-5 mt-3'>Total orders  -6.8%</p>
       <p className=' font1 text-xl ms-5 '>Last 7 days </p>
       <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />

    <div className='text-xl font-thin bg-gray-50'>
      <button className=' m-5 w-4 h-2 bg-blue-700'></button><span className='Des'>Completed</span>
   <br />
      <button className='  m-5 w-4 h-2 bg-white'></button><span className='Des'>
      Pending payment</span>
     
    </div>

      </div>
      <div className='bg-gray-50 rounded-lg shadow-xl min-h-[50px]'>
      <p className='text-xl ms-5 mt-3'>New customers     +26.5%</p>
       <p className=' font1 text-xl ms-5 '>Last 7 days</p>
       <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    />

   

    <p className='border-b-1 text-gray-400'></p>
    <div className='Date justify-between text-xl font-thin flex'>
      <p>01 may</p>
      <p>07 May</p>
    </div>
    
      </div>
      <div className='bg-gray-50 rounded-lg shadow-xl min-h-[50px]'>

      <p className='text-xl ms-5 mt-3'>Top coupons</p>
      <p className=' font1 text-xl ms-5 '>Last 7 days</p>
     
     

      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />


<div className='text-xl font-thin'>
  <button className=' m-5 w-4 h-2 bg-blue-700'>
 </button> <span className='Des'> Percentage discount</span>
 <br />
  <button className=' m-5 w-4 h-2 bg-blue-700'>
</button> <span className='Des'> Fixed card discount</span>
<br />
  <button className=' m-5 w-4 h-2 bg-blue-700'></button> <span className='Des'>Fixed product discount
  </span>
</div>

      </div>
      <div className='bg-gray-50 rounded-lg shadow-xl min-h-[50px]'>
      <p className='text-xl ms-5 mt-3'>Paying vs non paying</p>
      <p className=' font1 text-xl ms-5 '>Last 7 days</p>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    <div className='text-xl font-thin mt-10'>
  <button className=' m-5 w-4 h-2 bg-blue-700'>
 </button> <span className='Des'> Percentage discount</span>
 <br />
  <button className=' m-5 w-4 h-2 bg-blue-700'>
</button> <span className='Des'> Fixed card discount</span>
<br />
      </div>
    </div>

       </div>
       </div>
     
       </div>
       

   
       </div>



         </>
   
  )
}

export default Layout