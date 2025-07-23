import { NextRequest, NextResponse } from "next/server";
import { stripe } from "./stripe";

export const GET = async (req: NextRequest) => {
  try {
    const accountLink = await stripe.accountSessions.create({
      account: "CONNECT_ACCOUNT_ID",
      components: {
        payments: {
          enabled: true,
          features: {
            refund_management: true,
            dispute_management: true,
            capture_payments: true,
            destination_on_behalf_of_charge_management: false,
          },
        },
      },
    });

    return NextResponse.json(
      { clientSecret: accountLink.client_secret },
      { status: 200 }
    );
  } catch (e) {
    console.error({ e });
    return NextResponse.json(
      { error: "Internal Error occurred" },
      { status: 500 }
    );
  }
};
