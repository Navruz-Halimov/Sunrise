<template>
  <div class="visit">
    <b-container>
      <b-row>
        <b-col class="visit__title" lg="12">
          <h2>{{$t('visit.title')}}</h2>
        </b-col>
        <b-col cols="10" offset="1" sm="6" offset-sm="0" md="6" lg="3"
               v-for="(image,index) of images" :key="index" >
          <div class="visit__card">
            <img :src="image.url" alt="">
            <div class="visit__text" @click="show(index)">
              <h6>{{image.title}}</h6>
              <span class="like" @click.stop="">
                <button type="button" @click="likeBtn(image.id)">
                <svg v-bind:class="{ 'like__icon--active': image.id === likeID }" class="like__icon" viewBox="0 0 18 15" fill="currentColor" width="21" height="21">
                  <path fill="currentColor" d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z"></path>
                </svg>
                </button>
                <i>{{counter}}</i>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="visit__modal" v-if="visible" @click.stop="hide">
      <button @click="hide" type="button" class="close">
      <i></i>
      <i></i>
      </button>
        <div class="modal__content">
            <div class="visit__img" @click.stop="">
              <img :src="images[id].url" alt="">
            </div>
            <div class="prev"
                 @click.stop="prev"
                 :class="{'invisible': ! hasPrev()}">
              <svg fill="#FFB612" height="40" viewBox="0 0 23 23" width="40" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                <path d="M0-.5h24v24H0z" fill="none"/>
              </svg>
            </div>
            <div class="next"
                 @click.stop="next"
                 :class="{'invisible': ! hasNext()}">
              <svg fill="#FFB612" height="40" viewBox="0 0 23 23" width="40" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
              </svg>
            </div>
      </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          {
            url: 'https://c1.wallpaperflare.com/preview/504/886/429/tashkent-2017-uzbekistan-middle-asia.jpg',
            title: '',
            id: 1
          },
          {
            url: 'https://images.unsplash.com/photo-1580217442567-daaff0cf13ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: '',
            id: 2
          },
          {
            url: 'https://c0.wallpaperflare.com/preview/472/671/649/samarqand-uzbekistan-registan-ensemble-ruins.jpg',
            title: '',
            id: 3
          },
          {
            url: 'https://c1.wallpaperflare.com/preview/264/590/560/tashkent-independence-square-monument-water-games.jpg',
            title: '',
            id: 4
          },
        ],
        id: 0,
        index: 0,
        visible: false,
        likeID: null,
        counter: 0
      }
    },
    methods: {
      likeBtn(id) {
        this.likeID = id;
        // this.counter++;
      },
      show(id) {
        this.visible = true;
        this.id = id;
      },
      hide() {
        this.visible = false;
        this.id = 0;
      },
      hasNext() {
        return this.id + 1 < this.images.length;
      },
      hasPrev() {
        return this.id - 1 >= 0;
      },
      prev() {
        if (this.hasPrev()) {
          this.id -= 1;
        }
      },
      next() {
        if (this.hasNext()) {
          this.id += 1;
        }
      },
    }
  }
</script>
