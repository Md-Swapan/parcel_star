import React, { useState, useEffect } from "react";
import "./DashboardHome.css";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import {  Line } from 'react-chartjs-2';
import faker from 'faker';
import { baseURL } from './../../../baseUrl';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Parcel Delivery Performance',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.3)',

      // borderColor: '#a36904e3',
      // backgroundColor: '#a46a0538',
    },
  ],
};

// const options = {
//   animationEnabled: true,
//   title: {
//     text: "Nuclear Electricity Generation in US",
//   },
//   axisY: {
//     title: "Net Generation (in Billion kWh)",
//     suffix: " kWh",
//   },
//   data: [
//     {
//       type: "splineArea",
//       xValueFormatString: "YYYY",
//       yValueFormatString: "#,##0.## bn kW⋅h",
//       showInLegend: true,
//       legendText: "kWh = one kilowatt hour",
//       dataPoints: [
//         { x: new Date(2008, 0), y: 70.735 },
//         { x: new Date(2009, 0), y: 74.102 },
//         { x: new Date(2010, 0), y: 72.569 },
//         { x: new Date(2011, 0), y: 72.743 },
//         { x: new Date(2012, 0), y: 72.381 },
//         { x: new Date(2013, 0), y: 71.406 },
//         { x: new Date(2014, 0), y: 73.163 },
//         { x: new Date(2015, 0), y: 74.27 },
//         { x: new Date(2016, 0), y: 72.525 },
//         { x: new Date(2017, 0), y: 73.121 },
//       ],
//     },
//   ],
// };

const DashboardHome = () => {
  
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get(baseURL+"/shops").then((res) => {
      setShops(res.data);
      // console.log(res);
    });
  }, []);

  return (
    <>
      <div className="shop-container">
        <div className="shops">
          {shops.map((shop) => (
            <div className="shop">
              <div className="shop-profileImg">
                <img src={shop.imageUrlOne} alt="" />
              </div>
              <div className="shop-content">
                <h4>{shop.name}</h4>
                <small>{shop.address}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="create-shop">
          <Link to="create-shop">
            <button type="">Create New Shop +</button>
          </Link>
        </div>

        <div className="performance-chart-container">
          <div className="performance-cards">
            <div className="performance-card bronze-month">
              <h4>Bronze Month</h4>
              <small>February</small>
              <div className="qtyProduct totalIncome">
                <div className="qtyProduct-content">
                  <p>Qty. of Delivery Product</p>
                  <h6>0</h6>
                </div>
                <div>
                  <p>Total Income</p>
                  <h6>0 ৳</h6>
                </div>
              </div>
            </div>
            <div className="performance-card silver-month">
              <h4>Silver Month</h4>
              <small>February</small>
              <div className="qtyProduct totalIncome">
                <div className="qtyProduct-content">
                  <p>Qty. of Delivery Product</p>
                  <h6>0</h6>
                </div>
                <div>
                  <p>Total Income</p>
                  <h6>0 ৳</h6>
                </div>
              </div>
            </div>
            <div className="performance-card gold-month">
              <h4>Gold Month</h4>
              <small>July</small>
              <div className="qtyProduct totalIncome">
                <div className="qtyProduct-content">
                  <p>Qty. of Delivery Product</p>
                  <h6>0</h6>
                </div>
                <div>
                  <p>Total Income</p>
                  <h6>0 ৳</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="performance-chart">
            {/* <CanvasJSChart
              options={options}
            /> */}
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
