<template>
    <div class="reviews-page">
        <b-container>
            <b-row class="reviews-page__top">
                <b-col cols="12">
                    <h2 class="reviews-page__title">Most recent traveler reviews</h2>
                </b-col>
            </b-row>
            <div class="reviews-slider">
                <b-container>
                    <div class="reviews-slider__item" 
                        v-for="(review, index) in reviews" 
                        :key="index"
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
                                                <b-collapse id="collapse">
                                                    <b-card> 
                                                       {{review.comment}}
                                                    </b-card>
                                                </b-collapse>
                                                <b-button 
                                                    v-b-toggle.collapse 
                                                    class="reviews-slider__info-btn" 
                                                    variant="outline-light"
                                                    @click="isActive = !isActive"
                                                    v-if="isActive === false"
                                                >
                                                    Read more  
                                                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                                                </b-button>
                                                <b-button 
                                                    v-b-toggle.collapse
                                                    class="reviews-slider__info-btn" 
                                                    variant="outline-light"
                                                    v-else
                                                    @click="isActive = !isActive"
                                                >
                                                    Read less
                                                    <font-awesome-icon :icon="['fas', 'angle-up']" />
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
                                                        <b-collapse id="collapse1">
                                                            <b-card> 
                                                                {{review.response}}
                                                            </b-card>
                                                        </b-collapse>
                                                        <b-button 
                                                            v-b-toggle.collapse1
                                                            class="reviews-slider__info-btn" 
                                                            variant="outline-light"
                                                            @click="isActive1 = !isActive1"
                                                            v-if="isActive1 === false"
                                                        >
                                                            Read more  
                                                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                                                        </b-button>
                                                        <b-button 
                                                            v-b-toggle.collapse1
                                                            class="reviews-slider__info-btn" 
                                                            variant="outline-light"
                                                            v-else
                                                            @click="isActive1 = !isActive1"
                                                        >
                                                            Read less
                                                            <font-awesome-icon :icon="['fas', 'angle-up']" />
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
            reviews: [],
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
        async getReviews() {
            await this.$axios.get('reviews/list/').then((res) => {
                this.reviews = res.data.results
                console.log(this.reviews)
            })
            
        }
    },
    mounted() {
        this.getReviews()
    },
}
</script>