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
                            <div class="event-page__text-hide">
                                With three outstanding meeting rooms that are designed to host all kinds of gatherings from small meetings to large receptions for up to 250 guests, the Radisson Blu is an ideal venue for your next event in Tashkent. We can arrange the furniture in our Grand Ballroom, Turquoise Room, and Sapphire Room in a variety of setups as per your requirement. Each room comes with modern audiovisual equipment, videoconferencing facilities, and high-speed wireless internet. Our dedicated Meetings & Events coordinator helps you plan every aspect of your event and ensure that everything runs smoothly and our experienced chefs offer customized menus for your guests. An on-site business center is also available for the meeting delegates.
                            </div>
                            <b-button class="event-page__text-btn">
                                <span>Read more</span>
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
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
                                    reservation.tashkent@radissonblu.com
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
                                    <font-awesome-icon :icon="['fas', 'wifi']" />
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
        </b-container>
    </div>
</template>