<template>
  <div class="payment py-5">
    <b-container>
      <b-row>
        <b-col class="book__header" cols="12" md="12">
          <b-row>
            <b-col cols="12" sm="6" md="6" lg="3">
              <img src="../../assets/images/rooms/ABDUMANNONRAKHIMOVV-279.JPG" alt="">
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
        <b-col class="payment__content" lg="12">
          <h5>Complete Your Reservation</h5>
          <h6>Sign-In <span>(Optional)</span></h6>
          <b-form class="sign__form mt-4">
            <b-row>
              <b-col class="pay__input" cols="12" sm="12" md="6" lg="4">
                <b-form-group
                  label="World of Sunrise # or Username"
                  label-for="username">
                  <b-form-input type="text" id="username" required/>
                </b-form-group>
                <b-form-group
                  label="Password"
                  label-for="password">
                  <b-form-input type="password" id="password" required/>
                </b-form-group>
                <b-form-group>
                  <b-form-checkbox-group class="d-flex justify-content-between">
                    <b-form-checkbox>Remember Me</b-form-checkbox>
                    <a href="#" class="mt-0">Forgot Password</a>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="6" lg="4">
                <b-form-group
                  label="Last Name"
                  label-for="name">
                  <b-form-input type="text" id="name" required/>
                </b-form-group>
                <b-button type="submit">SIGN IN</b-button>
              </b-col>
            </b-row>
          </b-form>
          <h5>Get ready for your next stay.</h5>
          <p>When you book direct on hyatt.com, you’re getting our best rate guaranteed.</p>
          <span>All fields are required.</span>
          <b-form class="join__form mt-3">
            <b-row>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="2">
                <b-form-group
                  label="Prefix"
                  label-for="select">
                  <select id="select" class="adults__capacity">
                    <option value="0" selected disabled>Select...</option>
                    <option value="1">Mr.</option>
                    <option value="2">Dr.</option>
                    <option value="3">Mrs.</option>
                    <option value="4">Miss</option>
                    <option value="5">Ms.</option>
                  </select>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="4">
                <b-form-group
                  label="Given / First Name"
                  label-for="username">
                  <b-form-input type="text" id="username" required/>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="4">
                <b-form-group
                  label="Surname / Last Name"
                  label-for="name">
                  <b-form-input type="text" id="name" required/>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="6">
                <b-form-group
                  label="Email"
                  label-for="email">
                  <b-form-input type="email" id="email" required/>
                </b-form-group>
              </b-col>
              <b-col lg="6"/>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="4">
                <b-form-group
                  label="Phone Number"
                  label-for="num">
                  <b-form-input type="number" id="num" required/>
                </b-form-group>
              </b-col>
              <b-col lg="6"/>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="6">
                <b-form-group
                  label="Country / Region"
                  label-for="country">
                  <select id="country" class="adults__capacity">
                    <option value="0" selected>Uzbekistan</option>
                    <option value="1">China</option>
                    <option value="2">USA</option>
                  </select>
                </b-form-group>
                <b-form-group
                  label="Address"
                  label-for="address">
                  <b-form-input type="text" id="address" required/>
                </b-form-group>
                <b-form-group
                  label="City"
                  label-for="city">
                  <b-form-input type="text" id="city" required/>
                </b-form-group>
              </b-col>
              <b-col lg="6"/>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="3">
                <b-form-group
                  label="State"
                  label-for="state">
                  <select id="state" class="adults__capacity">
                    <option value="0" selected>Uzbekistan</option>
                    <option value="1">China</option>
                    <option value="2">USA</option>
                  </select>
                </b-form-group>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="3">
                <b-form-group
                  label="ZIP Code"
                  label-for="zip">
                  <b-form-input type="text" id="zip" required/>
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <h5>Join World of Hyatt.</h5>
                <p>Join World of Hyatt to earn free nights (no blackout dates!), member rates, room upgrades, waived
                  resort fees, and more.</p>
              </b-col>
              <b-col class="pay__input" cols="12" sm="12" md="12" lg="4">
                <b-form-group
                  label="Password"
                  label-for="password">
                  <b-form-input type="password" id="password" required/>
                </b-form-group>
                <b-button type="submit">Proceed to Payment</b-button>
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
