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
                    <p>NAME: <span>John Brown</span></p>
                    <p>E-MAIL: <span>Johnbrown@Test.Mail.Com</span></p>
                    <p>PHONE NUMBER: <span>+0 000-000-000</span></p>
                    <p>HOME AIRPORT: <span>London Heathrow Airport (LHR)</span></p>
                    <p>STREET ADDRESS: <span>46 Gray's Inn Rd, London, WC1X 8LP</span></p>
                    <p>CITY: <span>London</span></p>
                    <p>STATE/ PROVINCE/ REGION: <span>London</span></p>
                    <p>POSTAL CODE: <span>69106</span></p>
                    <p>COUNTRY: <span>United Kingdom</span></p>
                  </div>
                </b-tab>
                <b-tab title=" Booking History">
                  <div class="book">
                    <b-table sticky-header :items="items" head-variant="light"></b-table>
                  </div>
                </b-tab>
                <b-tab title="Settings">
                  <div class="setting">
                    <h3>Change Personal Infomation</h3>
                    <b-col class="mt-5" lg="10">
                      <b-form>
                        <b-row>
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-form-group
                              label="Username"
                              label-for="username">
                              <b-form-input type="text" id="username" placeholder="User Name" required/>
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
                          <b-col class="mt-2 pay__input" cols="12" sm="12" md="6" lg="6">
                            <b-button type="submit" style="transform: none">Save changes</b-button>
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col>
                    <h3>Change Password</h3>
                    <b-col class="mt-5" lg="6">
                      <b-form>
                        <b-row>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="12">
                            <b-form-group
                              label="Current Password"
                              label-for="password">
                              <b-form-input type="password" id="password" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="12">
                            <b-form-group
                              label="New Password"
                              label-for="password">
                              <b-form-input type="password" id="password" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="12">
                            <b-form-group
                              label="New Password Again"
                              label-for="password">
                              <b-form-input type="password" id="password" required/>
                            </b-form-group>
                          </b-col>
                          <b-col class="mt-1 pay__input" cols="12" sm="12" md="6" lg="12">
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
        ]
      }
    }
  }
</script>
