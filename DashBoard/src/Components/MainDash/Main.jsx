import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleXmark,
  faMugHot,
  faPause,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import { BarChart } from "@mui/x-charts/BarChart";

function Main() {
  return (
    <div className="">
      <div className="ms-75  mt-10 ">
        <h4 className="font-bold">Ecommerce Dashboard</h4>
        <p>Here’s what’s going on at your business right now </p>
        <div className="flex gap-4 space-x-2.5 ">
          <p className="font-bold  text-2xl">
            <FontAwesomeIcon icon={faStar} /> 57 new orders
            <br />
            <span className="  text font-normal text-xl ">
              Awating processing
            </span>{" "}
          </p>

          <p className="font-bold   text-2xl">
            <FontAwesomeIcon icon={faPause} /> 5 orders
            <br />
            <span className=" space-x-1.5   text font-normal text-xl   ">
              On Hold
            </span>{" "}
          </p>

          <p className="font-bold  text-2xl">
            <FontAwesomeIcon icon={faCircleXmark} />
            15 products
            <br />
            <span className="  text font-normal text-xl  ">
              out of stock
            </span>{" "}
          </p>
        </div>

        <div className="mt-15 flex justify-between me-">
          <h2>Total sells </h2>

          <input
            className=" border-amber-200 rounded-sm"
            type="text"
            placeholder="April 1-30, 2023"
            readOnly
          />
        </div>

        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: [
                "bar A",
                "bar B",
                "bar C",
                "bar D",
                "bar E",
                "bar F",
                "bar G",
                "bar h",
                "bar i",
                "bar j",
                "bar k",
                "bar l",
                "bar m",
                "bar n",
                "bar o",
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 6, 8, 7, 6, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
            },
          ]}
          width={1050}
          height={300}
        />
        <div className="flex gap-90">
          <p className="ms-8 ">01 may</p>
          <p>15 may</p>
          <p>30 may</p>
        </div>
       
      </div>
      <div className="border-y-1 h-90  bg-slate-200">
       
           <p className="ms-80">SOMETHINGS </p>
      
            
       
        </div>

        <div className="">
        
        <p className="ms-80  ">1 to 6 Items of 15</p>
      
        </div>
       

        <div className="border-y-1 bg-slate-100 gap-3 h-90 "></div>
        <p></p>
        <div className="border-y-1 bg-slate-100 gap-3 h-100 ">
          <p className="ms-80 font-bold mt-5 ">Projection vs actual</p>
          <p className="ms-80 ">Actual earnings vs projected earnings</p>
          <div className="flex">
        <BarChart className="ms-60"
          xAxis={[
            {
              id: "barCategories",
              data: [
                "bar A",
                "bar B",
                "bar C",
                "bar D",
                "bar E",
                "bar F",
                "bar G",
                "bar h",
                
               
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 6, 8, 7, 6, 4, 5, 6, 7,],
            },
          ]}
          width={900}
          height={300}
        />
       
      
          <BarChart className="ms-30"
          xAxis={[
            {
              id: "barCategories",
              data: [
                "bar A",
                "bar B",
                "bar C",
                "bar D",
                "bar E",
                "bar F",
                "bar G",
                
                
               
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 6, 8, 7, 6, 4, 5, 6,],
            },
          ]}
          width={900}
          height={300}
        />
        </div>

       
        {/* <div className="ms-80 flex gap-40">
          <p>feb 1</p>
          <p>feb 2</p>
          <p>feb 3</p>
        </div> */}
        </div>
    </div>
  );
}

export default Main;
