<template>
    <div class="contact-page">
        <b-container>
            <b-row>
                <b-col sm="12">
                    <h1 class="contact-page__heading">
                        Contact information
                    </h1>
                    <div class="contact-page-details">
                        <b-container>
                            <b-row>
                                <b-col cols="12">
                                    <div class="contact-page-details__cards">
                                        <h3 class="contact-page-details__title">General contact</h3>
                                        <div class="contact-page-details__phone">
                                            <font-awesome-icon :icon="['fas', 'phone-alt']" />
                                            <a href="tel:+998 78 1204900">+998 78 1204900</a>
                                        </div>
                                        <div class="contact-page-details__email">
                                            <font-awesome-icon :icon="['fas', 'envelope']" />
                                            <a href="mailto:reservation.tashkent@radissonblu.com">
                                                reservation.tashkent@Sunrise.com
                                            </a>
                                        </div>
                                        <div class="contact-page-details__fax">
                                            <font-awesome-icon :icon="['fas', 'fax']" />
                                            <a href="tel:+998 78 1204900 ">+998 78 1204900</a>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div class="contact-page-info">
                        <b-container>
                            <b-row>
                                <b-col cols="12">
                                    <h2 class="contact-page-info__title">How to get to the Sunshine Blu Hotel, Tashkent</h2>
                                </b-col>
                                <b-col cols="12">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore expedita natus autem, consequatur earum neque?
                                </b-col>
                            </b-row>   
                        </b-container>
                    </div>                    
                </b-col>
            </b-row>
        </b-container>
        <div class="contact-page-map">
            <b-container fluid>
                <b-row>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.529769699248!2d69.28462621479527!3d41.34083750684368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lk!5e0!3m2!1sru!2s!4v1601553961275!5m2!1sru!2s" width="100%" height="360" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="contact__map"></iframe>
                </b-row>
            </b-container>
        </div>
        <div class="contact-page-btn">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <button class="contact-page-btn__button"  @click="isActive = !isActive" :class="{contactPageBtnOpen:isActive}">
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            <strong>How to arrive at Amir Temur Street 88 Tashkent 100084 Uzbekistan</strong>
                            <font-awesome-icon :icon="['fas', 'times']" class="closeButton" />
                        </button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-form inline class="contact-page-btn__form" :class="{directionToggle:isActive}">
                        <b-col lg="3" class="p-0">
                            <b-form-group>
                                <!-- <label for="input" class=""></label> -->
                                <b-input id="input" placeholder="Where are you starting from?" class="form-control"></b-input>
                            </b-form-group>
                        </b-col>
                        <b-col lg="6" xl="5" offset-xl="1" class="d-flex justify-content-between mb-0 p-0 form-group" >
                            <label for="" class="contact-page-btn__form-activ">
                                <font-awesome-icon :icon="['fas', 'car']" />
                            </label>
                            <label for="">
                                <font-awesome-icon :icon="['fas', 'bus']" />
                            </label>
                            <label for="">
                                    <font-awesome-icon :icon="['fas', 'walking']" />
                            </label>
                        </b-col>
                        <b-col lg="3" xl="2" offset-xl="1" class="p-0">
                            <b-form-group>
                                <b-button type="submit" class="contact-page-btn__get">Get directions</b-button>
                            </b-form-group>
                        </b-col>
                    </b-form>
                </b-row>
            </b-container>
        </div>
        <div class="swiper-card-rooms">
            <b-container class="swiper__wrapper">
                <swiper :options="swiper_card_rooms">
                    <swiper-slide class="swiper-card">
                        <a href="/">
                            <div class="swiper-card__img">
                                <!-- <b-img-lazy src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img-lazy> -->
                                <div class="swiper-card__cost">100$</div>
                                <swiper :options="swiper_card_mini" class="swiper__wrapper-mini">
                                    <swiper-slide class="swiper__wrapper-mini_card">
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
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
                                        <!-- <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'tv']" /></li> -->
                                        <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide class="swiper-card">
                        <a href="/">
                            <div class="swiper-card__img">
                                <!-- <b-img-lazy src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img-lazy> -->
                                <div class="swiper-card__cost">100$</div>
                                <swiper :options="swiper_card_mini" class="swiper__wrapper-mini">
                                    <swiper-slide class="swiper__wrapper-mini_card">
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
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
                                        <!-- <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'tv']" /></li> -->
                                        <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide class="swiper-card">
                        <a href="/">
                            <div class="swiper-card__img">
                                <!-- <b-img-lazy src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img-lazy> -->
                                <div class="swiper-card__cost">100$</div>
                                <swiper :options="swiper_card_mini" class="swiper__wrapper-mini">
                                    <swiper-slide class="swiper__wrapper-mini_card">
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
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
                                        <!-- <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'tv']" /></li> -->
                                        <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide class="swiper-card">
                        <a href="/">
                            <div class="swiper-card__img">
                                <!-- <b-img-lazy src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img-lazy> -->
                                <div class="swiper-card__cost">100$</div>
                                <swiper :options="swiper_card_mini" class="swiper__wrapper-mini">
                                    <swiper-slide class="swiper__wrapper-mini_card">
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
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
                                        <!-- <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'tv']" /></li> -->
                                        <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                                        <swiper-slide class="swiper-card">
                        <a href="/">
                            <div class="swiper-card__img">
                                <!-- <b-img-lazy src="../assets/images/swiper_card1.jpg" fluid  alt=""></b-img-lazy> -->
                                <div class="swiper-card__cost">100$</div>
                                <swiper :options="swiper_card_mini" class="swiper__wrapper-mini">
                                    <swiper-slide class="swiper__wrapper-mini_card">
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <b-img src="../assets/images/swiper_card1.jpg" fluid  alt="" width="250px"></b-img>
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
                                        <!-- <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'angle-left']" /></li>
                                        <li><font-awesome-icon :icon="['fas', 'tv']" /></li> -->
                                        <li><font-awesome-icon :icon="['fas', 'shower']" /></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
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
    </div>
</template>
<script>
    export default {
        data() {
            return{
                isActive:false, 
                swiper_card_rooms: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoplay: true,
                    loop: true,
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
                swiper_card_mini: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: true,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-card__next-mini',
                        prevEl: '.swiper-card__prev-mini',
                    },
                }
            }
        },
        methods: {
            
        }
    }
</script>
