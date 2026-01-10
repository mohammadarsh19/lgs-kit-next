import React from 'react'

const ShippingDelivery = () => {
  return (
    <div className='mx-5 text-center my-6 md:min-h-110'>
      <h2 className='text-3xl my-3'>Shipping & Delivery</h2><br />
      <div className='text-left md:mx-5'>
        <ol className='list-decimal mx-3'>
          <li>We are accepting payment via All types of Debit cards & Credit cards, UPI, Netbanking, BHIM UPI, Wallets etc.</li>
          <li>Once your payment is complete, You will be redirected automatically to the download section of the page. Click the download button you will stated to download on your device.</li>
          <li>Apart from that you will also get the product download link in the email id provided during checkout. it might take 5 to 10 minutes to get that email.</li>
          <li>If you haven’t received the product through email we recommend you to check the spam folder or promotional tab email. all the files are uploaded in the drive. You can download it whenever you want it.</li><br />
        </ol><br />
        <p><b>NOTE*</b> FOR MORE DETAILS CONTACT TO OUR SUPPORT TEAM <b>@lgsKit@gmail.com</b></p>
      </div>
    </div>
  )
}

export default ShippingDelivery

export const metadata = {
  title: "Shipping & Delivery | LGS Kit",
  description: "Buy the best Ebook in the Market!",
};