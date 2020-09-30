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
                                <b-col lg="6">
                                    <div class="contact-page-details__cards">
                                        <h3 class="contact-page-details__title">General contact</h3>
                                        <div class="contact-page-details__phone">
                                            <font-awesome-icon :icon="['fas', 'phone-alt']" />
                                            <a href="tel:+998 78 1204900">+998 78 1204900</a>
                                        </div>
                                        <div class="contact-page-details__email">
                                            <font-awesome-icon :icon="['fas', 'envelope']" />
                                            <a href="mailto:reservation.tashkent@radissonblu.com">
                                                reservation.tashkent@radissonblu.com
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
                                    <h2 class="contact-page-info__title">How to get to the Radisson Blu Hotel, Tashkent</h2>
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
                <b-row></b-row>
            </b-container>
        </div>
        <div class="contact-page-btn">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <button class="contact-page-btn__button">
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            <strong>How to arrive at Amir Temur Street 88 Tashkent 100084 Uzbekistan</strong>
                            <font-awesome-icon :icon="['fas', 'times']" class="closeButton" />
                        </button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-form inline class="contact-page-btn__form">
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
    </div>
</template>
<script>
    export default {
        data() {
            
        },
        methods: {
            openBlock: function() {
                contactMapBtn.classList.toggle('button-show');
            }
        }
    }
</script>
