<template>
  <header class="header">
    <b-navbar-brand @click="activate(0)" :class="{ active : active_el === 0 }" to="/" class="header__logo">
      <img src="../assets/images/logo.png" alt="main logo" />
    </b-navbar-brand>
    <div class="w-100">
      <b-navbar toggleable="lg">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="header__navbar">
            <b-nav-item @click="activate(2)" :class="{ activeLinkTwo : active_el === 2 }" :to="localePath('/rooms')">{{ $t('navbar.rooms') }}</b-nav-item>
            <b-nav-item @click="activate(1)" :class="{ activeLinkOne : active_el === 1 }"  :to="localePath('/offer')">{{ $t('navbar.offer') }}</b-nav-item>
            <b-nav-item @click="activate(3)" :class="{ activeLinkThree : active_el === 3 }" :to="localePath('/events')">{{ $t('navbar.events') }}</b-nav-item>
            <b-nav-item @click="activate(4)" :class="{ activeLinkFour : active_el === 4 }" :to="localePath('/gallery')">{{ $t('navbar.gallery') }}</b-nav-item>
            <b-nav-item @click="activate(5)" :class="{ activeLinkFive : active_el === 5 }" :to="localePath('/amenties')">{{ $t('navbar.facilities') }}</b-nav-item>
            <b-nav-item @click="activate(6)" :class="{ activeLinkSix : active_el === 6 }" :to="localePath('/attractions')">{{ $t('navbar.nearby') }}</b-nav-item>
            <b-nav-item @click="activate(7)" :class="{ activeLinkSeven : active_el === 7 }" :to="localePath('/contact')">{{ $t('navbar.contact') }}</b-nav-item>
            <b-nav-item @click="activate(8)" :class="{ activeLinkEight : active_el === 8 }" :to="localePath('/reviews')">{{ $t('navbar.reviews') }}</b-nav-item>
            <b-nav-item-dropdown class="user__join">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span class="sign__header" v-if="!loggedIn">
                  <font-awesome-icon :icon="['fas', 'user']" />{{$t('navbar.sign')}}
                  <font-awesome-icon :icon="['fas', 'chevron-down']"/></span>
                <span class="sign__header" v-if="loggedIn">
                    <font-awesome-icon :icon="['fas', 'user']" />My profile
                  <font-awesome-icon :icon="['fas', 'chevron-down']"/></span>
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
        </b-collapse>
      </b-navbar>
      <div class="header__bottom">
        <b-container>
          <div class="header__bottom-content">
            <div class="header__bottom-info d-none d-lg-block">
              <a target="_blank" href="https://www.google.com/maps/place/Sunrise+Hotel/@41.3122697,69.311872,280m/data=!3m1!1e3!4m16!1m7!3m6!1s0x38aef521dcca0a25:0x8bc9343b19c86cb5!2zMSBNaXJ6byBVbHVnJ2JlayBzaG9oIGtvJ2NoYXNpLCDQotC-0YjQutC10L3Rgg!3b1!8m2!3d41.3093809!4d69.3109875!3m7!1s0x38aef5131ebd9013:0x4183b783c23f57eb!5m2!4m1!1i2!8m2!3d41.3122697!4d69.3129668" class="address">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                Tashkent city, Yashnobad district, 1 Mirzo Ulug'bek Str.
              </a>
              <div class="header__phone">
                <a href="tel:998 71 289 62 22" class="tel">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  +998 71 289 62 22
                </a>&emsp;
                <a href="tel:998 71 289 56 66" class="tel">
                  +998 71 289 56 66
                </a>&emsp;
              </div>
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

            <b-navbar-nav>
              <b-button class="header__bottom-btn" :to="localePath('/booking')">{{ $t('navbar.book') }}</b-button>
              <b-nav-item-dropdown :text="isActive" right class="lang__list-wrapper">
                <template v-slot:button-content>
                      <img class="lang__img" :src="require(`@/assets/images/lang/${src}`)" alt="eng" >
<!--                      <span style="vertical-align: middle;">{{ isActive }}</span>-->
                </template>
                <b-dropdown-item @click="selectLang('En','united-states.svg')" href="#" :to="switchLocalePath('en')">
                  <b-img src="../assets/images/lang/united-states.svg" alt="eng"></b-img>
                  En
                </b-dropdown-item>
                <b-dropdown-item @click="selectLang('Ру','russia.svg')" href="#" :to="switchLocalePath('ru')">
                  <b-img src="../assets/images/lang/russia.svg" alt="ru"></b-img>
                  Ру
                </b-dropdown-item>
                <b-dropdown-item @click="selectLang('中文','china.svg')" href="#" :to="switchLocalePath('chn')">
                  <b-img src="../assets/images/lang/china.svg" alt="chn"></b-img>
                  中文
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </div>
        </b-container>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        active_el: 0,
        isActive: 'En',
        src: 'united-states.svg',
      }
    },
    computed: {
      ...mapState('auth', ['loggedIn', 'user']),
    },
    methods: {
      selectLang(text,src) {
        if (text === 'En') {
          this.isActive = text;
          this.src = src;
        } else if (text === 'Ру') {
          this.isActive = text;
          this.src = 'russia.svg';
        } else {
          this.isActive = '中文';
          this.src = 'china.svg';
        }
      },
      activate:function(el){
        this.active_el = el;
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
  .activeLinkOne{
    background-color: rgba(255, 105, 7, 0.4);
  }
  .activeLinkTwo{
    background-color: rgba(2, 176, 228, 0.4);
  }
  .activeLinkThree{
    background-color: rgba(255, 193, 70, 1);
  }
  .activeLinkFour{
    background-color: rgba(0, 0, 238, 0.4);
  }
  .activeLinkFive{
    background-color: rgba(155, 89, 182, 0.4);
  }
  .activeLinkSix{
    background-color: #fda4a0;
  }
  .activeLinkSeven{
    background-color: rgba(255, 206, 64, 0.4);
  }
  .activeLinkEight{
    background-color: rgba(165, 217, 202, 1);
  }
</style>
