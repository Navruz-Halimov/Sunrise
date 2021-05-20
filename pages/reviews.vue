<template>
    <div class="reviews-page">
        <b-container>
            <b-row class="reviews-page__top">
                <b-col cols="12">
                    <h2 class="reviews-page__title">{{$t('review.title')}}</h2>
                </b-col>
            </b-row>
            <div class="reviews-slider">
                <b-container>
                    <div class="reviews-slider__item" 
                        v-for="(review, index) in reviews" 
                        :key="index.id"
                    >
                        <div class="reviews-slider__card">
                            <b-container>
                                <b-row>
                                    <b-col md="2">
                                        <div class="reviews-slider__users">
                                            <div class="reviews-slider__users-icon">
                                                <b-img src="../assets/images/reviews_user.jpg" fluied alt="user"></b-img>
                                            </div>
                                            <h4 class="reviews-slider__users-name">
                                                {{review.user.firstname}} {{review.user.lastname}} 
                                            </h4>
                                            <div class="reviews-slider__users-country">
                                                {{review.user.city}} {{review.user.state}}
                                            </div>
                                            <div class="reviews-slider__users-title">
                                                {{review.title}}
                                            </div>
                                            <div class="reviews-slider__users-list">
                                                <ul>
                                                    <li>
                                                        <vue-stars
                                                            class="user__profile-rate"
                                                            name="rate"
                                                            active-color="#FFC805"
                                                            inactive-color="#282932"
                                                            shadow-color="#FFC805"
                                                            hover-color="#00aced"
                                                            :max="5"
                                                            :value="4"
                                                            :readonly="false"
                                                            char="★"
                                                        />    
                                                    </li>
                                                    <li><span>Reviewed: </span>{{review.created_at}}</li> 
                                                </ul>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col md="10">
                                        <div class="reviews-slider__info">
                                            <div class="reviews-slider__info-title">
                                                {{review.title}} 
                                            </div>
                                            <div class="reviews-slider__info-list">
                                                <ul>
                                                    <li>
                                                        <vue-stars
                                                            class="reviews-slider-rate"
                                                            name="rate"
                                                            active-color="#FFC805"
                                                            inactive-color="#282932"
                                                            shadow-color="#FFC805"
                                                            hover-color="#00aced"
                                                            :max="5"
                                                            :value="4"
                                                            :readonly="false"
                                                            char="★"
                                                        /> 
                                                    </li>
                                                    <li><span>Reviewed: </span>{{review.created_at}}</li> 
                                                    <li><span>Trip type: </span>{{review.trip_type}}</li>
                                                </ul>
                                            </div>
                                            <div class="reviews-slider__info-client" :class="{autoheight:isActive}">
                                                <b-collapse :id="'collapse' + index">
                                                    <b-card> 
                                                       {{review.comment}}
                                                    </b-card>
                                                </b-collapse>
                                                <b-button 
                                                    v-b-toggle="'collapse' + index"
                                                    class="reviews-slider__info-btn" 
                                                    variant="outline-light"
                                                    @click="isActive = !isActive"
                                                    v-if="isActive === false"
                                                >
                                                    <!-- Read more   -->
                                                    <!-- <font-awesome-icon :icon="['fas', 'angle-down']" /> -->
                                                </b-button>
                                                <b-button 
                                                    v-b-toggle="'collapse' + index"
                                                    class="reviews-slider__info-btn" 
                                                    variant="outline-light"
                                                    v-else
                                                    @click="isActive = !isActive"
                                                >
                                                    <!-- Read less -->
                                                    <!-- <font-awesome-icon :icon="['fas', 'angle-up']" /> -->
                                                </b-button>
                                                
                                            </div>
                                            <div class="reviews-slider__info-hotel">
                                                <ul>
                                                    <li class="d-flex align-items-center">
                                                        <h5>
                                                            Administration 
                                                        </h5>
                                                        
                                                    </li>
                                                    <li class="reviews-slider__info-hotel-text" :class="{autoheight:isActive1}">
                                                        <b-collapse :id="'collapse1' + index">
                                                            <b-card> 
                                                                {{review.response}}
                                                            </b-card>
                                                        </b-collapse>
                                                        <b-button 
                                                            v-b-toggle="'collapse1' + index"
                                                            class="reviews-slider__info-btn" 
                                                            variant="outline-light"
                                                            @click="isActive1 = !isActive1"
                                                            v-if="isActive1 === false"
                                                        >
                                                            <!-- Read more  
                                                            <font-awesome-icon :icon="['fas', 'angle-down']" /> -->
                                                        </b-button>
                                                        <b-button 
                                                            v-b-toggle="'collapse1' + index"
                                                            class="reviews-slider__info-btn" 
                                                            variant="outline-light"
                                                            v-else
                                                            @click="isActive1 = !isActive1"
                                                        >
                                                            <!-- Read less
                                                            <font-awesome-icon :icon="['fas', 'angle-up']" /> -->
                                                        </b-button>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </div>
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
            reviews: [
             {
                user:{
                firstname:'Apysib',
                lastname:"Apysib",
                state:"Dubai, United Arab Emirates"
             },
             title:"A place to visit and stay while in Tashkent",
             comment:"Amazing hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. Ideal for families as well as they have great pool facilities. Amazing service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food. Check-in and check-out was smooth and comfortable with a helpful front desk staff. It has everything a small family could ask for. Loved the views from the suite. Overall a wonderful experience that we enjoyed on our first trip to Tashkent. Kudos to the Management for running such a great team of service Professionals. We will certainly be back.Thank you RB Tashkent!!!",
             created_at:"2019-06-11",
             trip_type:"Family",
             response:"RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, Tashkent, responded to this review 2019-06-13 Dear Apysib, Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. We sincerely do hope that your stay was both enjoyable and delightful. We are glad that our staff lasted an excellent impression. Every member of our team strives to provide 100% Guest Satisfaction to each our guest. It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well. We sincerely do hope that we will have the chance to see you again in our hotel and assist you with the highest standard of quality service. Looking forward to seeing you in our hotel. Sincerely, Robiya Orifjonova Guest relations agent"
             },
             {
                user:{
                firstname:'Apysib',
                lastname:"Apysib",
                state:"Dubai, United Arab Emirates"
             },
             title:"A place to visit and stay while in Tashkent",
             comment:"Amazing hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. Ideal for families as well as they have great pool facilities. Amazing service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food. Check-in and check-out was smooth and comfortable with a helpful front desk staff. It has everything a small family could ask for. Loved the views from the suite. Overall a wonderful experience that we enjoyed on our first trip to Tashkent. Kudos to the Management for running such a great team of service Professionals. We will certainly be back.Thank you RB Tashkent!!!",
             created_at:"2019-06-11",
             trip_type:"Family",
             response:"RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, Tashkent, responded to this review 2019-06-13 Dear Apysib, Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. We sincerely do hope that your stay was both enjoyable and delightful. We are glad that our staff lasted an excellent impression. Every member of our team strives to provide 100% Guest Satisfaction to each our guest. It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well. We sincerely do hope that we will have the chance to see you again in our hotel and assist you with the highest standard of quality service. Looking forward to seeing you in our hotel. Sincerely, Robiya Orifjonova Guest relations agent"
             },
             {
                user:{
                firstname:'Apysib',
                lastname:"Apysib",
                state:"Dubai, United Arab Emirates"
             },
             title:"A place to visit and stay while in Tashkent",
             comment:"Amazing hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. Ideal for families as well as they have great pool facilities. Amazing service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food. Check-in and check-out was smooth and comfortable with a helpful front desk staff. It has everything a small family could ask for. Loved the views from the suite. Overall a wonderful experience that we enjoyed on our first trip to Tashkent. Kudos to the Management for running such a great team of service Professionals. We will certainly be back.Thank you RB Tashkent!!!",
             created_at:"2019-06-11",
             trip_type:"Family",
             response:"RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, Tashkent, responded to this review 2019-06-13 Dear Apysib, Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. We sincerely do hope that your stay was both enjoyable and delightful. We are glad that our staff lasted an excellent impression. Every member of our team strives to provide 100% Guest Satisfaction to each our guest. It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well. We sincerely do hope that we will have the chance to see you again in our hotel and assist you with the highest standard of quality service. Looking forward to seeing you in our hotel. Sincerely, Robiya Orifjonova Guest relations agent"
             },
             {
                user:{
                firstname:'Apysib',
                lastname:"Apysib",
                state:"Dubai, United Arab Emirates"
             },
             title:"A place to visit and stay while in Tashkent",
             comment:"Amazing hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. Ideal for families as well as they have great pool facilities. Amazing service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food. Check-in and check-out was smooth and comfortable with a helpful front desk staff. It has everything a small family could ask for. Loved the views from the suite. Overall a wonderful experience that we enjoyed on our first trip to Tashkent. Kudos to the Management for running such a great team of service Professionals. We will certainly be back.Thank you RB Tashkent!!!",
             created_at:"2019-06-11",
             trip_type:"Family",
             response:"RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, Tashkent, responded to this review 2019-06-13 Dear Apysib, Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. We sincerely do hope that your stay was both enjoyable and delightful. We are glad that our staff lasted an excellent impression. Every member of our team strives to provide 100% Guest Satisfaction to each our guest. It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well. We sincerely do hope that we will have the chance to see you again in our hotel and assist you with the highest standard of quality service. Looking forward to seeing you in our hotel. Sincerely, Robiya Orifjonova Guest relations agent"
             },
             {
                user:{
                firstname:'Apysib',
                lastname:"Apysib",
                state:"Dubai, United Arab Emirates"
             },
             title:"A place to visit and stay while in Tashkent",
             comment:"Amazing hotel right in the heart of Tashkent, ideal for business or vacationing with easy access to all locations. Ideal for families as well as they have great pool facilities. Amazing service from staff right from Robiya in Guest Relation and Ildar from Sales and all the staff are very courteous and accommodative. The breakfast buffet is good and has great variety and the restaurant by the pool has excellent service and food. Check-in and check-out was smooth and comfortable with a helpful front desk staff. It has everything a small family could ask for. Loved the views from the suite. Overall a wonderful experience that we enjoyed on our first trip to Tashkent. Kudos to the Management for running such a great team of service Professionals. We will certainly be back.Thank you RB Tashkent!!!",
             created_at:"2019-06-11",
             trip_type:"Family",
             response:"RobiyaOrifjonova, Guest relations agent at Radisson Blu Hotel, Tashkent, responded to this review 2019-06-13 Dear Apysib, Thank you so much for taking the time to review us on TripAdvisor regarding your stay in our hotel. We sincerely do hope that your stay was both enjoyable and delightful. We are glad that our staff lasted an excellent impression. Every member of our team strives to provide 100% Guest Satisfaction to each our guest. It is a honor for us to read such kind of reviews as we always try to make our guests feel, like they are at home far away from home! Taking this opportunity, we would like to thank you for your comment regarding our breakfast as well. We sincerely do hope that we will have the chance to see you again in our hotel and assist you with the highest standard of quality service. Looking forward to seeing you in our hotel. Sincerely, Robiya Orifjonova Guest relations agent"
             },
            ],
            isActive: false,
            isActive1: false,
            isActive2: false,
            isActive3: false,
            reviews_slider: {
                slidesPerView: 1,
                spaceBetween: 30,
                // autoplay: true,
                // loop: true,
            },
            
        }
    },
    methods: {
        // async getReviews() {
        //     await this.$axios.get('reviews/list/').then((res) => {
        //         this.reviews = res.data.results
        //         console.log(this.reviews)
        //     })
            
        // }
    },
    mounted() {
        // this.getReviews()
    },
}
</script>