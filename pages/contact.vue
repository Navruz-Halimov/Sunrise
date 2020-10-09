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
        <div class="offer-main">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="offer-main__title">
                            <h5>NEWS & EVENT</h5>
                            <h2>From Our Blog</h2>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="offer-main__item order-md-1 order-lg-1 order-1" md="6" lg="3" >
                        <div class="offer-main__picture">
                            <b-img src="../assets/images/offer-main.jpg" alt="" height="270px"></b-img>
                        </div>
                    </b-col>
                    <b-col class="offer-main__item order-md-2 order-lg-2 order-2" md="6" lg="3" >
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
                    <b-col class="offer-main__item order-md-4 order-lg-3 order-3" md="6" lg="3" >
                        <div class="offer-main__picture">
                            <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
                        </div>
                    </b-col>
                    <b-col class="offer-main__item order-md-3 order-lg-4 order-4" md="6" lg="3" >
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
                    <b-col class="offer-main__item order-md-6 order-lg-5 order-6" md="6" lg="3" >
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
                    <b-col class="offer-main__item order-md-5 order-lg-6 order-5 offer-main__item-left" md="6" lg="3" >
                        <div class="offer-main__picture">
                            <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
                        </div>
                    </b-col>
                    <b-col class="offer-main__item order-md-7 order-lg-7 order-8" md="6" lg="3" >
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
                    <b-col class="offer-main__item order-md-8 order-lg-8 order-7 offer-main__item-left" md="6" lg="3" >
                        <div class="offer-main__picture">
                            <b-img src="../assets/images/offer-main.jpg" alt="" width="270px" height="270px"></b-img>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

    <!-- start services for page main -->
    <!-- <div class="main-services">
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
    </div> -->
    <!-- finish services for page main -->        
    </div>
</template>
<script>
    export default {
        data() {
            return{
                isActive:false, 
                show: false,
            }
        },
        methods: {
            
        }
    }
</script>
