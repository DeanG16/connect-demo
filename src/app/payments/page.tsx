"use client";

import { ConnectPayments } from "@stripe/react-connect-js";

const PaymentsPage = () => {
  return (
    <div className="mt-4 relative bg-transparent">
      <h1 className="text-3xl mb-4 font-semibold">Payments</h1>
      <ConnectPayments />
    </div>
  );
};

export default PaymentsPage;
