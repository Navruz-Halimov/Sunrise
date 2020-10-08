<template>
  <div class="main__page">
    <div class="navbar__slider">
      <swiper class="swiper" :options="header__slider">
        <swiper-slide
          ><img src="../assets//images/3D/1.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              yeah man itis working I think don't pay attention to the typos
              that I have typed
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/1night.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2.jpg" alt="" />
          <div class="swiper-caption">
            <h1 class="swiper-caption-heading">Lorem ipsum dolor sit amet.</h1>
            <p class="swiper-caption-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium error earum amet a qui.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide
          ><img src="../assets/images/3D/2night.jpg" alt="" />
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
              <input type="submit" class="book__btn" value="Book now" />
            </div>
          </b-row>
        </section>
      </form>
    </b-container>
    <b-container>
      <b-row class="gallery">
        <div class="gallery__title">
          <i><img src="../assets/images/picture.svg" alt="" /></i>
          <h2>Gallery</h2>
        </div>
      </b-row>
      <Test :images="images" />
      <b-button
        href="http://localhost:3000/gallery"
        class="btn-img my-4"
        to="/gallery"
        >For more</b-button
      >
    </b-container>
    <div class="tourist__guide">
      <b-container>
        <h1 class="tourist__guide-heading"><font-awesome-icon class="info__circle" :icon="['fas', 'info-circle']"/>Tourist guide</h1>
        <ul class="guide__list">
          <li class="guide__item">
            <b-row>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Online scoreboard of Tashkent airport Airlines</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Law and law OVIRs of Tashkent</nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel Tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                  >Travel insurance</nuxt-link
                >
                <nuxt-link to="" class="guide__link">Travel tips</nuxt-link>
                <nuxt-link to="" class="guide__link"
                  >Online scoreboard of Tashkent airport</nuxt-link
                >
              </b-col>
              <b-col lg="6">
                <nuxt-link to="" class="guide__link">
                  Tourism Code Horoscope for 2019</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Embassies in Tashkent</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Accommodation in hotels</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Communication abroad</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >Travel Dictionary</nuxt-link
                >
                <nuxt-link to="" class="guide__link"
                  >TOP-10 in the world of tourism</nuxt-link
                >
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-container>
    </div>

<!-- start slider room-->
    <div class="swiper-card-rooms">
        <b-container class="swiper__wrapper">
            <swiper :options="swiper_card_rooms">
                <swiper-slide class="swiper-card">
                    <div class="swiper-card__img">
                        <div class="swiper-card__cost">100$</div>
                        <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                            <swiper-slide class="swiper__wrapper-mini_card">
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <div class="swiper-card__next-mini" slot="button-prev">
                                <font-awesome-icon :icon="['fas', 'angle-left']" />
                            </div>
                            <div class="swiper-card__prev-mini" slot="button-next">
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>  
                        </swiper>
                    </div>
                    <div class="swiper-card__statistics">
                        <div class="swiper-card__name-rooms">Sunrise</div>
                        <div class="swiper-card__size-rooms">
                            <font-awesome-icon :icon="['fas', 'expand']" />
                            <span>size: 24.5 m²</span>
                        </div>
                        <div class="swiper-card__guest-rooms">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>max. guests: 3 adults, 1 child</span>
                        </div>
                        <div class="swiper-card__desc">
                            With our Standard Guest Room, you will have everything you need for a comfortable stay and a good night's sleep.
                        </div>
                        <div class="swiper-card__services">
                            <ul>
                                <li><font-awesome-icon :icon="['fas', 'wifi']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'coffee']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'blender']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-card">
                    <div class="swiper-card__img">
                        <div class="swiper-card__cost">100$</div>
                        <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                            <swiper-slide class="swiper__wrapper-mini_card">
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <div class="swiper-card__next-mini" slot="button-prev">
                                <font-awesome-icon :icon="['fas', 'angle-left']" />
                            </div>
                            <div class="swiper-card__prev-mini" slot="button-next">
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>  
                        </swiper>
                    </div>
                    <div class="swiper-card__statistics">
                        <div class="swiper-card__name-rooms">Sunrise</div>
                        <div class="swiper-card__size-rooms">
                            <font-awesome-icon :icon="['fas', 'expand']" />
                            <span>size: 24.5 m²</span>
                        </div>
                        <div class="swiper-card__guest-rooms">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>max. guests: 3 adults, 1 child</span>
                        </div>
                        <div class="swiper-card__desc">
                            With our Standard Guest Room, you will have everything you need for a comfortable stay and a good night's sleep.
                        </div>
                        <div class="swiper-card__services">
                            <ul>
                                <li><font-awesome-icon :icon="['fas', 'wifi']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'coffee']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'blender']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-card">
                    <div class="swiper-card__img">
                        <div class="swiper-card__cost">100$</div>
                        <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                            <swiper-slide class="swiper__wrapper-mini_card">
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <div class="swiper-card__next-mini" slot="button-prev">
                                <font-awesome-icon :icon="['fas', 'angle-left']" />
                            </div>
                            <div class="swiper-card__prev-mini" slot="button-next">
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>  
                        </swiper>
                    </div>
                    <div class="swiper-card__statistics">
                        <div class="swiper-card__name-rooms">Sunrise</div>
                        <div class="swiper-card__size-rooms">
                            <font-awesome-icon :icon="['fas', 'expand']" />
                            <span>size: 24.5 m²</span>
                        </div>
                        <div class="swiper-card__guest-rooms">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>max. guests: 3 adults, 1 child</span>
                        </div>
                        <div class="swiper-card__desc">
                            With our Standard Guest Room, you will have everything you need for a comfortable stay and a good night's sleep.
                        </div>
                        <div class="swiper-card__services">
                            <ul>
                                <li><font-awesome-icon :icon="['fas', 'wifi']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'coffee']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'blender']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-card">
                    <div class="swiper-card__img">
                        <div class="swiper-card__cost">100$</div>
                        <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                            <swiper-slide class="swiper__wrapper-mini_card">
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <div class="swiper-card__next-mini" slot="button-prev">
                                <font-awesome-icon :icon="['fas', 'angle-left']" />
                            </div>
                            <div class="swiper-card__prev-mini" slot="button-next">
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>  
                        </swiper>
                    </div>
                    <div class="swiper-card__statistics">
                        <div class="swiper-card__name-rooms">Sunrise</div>
                        <div class="swiper-card__size-rooms">
                            <font-awesome-icon :icon="['fas', 'expand']" />
                            <span>size: 24.5 m²</span>
                        </div>
                        <div class="swiper-card__guest-rooms">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>max. guests: 3 adults, 1 child</span>
                        </div>
                        <div class="swiper-card__desc">
                            With our Standard Guest Room, you will have everything you need for a comfortable stay and a good night's sleep.
                        </div>
                        <div class="swiper-card__services">
                            <ul>
                                <li><font-awesome-icon :icon="['fas', 'wifi']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'coffee']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'blender']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-card">
                    <div class="swiper-card__img">
                        <div class="swiper-card__cost">100$</div>
                        <swiper :options="slider_card_mini" class="swiper__wrapper-mini">
                            <swiper-slide class="swiper__wrapper-mini_card">
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <swiper-slide>
                                <b-img src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img>
                            </swiper-slide>
                            <div class="swiper-card__next-mini" slot="button-prev">
                                <font-awesome-icon :icon="['fas', 'angle-left']" />
                            </div>
                            <div class="swiper-card__prev-mini" slot="button-next">
                                <font-awesome-icon :icon="['fas', 'angle-right']" />
                            </div>  
                        </swiper>
                    </div>
                    <div class="swiper-card__statistics">
                        <div class="swiper-card__name-rooms">Sunrise</div>
                        <div class="swiper-card__size-rooms">
                            <font-awesome-icon :icon="['fas', 'expand']" />
                            <span>size: 24.5 m²</span>
                        </div>
                        <div class="swiper-card__guest-rooms">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>max. guests: 3 adults, 1 child</span>
                        </div>
                        <div class="swiper-card__desc">
                            With our Standard Guest Room, you will have everything you need for a comfortable stay and a good night's sleep.
                        </div>
                        <div class="swiper-card__services">
                            <ul>
                                <li><font-awesome-icon :icon="['fas', 'wifi']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'coffee']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'blender']" /></li>
                                <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-card__next" slot="button-prev">
                    <font-awesome-icon :icon="['fas', 'angle-left']" />
                </div>
                <div class="swiper-card__prev" slot="button-next">
                    <font-awesome-icon :icon="['fas', 'angle-right']" />
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
                    <div class="users-feedbacks__title">
                        Happy Clients & Feedbacks
                    </div>
                    <swiper :options="users_feedback">
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                </div>
                                <div class="users-feedbacks__card-name">Rodel Golez</div>
                                <div class="users-feedbacks__card-career">Businessman</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                </div>
                                <div class="users-feedbacks__card-name">Rodel Golez</div>
                                <div class="users-feedbacks__card-career">Businessman</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                </div>
                                <div class="users-feedbacks__card-name">Rodel Golez</div>
                                <div class="users-feedbacks__card-career">Businessman</div>
                            </div>
                        </swiper-slide>  
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                </div>
                                <div class="users-feedbacks__card-name">Rodel Golez</div>
                                <div class="users-feedbacks__card-career">Businessman</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
                                </div>
                                <div class="users-feedbacks__card-name">Rodel Golez</div>
                                <div class="users-feedbacks__card-career">Businessman</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-feedbacks__card">
                            <div class="users-feedbacks__card-img">
                                <b-img src="../assets/images/person_1.jpg" rounded="circle" alt="person"></b-img>
                            </div>
                            <div class="users-feedbacks__card-info">
                                <font-awesome-icon :icon="['fas', 'quote-left']" class="card-icon"/>
                                <div class="users-feedbacks__card-text">
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.
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

    <!-- start services for page main -->
    <div class="main-services">
        <b-container>
            <b-row>
                <b-col cols="5">
                    <div class="main-services__title">Services</div>
                </b-col>
                <b-col cols="7" class="d-flex justify-content-end">
                    <b-button 
                        v-b-toggle.collapse 
                        class="main-services__btn" 
                        variant="outline-light"
                        @click="show = !show"
                        v-if="show === false"
                    >
                        Show more
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </b-button>
                    <b-button 
                        v-b-toggle.collapse 
                        class="main-services__btn" 
                        variant="outline-light"
                        v-else
                        @click="show = !show"
                    >
                        Show less
                        <font-awesome-icon :icon="['fas', 'angle-up']" />
                    </b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="10" offset-md="1">
                    <b-collapse id="collapse" class="main-services__list">
                        <b-card>
                            <b-button 
                                v-b-popover.hover.top="'Free coffee and tea in the lobby'" 
                                title="Complimentary coffee and tea"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'mug-hot']" class="main-services__icon" />
                                <span>Complimentary coffee and tea</span>
                            </b-button>
                            <b-button 
                                v-b-popover.hover.top="'Free Wi-Fi'" 
                                title="Free Wi-Fi"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'wifi']" class="main-services__icon" />
                                <span>Free Wi-Fi</span>
                            </b-button>  
                            <b-button 
                                v-b-popover.hover.top="'Customized running trails around the hotel'" 
                                title="Running trails"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'running']" class="main-services__icon" />
                                <span>Running trails</span>
                            </b-button>
                            <b-button 
                                v-b-popover.hover.top="'Meeting facilities / social space'" 
                                title="Meeting facilities"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'user-friends']" class="main-services__icon" />
                                <span>Meeting facilities</span>
                            </b-button>   
                            <b-button 
                                v-b-popover.hover.top="'Luggage storage'" 
                                title="Luggage storage"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'briefcase']" class="main-services__icon" />
                                <span>Luggage storage</span>
                            </b-button>
                            <b-button 
                                v-b-popover.hover.top="'Individual room climate control'" 
                                title="Individual room climate control"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'thermometer-quarter']" class="main-services__icon" />
                                <span>Individual room climate control</span>
                            </b-button>   
                            <b-button 
                                v-b-popover.hover.top="'Complimentary parking'" 
                                title="Complimentary parking"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'parking']" class="main-services__icon" />
                                <span>Complimentary parking</span>
                            </b-button> 
                            <b-button 
                                v-b-popover.hover.top="'Dry cleaning services'" 
                                title="Dry cleaning"
                                class="main-services__item"
                                variant="outline-light"
                            >
                                <font-awesome-icon :icon="['fas', 'tshirt']" class="main-services__icon" />
                                <span>Dry cleaning</span>
                            </b-button> 
                                                        
                        </b-card>
                    </b-collapse>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <!-- finish services for page main -->

  </div>
</template>

<script>
import Test from '../components/Test.vue'
export default {
  name: 'Range',
  comments: {
    Test,
  },
  data() {
    return {
      value2: [new Date()],
      value3: [new Date()],
      header__slider: {
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
      // start slider room      
        swiper_card_rooms: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.swiper-card__next',
                prevEl: '.swiper-card__prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        },
        slider_card_mini: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.swiper-card__next-mini',
                prevEl: '.swiper-card__prev-mini',
            },
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
              clickable: true,
          },
          breakpoints: {
              768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
              },
              992: {
                  slidesPerView: 3,
                  spaceBetween: 15,
              }
          }  
      },
      // finish Feedbacks slider
    }
  },
  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0))
    },
  },
}
</script>
