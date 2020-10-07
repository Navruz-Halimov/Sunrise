<template>
  <header class="header">
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand to="/">Sunrise</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="header__navbar">
            <b-nav-item href="/offer">Offer</b-nav-item>
            <b-nav-item href="/rooms">Rooms</b-nav-item>
            <b-nav-item href="/events">Events</b-nav-item>
            <b-nav-item href="/gallery">Gallery</b-nav-item>
            <b-nav-item to="/amenties">Amenties</b-nav-item>
            <b-nav-item href="/attractions">Nearby attraction</b-nav-item>
            <b-nav-item href="/contact">Contact</b-nav-item>
            <b-nav-item href="/reviews">Reviews</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <div class="header__bottom">
      <b-container>
        <div class="header__bottom-content">
          <div class="header__bottom-info">
            <nuxt-link to="" class="address">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />Navoi
              Street, 1 A</nuxt-link
            >
            <nuxt-link to="" class="tel">
              <font-awesome-icon :icon="['fas', 'phone']" /> +998 99 999 99
              99</nuxt-link
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
              <b-dropdown-item href="#">ENGLISH</b-dropdown-item>
              <b-dropdown-item href="#">RUSSIAN</b-dropdown-item>
              <b-dropdown-item href="#">CHINESE</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown class="user__join">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span class="sign__header"
                  ><font-awesome-icon :icon="['fas', 'user']" />Sign in</span
                >
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
