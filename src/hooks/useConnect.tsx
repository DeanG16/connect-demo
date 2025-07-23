"use client";
import { useState, useEffect } from "react";
import {
  loadConnectAndInitialize,
  StripeConnectInstance,
} from "@stripe/connect-js";

export const useConnect = () => {
  const [stripeConnectInstance, setStripeConnectInstance] =
    useState<StripeConnectInstance>();

  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch("/api/account/session", {
        method: "GET",
      });

      const { clientSecret } = await response.json();

      return clientSecret;
    };

    setStripeConnectInstance(
      loadConnectAndInitialize({
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
        fetchClientSecret,
        appearance: {
          overlays: "dialog",
          variables: {
      			colorPrimary: '#ebebeb',
      			colorBackground: '#171717',
      			overlayBackdropColor: 'rgba(0, 0, 0, 0.5)',
      		},
        },
      })
    );
  }, []);

  return stripeConnectInstance;
};

export default useConnect;
