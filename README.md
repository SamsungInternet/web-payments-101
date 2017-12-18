# Web Payments: Making Better Online Shopping Experiences (SDC 2017)

**Welcome! This is a short tutorial created especially for the Samsung Developer Conference 2017. Within a few minutes, you should have made a shopping site which makes use of the new "Payment Request" feature from supporting browsers.**
 
The Payment Request API (part of the wider "Web Payments" set of open standards) provides a special, browser-powered checkout form. It is designed to make it easy, quick and secure for people to confirm their payment details. You can also request their shipping address and contact information. This data can be remembered securely by the browser, making it very easy for customers to make purchases across all websites that support the Payment Request standard.

The Payment Request API is already supported in Samsung Internet, Chrome and Edge. In browsers without support yet, we can provide a fallback checkout form, but that has been omitted from this demo to keep it simple.

## Instructions

If you have any difficulties or questions at any point, just let us know and we can lend a hand!

### Getting Started

NB. If you're not already viewing this on Glitch, please [go here first](https://glitch.com/~web-payments-101).

1. Click 'Remix this' to make your own version of this project.

1. Click 'Show Live' to see how it looks already. You should see a page of products, with links to 'Buy Now' under each product.

1. Take note of your project's URL. Open the page in the Samsung Internet web browser on an Android 5.0+ phone (if you don't have one, we can lend you one). _Be sure to include the https:// at the beginning_.

### Payment Request UI

If you try clicking on one of the 'Buy Now' buttons, you'll see it doesn't do anything yet. Next we will add the Payment Request feature so that the user can check out and make their purchase with a debit or credit card. (In a real online shop, we would have a shopping cart option, but we have kept this demo simple).

1. Open `script.js` and look for the `onClickBuyNow` function. Uncomment the section that begins with `paymentRequest.show()`.

1. Try clicking 'Buy Now' again. This time it should show the Payment Request UI! Don't worry, it won't take a real payment. You can safely enter dummy card details, such as `4111 1111 1111 1111` and `111` for your CVV. A second after confirming your "purchase", you should see an indication that it succeeded. (The button text will also change to "Buy Again"!)

1. Take a look at the code you just uncommented. There are comments to explain each line. See if you can understand what it does. If you have any questions, just let us know!

### Requesting Customer Details

So far, we have simply requested payment details and nothing else. What if we want to ask the user for their shipping and contact details? We can easily do that too, by passing in some additional options.

1. Uncomment the `options` declaration above where the PaymentRequest is set up. 

1. Now add `options` as a third parameter to the `PaymentRequest` constructor, so it looks like this: `var paymentRequest = new PaymentRequest(paymentMethods, purchaseDetails, options)`

1. Try making a purchase again. You will see that this time it also asks for your shipping address, name and contact details.

### Shipping Options

It's quite likely that we will want to offer multiple shipping options, perhaps based on the user's location. We can do this by hooking into the `shippingaddresschange` event and returning appropriate `shippingOptions`.

1. Uncomment the section that starts with `var STANDARD_SHIPPING_PRICE = 2.0;`. This sets up two shipping options, a standard option and a special SDC option!

1. Uncomment the `shippingOptions: [shippingOptionStandard]` line from the `purchaseDetails`. This will set up our initial default option.

1. Uncomment the shipping address change listener, starting with `paymentRequest.addEventListener('shippingaddresschange'...` This will let us listen into when the user enters or selects their shipping address. If the postal code is 94103, we add our special SDC-only same day option!

1. If you were to try making a purchase now, you would see that it gets stuck when we select our shipping option. That's because we also now need to handle the `shippingoptionchange` event. Uncomment this section too, starting with `paymentRequest.addEventListener('shippingoptionchange'...`.

1. Now try making a purchase again. If you enter an address with the postal code `94103` (for the Moscone West center), you should see the $3 same day delivery option is available! If you enter any other address, you will just get the standard shipping option for $2. You should see the total price update with the shipping cost.


### What's Next?

You have now seen how to start using the Payment Request API, in order to make better online shopping experiences. This is a nice flow for taking debit or credit card payments, but we could make it even easier for our customers who use Samsung Pay! Samsung Internet supports Samsung Pay via this W3C Payment Request open standard.

We have some separate resources on how to implement this, which we will hand out. Just ask us for further details. You can also see a working demo over at
the Demo Booth.

If you would like to learn more about the Payment Request API, we recommend the following resources. Just bookmark this URL and you can access everything from here: 

[glitch.com/~web-payments-101](https://glitch.com/~web-payments-101)

Or just let us know and we'll give you a hand-out sheet with the URLs on it.

* The official [Developer Information for Payment Request API](https://github.com/w3c/payment-request-info) contains code examples and developer guides.
* For a quick introduction that you can share with your colleagues, see ["How to take payments on the web with the Payment Request API"](https://medium.com/samsung-internet-dev/how-to-take-payments-on-the-web-with-the-payment-request-api-a523f6fc7c1f)
* [Here is the full API specification for Payment Request](https://www.w3.org/TR/payment-request/), if you need further details.
