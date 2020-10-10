<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/3D/1.jpg" alt="" />
          <div class="swiper-caption animate__animated animate__fadeInUp">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              yeah man itis working I think don't pay attention to the typos
              that I have typed
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/1night.jpg" alt="" />
          <div class="swiper-caption animate__animated animate__fadeInUp">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2.jpg" alt="" />
          <div class="swiper-caption animate__animated animate__fadeInUp">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2night.jpg" alt="" />
          <div class="swiper-caption animate__animated animate__fadeInUp">
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
                placeholder="Arrival date"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <date-picker
                v-model="value3"
                value-type="format"
                format="YYYY-MM-DD"
                placeholder="Departure date"
                :default-value="new Date()"
                :disabled-date="notBeforeToday"
              ></date-picker>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="adults__capacity" class="adults__capacity">
                <option value="0" selected disabled>Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="children__capacity" class="children__capacity">
                <option value="0" selected disabled>Children</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <select name="room__type" class="room__type">
                <option value="0" selected disabled>Choose a Room</option>
                <option value="1">Standard room</option>
                <option value="2">Standard Family room</option>
                <option value="3">Deluxe double room</option>
                <option value="4">Standard room</option>
                <option value="5">Standard room</option>
              </select>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-2">
              <b-button type="submit" class="book__btn" to="/booking"
              >Book now
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
          Tourist guide
        </h1>
        <ul class="guide__list">
          <li class="guide__item">
            <b-row>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Online scoreboard of Tashkent airport Airlines
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >Law and law OVIRs of Tashkent
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel Tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                >Travel insurance
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                >Online scoreboard of Tashkent airport
                </nuxt-link
                >
              </b-col>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Tourism Code Horoscope for 2019
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >Embassies in Tashkent
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >Accommodation in hotels
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >Communication abroad
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >Travel Dictionary
                </nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                >TOP-10 in the world of tourism
                </nuxt-link
                >
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-container>
    </div>
    <b-container>
      <b-row class="book__page">
        <b-col class="book__header" lg="12">
          <b-col class="header__content" cols="12" md="12">
            <b-row>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/amenties/wifi.svg" alt="">
                <span>Free Internet Access</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/cutlery.svg" alt="">
                <span>Restaurant On-Site</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/serving-dish.svg" alt="">
                <span>Room Service</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/weight.svg" alt="">
                <span>Fitness Center</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/swimming-pool.svg" alt="">
                <span>Pool</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/lotus.svg" alt="">
                <span>Spa</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/key.svg" alt="">
                <span>Digital Key</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/clock.svg" alt="">
                <span>Digital Check-In</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/printer.svg" alt="">
                <span>Business Services</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/hanger-line.svg" alt="">
                <span>Laundry</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/concierge.svg" alt="">
                <span>Concierge</span>
              </b-col>
              <b-col class="amenity" cols="4" sm="4" md="2">
                <img src="../assets/images/icons/teacher.svg" alt="">
                <span>Meeting Facilities</span>
              </b-col>
            </b-row>
            <b-collapse id="amenity" class="mt-2">
              <b-row>
                <b-col class="my-3 main-amenity" lg="4">
                  <img src="" alt="img">
                  <h6>HOTEL FEATURES</h6>
                  <p>
                    <span>300 guest rooms including 52 luxurious suites</span>
                    <span>Complimentary Wi-Fi</span>
                    <span>Four restaurants and bars</span>
                    <span>2,300 sq m of flexible meeting and event space</span>
                    <span>Executive Business Center</span>
                    <span>One indoor pool</span>
                    <span>The Spa, offering a range of treatments</span>
                    <span>24-hour StayFit™ Gym</span>
                  </p>
                </b-col>
                <b-col class="my-3 main-amenity" lg="4">
                  <img src="" alt="img">
                  <h6>SERVICES</h6>
                  <p>
                    <span>A range of spa treatments</span>
                    <span>Laundry and dry cleaning services</span>
                  </p>
                </b-col>
                <b-col class="my-3 main-amenity" lg="4">
                  <img src="" alt="img">
                  <h6>ROOM AMENITIES</h6>
                  <p>
                    <span>Complimentary Wi-Fi</span>
                    <span>Spacious workspace</span>
                    <span>Ergonomic chair</span>
                    <span>Charging station</span>
                  </p>
                </b-col>
                <b-col class="my-3 main-amenity" lg="4">
                  <img src="" alt="img">
                  <h6>SUITE AMENITIES</h6>
                  <p>
                    <span>Regency Club access</span>
                    <span>Study and kitchenette with dining area (Regency Executive Suites)</span>
                    <span>Large living room and study, kitchenette, and dining area (Diplomatic and Presidential Suites)</span>
                  </p>
                </b-col>
                <b-col class="my-3 main-amenity" lg="4">
                  <img src="" alt="img">
                  <h6>BATHROOM</h6>
                  <p>
                    <span>Soothing walk-in rain shower</span>
                    <span>Separate bathtub</span>
                  </p>
                </b-col>
              </b-row>
            </b-collapse>
            <b-button v-b-toggle.amenity variant="transparent" @click="amenityShow()">
              {{amenityText}}
            </b-button>
          </b-col>
        </b-col>
      </b-row>
      <b-row class="gallery">
        <div class="gallery__title">
          <i><img src="../assets/images/picture.svg" alt=""/></i>
          <h2>Gallery</h2>
        </div>
      </b-row>
      <Test :images="images"/>
      <b-button
        href="http://localhost:3000/gallery"
        class="btn-img my-4"
        to="/gallery"
      >For more
      </b-button
      >
    </b-container>
    <!-- start slider room-->
    <div class="swiper-card-rooms">
      <b-container class="swiper__wrapper">
        <swiper :options="swiper_card_rooms">
          <swiper-slide class="swiper-card">
            <div class="swiper-card__img">
              <div class="swiper-card__cost">100$</div>
              <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                <swiper-slide class="swiper__wrapper-mini_card">
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
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
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
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
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
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
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
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
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
                  ></b-img>
                </swiper-slide>
                <swiper-slide>
                  <b-img
                    src="../assets/images/swiper_card1.jpg"
                    fluid
                    alt=""
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
            <div class="users-feedbacks__title">Happy Clients & Feedbacks</div>
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
                        <h5>NEWS & OFFER</h5>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="offer-main__item order-md-1 order-lg-1 order-1 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/offer-main.jpg" alt="" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-2 order-lg-2 order-2 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">Change of Seasons. Change of Scenery.</div>
                        <div class="offer-main__text-info">
                                Whatever new view you choose, Bonus Journeys is back with up to 4x points and double
                        nights toward tier status through January 4, 2021.
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">Read More</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-4 order-lg-3 order-3 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-3 order-lg-4 order-4 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">Change of Seasons. Change of Scenery.</div>
                        <div class="offer-main__text-info">
                                Whatever new view you choose, Bonus Journeys is back with up to 4x points and double
                        nights toward tier status through January 4, 2021.
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">Read More</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-6 order-lg-5 order-6 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">Change of Seasons. Change of Scenery.</div>
                        <div class="offer-main__text-info">
                                Whatever new view you choose, Bonus Journeys is back with up to 4x points and double
                        nights toward tier status through January 4, 2021.
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">Read More</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-5 order-lg-6 order-5 offer-main__item-left animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-7 order-lg-7 order-8 animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__text">
                        <div class="offer-main__text-title">Change of Seasons. Change of Scenery.</div>
                        <div class="offer-main__text-info">
                                Whatever new view you choose, Bonus Journeys is back with up to 4x points and double
                        nights toward tier status through January 4, 2021.
                            <!-- <font-awesome-icon :icon="['fas', 'clock']" />
                            <span>19th March, 2021</span> -->
                        </div>
                        <nuxt-link to="/offer" class="offer-main__link">Read More</nuxt-link>
                    </div>
                </b-col>
                <b-col class="offer-main__item order-md-8 order-lg-8 order-7 offer-main__item-left animate__animated animate__fadeInUp" md="6" lg="3" >
                    <div class="offer-main__picture">
                        <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
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

  export default {
    name: 'Range',
    title: 'Sunrise hotel in Tashkent',
    comments: {
      Test
    },
    data() {
      return {
        value2: [new Date()],
        value3: [new Date()],
        amenityText: 'Show More',
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
