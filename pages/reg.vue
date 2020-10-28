<template>
  <div class="reg-bg">
    <b-container>
      <div class="reg-bg-form">
        <form @submit.prevent="onSubmit" class="registration__form">
          <div class="phone__number">
            <label for="phone">Phone Number</label>
            <div class="input__tel-wrapper">
              <input
                v-model="data.phone_number"
                type="tel"
                id="phone"
                required
              />
            </div>
          </div>
          <div class="password" v-if="showPasswordInput">
            <label for="password__id"> Kod </label>
            <input
              type="password"
              v-model="data.code"
              class="password__input"
              id="password_id"
              required
            />
          </div>
          <div class="registration-submit-wrap">
            <b-button type="submit" class="reg-bg-btn"
              >Next step</b-button
            >
          </div>
        </form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPasswordInput: false,
      data: {
        phone_number: '',
        code: '',
      },
    }
  },
  methods: {
      async onSubmit() {
      this.showPasswordInput = true;

      if (this.data.code == "") {
        this.$store.dispatch("getCode", this.data.phone_number);
      } else {
        this.$store.dispatch("sendCode", this.data);
        this.$router.push(this.localePath({ name: "join" }));
      }
    }
    },
}
</script>
