<template>
  <div class="offer-page">
    <b-container>
      <b-col cols="12">
        <h2 class="offer-page__title">Offer</h2>
      </b-col>
      <b-row
        class="offer-page__wrap"
        v-for="(offer, index) of offers"
        :key="index.id"
      >

        <b-col md="5">
          <div class="offer-page__img">
            <b-img :src="offer.image" :alt="offer.title"></b-img>
          </div>
        </b-col>
        <b-col md="7">
          <div class="offer-page__info">
            <div class="offer-page__info-title">{{ offer.title }}</div>
            <div
              class="offer-page__info-subtitle"
              v-html="offer.description_1"
            ></div>
            <div class="offer-page__registr">
              <span>Registration required.</span>
              <b-link href="/" class="offer-page__link">Register Now</b-link>
            </div>
            <div class="offer-page__text">
              <span v-b-toggle="'collapse' + index" > TERMS AND CONDITIONS </span>
              <b-collapse :id="'collapse' + index">
                <b-card v-html="offer.description_2"> </b-card>
              </b-collapse>
            </div>
            <div class="offer-page__check">
              <b-button variant="outline-light" class="offer-page__btn"
                >Check Availability</b-button
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offers: [
       { image:require('../assets/images/3D/news/1.jpg'),
        title:"Tashkent Room is the perfect",
        description_1:"Tashkent Room is the perfect",
        description_2:"With 115 sq.m, the Tashkent Room is the perfect solution for holding small and medium-sized meetings, events and receptions. Flexible enough to be set up in banquet, reception, boardroom, theatre, schoolroom and u-shaped styles the Tashkent Room hosts anywhere from 20 to 120 guests. Named after the warm  capital city of Uzbekistan  the room offers natural daylight and  features warm, elegant decor and spacious layouts."
        },
           { image:require('../assets/images/3D/news/2.jpg'),
        title:"Tashkent Room is the perfect",
        description_1:"Tashkent Room is the perfect",
        description_2:"With 115 sq.m, the Tashkent Room is the perfect solution for holding small and medium-sized meetings, events and receptions. Flexible enough to be set up in banquet, reception, boardroom, theatre, schoolroom and u-shaped styles the Tashkent Room hosts anywhere from 20 to 120 guests. Named after the warm  capital city of Uzbekistan  the room offers natural daylight and  features warm, elegant decor and spacious layouts."
        },
           { image:require('../assets/images/3D/news/1night.jpg'),
        title:"Tashkent Room is the perfect",
        description_1:"Tashkent Room is the perfect",
        description_2:"With 115 sq.m, the Tashkent Room is the perfect solution for holding small and medium-sized meetings, events and receptions. Flexible enough to be set up in banquet, reception, boardroom, theatre, schoolroom and u-shaped styles the Tashkent Room hosts anywhere from 20 to 120 guests. Named after the warm  capital city of Uzbekistan  the room offers natural daylight and  features warm, elegant decor and spacious layouts."
        },
           { image:require('../assets/images/3D/news/2night.jpg'),
        title:"Tashkent Room is the perfect",
        description_1:"Tashkent Room is the perfect",
        description_2:"With 115 sq.m, the Tashkent Room is the perfect solution for holding small and medium-sized meetings, events and receptions. Flexible enough to be set up in banquet, reception, boardroom, theatre, schoolroom and u-shaped styles the Tashkent Room hosts anywhere from 20 to 120 guests. Named after the warm  capital city of Uzbekistan  the room offers natural daylight and  features warm, elegant decor and spacious layouts."
        },
           { image:require('../assets/images/3D/news/1.jpg'),
        title:"Tashkent Room is the perfect",
        description_1:"Tashkent Room is the perfect",
        description_2:"With 115 sq.m, the Tashkent Room is the perfect solution for holding small and medium-sized meetings, events and receptions. Flexible enough to be set up in banquet, reception, boardroom, theatre, schoolroom and u-shaped styles the Tashkent Room hosts anywhere from 20 to 120 guests. Named after the warm  capital city of Uzbekistan  the room offers natural daylight and  features warm, elegant decor and spacious layouts."
        },

      ],
    }
  },
  methods: {
    // async getOffer() {
    //   await this.$axios.get('offers/list/').then((res) => {
    //     this.offers = res.data.results
    //     console.log(this.offer)
    //   })
    // },
  },
  mounted() {
    // this.getOffer()
  },
}
</script>
