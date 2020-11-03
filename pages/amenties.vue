<template>
  <div class="amenties">
    <b-container>
      <h1 class="text-center amenties__heading">Amenities</h1>
      <div class="amenties__inner">
        <div class="amenties__header">
          <h6>Most popular facilities</h6>
          <ul>
            <li>Free WiFi</li>
            <li>Airport shuttle</li>
            <li>Family rooms</li>
            <li>Free parking</li>
            <li>24-hour front desk</li>
            <li>Non-smoking rooms</li>
          </ul>
        </div>
        <div class="amenties__body">
          <b-row>
            <b-col md="4">
              <ul class="outdoor__list">
                <div class="outdoor__item-wrap" v-for="(index,amentyid) in amenties.slice(0,3)" :key="amentyid">
                  <div class="outdoor__item-container">
                    <img :src="index.icon" alt="" />
                    <span class="outdoor__item-heading">{{index.title}}</span>
                  </div>
                     <div class="outdoor__item-list" v-html="index.description"></div>
                </div>            
              </ul>
            
            </b-col>
            <b-col md="4">
               <ul class="outdoor__list">
                <div class="outdoor__item-wrap" v-for="(index,amentyid) in amenties.slice(3,6)" :key="amentyid">
                  <div class="outdoor__item-container">
                    <img :src="index.icon" alt="" />
                    <span class="outdoor__item-heading">{{index.title}}</span>
                  </div>
                     <div class="outdoor__item" v-html="index.description"></div>
                </div>            
              </ul>
            </b-col>
            <b-col md="4">
           <ul class="outdoor__list">
                <div class="outdoor__item-wrap" v-for="(index,amentyid) in amenties.slice(6,9)" :key="amentyid">
                  <div class="outdoor__item-container">
                    <img :src="index.icon" alt="" />
                    <span class="outdoor__item-heading">{{index.title}}</span>
                  </div>
                     <div class="outdoor__item" v-html="index.description"></div>
                </div>            
              </ul>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      amenties:[],

    }
  },
  methods:{
    async getAmenties(){
      await this.$axios.get('/amenity/list/').then(res=>{
        console.log(res)
        this.amenties=res.data;
      })
    }
  },
  mounted(){
    this.getAmenties();
  }
}
</script>
