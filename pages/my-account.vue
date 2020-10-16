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
                <b-tab title="My Reservations" active>
                  <b-card-text>
                    <div>
                      <b-card no-body class="border-0">
                        <b-col lg="12">
                          <h3>Upcoming & Current Reservations</h3>
                          <h4>You have no upcoming or past reservations.</h4>
                          <p>Get started by booking a stay. Missing a reservation? Contact us and let us help.</p>
                          <b-row>
                            <b-col class="pb-5 book__header" cols="12" md="12">
                              <hr />
                              <b-row>
                                <b-col cols="12" sm="6" md="6" lg="3">
                                  <img src="../assets/images/rooms/photo_2020-10-12_16-14-57.jpg" alt="">
                                </b-col>
                                <b-col cols="12" sm="6" md="6" lg="4">
                                  <div>
                                    <h3 class="mt-0">Sunrise Tashkent</h3>
                                    <p>
                                      <span>Sat, Oct 10, 2020 - Mon, Nov 9, 2020</span>
                                      <span>King Rooms</span>
                                      <span>1 Room,  1 Guest</span>
                                    </p>
                                  </div>
                                </b-col>
                                <b-col lg="4">
                                  <div class="total">
                                    <h6>Total Cash Per Room <b>UZS51,543,000.00 UZS</b></h6>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-card>
                    </div>
                  </b-card-text>
                </b-tab>
                <b-tab title="My Profile">
                  <div>
                    <b-card no-body class="text-center border-0">
                      <b-tabs pills card>
                        <b-tab title="PERSONAL INFORMATION" active>
                          <b-card-text>
                            <h3>Contact Information</h3>
                            <p>Complete your contact information and save time when making reservations.</p>
                            <b-col class="mt-5" lg="6" offset-lg="3">
                              <b-form>
                                <b-row>
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Username"
                                      label-for="username">
                                      <b-form-input type="text" id="username" placeholder="User Name" disabled required/>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="6" />
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Email"
                                      label-for="email">
                                      <b-form-input type="email" id="email" required/>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="6" />
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-row>
                                      <b-col class="pr-0" lg="4">
                                        <b-form-group
                                          label-for="month" >
                                          <select id="month" class="adults__capacity">
                                            <option value="0" selected disabled>Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                          </select>
                                        </b-form-group>
                                      </b-col>
                                      <b-col class="p-0" lg="4">
                                        <b-form-group
                                          label-for="day" >
                                          <select id="day" style="border-left: none; border-right: none;" class="adults__capacity">
                                            <option value="0" selected disabled>Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                          </select>
                                        </b-form-group>
                                      </b-col>
                                      <b-col class="pl-0" lg="4">
                                        <b-form-group
                                          label-for="year" >
                                          <select id="year" class="adults__capacity">
                                            <option value="0" selected disabled>Year</option>
                                            <option value="1">1900</option>
                                            <option value="2">1901</option>
                                            <option value="3">1902</option>
                                            <option value="4">1903</option>
                                            <option value="5">1904</option>
                                            <option value="6">1905</option>
                                            <option value="7">1906</option>
                                            <option value="8">1907</option>
                                            <option value="9">1908</option>
                                            <option value="10">2018</option>
                                            <option value="11">2019</option>
                                            <option value="12">2020</option>
                                            <option value="13">2021</option>
                                            <option value="14">2022</option>
                                          </select>
                                        </b-form-group>
                                      </b-col>
                                      <b-col class="pr-0" lg="8">
                                        <b-form-group
                                          label-for="tel">
                                          <b-form-input style="height: 40px;" type="tel" id="tel" placeholder="+998" required/>
                                        </b-form-group>
                                      </b-col>
                                      <b-col class="pl-0" lg="4">
                                        <b-form-group
                                          label-for="mobile" >
                                          <select id="mobile" style="border-left: none" class="adults__capacity">
                                            <option value="0" selected disabled>Mobile</option>
                                            <option value="1">Business</option>
                                            <option value="2">Home</option>
                                            <option value="3">Mobile</option>
                                          </select>
                                        </b-form-group>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                                <b-row>
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Primary Address"
                                      label-for="address">
                                      <b-form-input type="text" id="address" placeholder="Address" required/>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="6" />
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Country / Region"
                                      label-for="country">
                                      <select id="country" class="adults__capacity">
                                        <option value="0" selected>Uzbekistan</option>
                                      </select>
                                    </b-form-group>
                                    <b-form-group
                                      label-for="city">
                                      <select id="city" class="adults__capacity">
                                        <option value="0" selected>Tashkent</option>
                                      </select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="6" />
                                </b-row>
                              </b-form>
                            </b-col>
                          </b-card-text>
                        </b-tab>
                        <b-tab title="SIGN IN & SECURITY">
                          <b-card-text>
                            <h3>Update Username</h3>
                            <b-col class="mt-5" lg="6" offset-lg="3">
                              <b-form>
                                <b-row>
                                  <b-col class="pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Username"
                                      label-for="username">
                                      <b-form-input type="text" id="username" placeholder="User Name" disabled required/>
                                    </b-form-group>
                                    <hr />
                                    <b-button type="submit" disabled="disabled" style="transform: none">SUBMIT</b-button>
                                    <b-button class="mt-3" type="submit" style="transform: none">CANCEL</b-button>
                                  </b-col>
                                  <b-col class="mt-5 pay__input" cols="12" sm="12" md="6" lg="12">
                                    <b-form-group
                                      label="Password"
                                      label-for="password">
                                      <b-form-input type="password" id="password" placeholder="Old Password" required/>
                                      <b-form-input type="password" id="password" placeholder="New Password" style="border-top: none; border-bottom: none;" required/>
                                      <b-form-input type="password" id="password" placeholder="Confirm Password" required/>
                                    </b-form-group>
                                    <hr />
                                    <b-button type="submit" disabled="disabled" style="transform: none">SUBMIT</b-button>
                                    <b-button class="mt-3" type="submit" style="transform: none">CANCEL</b-button>
                                  </b-col>
                                </b-row>
                              </b-form>
                            </b-col>
                          </b-card-text>
                        </b-tab>
                      </b-tabs>
                    </b-card>
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
