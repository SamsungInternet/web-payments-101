if (!window.PaymentRequest) {
  console.error('This browser does not support the Payment Request API. Normally we would simply fall back to a traditional check out form, but this demo has been kept intentionally simple.');
} else {

  // This browser supports the Payment Request API
  
  var paymentMethods = [{
    supportedMethods: ['basic-card']
  }];

  // Shipping Options step 1
  /*
  var STANDARD_SHIPPING_PRICE = 2.0;
  var SDC_SHIPPING_PRICE = 3.0;
  
  var shippingOptionStandard = {  
    id: 'standard',
    label: 'Standard Shipping (2-3 Days)',
    amount: {
      currency: 'USD',
      value: STANDARD_SHIPPING_PRICE,
    },
  };

  var shippingOptionSDC = {  
    id: 'sdc-special',
    label: 'Same Day Delivery (SDC)',
    amount: {
      currency: 'USD',
      value: SDC_SHIPPING_PRICE,
    },
  };
  */

  // Respond to clicking a 'Buy Now' button
  function onClickBuyNow(button, name, price) {

    var purchaseDetails = {
      displayItems: [
        {
          label: name,
          amount: {currency: 'USD', value: price}
        }
      ],
      total: {
        label: 'Total', 
        amount: {currency: 'USD', value: price}
      },
      // Shipping Options step 2
      //shippingOptions: [shippingOptionStandard]
    };

    // Requesting Customer Details step 1
    /*
    var options = {
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
      requestShipping: true
    };
    */

    // This sets up a 'Payment Request' with the payment methods we will allow and the details of this purchase
    // Requesting Customer Details step 2: add options as a 3rd parameter
    var paymentRequest = new PaymentRequest(paymentMethods, purchaseDetails);
    
    // This makes it actually display the user interface
    // Payment Request UI step 1
    /*
    paymentRequest.show()
      // This next bit happens once we have entered our details and confirmed. `paymentResponse` will contain the data we entered.
      .then(function(paymentResponse) {
      
        console.log('Never gets here!');
      
        // Process the payment server-side (simulated in this case!)
        processPaymentDetails(paymentResponse)
          .then(function(paymentResponse) {
            // We successfully processed the payment, so now we can call 'complete' to indicate it was successful and close the dialog.
            paymentResponse.complete('success');
            // For this demo we will also update the button
            button.innerHTML = 'Purchased';
            button.classList.add('purchased');
          });
      })
      .catch(function(error) {
        // This might happen for example if you click the 'cancel' button.
        console.error('Unable to complete purchase', error);
      });
    */

    // Shipping Options step 3
    /*
    paymentRequest.addEventListener('shippingaddresschange', function(event) {  
      
      var postalCode = event.target.shippingAddress.postalCode;
      
      if (postalCode === '94103') {        
        // The shipping address matches the postal code for the Moscone West Center, so we can offer our SDC special delivery!
        purchaseDetails.shippingOptions.push(shippingOptionSDC);        
      } 
      
      event.updateWith(purchaseDetails);
      
    });
    */
    
    // Shipping Options step 4
    /*
    paymentRequest.addEventListener('shippingoptionchange', function(event) {
     
      console.log('shipping option change', paymentRequest.shippingOption);
      
      // Update total
      if (paymentRequest.shippingOption === 'standard') {        
        
        purchaseDetails.displayItems.push(shippingOptionStandard);
        purchaseDetails.total.amount.value = parseFloat(price) + STANDARD_SHIPPING_PRICE;
        purchaseDetails.shippingOptions[0].selected = true;
        
      } else if (paymentRequest.shippingOption === 'sdc-special') {
        
        purchaseDetails.displayItems.push(shippingOptionSDC);
        purchaseDetails.total.amount.value = parseFloat(price) + SDC_SHIPPING_PRICE;
        purchaseDetails.shippingOptions[1].selected = true;
        
      }

      event.updateWith(purchaseDetails);
      
    });
    */

  }

  /**
   * Here is where we would securely send the payment info to our payment gateway for processing. 
   * For demo purposes, simulate with a 1 second wait.
   */
  function processPaymentDetails(paymentResponse) {
    return new Promise(function (resolve) {
        setTimeout(function() {
          resolve(paymentResponse);
        }, 1000);
      });
  }

}
