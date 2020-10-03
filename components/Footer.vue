<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col lg="4">
          <div class="logo">
            <nuxt-link to="/" class="footer__logo">Sunrise</nuxt-link>
            <a href="tel:998 71 289 56 66" class="footer__phone-link"
              ><font-awesome-icon :icon="['fas', 'phone']" /> 8 71 289 56 66</a
            >
            <div class="footer__address"><font-awesome-icon :icon="['fas', 'map-marker']" />  1 Mirzo Ulug'bek shoh ko'chasi, Тошкент</div>
            <nuxt-link class="footer__email" to="mailto:info@yourdomain.com"><font-awesome-icon :icon="['fas', 'envelope']" /> info@yourdomain.com</nuxt-link>
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
          <h4 class="footer__motto-heading">Vacation Rental</h4>
            <div class="footer__motto">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <nuxt-link to="/contact">Read more <font-awesome-icon :icon="['fas', 'angle-right']" /></nuxt-link></div>
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
      <div class="copyright text-center">Copyright © 2020 All rights reserved.</div>
    </b-container>
  </footer>
</template>
