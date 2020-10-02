<template>
    <div class="event-page">
        <b-container>
            <div class="event-page__top">
                <b-container>
                    <b-row>
                        <b-col cols="12">
                            <h1 class="event-page__heading">
                                Reserve our meeting rooms for your next event in Tashkent
                            </h1>
                            <div class="event-page__text-hide" :class="{autoheight:isActive}">
                                With three outstanding meeting rooms that are designed to host all kinds of gatherings from small meetings to large receptions for up to 250 guests, the Sunrine Blu is an ideal venue for your next event in Tashkent. We can arrange the furniture in our Grand Ballroom, Turquoise Room, and Sapphire Room in a variety of setups as per your requirement. Each room comes with modern audiovisual equipment, videoconferencing facilities, and high-speed wireless internet. Our dedicated Meetings & Events coordinator helps you plan every aspect of your event and ensure that everything runs smoothly and our experienced chefs offer customized menus for your guests. An on-site business center is also available for the meeting delegates.
                            </div>
                            <b-button class="event-page__text-btn" variant="outline-light">
                                <span @click="isActive = !isActive" v-if="isActive === false">
                                    Read more
                                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                                </span>
                                <span v-else @click="isActive = !isActive">
                                    Read less
                                    <font-awesome-icon :icon="['fas', 'angle-up']" />
                                </span>
                            </b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="event-page__contact">
                <b-container>
                    <b-row>
                        <b-col cols="12">
                            <h3 class="event-page__contact-title">
                                Contact information
                            </h3>
                            <div class="event-page__contact-email">
                                <font-awesome-icon :icon="['fas', 'envelope']" />
                                <a href="mailto:reservation.tashkent@radissonblu.com">
                                    reservation.tashkent@Sunrise.com
                                </a>
                            </div>                        
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="event-page__features">
                <b-container>
                    <b-row>
                        <b-col md="12">
                            <h2 class="event-page__features-title">
                                Key features
                            </h2>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="12">
                            <ul class="event-page__features-list d-flex justufy-content-between">
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'handshake']" />
                                    <span>3 meeting rooms</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'users']" />
                                    <span>503 person max. capacity</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'hammer']" />
                                    <span>Catering service</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'wifi']" />
                                    <span>Free Wi-Fi</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'parking']" />
                                    <span>Complimentary parking</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'print']" />
                                    <span>Printing services</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" />
                                    <span>Reception</span>
                                </li>
                                <li class="event-page__features-item">
                                    <font-awesome-icon :icon="['fas', 'thermometer-quarter']" />
                                    <span>Individual room climate control</span>
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="event-page__multimedia">
                <b-container>
                    <b-row>
                        <b-col cols="12">
                            <h2 class="event-page__multimedia-title">Meeting packages</h2>
                        </b-col>
                    </b-row>
                    <b-row class="d-flex">
                        <b-col lg="6">
                            <b-img src="../assets/images/site_logo.jpg" fluid-grow rounded mx-auto d-block alt="site_logo" style="width:450px !important"></b-img>
                        </b-col>
                        <b-col lg="6">
                            <h3 class="event-page__multimedia-heading">Custom tours for your team</h3>
                            <h5 class="event-page__multimedia-subtitle">Chimgan and Charvak tours</h5>
                            <p class="event-page__multimedia-text" :class="{autoheight:isActive}" >
                                Take your business meeting to a new level with a recreational trip to the Chimgan mountains and Charvak reservoir with your the entire team. Start the tour with a long and scenic drive to the Chimgan mountains. Take the cable car to Kumbel peak. Enjoy the spectacular views and even if you are not able to take the cable car, the picturesque scenery of the mountainous region is sure wow you. Continue to the shore of Charvak reservoir and enjoy a different kind of tranquil beauty. Enjoy sumptuous lunch at the Chinaras restaurant where you can even see rock carvings from prehistoric era.
Price per person: USD 30* (may vary as per season)
*Includes: Transportation, tour guide, and lunch</p>
                            <b-button variant="outline-light" class="event-page__multimedia-btn" >
                                <span @click="isActive = !isActive" v-if="isActive === false">
                                    Read more
                                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                                </span>
                                <span v-else @click="isActive = !isActive">
                                    Read less
                                    <font-awesome-icon :icon="['fas', 'angle-up']" />
                                </span>
                                
                            </b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </b-container>
        <div class="event-page__banner">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <div class="event-page__banner-text">
                            <small>Meet your every objective with Sunrise Meetings</small>
                            <h3 class="event-page__banner-title">Discover Sunrise Meetings</h3>
                            <p>Our dedicated team, attention to detail, and outstanding facilities in destinations around the world ensure the success of your meetings and events.</p>
                        </div>
                        <div class="event-page__banner-link">
                            <a href="/" target="_blank">Find out more</a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="event-page__footer">
            <b-container>
                <b-row>
                    <b-col cols="12" class="event-page__footer-list">
                        <b-col lg="4" class="event-page__footer-item">
                            <div class="event-page__footer-title">Sunrise Hotels in Tashkent</div>
                            <a href="/" target="_blank" class="event-page__footer-link">Need help?</a>
                        </b-col>
                        <b-col lg="4" class="event-page__footer-item">
                            <div class="event-page__footer-title">Follow us on social media</div>
                            <ul class="event-page__footer-social">
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    </a>
                                </li>
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'instagram']" />
                                    </a>
                                </li>
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'pinterest']" />
                                    </a>
                                </li>
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                    </a>
                                </li>
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'youtube']" />
                                    </a>
                                </li>
                                <li class="event-page__footer-social-item">
                                    <a href="/">
                                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                    </a>
                                </li>
                            </ul>
                        </b-col>
                        <b-col lg="4" class="event-page__footer-item">
                            <div class="event-page__footer-title">Never miss out on our most popular deals</div>
                            <b-form inline class="event-page__footer-form"> 
                                <b-input type="email" placeholder="email address" required class="event-page__footer-input"></b-input>
                                <b-button type="submit" variant="outline-light" class="event-page__footer-btn">Subscribe</b-button> 
                            </b-form>
                        </b-col>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                isActive:false,
            }
        },
        methods: {
        }
    }
</script>