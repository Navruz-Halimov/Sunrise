<template>
  <div class="join__wrapper">
    <div class="join__header">
      <div class="join__title">
        <h1>Join World of Sunrise</h1>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col class="join__title" lg="12">
          <h2>Join World of Sunrise.</h2>
          <p>
            Join World of Sunrise, your new loyalty program. It’s a world filled
            with thoughtful perks, personal connections and amazing experiences.
            And it revolves around you. Beyond great locations, luxurious rooms
            and top-notch amenities, World of Sunrise connects you to the
            people, places and stories at the heart of your world. For more
            information see our FAQs.
          </p>
          <span>All fields are required unless noted as optional.</span>
        </b-col>
        <b-col class="join__content" lg="12">
          <b-form class="sign__form" @submit.prevent="onSubmit">
            <b-row>
              <b-col lg="2" offset-lg="1">
                <b-form-group label="Prefix (optional)" label-for="select">
                  <select
                    id="select"
                    class="adults__capacity"
                    v-model="form.gender"
                  >
                    <option value="0" selected disabled>Select...</option>
                    <option value="1">Mr.</option>
                    <option value="2">Dr.</option>
                    <option value="3">Mrs.</option>
                    <option value="4">Miss</option>
                    <option value="5">Ms.</option>
                  </select>
                </b-form-group>
              </b-col>
              <b-col lg="4">
                <b-form-group label="Given / First Name" label-for="username">
                  <b-form-input
                    class="join__input"
                    type="text"
                    id="username"
                    v-model="form.firstname"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="4">
                <b-form-group label="Surname / Last Name" label-for="name">
                  <b-form-input
                    class="join__input"
                    type="text"
                    id="name"
                    v-model="form.lastname"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="4" offset-lg="1">
                <b-form-group label="Email Address" label-for="email">
                  <b-form-input
                    class="join__input"
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                  />
                </b-form-group>
                <b-form-group label="Zip code" label-for="zip">
                  <b-form-input
                    class="join__input"
                    type="text"
                    id="zip"
                    v-model="form.zim_code"
                    required
                  />
                </b-form-group>
                <b-form-group label="Country / Region" label-for="country">
                  <b-form-input
                    class="join__input"
                    type="text"
                    id="country"
                    v-model="form.state"
                    required
                  />
                </b-form-group>
                <b-form-group label="City" label-for="city">
                  <b-form-input
                    class="join__input"
                    type="text"
                    id="city"
                    v-model="form.city"
                    required
                  />
                </b-form-group>
                <b-form-group label="Password" label-for="password">
                  <b-form-input
                    class="join__input"
                    type="password"
                    id="password"
                    v-model="login.password"
                    required
                  />
                  <span
                    >Password must be between 8 and 35 characters long. (Special
                    characters are permitted.)</span
                  >
                </b-form-group>
                <b-button type="submit">JOIN</b-button>
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
      login: {
        phone_number: "+998"+this.$store.state.phone_number,
        password: '',
      },
      form: {
        prefix: 'Mr.',
        phone_number: this.$store.state.phone_number,
        token: this.$store.state.token,
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        state: '',
        city: '',
        zim_code: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      this.form.password = this.login.password;
      console.log(this.form);
      console.log(this.login);
      await this.$axios
        .post('user/me/', this.form)
        .then(async () => {
          try {
             await this.$auth.loginWith('local', {
              data: this.login
            })
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
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
