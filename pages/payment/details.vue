<template>
  <div class="payment pay__details py-5">
    <b-container>
      <b-row>
        <b-col class="book__header mb-5" cols="12" md="12">
          <b-row>
            <b-col cols="12" sm="6" md="6" lg="3">
              <img src="../../assets/images/rooms/ABDUMANNONRAKHIMOVV-279.jpg" alt="">
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="4">
              <div class="pt-1">
                <h3>Sunrise Tashkent</h3>
                <p>
                  <span>Sat, Oct 10, 2020 - Mon, Nov 9, 2020</span>
                  <span>King Rooms</span>
                  <span>1 Room,  1 Guest</span>
                  <span>Member Rate</span>
                </p>
              </div>
            </b-col>
            <b-col class="p-0" lg="4">
              <div class="total">
                <h6>Total Cash Per Room <b>UZS51,543,000.00 UZS</b></h6>
                <b-collapse id="total" class="mt-2">
                  <ul>
                    <li><span>Sat, Oct 10</span><span>UZS1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>UZS1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>UZS1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>UZS1,494,000.00 UZS</span></li>
                  </ul>
                </b-collapse>
                <p><span>Subtotal</span><span>UZS44,820,000.00 UZS</span></p>
                <p><span>Taxes & Fees</span><span>UZS6,723,000.00 UZS</span></p>
                <a v-b-toggle.total @click="showDetails()">
                  {{textDetails}}
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
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
<script>
  export default {
    data() {
      return {
        textDetails: 'Show stay breakdown'
      }
    },
    methods: {
      showDetails() {
        if (this.textDetails === 'Show stay breakdown') {
          this.textDetails = 'Hide stay breakdown'
        } else {
          this.textDetails = 'Show stay breakdown'
        }
      }
    }
  }
</script>
