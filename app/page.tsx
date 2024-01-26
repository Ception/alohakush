import Hero from "./_components/Hero";
import Newest from "./_components/Newest";

export const isDevelopment = process.env.ENABLE_DEV === "true";
export const API = isDevelopment
  ? process.env.API_URL_DEV
  : process.env.API_URL;

export const AUTH_TOKEN = isDevelopment
  ? process.env.API_TOKEN_DEV
  : process.env.API_TOKEN;

export const SITE_LINK = process.env.SITE_URL;

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Newest />
    </>
  );
}
