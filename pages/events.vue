<template>
  <div class="event-page">
    <b-container>
      <div class="event-page__top">
        <b-container>
          <b-col cols="12">
            <h2 class="event-page__title">Events</h2>
          </b-col>
          <b-row>
            <b-col cols="12" v-for="event in events" :key="event">
              <h1 class="event-page__heading">
                {{ event.title }}
              </h1>
              <div
                class="event-page__collapse"
                :class="{ autoheight: isActive }"
              >
                <b-collapse id="collapse1">
                  <b-card>
                    With three outstanding meeting rooms that are designed to
                    host all kinds of gatherings from small meetings to large
                    receptions for up to 250 guests, the Sunrine Blu is an ideal
                    venue for your next event in Tashkent. We can arrange the
                    furniture in our Grand Ballroom, Turquoise Room, and
                    Sapphire Room in a variety of setups as per your
                    requirement. Each room comes with modern audiovisual
                    equipment, videoconferencing facilities, and high-speed
                    wireless internet. Our dedicated Meetings & Events
                    coordinator helps you plan every aspect of your event and
                    ensure that everything runs smoothly and our experienced
                    chefs offer customized menus for your guests. An on-site
                    business center is also available for the meeting delegates.
                  </b-card>
                </b-collapse>
                <b-button
                  v-b-toggle.collapse1
                  class="event-page__text-btn"
                  variant="outline-light"
                  @click="isActive = !isActive"
                  v-if="isActive === false"
                >
                  {{ $t('events.btn_more') }}
                  <font-awesome-icon :icon="['fas', 'angle-down']" />
                </b-button>
                <b-button
                  v-b-toggle.collapse1
                  class="event-page__text-btn"
                  variant="outline-light"
                  v-else
                  @click="isActive = !isActive"
                >
                  {{ $t('events.btn_less') }}
                  <font-awesome-icon :icon="['fas', 'angle-up']" />
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="event-page__contact">
        <b-container>
          <b-row>
            <b-col cols="12">
              <h3 class="event-page__contact-title">
                {{ $t('events.contact_title') }}
              </h3>
              <div class="event-page__contact-email">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <a href="mailto:reservation.tashkent@radissonblu.com">
                  reservation.tashkent@Sunrise.com
                </a>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="event-page__features">
        <b-container>
          <b-row>
            <b-col md="12">
              <h2 class="event-page__features-title">
                {{ $t('events.features_title') }}
              </h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <ul
                class="event-page__features-list d-flex justufy-content-between"
              >
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'handshake']" /> -->
                  <img src="../assets/images/icons/teacher.svg" alt="">
                  <span>{{ $t('events.features_item1') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'users']" /> -->
                  <img src="../assets/images/event/audience.svg" alt="">
                  <span>{{ $t('events.features_item2') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'utensils']" /> -->
                  <img src="../assets/images/event/waiter.svg" alt="">
                  <span>{{ $t('events.features_item3') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'wifi']" /> -->
                  <img src="../assets/images/amenties/wifi.svg" alt="">
                  <span>{{ $t('events.features_item4') }}</span>
                </li>
                <li class="event-page__features-item">
                  <img src="../assets/images/event/parked-car.svg" alt="">
                  <span>{{ $t('events.features_item5') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'print']" /> -->
                  <img src="../assets/images/event/printer-hand-drawn-tool.svg" alt="">
                  <span>{{ $t('events.features_item6') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" /> -->
                  <img src="../assets/images/event/information-desk.svg" alt="">
                  <span>{{ $t('events.features_item7') }}</span>
                </li>
                <li class="event-page__features-item">
                  <!-- <font-awesome-icon :icon="['fas', 'thermometer-quarter']" /> -->
                  <img src="../assets/images/event/thermometer.svg" alt="">
                  <span>{{ $t('events.features_item8') }}</span>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="event-page__multimedia">
        <b-container>
          <b-row>
            <b-col cols="12">
              <h2 class="event-page__multimedia-title">
                {{ $t('events.multimedia_title') }}
              </h2>
            </b-col>
          </b-row>
          <b-row class="d-flex">
            <b-col lg="6">
              <b-img
                src="../assets/images/rooms/ABDUMANNONRAKHIMOVV-235.jpg"
                fluid-grow
                rounded
                mx-auto
                d-block
                alt="site_logo"
                style="width: 450px !important"
              ></b-img>
            </b-col>
            <b-col lg="6">
              <h3 class="event-page__multimedia-heading">
                Custom tours for your team
              </h3>
              <h5 class="event-page__multimedia-subtitle">
                Chimgan and Charvak tours
              </h5>
              <div
                class="event-page__collapse"
                :class="{ autoheight: isActive1 }"
              >
                <b-collapse id="collapse">
                  <b-card>
                    With three outstanding meeting rooms that are designed to
                    host all kinds of gatherings from small meetings to large
                    receptions for up to 250 guests, the Sunrine Blu is an ideal
                    venue for your next event in Tashkent. We can arrange the
                    furniture in our Grand Ballroom, Turquoise Room, and
                    Sapphire Room in a variety of setups as per your
                    requirement. Each room comes with modern audiovisual
                    equipment, videoconferencing facilities, and high-speed
                    wireless internet. Our dedicated Meetings & Events
                    coordinator helps you plan every aspect of your event and
                    ensure that everything runs smoothly and our experienced
                    chefs offer customized menus for your guests.
                  </b-card>
                </b-collapse>
                <b-button
                  v-b-toggle.collapse
                  class="event-page__text-btn"
                  variant="outline-light"
                  @click="isActive1 = !isActive1"
                  v-if="isActive1 === false"
                >
                  {{ $t('events.btn_more') }}
                  <font-awesome-icon :icon="['fas', 'angle-down']" />
                </b-button>
                <b-button
                  v-b-toggle.collapse
                  class="event-page__text-btn"
                  variant="outline-light"
                  v-else
                  @click="isActive1 = !isActive1"
                >
                  {{ $t('events.btn_less') }}
                  <font-awesome-icon :icon="['fas', 'angle-up']" />
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
    <div class="event-page__banner">
      <b-container>
        <b-row>
          <b-col lg="6">
            <div class="event-page__banner-text">
              <small>{{ $t('events.banner_small') }}</small>
              <h3 class="event-page__banner-title">
                {{ $t('events.banner_title') }}
              </h3>
              <p>{{ $t('events.banner_text') }}</p>
            </div>
            <div class="event-page__banner-link">
              <a href="/" target="_blank">{{ $t('events.banner_btn') }}</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="event-page__footer">
      <b-container>
        <b-row>
          <b-col cols="12" class="event-page__footer-list">
            <b-col lg="4" class="event-page__footer-item">
              <div class="event-page__footer-title">
                {{ $t('events.footer_title1') }}
              </div>
              <a href="/" target="_blank" class="event-page__footer-link"
                >{{ $t('events.footer_link') }}
              </a>
            </b-col>
            <b-col lg="4" class="event-page__footer-item">
              <div class="event-page__footer-title">
                {{ $t('events.footer_title2') }}
              </div>
              <ul class="event-page__footer-social">
                <li class="event-page__footer-social-item">
                  <a href="https://www.facebook.com/Sunrise-Hotel-101061888495268/" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </a>
                </li>
                <li class="event-page__footer-social-item">
                  <a href="https://instagram.com/sunrisehotel.uz?igshid=zivqu3fedcly" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </a>
                </li>
                <li class="event-page__footer-social-item">
                  <a href="/">
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                  </a>
                </li>
              </ul>
            </b-col>
            <b-col lg="4" class="event-page__footer-item">
              <div class="event-page__footer-title">
                {{ $t('events.footer_title3') }}
              </div>
              <b-form inline class="event-page__footer-form">
                <b-input
                  type="email"
                  :placeholder="$t('events.footer_inp')"
                  required
                  class="event-page__footer-input"
                ></b-input>
                <b-button
                  type="submit"
                  variant="outline-light"
                  class="event-page__footer-btn"
                >
                  {{ $t('events.footer_btn') }}
                </b-button>
              </b-form>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      events: [
        {title:"Thrilling Stay in Central Tashkent"}
      ],
      isActive: false,
      isActive1: false,
    }
  },
  methods: {
    // async getEvents() {
    //   await this.$axios.get('events/').then((res) => {
    //     console.log(res)
    //     this.events = res.data
    //   })
    // },
  },
  mounted() {
    // this.getEvents()
  },
}
</script>
