import Stripe from "stripe";
import { env } from "./env.server";

// export function createStripeClient() {
//   return new Stripe(env.STRIPE_API_KEY, { apiVersion: "2023-10-16", httpClient: Stripe.createFetchHttpClient() });
// }

export function createStripeClient() {
    return null;
//   return new Stripe(env.STRIPE_API_KEY, { apiVersion: "2023-10-16", httpClient: Stripe.createFetchHttpClient() });
}