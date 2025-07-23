"use client";

import { ConnectComponentsProvider } from "@stripe/react-connect-js";
import useConnect from "./useConnect";

export const StripeComponentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const stripeConnectInstance = useConnect();
  if (!stripeConnectInstance) {
    return null;
  }

  return (
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      {children}
    </ConnectComponentsProvider>
  );
};
