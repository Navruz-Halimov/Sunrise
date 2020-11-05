<template>
  <div class="attractions mt-4">
    <div class="attractions__title">
      <h2>{{ $t('attraction.attraction') }}</h2>
    </div>
    <div class="attractions__map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2119.092003755132!2d69.31276501356574!3d41.31215600463961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5131ebd9013%3A0x4183b783c23f57eb!2sSunrise%20Hotel!5e0!3m2!1sru!2s!4v1604575195824!5m2!1sru!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <b-container>
      <b-row class="attractions__items">
        <b-col class="mt-5" cols="8" sm="6" offset-sm="0" md="6" lg="4"
               v-for="(attraction,index) of attractions" :key="index" >
          <b-card
            :img-src="attraction.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="cards mb-2"
          >
            <h4>{{ attraction.name }}</h4>
            <hr />
            <b-card-text>
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="att-icons"/>
              {{ attraction.address }}
            </b-card-text>
            <b-card-text>
              <font-awesome-icon :icon="['fas', 'compass']" class="att-icons" />
              <p class="mb-0">
                {{ attraction.kilometer }}
                <a :href="attraction.direction" target="_blank">Get Directions</a>
              </p>
            </b-card-text>
            <b-card-text>
              <font-awesome-icon :icon="['fas', 'link']" class="att-icons" />
              <a :href="attraction.map" target="_blank">Show on map</a>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        attractions: [
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipMh2sx17zPaEGOD-maMsG7UOnIar3VcUaVWS8uS=w408-h271-k-no',
            name: '',
            address: '',
            kilometer: '',
            direction: '',
            map: '',
          }
        ],
      }
    }
  }
</script>
