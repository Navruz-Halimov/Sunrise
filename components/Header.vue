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
            <b-nav-item :to="localePath('/events')">{{
              $t('navbar.events')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/gallery')">{{
              $t('navbar.gallery')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/amenties')">{{
              $t('navbar.amenties')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/attractions')">{{
              $t('navbar.nearby')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/contact')">{{
              $t('navbar.contact')
            }}</b-nav-item>
            <b-nav-item :to="localePath('/reviews')">{{
              $t('navbar.reviews')
            }}</b-nav-item>
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
              Ulug'bek shoh ko'chasi, Toshkent</a
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
              {{ $t('navbar.reviews') }}</nuxt-link
            >
          </div>
          <b-button class="header__bottom-btn" :to="localePath('/booking')">
            {{ $t('navbar.book') }}
          </b-button>
          <!-- Right aligned nav items -->
          <b-navbar-nav>
              <button @click="dropIt" class="btn lang__list-wrapper">
                <span  class="sign__header">
                  {{ $t('navbar.lang')}}<font-awesome-icon :icon="['fas', 'chevron-down']"/>
                </span>
                <transition name="slide">
                  <ul class="list" v-if="isDropped">
                    <li>English</li>
                    <li>Russian</li>
                    <li>China</li>
                  </ul>
                </transition>
              </button>



            <b-nav-item-dropdown class="user__join">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span class="sign__header" v-if="!loggedIn"
                  ><font-awesome-icon :icon="['fas', 'user']" />{{
                    $t('navbar.sign')
                  }}
                  <font-awesome-icon :icon="['fas', 'chevron-down']"
                /></span>
                <span class="sign__header" v-if="loggedIn"
                  ><font-awesome-icon :icon="['fas', 'user']" />My profile
                  <font-awesome-icon :icon="['fas', 'chevron-down']"
                /></span>
              </template>

              <b-dropdown-item
                :href="localePath('/sign-in')"
                v-if="!loggedIn"
                >{{ $t('navbar.sign') }}</b-dropdown-item
              >
              <b-dropdown-item :href="localePath('/reg')" v-if="!loggedIn">{{
                $t('navbar.join')
              }}</b-dropdown-item>
              <b-dropdown-item
                :href="localePath('/my-account')"
                v-if="loggedIn"
              >
                {{ $t('navbar.account') }}
              </b-dropdown-item>
              <b-dropdown-item @click="logout()" v-if="loggedIn">
                {{ $t('navbar.logout') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </div>
      </b-container>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isDropped: false
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
  },
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped
    },
    async logout() {
      await this.$auth.logout()
      this.$router.push(this.localePath('/'))
      this.$toast.success({
        title: 'Log out',
        message: 'You have successfully logged out.',
        color: '#17b978',
      })
    },
  },
  mounted() {},
}
</script>
<style lang="scss">
  .lang__list-wrapper{
    position: relative!important;
    border: 1px solid #FFB612;
    border-radius: 30px;
    padding: 10px;
    transition: all .3s ease;
    &:hover{
      color: white;
      background-color: #FFB612;
    }
    &:focus{
      box-shadow: none;
    }
  }
  .list{
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transform-origin: top;
    transition: transform .4s ease-in-out;
    z-index: 9999;
  li{
    padding: 10px;
    background: white;
  }
  }
  .slide-enter, .slide-leave-to{
    transform: scaleY(0);
  }
</style>
