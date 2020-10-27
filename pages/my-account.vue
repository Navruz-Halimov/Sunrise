<template>
  <div class="account">
    <div class="account__header">
      <b-col class="account__title" lg="12">
        <h2>Welcome back, User Name</h2>
        <button class="btn btn-outline-warning" type="button">BOOK NOW</button>
      </b-col>
    </div>
    <b-container>
      <b-row>
        <b-col class="payment account__content mt-5" lg="12">
          <b-row>
            <b-col no-body lg="12">
              <b-tabs pills card vertical>
                <b-tab title="Personal Info">
                  <div class="person">
                    <div>
                      <p>NAME: </p>
                      <p>E-MAIL: </p>
                      <p>PHONE NUMBER: </p>
                      <p>HOME AIRPORT: </p>
                      <p>STREET ADDRESS: </p>
                      <p>CITY:</p>
                      <p>STATE/ PROVINCE/ REGION: </p>
                      <p>POSTAL CODE: </p>
                      <p>COUNTRY: </p>
                    </div>
                    <div>
                      <span>John Brown</span>
                      <span>Johnbrown@Test.Mail.Com</span>
                      <span>+0 000-000-000</span>
                      <span>London Heathrow Airport (LHR)</span>
                      <span>46 Gray's Inn Rd, London, WC1X 8LP</span>
                      <span>London</span>
                      <span>London</span>
                      <span>69106</span>
                      <span>United Kingdom</span>
                    </div>
                  </div>
                </b-tab>
                <b-tab title=" Booking History">
                  <div class="book">
                    <b-table bordered :items="items"></b-table>
                  </div>
                </b-tab>
                <b-tab title="Reviews">
                  <div class="textarea">
                    <h6 class="mb-3">Your Reviews</h6>
                    <b-form-textarea
                      class="pay_input"
                      id="textarea-rows"
                      placeholder="Tall textarea"
                      rows="8"
                      no-resize
                    ></b-form-textarea>
                    <b-button type="submit" >Submit</b-button>
                  </div>
                </b-tab>
                <b-tab title="Settings">
                  <div class="setting">
                    <b-col class="mt-5" lg="10">
                      <h3 class="mb-4">Change Personal Infomation</h3>
                      <b-form>
                        <b-row>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="First Name"
                              label-for="username">
                              <b-form-input type="text" id="username" placeholder="First Name" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Last Name"
                              label-for="lastname">
                              <b-form-input type="text" id="lastname" placeholder="Last Name" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Email"
                              label-for="email">
                              <b-form-input type="email" id="email" placeholder="user@gmail.com" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Phone number"
                              label-for="tel">
                              <b-form-input type="tel" id="tel" placeholder="+00 000 0000 000" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Primary Address"
                              label-for="address">
                              <b-form-input type="text" id="address" placeholder="Address" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Country / Region"
                              label-for="country">
                              <b-form-input type="text" id="country" placeholder="United Kingdom" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="City"
                              label-for="city">
                              <b-form-input type="text" id="city" placeholder="London" required/>
                            </b-form-group>
                          </b-col>
                          <b-col lg="6" />
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <hr />
                            <b-button type="submit" style="transform: none">Save changes</b-button>
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col>
                    <b-col class="mt-5" lg="6">
                      <h3 class="mb-4">Change Password</h3>
                      <b-form>
                        <b-row>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="10">
                            <b-form-group
                              label="Current Password"
                              label-for="password">
                              <b-form-input type="password" id="password" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="10">
                            <b-form-group
                              label="New Password"
                              label-for="new-password">
                              <b-form-input type="password" id="new-password" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="10">
                            <b-form-group
                              label="New Password Again"
                              label-for="password-again">
                              <b-form-input type="password" id="password-again" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="10">
                            <hr />
                            <b-button type="submit" style="transform: none">Save password</b-button>
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col>
                  </div>
                </b-tab>
              </b-tabs>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
          {
            title: 'Wellington Hotel',
            location: 'San Fancisco',
            orderDate: '01/01/2014',
            dataOfYourStay: '01/05/2014 - 01/15/2014',
            cost: '$'+1280
          },
        ]
      }
    }
  }
</script>
