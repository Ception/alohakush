import { ServerClient } from "postmark";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product, quantity, name, phone, email, city, note } =
    await req.json();
  const apiKey = process.env.POSTMARK_API_KEY!;
  const client = new ServerClient(apiKey);

  try {
    const response = await client.sendEmailWithTemplate({
      From: "order@alohakush.ca",
      To: "aleks@alohakush.ca",
      TemplateAlias: "order",
      TemplateModel: {
        product: product,
        quantity: quantity,
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
