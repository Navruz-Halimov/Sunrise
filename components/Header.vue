<template>
  <header class="header">
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand @click="activate(0)" :class="{ active : active_el === 0 }" to="/" class="navbar__brand">
          <img src="../assets/images/logo.png" alt="main logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="header__navbar">
            <b-nav-item @click="activate(1)" :class="{ activeLinkOne : active_el === 1 }"  :to="localePath('/offer')">{{ $t('navbar.offer') }}</b-nav-item>
            <b-nav-item @click="activate(2)" :class="{ activeLinkTwo : active_el === 2 }" :to="localePath('/rooms')">{{ $t('navbar.rooms') }}</b-nav-item>
            <b-nav-item @click="activate(3)" :class="{ activeLinkThree : active_el === 3 }" :to="localePath('/events')">{{ $t('navbar.events') }}</b-nav-item>
            <b-nav-item @click="activate(4)" :class="{ activeLinkFour : active_el === 4 }" :to="localePath('/gallery')">{{ $t('navbar.gallery') }}</b-nav-item>
            <b-nav-item @click="activate(5)" :class="{ activeLinkFive : active_el === 5 }" :to="localePath('/amenties')">{{ $t('navbar.amenties') }}</b-nav-item>
            <b-nav-item @click="activate(6)" :class="{ activeLinkSix : active_el === 6 }" :to="localePath('/attractions')">{{ $t('navbar.nearby') }}</b-nav-item>
            <b-nav-item @click="activate(7)" :class="{ activeLinkSeven : active_el === 7 }" :to="localePath('/contact')">{{ $t('navbar.contact') }}</b-nav-item>
            <b-nav-item @click="activate(8)" :class="{ activeLinkEight : active_el === 8 }" :to="localePath('/reviews')">{{ $t('navbar.reviews') }}</b-nav-item>
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

            <b-nav-item-dropdown text="Lang" right class="lang__list-wrapper">
              <template v-slot:button-content>
                <span class="sign__header"
                >{{$t('navbar.lang')}}<font-awesome-icon :icon="['fas', 'chevron-down']"
                /></span>
              </template>
              <b-dropdown-item href="#" :to="switchLocalePath('en')"
              >{{$t('navbar.eng')}}</b-dropdown-item
              >
              <b-dropdown-item href="#" :to="switchLocalePath('ru')"
              >{{$t('navbar.ru')}}</b-dropdown-item
              >
              <b-dropdown-item href="#" :to="switchLocalePath('chn')"
              >{{$t('navbar.chn')}}</b-dropdown-item
              >
            </b-nav-item-dropdown>

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
        active_el: 0
      }
    },
    computed: {
      ...mapState('auth', ['loggedIn', 'user']),
    },
    methods: {
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
