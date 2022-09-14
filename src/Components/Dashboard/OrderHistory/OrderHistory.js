import React from "react";
import { useState } from "react";
import "./OrderHistory.css";

const ordersHistory = [
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "pending",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "pending",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "cancel",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "pending",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "cancel",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
  {
    DateTime: "20/02/2022",
    ShopName: "BppShops",
    ParcelName: "2 box gray",
    parcelQty: 2,
    PickupArea: "Moghbazar",
    DeliveryArea: "Tangail",
    Transaction: "450",
    status: "delivered",
  },
];

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState(ordersHistory);

  return (
    <>
      <div className="orderHistory-container">
        <h2>Order History</h2>
        <div className="orderHistory-content">
          <div className="orderHistory-header">
            <ul>
              <li>Date & time</li>
              <li>Shop Name</li>
              <li>Parcel Name</li>
              <li>Parcel Qty.</li>
              <li>Pickup Area</li>
              <li>Delivery Area</li>
              <li>Transaction</li>
              <li>Status</li>
              <li>Action</li>
            </ul>
          </div>
          <div className="orderHistory-list">
            {orderHistory.map((orderItem) => (
              <div className="orderlist">
                <small>{orderItem.DateTime}</small>
                <small>{orderItem.ShopName}</small>
                <small>{orderItem.ParcelName}</small>
                <small>{orderItem.parcelQty}</small>
                <small>{orderItem.PickupArea}</small>
                <small>{orderItem.DeliveryArea}</small>
                <small>{orderItem.Transaction} ৳</small>
                {orderItem.status === "delivered" ? (
                  <button className="deliveredBtn">Delivered</button>
                ) : orderItem.status === "pending" ? (
                  <button className="pendingBtn">Pending</button>
                ) : (
                  <button className="cancelledBtn">Cancelled</button>
                )}

                <span className="actionBtns">
                  <button type="">
                    <i className="bi bi-eye"></i>
                  </button>{" "}
                  <button type="">
                    <i className="bi bi-download"></i>
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
