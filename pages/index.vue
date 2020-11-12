<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide v-for="(slider, index) in sliders" :key="index.id" >
          <img :src="slider.image" alt="image" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">{{slider.title}}</h1>
            <p class="swiper-caption-text">
              {{slider.description}}
            </p>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <b-container>
      <form class="booking__form" method="" action="POST">
        <section class="order__part">
          <b-row>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <date-picker
                v-model="value2"
                value-type="format"
                format="YYYY-MM-DD"
                :placeholder="$t('booking.arrival')"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <date-picker
                v-model="value3"
                value-type="format"
                format="YYYY-MM-DD"
                :placeholder="$t('booking.departure')"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="adults__capacity" class="adults__capacity">
                <option value="0" selected disabled>{{$t('booking.adults_title')}}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="children__capacity" class="children__capacity">
                <option value="0" selected disabled>{{$t('booking.children_title')}}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="room__type" class="room__type">
                <option value="0" selected disabled>{{$t('booking.choose_title')}}</option>
                <option value="1">{{$t('booking.choose_room1')}}</option>
                <option value="2">{{$t('booking.choose_room2')}}</option>
                <option value="3">{{$t('booking.choose_room3')}}</option>
                <option value="4">{{$t('booking.choose_room4')}}</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <b-button type="submit" class="book__btn" :to="localePath('/rooms')"
              >{{$t('booking.btn_text')}}
              </b-button
              >
            </div>
          </b-row>
        </section>
      </form>
    </b-container>
    <guide />
    <b-container>
      <div class="main__book-page">
        <b-row class="book__page">
          <b-col class="book__header book__header-main" lg="12">
            <h1 class="book__page-heading">{{$t('amenties.heading')}}</h1>
            <b-col class="header__content" cols="12" md="12">
              <b-row>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/amenties/wifi.svg" alt="">
                  <span>{{$t('amenties.amenties_1')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/cutlery.svg" alt="">
                  <span>{{$t('amenties.amenties_2')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/serving-dish.svg" alt="">
                  
                  <span>{{$t('amenties.amenties_3')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/weight.svg" alt="">
                  <span>{{$t('amenties.amenties_4')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/swimming-pool.svg" alt="">
                  <span>{{$t('amenties.amenties_5')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/lotus.svg" alt="">
                  <span>{{$t('amenties.amenties_6')}}</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/key.svg" alt="">
                  <span>{{$t('amenties.amenties_7')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/clock.svg" alt="">

                  <span>{{$t('amenties.amenties_8')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/printer.svg" alt="">
                  <span>{{$t('amenties.amenties_9')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/hanger-line.svg" alt="">
                  <span>{{$t('amenties.amenties_10')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/concierge.svg" alt="">
                  <span>{{$t('amenties.amenties_11')}}</span>
                </b-col>
                <b-col class="amenity" cols="4" sm="4" md="2">
                  <img src="../assets/images/icons/teacher.svg" alt="">
                  <span>{{$t('amenties.amenties_12')}}</span>
                </b-col>
              </b-row>
              <b-collapse id="amenity" class="mt-2">
                <b-row>
                  <b-col class="my-4 main-amenity" lg="4">
                    <img src="../assets/images/icons/hotel.svg" alt="img">
                    <h6>{{$t('amenties.mini_title1')}}</h6>
                    <p>
                      <span>{{$t('amenties.title1_text1')}}</span>
                      <span>{{$t('amenties.title1_text2')}}</span>
                      <span>{{$t('amenties.title1_text3')}}</span>
                      <span>{{$t('amenties.title1_text4')}}</span>
                      <span>{{$t('amenties.title1_text5')}}</span>
                      <span>{{$t('amenties.title1_text6')}}</span>
                      <span>{{$t('amenties.title1_text7')}}</span>
                      <span>{{$t('amenties.title1_text8')}}</span>
                    </p>
                  </b-col>
                  <b-col class="my-4 main-amenity" lg="4">
                    <img src="../assets/images/icons/concierge.svg" alt="img">
                    <h6>{{$t('amenties.mini_title2')}}</h6>
                    <p>
                      <span>{{$t('amenties.title2_text1')}}</span>
                      <span>{{$t('amenties.title2_text2')}}</span>
                    </p>
                  </b-col>
                  <b-col class="my-4 main-amenity" lg="4">
                    <img src="../assets/images/icons/door.svg" alt="img">
                    <h6>{{$t('amenties.mini_title3')}}</h6>
                    <p>
                      <span>{{$t('amenties.title3_text1')}}</span>
                      <span>{{$t('amenties.title3_text2')}}</span>
                      <span>{{$t('amenties.title3_text3')}}</span>
                      <span>{{$t('amenties.title3_text4')}}</span>
                    </p>
                  </b-col>
                  <b-col class="my-4 main-amenity" lg="4">
                    <img src="../assets/images/icons/double-door.svg" alt="img">
                    <h6>{{$t('amenties.mini_title4')}}</h6>
                    <p>
                      <span>{{$t('amenties.title4_text1')}}</span>
                      <span>{{$t('amenties.title4_text2')}}</span>
                      <span>{{$t('amenties.title4_text3')}}</span>
                    </p>
                  </b-col>
                  <b-col class="my-4 main-amenity" lg="4">
                    <img src="../assets/images/icons/bathtub.svg" alt="img">
                    <h6>{{$t('amenties.mini_title5')}}</h6>
                    <p>
                      <span>{{$t('amenties.title5_text1')}}</span>
                      <span>{{$t('amenties.title5_text2')}}</span>
                    </p>
                  </b-col>
                </b-row>
              </b-collapse>
              <b-button
                v-b-toggle.amenity
                variant="transparent"
                @click="isShow = !isShow"
                v-if="isShow === false"
              >
                {{$t('amenties.btnMore')}}
              </b-button>
              <b-button
                v-b-toggle.amenity
                variant="transparent"
                v-else
                @click="isShow = !isShow"
              >
                {{$t('amenties.btnLess')}}
              </b-button>
            </b-col>
          </b-col>
        </b-row>
      </div>

      <visit />
      <b-row class="gallery">
        <div class="gallery__title">
          <h2 class="gallery__title-main">{{$t('gallery.title')}} </h2>
        </div>
      </b-row>
      <test  :count="8" />
      <b-button
        class="btn-img my-4"
        :to="localePath('/gallery')"
      >{{$t('gallery.btn')}}
      </b-button
      >
    </b-container>
    <!-- start slider room-->
    <div class="swiper-card-rooms">
      <b-container class="swiper__wrapper">
        <h2 class="swiper__wrapper-title">{{$t('rooms.title')}}</h2>
        <swiper :options="swiper_card_rooms">
          <swiper-slide
            class="swiper-card"
            v-for="(cardRoom, index) in cardRooms.slice(0, 6)"
            :key="index.id"
          >
            <!-- <nuxt-link to="/booking"> -->
              <div class="swiper-card__img">
                <div class="swiper-card__cost">
                  {{cardRoom.cost_per_day}} $
                </div>
                <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                  <swiper-slide
                    class="swiper__wrapper-mini_card"
                    v-for="(image, index) in cardImages"
                    :key="index.id"
                  >
                    <b-img
                      :src="$store.state.mediaURL + image.image"
                      fluid
                      alt="rooms"
                    ></b-img>
                  </swiper-slide>
                  <div class="swiper-card__next-mini" slot="button-prev">
                    <font-awesome-icon :icon="['fas', 'angle-left']"/>
                  </div>
                  <div class="swiper-card__prev-mini" slot="button-next">
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  </div>
                </swiper>
              </div>
              <div class="swiper-card__statistics">
                <div class="swiper-card__name-rooms">Sunrise</div>
                <div class="swiper-card__size-rooms">
                  <font-awesome-icon :icon="['fas', 'expand']"/>
                  <span>size: {{cardRoom.room_size}} m²</span>
                </div>
                <div class="swiper-card__guest-rooms">
                  <font-awesome-icon :icon="['fas', 'user']"/>
                  <span>max. guests: {{cardRoom.num_of_adults}} adults, {{cardRoom.num_of_children}} child</span>
                </div>
                <div class="swiper-card__desc" v-html="cardRoom.description_2">
                  <!-- {{cardRoom.description_2}}  -->
                </div>
                <div class="swiper-card__services">
                  <ul>
                    <li>
                      <font-awesome-icon :icon="['fas', 'wifi']"/>
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'coffee']"/>
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'blender']"/>
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'shower']"/>
                    </li>
                  </ul>
                </div>
              </div>
            <!-- </nuxt-link> -->
          </swiper-slide>
          <div class="swiper-card__next" slot="button-prev">
            <font-awesome-icon :icon="['fas', 'angle-left']"/>
          </div>
          <div class="swiper-card__prev" slot="button-next">
            <font-awesome-icon :icon="['fas', 'angle-right']"/>
          </div>
        </swiper>
      </b-container>
    </div>
    <!-- finish slider room-->

    <!-- start Feedbacks slider -->
    <div class="users-feedbacks">
      <b-container class="users__wrapper">
        <b-row>
          <b-col md="12">
            <h2 class="users-feedbacks__title">{{$t('feedbacks.title')}}</h2>
            <swiper :options="users_feedback">
              <swiper-slide class="users-feedbacks__card" v-for="(feedback, index) in feedbacks" :key="index.id">
                <div class="users-feedbacks__card-img">
                  <b-img
                    src="../assets/images/person_1.jpg"
                    rounded="circle"
                    alt="person"
                  ></b-img>
                </div>
                <div class="users-feedbacks__card-info">
                  <font-awesome-icon
                    :icon="['fas', 'quote-left']"
                    class="card-icon"
                  />
                  <div class="users-feedbacks__card-text">
                    {{feedback.comment}}
                  </div>
                  <div class="users-feedbacks__card-name">{{feedback.user.firstname}} {{feedback.user.lastname}} </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- finish Feedbacks slider-->

    <!-- start offer-main -->
    <div class="offer-main">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="offer-main__title">
                        <h2>{{$t('offer_main.title')}}</h2>
                    </div>
                </b-col>
            </b-row>
            <b-row class="offer-main-items">
              <b-col v-for="(offer,index) of offers" :key="index.id" md="12" lg="6">
                <b-row>
                  <b-col class="offer-main__item" md="6" lg="6" >
                    <div class="offer-main__picture">
                      <b-img :src="$store.state.mediaURL + offer.image" alt="" height="270px"></b-img>
                    </div>
                  </b-col>
                  <b-col class="offer-main__item" md="6" lg="6" >
                    <div class="offer-main__text">
                      <div class="offer-main__text-title">{{ offer.title }}</div>
                      <div class="offer-main__text-info">{{ offer.description }}</div>
                      <a @click.prevent="showModal(index)" class="offer-main__link">{{$t('offer_main.text_link')}}</a>
                    </div>
                  </b-col>
                </b-row>
              </b-col>


              <div v-if="offerModal" class="offer__modal" @click="hideModal">
                <button @click="hideModal" type="button" class="close">
                  <i></i>
                  <i></i>
                </button>
                <div class="offer__text" @click.stop="">
                  <div class="privacy">
                    <p>{{ offers[id].description }}</p>
                  </div>
                </div>
              </div>
            </b-row>
        </b-container>
    </div>
    <!-- finish offer-main -->
  </div>
</template>

<script>
  import Test from '../components/Test.vue';
  import Visit from '../components/Visit.vue';
  import Guide from '../components/Guide';
  export default {
    name: 'Range',
    title: 'Sunrise hotel in Tashkent',
    components: {
      Test,
      Visit,
      Guide,
    },
    data() {
      return {
        form:{
          start_date: "2020-10-24",
          end_date: "2020-10-27",
          room: 1,
        },
        value2: [new Date()],
        value3: [new Date()],
        isShow: false,
        offerModal: false,
        sliders: [],
        offers: [],
        id: 0,
        cardRooms: [],
        cardImages: [],
        feedbacks: [],
        header__slider: {
          centeredSlides: true,
          spaceBetween: 30,
          loop: true,
          autoplay: true,
          effect: 'fade',
          //  grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        // start slider room
        swiper_card_rooms: {
          slidesPerView: 1,
          spaceBetween: 30,
          // autoplay: {
          //   delay: 4000
          // },
          navigation: {
            nextEl: '.swiper-card__next',
            prevEl: '.swiper-card__prev'
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
        },
        slider_card_mini: {
          slidesPerView: 1,
          spaceBetween: 0,
          // autoplay: {
          //   delay: 4000
          // },
          navigation: {
            nextEl: '.swiper-card__next-mini',
            prevEl: '.swiper-card__prev-mini'
          }
        },
        // finish slider room
        // start Feedbacks slider
        users_feedback: {
          slidesPerView: 1,
          spaceBetween: 15,
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }
        }
        // finish Feedbacks slider
      }
    },
    methods: {
      async getFeedbacks() {
        await this.$axios.get('reviews/list/').then((res) => {
          this.feedbacks = res.data.results
        })
      },
      async getCardRooms() {
        await this.$axios.get('rooms/').then((res) => {
          this.cardRooms = res.data;
          // console.log('card', this.cardRooms)
          res.data.forEach(item => {
            item.image_set.forEach(image   => {
              this.cardImages.push(image);
            })
          })
        })
      },
      async getSliders() {
        await this.$axios.get('/menu/images/').then((res) => {
          this.sliders = res.data
          // console.log(this.sliders)
        })
      },
      notBeforeToday(date) {
        return date < new Date(new Date().setHours(0, 0, 0, 0))
      },
      amenityShow() {
        if (this.amenityText === 'Show More') {
          this.amenityText = 'Show Less'
        } else {
          this.amenityText = 'Show More'
        }
      },
      showModal(id) {
        this.offerModal = true
        this.privacy = true
        this.id = id;
        console.log(id);
      },
      hideModal() {
        this.offerModal = false
      },
      async getOffer() {
        await this.$axios.get('menu/offers/')
          .then((res) => {
            this.offers = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      async sendData() {
        await this.$axios.post('reservation/create/', this.form)
            .then(res => {
              console.log(res)
              console.log("asdsadsa")
            })
            .catch(err => console.log(err))
      },
    },
    created() {
      this.getOffer();
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
        script: [
          {
            src: ''
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: ''
          }
        ]
      }
    },
    mounted() {
      this.getSliders(),
      this.getCardRooms(),
      this.getFeedbacks()
    }
  }
</script>
