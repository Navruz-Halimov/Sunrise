<template>
  <div class="payment pay__details py-5">
    <b-container>
      <b-row>
        <b-col lg="12">
          <h5>Almost there!</h5>
          <p>Enter your payment details to complete your reservation.</p>
          <b-form class="sign__form mt-4">
            <h6>Secure Credit Card Payment</h6>
            <b-row>
              <b-col class="payment-credit-card-input has-error mt-3" md="6" lg="4">
                <label for="card" style="font-size: 13px;">Card Number and Expiration Date</label>
                <div class="pay-controls mb-3">
                  <img src="https://www.hyatt.com/hds/images/1.4.0/global/core/payments/generic.svg" alt="Unknown Card">
                  <b-form-input type="text" id="card" placeholder="Card number" class="pay-control-number "/>
                  <b-form-input type="text" placeholder="MM/YY" class="pay-control-date "/>
                </div>
                <b-form-group>
                  <b-form-checkbox-group>
                    <b-form-checkbox>Save this card for future use</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group>
                  <b-form-checkbox-group>
                    <b-form-checkbox>I accept the cancellation policy. I have read and acknowledge the use of my
                      personal information in accordance with the
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="6" lg="4">
                <b-button type="submit" style="transform: none">SIGN IN</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
