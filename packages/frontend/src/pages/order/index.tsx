import React from "react";
import orders from "./orders.json";
import OrderItem from "@/components/OrderItem";
import Layout from "@/components/Layout";
import { useAppSelector } from "@/lib/redux/hooks";

const OrderPage = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Layout>
      <div className="min-h-screen text-gray-900 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl">{user.firstName}, your Orders</h1>
        {orders.map((order: any) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </Layout>
  );
};

export default OrderPage;
