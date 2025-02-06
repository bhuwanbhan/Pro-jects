import Layout from "../Layouts/Layout";
import { faEllipsis, faPause,  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import { BarChart } from '@mui/x-charts/BarChart';


function Main() {
  return (
    

    <div>
<Layout/>;



<div className=" mt-240 flex  border-t-1 text-gray-500 overflow-hidden h-full   ">
<div   className="text-black mt-8 ms-80 flex gap-3  bg-white" >
 
  <h6 className="text-3xl font-bold ">Latest reviews</h6>
  {/* <p className="">Payment received across all channels</p> */}
  <input type="text" placeholder="   Search"  className=" ms-50 h-7  border-1 text-gray-400  rounded  w-70  " />
 
  <br />
  <input type="text" placeholder="  All products"  className="h-7   border-1  rounded text-gray-400  " />
  <br />
<button className="w-10 h-7 bg-slate-50 border-1 rounded text-gray-400  ">  <FontAwesomeIcon icon={faEllipsis} /></button>

</div>


</div>

<div className="ms-70  text-gray-400 bg-white space-y-10 ">


<div className="border-b-1 bg-white h-5 ">
</div>

<div className="border-b-1 items-center font-bold    bg-white text-black flex gap-35  ">
  <input type="checkbox" />
  <p>	PRODUCT</p>
  <p>	CUSTOMER</p>
  <p>	RATING</p>
  <p>	REVIEW</p>
  
  
</div>
<div className="border-b-1 bg-white flex  gap-30  ">
<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className="flex ms-10  ">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar} /> </p>
<p><FontAwesomeIcon icon={faStar} /> </p>
<p><FontAwesomeIcon icon={faStar} /> </p>
<p><FontAwesomeIcon icon={faStar} /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  
</div>
<div className="border-b-1 bg-white  flex gap-30 ">
<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className="flex ms-10  ">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  
</div>
<div className="border-b-1 bg-white gap-30 flex">

<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className="flex ms-10  ">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  
</div>
<div className="border-b-1 bg-white gap-30 flex ">
<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className="flex ms-10  ">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  </div>
<div className="border-b-1 bg-white gap-30 flex ">
<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className="flex ms-10  ">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  
</div>
<div className="border-b-1 bg-white gap-30 flex ">
<input type="checkbox" />
<p className="text-blue-700">Sony X85J 75
   Inch Sony 4K Ultra 
    HD LED Smart G...</p>
<p> A anthony hokins</p>

<div className=" ms-10 flex">
<p><FontAwesomeIcon icon={faStar} /></p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
<p><FontAwesomeIcon icon={faStar } /> </p>
</div>
<p>This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
  
</div>

</div>

<div className="bg-gray-100 w-2/3">
<p className=" bg-white">1 to 6 Items of 15</p>
{/* <div className=" text-2xl bg-slate-200 h-20 border-b-1 "> */}
  <h6 className="ms-75 text-2xl font-bold">Top regions by revenue</h6>
  <p className="last  ms-75 ">Where you generated most of the revenue</p>
   <div className="last2 ms-80 flex gap-20 mt-3">
    <p>COUNTRY</p>
    <p>USERS</p>
    <p>TRANSACTIONS</p>
    <p>REVENUE</p>
    <p>CONV. RATE</p>

  </div>
  <div className="ms-80 text-black">
<div className="border-t-1 flex gap-20 ">
    <p className="ms-30">377,620</p>
    <p>236</p>
    <p>$15,758</p>
    <p>10.32%</p>
    </div>

   <div className="border-t-1 flex gap-12">
    <p className="text-blue-700">1. india</p>
    <p>92896(41.6%)</p>
    <p>67(34.3%)</p>
    <p>$7560(36.9%)</p>
    <p>14.01%</p>
</div>

   <div className="border-t-1 flex gap-12 ">
    <p className="text-blue-700">2.USA</p>
    <p>45679(24.3%)</p>
    <p>35(19.7%)</p>
    <p>$5432(16.9%)</p>
    <p>10.23%</p>
   
  </div>
   <div className="border-t-1 flex gap-12">
    <p className="text-blue-700">3.China</p>
    <p>36453(19.7%)</p>
    <p>22(9.54%)</p>
    <p>$4673(11.6%)</p>
    <p>8.85%</p>
  
  </div>

  <div className="mt-5">
   
  <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 10, right: 10 }}
    />
    </div>
  <div className="mt-5">
   
  <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
    </div>

</div>
</div>


   );
}

export default Main;
