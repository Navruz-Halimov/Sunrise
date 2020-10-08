<template>
    <div class="offer-page">
        <b-container>
            <b-row>
                <b-col lg="5" class="offer-page__left-col">
                    <b-img src="../assets/images/offer_img.jpg" alt="" class="offer-page__img"></b-img>
                </b-col>
                <b-col lg="7" class="offer-page__right-col">
                    <div class="offer-page__title">Change of Seasons. Change of Scenery.</div>
                    <div class="offer-page__text">
                        Whatever new view you choose, Bonus Journeys is back with up to 4x points and double
                         nights toward tier status through January 4, 2021.
                    </div>
                    <div class="offer-page__registr">
                        <span>Registration required.</span>
                        <b-link href="/">Register Now</b-link>
                    </div>
                    <div class="offer-page__info">
                        <span v-b-toggle.collapse >
                            TERMS AND CONDITIONS
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </span>
                        <b-collapse id="collapse">
                            <b-card>
                                Triple Points Bonus: You must be a member of World of Hyatt and register for 
                                the promotion between October 1, 2020 and November 30, 2020 to participate.
                                To join World of Hyatt, visit worldofhyatt.com, and to register for the promotion,
                                visit hyatt.com/bonusjourneys. All eligible stays under this promotion must 
                                be completed October 1, 2020 through January 4, 2021 (“Promotion Period”). 
                                Beginning on your first eligible stay after registration, you will receive 
                                Triple Points on eligible spend for stays at Hyatt hotels and resorts worldwide
                                and participating M life Rewards destinations, Small Luxury Hotels of the World
                                (“SLH”) properties, and Lindblad Expeditions. Maximum 150,000 Bonus Points 
                                may be earned for the Triple Points Bonus during Promotion Period.
                            </b-card>
                        </b-collapse>
                    </div>
                    <div class="offer-page__check">
                        <b-button></b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>