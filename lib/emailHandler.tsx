import { ServerClient } from "postmark";

export const sendOrderEmail = async (
  product: string,
  quantity: number,
  name: string,
  phone: string,
  email: string,
  city: string,
  note: string
) => {
  const apiKey = "42db4870-7870-4b27-8229-14ef90cf9cba";
  const client = new ServerClient(apiKey);
  try {
    const response = await client.sendEmailWithTemplate({
      From: "order@alohakush.ca",
      To: "aleksmanov@outlook.com",
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
    return response.MessageID;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
