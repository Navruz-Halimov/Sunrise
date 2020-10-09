<template>
    <div class="reviews-page">
        <b-container>
            <b-row class="reviews-page__top">
                <b-col cols="12" lg="10" md="9" sm="8">
                    <h1 class="reviews-page__title">Most recent traveler reviews</h1>
                </b-col>
                <b-col cols="12" lg="2" md="3" sm="4">
                    <span class="reviews-page__select-text">Language</span>
                    <b-form-select v-model="selected" class="reviews-page__select">
                        <b-form-select-option class="reviews-page__option" :value="English">English</b-form-select-option>
                        <b-form-select-option class="reviews-page__option" value="中文（简体）">中文（简体）</b-form-select-option>
                        <b-form-select-option class="reviews-page__option" value="Русский">Русский</b-form-select-option>
                    </b-form-select>
                </b-col>
            </b-row>
            <div class="reviews-slider">
                <b-container>
                    <div class="reviews-slider__card">
                        <b-container>
                            <b-row>
                                <b-col md="2">
                                    <div class="reviews-slider__users">
                                        <div class="reviews-slider__users-icon">
                                            <b-img src="../assets/images/reviews_user.jpg" fluied alt="user"></b-img>
                                        </div>
                                        <h4 class="reviews-slider__users-name">
                                            Apysib
                                        </h4>
                                        <div class="reviews-slider__users-country">
                                            Dubai, United Arab Emirates
                                        </div>
                                        <div class="reviews-slider__users-title">"A place to visit and stay while in Tashkent"</div>
                                        <div class="reviews-slider__users-list">
                                            <ul>
                                                <li><img src="../assets/images/reviews_col.svg" alt=""></li>
                                                <li><span>Reviewed: </span>2019-06-11 </li> 
                                            </ul>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="10">
                                    <div class="reviews-slider__info">
                                        <div class="reviews-slider__info-title">"A place to visit and stay while in Tashkent"</div>
                                        <div class="reviews-slider__info-list">
                                            <ul>
                                                <li><img src="../assets/images/reviews_col.svg" alt=""></li>
                                                <li><span>Reviewed: </span>2019-06-11 </li> |
                                                <li><span>Trip type: </span>Family</li>
                                            </ul>
                                        </div>
                                        <div class="reviews-slider__info-client">
                                            <p :class="{autoheight:isActive}">
                                            Sunrise hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. 
                                            Ideal for families as well as they have great pool facilities. 
                                            Sunrise service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. 
                                            The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food.  
                                            Check-in and check-out was smooth and comfortable with a helpful front desk staff.  
                                            It has everything a small family could ask for. Loved the views from the suite. 
                                            </p>
                                            <span @click="isActive = !isActive" v-if="isActive === false">
                                                Read more
                                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                                            </span>
                                            <span v-else @click="isActive = !isActive">
                                                Read less
                                                <font-awesome-icon :icon="['fas', 'angle-up']" />
                                            </span>
                                        </div>
                                        <div class="reviews-slider__info-hotel">
                                            <ul>
                                                <li class="d-flex align-items-center">
                                                    <h5>RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, 
                                                        Tashkent, responded to this review <span>2019-06-13</span> </h5>
                                                    
                                                </li>
                                                <li>
                                                    <p :class="{autoheight:isActive1}"> 
                                                        Dear Apysib,
                                                        Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. 
                                                        We sincerely do hope that your stay was both enjoyable and delightful. 
                                                        We are glad that our staff lasted an excellent impression. 
                                                        Every member of our team strives to provide 100% Guest Satisfaction to each our guest.
                                                        It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home!
                                                        Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well.  
                                                    </p>
                                                    <span @click="isActive1 = !isActive1" v-if="isActive1 === false">
                                                        Read more
                                                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                                                    </span>
                                                    <span v-else @click="isActive1 = !isActive1">
                                                        Read less
                                                        <font-awesome-icon :icon="['fas', 'angle-up']" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div class="reviews-slider__card">
                        <b-container>
                            <b-row>
                                <b-col md="2">
                                    <div class="reviews-slider__users">
                                        <div class="reviews-slider__users-icon">
                                            <b-img src="../assets/images/reviews_user1.jpg" fluied alt="user"></b-img>
                                        </div>
                                        <h4 class="reviews-slider__users-name">
                                            desperate_7
                                        </h4>
                                        <div class="reviews-slider__users-country">
                                            Monterey, California
                                        </div>
                                        <div class="reviews-slider__users-title">"Great hotel, staff, experience"</div>
                                        <div class="reviews-slider__users-list">
                                            <ul>
                                                <li><img src="../assets/images/reviews_col.svg" alt=""></li>
                                                <li><span>Reviewed: </span>2020-07-02 </li> 
                                            </ul>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="10">
                                    <div class="reviews-slider__info">
                                        <div class="reviews-slider__info-title">"Great hotel, staff, experience"</div>
                                        <div class="reviews-slider__info-list">
                                            <ul>
                                                <li><img src="../assets/images/reviews_col.svg" alt=""></li>
                                                <li><span>Reviewed: </span>2020-07-02 </li> |
                                                <li><span>Trip type: </span>Business</li>
                                            </ul>
                                        </div>
                                        <div class="reviews-slider__info-client">
                                            <p :class="{autoheight:isActive}">
                                            Welcoming and helpful staff, clean rooms. We did not eat at the hotel.
                                            They have ATM that gives $ and local cash, also exchange point, they had good rates. 
                                            We were provided everything we have requested. Complimentary water.
                                            </p>
                                            <span @click="isActive = !isActive" v-if="isActive === false">
                                                Read more
                                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                                            </span>
                                            <span v-else @click="isActive = !isActive">
                                                Read less
                                                <font-awesome-icon :icon="['fas', 'angle-up']" />
                                            </span>
                                        </div>
                                        <div class="reviews-slider__info-hotel">
                                            <ul>
                                                <li class="d-flex align-items-center">
                                                    <h5>Ildar L, Front Office Manager at Radisson Blu Hotel, Tashkent, responded to this review
                                                        <span>2012-06-13</span> </h5>
                                                    
                                                </li>
                                                <li>
                                                    <p :class="{autoheight:isActive1}"> 
                                                       Dear desperate_traveler_7, 
                                                        We sincerely do hope, that your stay was both enjoyable and delightful, and that we provided your stay with the best quality of service. 
                                                        We are pleased to hear that you enjoyed the rooms and we are glad that our staff lasted an excellent impression. 
                                                        Every member of our team strives to provide 100% Guest Satisfaction to each our guest. 
                                                        It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! 
                                                    </p>
                                                    <span @click="isActive1 = !isActive1" v-if="isActive1 === false">
                                                        Read more
                                                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                                                    </span>
                                                    <span v-else @click="isActive1 = !isActive1">
                                                        Read less
                                                        <font-awesome-icon :icon="['fas', 'angle-up']" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </b-container>
            </div>
        </b-container>

    </div>

</template>
<script>
  export default {
    data() {
        return {
            isActive:false,
            isActive1: false,
            reviews_slider: {
                slidesPerView: 1,
                spaceBetween: 30,
                // autoplay: true,
                // loop: true,
            },
            
        }
    }
}
</script>