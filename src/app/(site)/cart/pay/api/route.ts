import { feature } from "@/app/interfaces/interface";
import { sendMail } from "@/lib/utils";
import { getDate } from "@/app/sanity-utils";
import { currencyFormat } from "@/app/sanity-utils";

export async function POST(request: Request) {

    const user = await request.json();
    const sender = {
        name: 'TJ.FITS',
        address: 'damifalodun@gmail.com'
    }

    const receipient = {
        name: user.name,
        address: user.email
    }

    try {
        const result = await sendMail({
            sender,
            receipient,
            subject: "Purchase From TJ-FITS",
            message: `<!DOCTYPE html>
<html>
<head>
  <style>
    .btn { display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; }
  </style>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="width: 100%; max-width: 600px; margin: auto;" >
    <div style="background-color: #f8f9fa; padding: 20px; text-align: center; ">
      <h1 style="font-weight: bold; text-align: center;">TJ.<span style="color: #22C55E;">FITS</span></h1>
      <h2>Thank you for your order!</h2>
    </div>
    <div style="padding: 20px;">
      <p>Hi ${user.name},</p>
      <p>We’re excited to let you know we’ve received your order. <br/> <br/>
      Once everything is confirmed and ready to ship, we will send you another email with the tracking details and any other information about your package.
      </p>
      <hr>
      <p><strong>Order Number:</strong> #12345</p>
      <p><strong>Order Date:</strong> ${getDate()}</p>
      <h3>Items:</h3>
      <section>
        ${user.cartItems.map((item:feature) =>
                `
                <div>
                <div style="display:flex; justify-content: space-between; gap: 20px; align-items:center; padding: 10px 0px;">
                    <div class='image-box' style="width: 100px; height:100px; margin-right: 20px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src=${item.imageUrl} alt=${item.name} style="width: 100%; height: 100%; object-fit: cover; object-position: center;"/>
                    </div>
                    <div>
                        <h3>${item.name} - (${item.quantity})</h3>
                        <h3 style="font-weight: bold;">&#8358;${item.price}</h3>
                    </div>
                </div>
                <hr/>
                </div>
                `
        ).join('')}
      </section>
      <p><strong>Sub Total:</strong> &#8358;${currencyFormat(user.subTotal)}</p>
      <p><strong>Delivery Fee:</strong> &#8358;${currencyFormat(user.deliveryFee)}</p>
      <p style="color: red; font-weight: bold; font-size: 16px"><strong>Total:</strong> &#8358;${currencyFormat(user.total)}</p>
      <hr>
      <h3>Shipping Information:</h3>
      <p>${user.name}<br> ${user.email} <br> ${user.contactShippingInfo.contact} <br> ${user.contactShippingInfo.address}<br>${user.contactShippingInfo.state}</p>
      <p><strong>Estimated Delivery:</strong> ${getDate(3)}</p>
      <a class="btn" href="tracking-link">Track My Order</a>
      <hr>
      <p>If you have any questions, feel free to <a href="mailto:damifalodun@gmail.com">contact us</a>.</p>
    </div>
    <div style="background-color: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; color: #6c757d;">
      <p>&copy; 2024 TJ.Fits. All rights reserved.</p>
      <p><a href="tj-fits.vercel.app/privacy-policy">Refund Policy</a> | <a href="tj-fits.vercel.app/privacy-policy">Privacy Policy</a></p>
    </div>
  </div>
</body>
</html>
`
        })
        return Response.json({status: 201, message: result.accepted})
    } catch (error) {
        return Response.json({status: 500, message: error})
    }
}