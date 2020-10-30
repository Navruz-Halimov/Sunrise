<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/3D/1.jpg" alt="image" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              yeah man itis working I think don't pay attention to the typos
              that I have typed
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/1night.jpg" alt="image" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2.jpg" alt="image" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2night.jpg" alt="image" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
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
    <div class="tourist__guide">
      <b-container>
        <h1 class="tourist__guide-heading">
          <font-awesome-icon
            class="info__circle"
            :icon="['fas', 'info-circle']"
          />
          {{$t('tourist.heading')}}
        </h1>
        <b-row>
          <b-col cols="12" lg="5">
            <ul class="guide__list">
              <li class="guide__item">
                <nuxt-link :to="localePath('/guide')" class="guide__link">
                  {{$t('tourist.link1')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link2')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link">
                  {{$t('tourist.link3')}}
                </nuxt-link>
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link4')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link">
                  {{$t('tourist.link5')}}
                </nuxt-link>
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link6')}}
                </nuxt-link
                >
              </li>
            </ul>
          </b-col>
          <b-col cols="12" offset="0" lg="5" offset-lg="2">
            <ul class="guide__list">
              <li class="guide__item">
                <nuxt-link to="" class="guide__link">
                  {{$t('tourist.link7')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link8')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link9')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link10')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link11')}}
                </nuxt-link
                >
              </li>
              <li class="guide__item">
                <nuxt-link to="" class="guide__link"
                >{{$t('tourist.link12')}}
                </nuxt-link
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
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

      <Visit />
      <b-row class="gallery">
        <div class="gallery__title">
          <h2 class="gallery__title-main">{{$t('gallery.title')}} </h2>
        </div>
      </b-row>
      <Test  :count="8" />
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
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-30.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-39.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-47.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-51.jpg"
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
                <span>size: 24.5 m²</span>
              </div>
              <div class="swiper-card__guest-rooms">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <span>max. guests: 3 adults, 1 child</span>
              </div>
              <div class="swiper-card__desc">
                With our Standard Guest Room, you will have everything you need
                for a comfortable stay and a good night's sleep.
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
          </swiper-slide>
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-1911.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-53.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-49.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-46.jpg"
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
                <span>size: 24.5 m²</span>
              </div>
              <div class="swiper-card__guest-rooms">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <span>max. guests: 3 adults, 1 child</span>
              </div>
              <div class="swiper-card__desc">
                With our Standard Guest Room, you will have everything you need
                for a comfortable stay and a good night's sleep.
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
          </swiper-slide>
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-13-54.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-13-56.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-14-03.jpg"
                    fluid
                    alt="rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-14-05.jpg"
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
                <span>size: 24.5 m²</span>
              </div>
              <div class="swiper-card__guest-rooms">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <span>max. guests: 3 adults, 1 child</span>
              </div>
              <div class="swiper-card__desc">
                With our Standard Guest Room, you will have everything you need
                for a comfortable stay and a good night's sleep.
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
          </swiper-slide>
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-14-20.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-14-22.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-14-56.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-42.jpg"
                    fluid
                    alt="img-rooms"
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
                <span>size: 24.5 m²</span>
              </div>
              <div class="swiper-card__guest-rooms">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <span>max. guests: 3 adults, 1 child</span>
              </div>
              <div class="swiper-card__desc">
                With our Standard Guest Room, you will have everything you need
                for a comfortable stay and a good night's sleep.
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
          </swiper-slide>
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-43.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-53.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-46.jpg"
                    fluid
                    alt="img-rooms"
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/rooms/photo_2020-10-12_16-15-43.jpg"
                    fluid
                    alt="img-rooms"
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
                <span>size: 24.5 m²</span>
              </div>
              <div class="swiper-card__guest-rooms">
                <font-awesome-icon :icon="['fas', 'user']"/>
                <span>max. guests: 3 adults, 1 child</span>
              </div>
              <div class="swiper-card__desc">
                With our Standard Guest Room, you will have everything you need
                for a comfortable stay and a good night's sleep.
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
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
                </div>
              </swiper-slide>
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
                </div>
              </swiper-slide>
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
                </div>
              </swiper-slide>
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
                </div>
              </swiper-slide>
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
                </div>
              </swiper-slide>
              <swiper-slide class="users-feedbacks__card">
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </div>
                  <div class="users-feedbacks__card-name">Rodel Golez</div>
                  <div class="users-feedbacks__card-career">Businessman</div>
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
                <b-col class="offer-main__item order-md-1 order-lg-1 order-1 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/rooms/photo_2020-10-12_16-15-47.jpg" alt="" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-2 order-lg-2 order-2 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">{{$t('offer_main.text_title')}}</div>
                        <div class="offer-main__text-info">{{$t('offer_main.text_info')}}
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">{{$t('offer_main.text_link')}}</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-4 order-lg-3 order-3 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/rooms/photo_2020-10-12_16-15-46.jpg" alt="" width="270px" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-3 order-lg-4 order-4 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">{{$t('offer_main.text_title')}}</div>
                        <div class="offer-main__text-info">
                                {{$t('offer_main.text_info')}}
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">{{$t('offer_main.text_link')}}</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-6 order-lg-5 order-6 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">{{$t('offer_main.text_title')}}</div>
                        <div class="offer-main__text-info">
                                {{$t('offer_main.text_info')}}
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">{{$t('offer_main.text_link')}}</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-5 order-lg-6 order-5 offer-main__item-left animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/rooms/photo_2020-10-12_16-15-43.jpg" alt="" width="270px" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-7 order-lg-7 order-8 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">{{$t('offer_main.text_title')}}</div>
                        <div class="offer-main__text-info">
                                {{$t('offer_main.text_info')}}
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">{{$t('offer_main.text_link')}}</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-8 order-lg-8 order-7 offer-main__item-left animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/rooms/photo_2020-10-12_16-15-42.jpg" alt="" width="270px" height="270px"></b-img>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <!-- finish offer-main -->
  </div>
</template> 

<script>
  import Test from '../components/Test.vue'
  import Visit from '../components/Visit.vue'
  export default {
    name: 'Range',
    title: 'Sunrise hotel in Tashkent',
    comments: {
      Test,
      Visit
    },
    data() {
      return {
        value2: [new Date()],
        value3: [new Date()],
        isShow: false,
        sliders: [],
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
          autoplay: {
            delay: 4000
          },
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
          autoplay: {
            delay: 4000
          },
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
      notBeforeToday(date) {
        return date < new Date(new Date().setHours(0, 0, 0, 0))
      },
      amenityShow() {
        if (this.amenityText === 'Show More') {
          this.amenityText = 'Show Less'
        } else {
          this.amenityText = 'Show More'
        }
      }
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
    }
  }
</script>
