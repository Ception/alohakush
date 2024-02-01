import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const API = process.env.API_URL;
  const AUTH_TOKEN = process.env.API_TOKEN;
  const name = params.product;

  try {
    const response = await fetch(
      `${API}/products?filters[slug][$eq]=${name}&populate=image,categories`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          cache: "no-cache",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        cahe: "no-cache",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching products" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
