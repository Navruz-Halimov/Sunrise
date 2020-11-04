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
                <div
                  class="rooms__select-amenties-item"
                  v-html="rooms.description_1"
                ></div>
              </b-card>
            </b-collapse>
          </ul>
        </b-col>
        <b-col lg="6" class="rooms__select-center">
          <swiper class="rooms__select-slider" :options="rooms__select">
            <swiper-slide v-for="room of imageset" :key="room.id"
              ><img :src="room.image" alt="" />
              <div class="rooms_price">
                <i>{{ Math.round(rooms.cost_per_day * getCost) }} $</i>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="rooms__select-text" v-html="rooms.description_2"></div>
        </b-col>
        <b-col lg="3" class="rooms__select-right">
          <div class="floor__left-wrapper">
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
                      <option value="0" selected disabled>
                        {{ $t('booking.adults_title') }}
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class="col-lg-12 order__part-item">
                    <select
                      name="children__capacity"
                      class="children__capacity"
                    >
                      <option value="0" selected disabled>
                        {{ $t('booking.children_title') }}
                      </option>
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
              hide-goto-end-buttons
              pills
              limit="10"
              class="room__inner-pagination"
            ></b-pagination-nav>
            <b-button class="floor__btn" pill :to="localePath('/payment')"
              >Select room</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [],
      imageset:[],
      value2: [new Date()],
      value3: [new Date()],
      isActive: false,
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
    async getSingleRoom() {
      await this.$axios
        .get(`rooms/${this.$route.params.id}/`)
        .then((res) => {
          this.rooms = res.data
          this.imageset= res.data.image_set
          console.log('second')
          console.log(this.imageset)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.$store.dispatch('getCost');
    this.getSingleRoom()
  },
  computed:{
    ... mapGetters({
      getCost: 'getCost'
    })
  },
}
</script>
