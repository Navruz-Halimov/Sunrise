<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col lg="4">
          <div class="logo">
            <nuxt-link to="/" class="footer__logo">Sunrise</nuxt-link>
            <a href="tel:998 99 999 99 99" class="footer__phone-link"
              >(123) 456-78-91096</a
            >
            <div class="footer__address">Ernser Vista Suite 437, NY</div>
          </div>
        </b-col>
        <b-col lg="4">
          <h4 class="footer__heading">Quick Link</h4>
          <div class="footer__menu">
            <ul class="footer__list">
              <li class="footer__item"><nuxt-link to="">Home </nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Booking </nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">About Us </nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Review</nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Contact</nuxt-link></li>
            </ul>
            <ul class="footer__list">
              <li class="footer__item"><nuxt-link to="">Services</nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Our Room</nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Payments</nuxt-link></li>
              <li class="footer__item"><nuxt-link to="">Events</nuxt-link></li>
            </ul>
          </div>
        </b-col>
        <b-col lg="4">
            <h4 class="social__networks-heading">Connect with Sunshine</h4>
            <ul class="social__networks">
                <li class="social__networks-item">
                    <a href="#" class="facebook"></a>
                </li> 
                <li class="social__networks-item">
                    <a href="#" class="instagram"></a>
                </li>
                 <li class="social__networks-item">
                    <a href="#" class="linkedin"></a>
                </li>
                 <li class="social__networks-item">
                    <a href="#" class="twitter"></a>
                </li>
                 <li class="social__networks-item">
                    <a href="#" class="youtube"></a>
                </li>
                <li class="social__networks-item">
                    <a href="#" class="telegram"></a>
                </li>
            </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
