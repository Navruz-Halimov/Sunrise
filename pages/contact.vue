<template>
    <div class="contact-page">
        <b-container>
            <b-row>
                <b-col sm="12">
                    <h1 class="contact-page__heading">
                        {{$t('contact.info')}}
                    </h1>
                    <div class="contact-page-details">
                        <b-container>
                            <b-row>
                                <b-col cols="12">
                                    <div class="contact-page-details__cards">
                                        <h3 class="contact-page-details__title">{{$t('contact.general')}}</h3>
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
                                    <h2 class="contact-page-info__title">
                                        {{$t('contact.heading')}}
                                        
                                    </h2>
                                </b-col>
                                <b-col cols="12">
                                    {{$t('contact.text')}}
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
                            <strong>
                                {{$t('contact.how')}}
                            </strong>
                            <font-awesome-icon :icon="['fas', 'times']" class="closeButton" />
                        </button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-form inline class="contact-page-btn__form" :class="{directionToggle:isActive}">
                        <b-col lg="3" class="p-0">
                            <b-form-group>
                                <!-- <label for="input" class=""></label> -->
                                <b-input 
                                    id="input" 
                                    :placeholder="$t('contact.inp')" 
                                    class="form-control"
                                >
                                </b-input>
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
                                <b-button type="submit" class="contact-page-btn__get">
                                    {{$t('contact.btn')}}    
                                </b-button>
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
            return{
                isActive:false, 
                show: false,
            }
        },
        methods: {
            
        }
    }
</script>
