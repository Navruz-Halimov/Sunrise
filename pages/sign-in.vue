<template>
  <div class="sign__wrapper">
    <div class="sign__header">
      <div class="sign-in__title">
        <h1>{{$t('singInPage.title')}}</h1>
      </div>
    </div>
    <b-container class="sign__content">
      <b-row>
        <div class="sign__title">
          <h2>{{$t('singInPage.pageName')}}</h2>
          <p>
            {{$t('singInPage.pageNameSub')}}
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
              
            >
              <b-form-group
                :label="$t('singInPage.username')"
                label-for="username"
                
              >
                <b-form-input
                  type="text"
                  id="username"
                  required
                  v-model="form.phone_number"
                />
                <!-- <a href="#">{{$t('singInPage.forget')}}</a> -->
              </b-form-group>
              <b-form-group 
                :label="$t('singInPage.password')" 
                label-for="password">
                <b-form-input
                  type="password"
                  id="password"
                  required
                  v-model="form.password"
                />
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group class="d-flex justify-content-between">
                  <!-- <b-form-checkbox>{{$t('singInPage.remember')}}</b-form-checkbox> -->
                  <!-- <a href="#" class="mt-0">{{$t('singInPage.forgetPass')}}</a> -->
                </b-form-checkbox-group>
              </b-form-group>
              <b-button type="submit">{{$t('singInPage.singBtn')}}</b-button>
            </b-col>
          </b-row>
        </b-form>
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
