<template>
  <div class="sign__wrapper">
    <div class="sign__header">
      <div class="sign-in__title">
        <h1>Sign-in of Sunrise</h1>
      </div>
    </div>
    <b-container class="sign__content">
      <b-row>
        <div class="sign__title">
          <h2>Sign-in</h2>
          <p>
            Please sign in by completing the information below. All fields are
            required.
          </p>
        </div>
        <b-form class="sign__form"  @submit.prevent="login()">
          <b-row>
            <b-col
              class="sign__input"
              cols="12"
              sm="12"
              md="6"
              lg="4"
              offset-lg="2"
            >
              <b-form-group
                label="Membership # / Username"
                label-for="username"
              >
                <b-form-input
                  type="text"
                  id="username"
                  required
                  v-model="form.phone_number"
                />
                <a href="#">Forgot your membership number?</a>
              </b-form-group>
              <b-form-group label="Password" label-for="password">
                <b-form-input
                  type="password"
                  id="password"
                  required
                  v-model="form.password"
                />
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group class="d-flex justify-content-between">
                  <b-form-checkbox>Remember Me</b-form-checkbox>
                  <a href="#" class="mt-0">Forgot Password</a>
                </b-form-checkbox-group>
              </b-form-group>
              <b-button type="submit">SIGN IN</b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-col class="pl-0 mt-5" lg="4" offset-lg="2">
          <span>Not a Member? <a href="#">Join World of Sunrise.</a></span>
          <span
            >First time signing in?
            <a href="#">Create an online account.</a></span
          >
        </b-col>
        <b-col class="pl-0 mt-5" lg="10" offset-lg="2">
          <h4>Accessing your account information</h4>
          <p>
            If you can’t remember your membership number, username, or password,
            please contact customer service:
          </p>
          <span
            >Within the US & Canada: <a href="#">Call (800) 544-9288.</a></span
          >
          <span
            >Outside the US & Canada:
            <a href="#">View contact information.</a></span
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone_number: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        console.log(this.form)
        let res = await this.$auth.loginWith('local', { data: this.form })
        console.log(res)
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
    },
  },
}
</script>
