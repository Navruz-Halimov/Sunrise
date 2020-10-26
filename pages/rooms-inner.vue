<template>
  <div class="rooms__select">
    <b-container>
      <b-row>
        <b-col lg="3" class="rooms__select-left">
          <ul class="rooms__select-amenties">
            <span class="rooms__select-amenties-heading">Amenties</span>
            <b-button
              v-b-toggle.collapse-1
              class="rooms__select-amenties-heading mobil"
              @click="isActive = !isActive"
              v-if="isActive === false"
            >
              Amenties
              <font-awesome-icon :icon="['fas', 'angle-down']" />
            </b-button>
            <b-button
              v-b-toggle.collapse-1
              class="rooms__select-amenties-heading mobil"
              v-else
              @click="isActive = !isActive"
            >
              Amenties
              <font-awesome-icon :icon="['fas', 'angle-up']" />
            </b-button>
            <b-collapse id="collapse-1">
              <b-card>
                <li class="rooms__select-amenties-item">Regency Club access</li>
                <li class="rooms__select-amenties-item">Espresso machine</li>
                <li class="rooms__select-amenties-item">Hyatt Grand Bed™</li>
                <li class="rooms__select-amenties-item">55-inch flatscreen TV</li>
                <li class="rooms__select-amenties-item">Blackout drapes</li>
                <li class="rooms__select-amenties-item">Spacious work desk</li>
                <li class="rooms__select-amenties-item">
                  Individually controlled air conditioning and heat
                </li>
                <li class="rooms__select-amenties-item">TV in bathroom</li>
                <li class="rooms__select-amenties-item">In-room safe</li>
                <li class="rooms__select-amenties-item">Minibar</li>
                <li class="rooms__select-amenties-item">Tea and coffeemaker</li>
                <li class="rooms__select-amenties-item">Iron and ironing board</li>
                <li class="rooms__select-amenties-item">Hair dryer</li>
                <li class="rooms__select-amenties-item">
                  Plush bath robe and slippers
                </li>
                <li class="rooms__select-amenties-item">Morning newspaper</li>
                <li class="rooms__select-amenties-item">Pillow menu</li>
                <li class="rooms__select-amenties-item">Crib upon request</li>
                <li class="rooms__select-amenties-item">
                  Rollaway bed upon request
                </li>
              </b-card>
            </b-collapse>

          </ul>
        </b-col>
        <b-col lg="6" class="rooms__select-center">
          <swiper class="rooms__select-slider" :options="rooms__select">
            <swiper-slide
              ><img src="../assets//images/3D/1.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/1night.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/2.jpg" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../assets/images/3D/2night.jpg" alt="" />
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="rooms__select-text">
            The exclusive Presidential Suite encompasses 190 sq m of space with
            an elegant living area including a study room, a kitchenette with
            dining area, an expanded bathroom, and a guest bathroom. This is a
            premium suite.
          </div>
        </b-col>
        <b-col lg="3" class="rooms__select-right">
          <div class="floor__left-wrapper">
            <!-- <div class="floor__number">First Floor scheme</div>
            <img class="floor__mini-2d" src="../assets/images/1floor/1.jpg" alt=""> -->
            <form class="booking__form" method="" action="POST">
                <section class="order__part">
                  <b-row>
                    <div class="col-lg-12 order__part-item">
                      <date-picker
                        v-model="value2"
                        value-type="format"
                        format="YYYY-MM-DD"
                        :placeholder="$t('booking.arrival')"
                        :default-value="new Date()"
                        :disabled-date="notBeforeToday"
                      ></date-picker>
                    </div>
                    <div class="col-lg-12 order__part-item">
                      <date-picker
                        v-model="value3"
                        value-type="format"
                        format="YYYY-MM-DD"
                        :placeholder="$t('booking.departure')"
                        :default-value="new Date()"
                        :disabled-date="notBeforeToday"
                      ></date-picker>
                    </div>
                    <div class="col-lg-12 order__part-item">
                      <select name="adults__capacity" class="adults__capacity">
                        <option value="0" selected disabled>{{$t('booking.adults_title')}}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div class="col-lg-12 order__part-item">
                      <select name="children__capacity" class="children__capacity">
                        <option value="0" selected disabled>{{$t('booking.children_title')}}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </b-row>
                </section>
            </form>
            <p class="floor__text">First floor rooms</p>
            <b-pagination-nav
              number-of-pages="10"
              base-url="#"
              hide-goto-end-buttons = "false"
              pills = "true"
              limit="10"
              class="room__inner-pagination"
            ></b-pagination-nav>
              <b-button class="floor__btn" pill @click="showPriceModal">Select room</b-button>
          </div>
        </b-col>
      </b-row>
      <div v-if="priceModal" class="price__modal" @click="hidePriceModal">
        <button @click="hidePriceModal" type="button" class="close">
          <i></i>
          <i></i>
        </button>
        <b-col v-if="joinModal" @click.stop="" class="join" md="8" lg="5">
          <h4>Join World of Sunrise or sign in to your account to book.</h4>
          <div class="join__flex">
            <b-col
              class="join__content"
              cols="8"
              offset="2"
              md="6"
              offset-md="0"
              lg="6"
            >
              <p>Want to become a Sunrise member?</p>
              <a :href="localePath('/payment')">Join while you book</a>
            </b-col>
            <b-col
              class="join__content"
              cols="8"
              offset="2"
              md="6"
              offset-md="0"
              lg="6"
            >
              <p>Already a World of Sunrise member?</p>
              <a @click.prevent="showSignModal()" href="#">Sign in & book</a>
            </b-col>
          </div>
          <a @click.prevent="hidePriceModal()" href="#">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            Maybe later. I'll choose another rate.</a
          >
        </b-col>
        <b-col v-if="signModal" @click.stop="" class="sign" md="6" lg="3">
          <h3><span>SIGN IN TO</span> WORLD OF SUNRISE</h3>
          <b-form class="form">
            <b-form-group
              label="World of Sunrise # or Username:"
              label-for="username"
            >
              <b-form-input type="text" id="username" required />
              <a href="#">Forgot your membership number?</a>
            </b-form-group>
            <b-form-group label="Last Name:" label-for="name">
              <b-form-input type="text" id="name" required />
            </b-form-group>
            <b-form-group label="Password" label-for="password">
              <b-form-input type="password" id="password" required />
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group class="d-flex justify-content-between">
                <b-form-checkbox>Remember Me</b-form-checkbox>
                <a href="#" class="mt-0">Forgot Password</a>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit">Submit</b-button>
          </b-form>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: [new Date()],
      value3: [new Date()],
      isActive:false,
      priceModal: false,
      joinModal: false,
      signModal: false,
      rooms__select: {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        effect: 'fade',
        //  grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0))
    },
    showPriceModal() {
      this.priceModal = true
      if (!this.joinModal) {
        this.joinModal = true
      }
    },
    hidePriceModal() {
      this.priceModal = false
      if (!this.priceModal) {
        this.joinModal = false
        this.signModal = false
      }
    },
    showSignModal() {
      if (!this.signModal) {
        this.signModal = true
        this.joinModal = false
      }
    },
  },
}
</script>
