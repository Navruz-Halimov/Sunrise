<template>
  <header class="header">
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand to="/" class="navbar__brand">
          <img src="../assets/images/logo.png" alt="main logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="header__navbar">
            <b-nav-item :to="localePath('/offer')">
              {{ $t('navbar.offer') }}</b-nav-item
            >
            <b-nav-item :to="localePath('/rooms')">{{
              $t('navbar.rooms')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/events')">Events</b-nav-item>
            <b-nav-item :to="localePath('/gallery')">Gallery</b-nav-item>
            <b-nav-item :to="localePath('/amenties')">Amenties</b-nav-item>
            <b-nav-item :to="localePath('/attractions')"
              >Nearby attraction</b-nav-item
            >
            <b-nav-item :to="localePath('/contact')">Contact</b-nav-item>
            <b-nav-item :to="localePath('/reviews')">Reviews</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <div class="header__bottom">
      <b-container>
        <div class="header__bottom-content">
          <div class="header__bottom-info d-none d-lg-block">
            <a href="https://goo.gl/maps/RwzLKT38CgkVRXbKA" class="address">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" /> 1 Mirzo
              Ulug'bek shoh ko'chasi, Тошкент</a
            >
            <a href="tel:998 71 289 56 66" class="tel">
              <font-awesome-icon :icon="['fas', 'phone']" />998 71 289 56 66
              99</a
            >
            <nuxt-link to="" class="review">
              <vue-stars
                class="lawyer-profile__star"
                name="rate"
                active-color="#FFC805"
                inactive-color="#282932"
                shadow-color="#FFC805"
                hover-color="#00aced"
                :max="5"
                :value="4"
                :readonly="true"
                char="★"
              />
              Reviews</nuxt-link
            >
          </div>
          <b-button class="header__bottom-btn"> Book now </b-button>
          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <b-nav-item-dropdown text="Lang" right class="lang__list-wrapper">
              <template v-slot:button-content>
                <span class="sign__header"
                  >Lang<font-awesome-icon :icon="['fas', 'chevron-down']"
                /></span>
              </template>
              <b-dropdown-item href="#" :to="switchLocalePath('en')"
                >ENGLISH</b-dropdown-item
              >
              <b-dropdown-item href="#" :to="switchLocalePath('ru')"
                >RUSSIAN</b-dropdown-item
              >
              <b-dropdown-item href="#" :to="switchLocalePath('chn')"
                >CHINESE</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item-dropdown class="user__join">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span class="sign__header"
                  ><font-awesome-icon :icon="['fas', 'user']" />Sign in
                  <font-awesome-icon :icon="['fas', 'chevron-down']"
                /></span>
              </template>
              <b-dropdown-item href="#">Sign in</b-dropdown-item>
              <b-dropdown-item href="#">Join</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </b-container>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // changeLanguage(lang){
    //   this.$router.push(switchLocalePath(lang));
    // },
    mounted() {},
  },
}
</script>
