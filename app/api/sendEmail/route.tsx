import { ServerClient } from "postmark";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { items, name, phone, email, city, note } = await req.json();
  const apiKey = process.env.POSTMARK_API_KEY!;
  const client = new ServerClient(apiKey);

  // Format the items into strings
  const itemsList = items
    .map(
      (item: { product: any; quantity: any }) =>
        `${item.product}: ${item.quantity}`
    )
    .join("\n");

  try {
    const response = await client.sendEmailWithTemplate({
      From: "order@alohakush.ca",
      To: "aleks@alohakush.ca",
      TemplateAlias: "order",
      TemplateModel: {
        items: itemsList,
        name: name,
        phone: phone,
        email: email,
        city: city,
        note: note,
      },
    });
    return NextResponse.json({
      message: "Email sent successfully",
      messageId: response.MessageID,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return NextResponse.json({ message: "Failed to send email" });
  }
}
