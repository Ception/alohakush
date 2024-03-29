import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const API = process.env.API_URL;
  const AUTH_TOKEN = process.env.API_TOKEN;
  const slug = params.categorySlug;

  try {
    const response = await fetch(
      `${API}/products?populate[0]=category&populate[1]=image&filters[categories][slug][$eq]=${slug}`,
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
