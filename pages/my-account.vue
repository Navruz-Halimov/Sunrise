<template>
  <div class="account">
    <div class="account__header">
      <b-col class="account__title" lg="12">
        <h2>Welcome back, {{$auth.user.firstname}} {{$auth.user.lastname}}</h2>
        <button class="btn btn-outline-warning"  :to="localePath('/booking')">  BOOK NOW</button>
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
                      <p>PREFIX:</p>
                      <p>NAME:</p>
                      <p>E-MAIL:</p>
                      <p>PHONE NUMBER:</p>
                      <p>CITY:</p>
                      <p>STATE/ PROVINCE/ REGION:</p>
                      <p>POSTAL CODE:</p>
                    </div>
                    <div>
                      <span>{{ $auth.user.prefix }}</span>
                      <span
                        >{{ $auth.user.firstname }}
                        {{ $auth.user.lastname }}</span
                      >
                      <span>{{ $auth.user.email }}</span>
                      <span>{{ $auth.user.phone_number }}</span>
                      <span>{{ $auth.user.city }}</span>
                      <span>{{ $auth.user.state }}</span>
                      <span>{{ $auth.user.zim_code }}</span>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Booking History">
                  <div class="book">
                    <b-table bordered :items="items"></b-table>
                  </div>
                </b-tab>
                <b-tab title="Reviews" class="payment__reviews">
                   <b-form @submit.prevent="submitReview">
                  <div for="FormControl">Rate us</div>
                  <vue-stars
                    class="user__profile-rate"
                    name="rate"
                    active-color="#FFC805"
                    inactive-color="#282932"
                    shadow-color="#FFC805"
                    hover-color="#00aced"
                    :max="5"
                    :value="4"
                    :readonly="false"
                    char="★"
                  />                 
                  <b-col sm="12" md="6" lg="6" cols="12" class="p-0">
                    <b-form-group
                      label="Your Reviews title"
                      label-for="reviews"
                    >
                      <b-form-input
                        v-model="form.title"
                        type="text"
                        id="reviews"
                        placeholder="Your Reviews title"
                        required
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="12" md="6" lg="6" cols="12" class="p-0">
                    <div class="form-group reviews__select">
                      <label for="FormControl">Example select</label>
                      <select class="form-control" id="FormControl">
                        <option value="0" selected="selected" disabled>Trip type</option>
                        <option value="1">Business</option>
                        <option value="2">Family</option>
                      </select>
                    </div>
                  </b-col> 
                  <div class="textarea">
                    <!-- <h6 class="mb-3">Your Reviews</h6> -->
                    <b-col sm="12" md="6" lg="6" cols="12" class="p-0">
                      <label for="textarea-rows">Reviews Comment:</label>
                      <b-form-textarea
                      v-model="form.comment"
                        class="pay_input"
                        id="textarea-rows"
                        placeholder="Your Comment"
                        rows="8"
                        no-resize
                      >
                      </b-form-textarea>
                    </b-col>
                    <b-col sm="12" md="6" lg="6" cols="12" class="p-0">
                      <b-button type="submit">Submit</b-button>
                    </b-col>
                  </div>
                    </b-form>
                </b-tab>
                <b-tab title="Settings">
                  <div class="setting">
                    <b-col class="mt-5" lg="10">
                      <h3 class="mb-4">Change Personal Infomation</h3>
                      <b-form @submit.prevent="changeInfo">
                        <b-row>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                            <b-form-group
                              label="First Name"
                              label-for="username"
                            >
                              <b-form-input
                                type="text"
                                id="username"
                                v-model="$auth.user.firstname"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                            <b-form-group
                              label="Last Name"
                              label-for="lastname"
                            >
                              <b-form-input
                                type="text"
                                id="lastname"
                                v-model="$auth.user.lastname"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                            <b-form-group label="Email" label-for="email">
                              <b-form-input
                                type="email"
                                id="email"
                                v-model="$auth.user.email"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                            <b-form-group label="Phone number" label-for="tel">
                              <b-form-input
                                type="tel"
                                id="tel"
                                disabled
                                :value="$auth.user.phone_number"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                        <b-form-group label="City" label-for="city">
                              <b-form-input
                                type="text"
                                id="city"
                                v-model="$auth.user.city"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                            <b-form-group
                              label="Country / Region"
                              label-for="country"
                            >
                              <b-form-input
                                type="text"
                                id="country"
                                v-model="$auth.user.state"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                          </b-col>
                          <b-col lg="6" />
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                          >
                        <b-form-group label="Zip Code" label-for="zipcode">
                              <b-form-input
                                type="text"
                                id="zipcode"
                                placeholder="London"
                                v-model="this.$auth.user.zim_code"
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-2 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="6"
                            style="padding-top: 28px"
                          >
                            <b-button type="submit" style="transform: none">
                              Save changes
                            </b-button>
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col>
                    <!-- <b-col class="mt-5" lg="6">
                      <h3 class="mb-4">Change Password</h3>
                      <b-form>
                        <b-row>
                          <b-col
                            class="mt-1 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="10"
                          >
                            <b-form-group
                              label="Current Password"
                              label-for="password"
                            >
                              <b-form-input
                                type="password"
                                id="password"
                                required
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-1 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="10"
                          >
                            <b-form-group
                              label="New Password"
                              label-for="new-password"
                            >
                              <b-form-input
                                type="password"
                                id="new-password"
                                required
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-1 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="10"
                          >
                            <b-form-group
                              label="New Password Again"
                              label-for="password-again"
                            >
                              <b-form-input
                                type="password"
                                id="password-again"
                                required
                              />
                            </b-form-group>
                          </b-col>
                          <b-col
                            class="mt-1 pay__input"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="10"
                          >
                            <hr />
                            <b-button type="submit" style="transform: none"
                              >Save password</b-button
                            >
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-col> -->
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
      form:{
        title:'',
        trip_type:"Business",
        comment:"",
        rate:"1",
      },

      items: [
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
        {
          title: 'Wellington Hotel',
          location: 'San Fancisco',
          orderDate: '01/01/2014',
          dataOfYourStay: '01/05/2014 - 01/15/2014',
          cost: '$' + 1280,
        },
      ],
    }
  },
  methods:{
    async submitReview() {
      await this.$axios.post('reviews/create/',this.form)
       .then(async () => {
          try {
            this.$toast.success({
              title: `${this.$t('toast.success')}`,
              message: `${this.$t('toast.loginSuccessMessage')}`,
            })
          } catch (err) {
            console.log(err)
            this.$toast.error({
              title: `${this.$t('toast.loginError')}`,
              message: `${this.$t('toast.loginErrorMessage')}`,
            })
          }
        })
    },
      async changeInfo() {
      await this.$axios
        .patch("user/profile/", {
          prefix:"Mr.",
          firstname:this.$auth.user.firstname,
          lastname:this.$auth.user.lastname,
          email:this.$auth.user.email,
          state:this.$auth.user.state,
          city:this.$auth.user.city,
          zim_code:this.$auth.user.zim_code
        })
        .then(res => {
          this.$toast.success({
            title: `${this.$t("toast.success")}`,
            message: `${this.$t("toast.updateProfile")}`
          });
        })
        .catch(err => {
          console.log(err);
          this.$toast.error({
            title: `${this.$t("toast.loginError")}`,
            message: `${this.$t("toast.updateProfileError")}`
          });
        });
    }
  }
}
</script>
