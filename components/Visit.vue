<template>
  <div class="visit">
    <b-container>
      <h1>{{ attractions }}</h1>
      <b-row>
        <b-col class="visit__title" lg="12">
          <h2>{{$t('visit.title')}}</h2>
        </b-col>
        <b-col cols="10" offset="1" sm="6" offset-sm="0" md="6" lg="3"
               v-for="(image,index) of visitImages" :key="index" >
          <div class="visit__card">
            <img :src="image.url" alt="">
            <div class="visit__text" @click="show(index)">
              <h6>{{image.title}}</h6>
              <span class="like" @click.stop="">
<!--                <button type="button" @click.once="likeBtn(image.id)">-->
<!--                <svg :class="{ 'like__icon&#45;&#45;active': image.id === likeID }" class="like__icon" viewBox="0 0 18 15" fill="currentColor" width="21" height="21">-->
<!--                  <path fill="currentColor" d="M9,15c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-6-3.9-7.8-7C0,6.3-0.3,4.5,0.3,3C0.8,1.7,1.7,0.7,3,0.3	C5.3-0.5,7.7,0.7,9,2.4c1.4-1.9,4-2.9,6.1-2.1c1.2,0.5,2.2,1.4,2.6,2.6c0.6,1.5,0.3,3.3-0.6,5c-1.8,3.3-7.5,6.8-7.8,7	C9.2,15,9.1,15,9,15z"></path>-->
<!--                </svg>-->
<!--                </button>-->
<!--                <i>{{}}</i>-->
              </span>
            </div>
          </div>
        </b-col>
        <b-col lg="12">
          <b-button
            class="btn-img my-4"
            :to="localePath('/attractions')" >
            {{$t('gallery.btn')}}
          </b-button>
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
              <img :src="visitImages[id].url" alt="">
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
    props: {
      attractions: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        visitImages: [
          {
            url: 'https://c1.wallpaperflare.com/preview/504/886/429/tashkent-2017-uzbekistan-middle-asia.jpg',
            title: 'Martyrs\' Memorial Square',
            id: 1
          },
          {
            url: 'https://images.unsplash.com/photo-1567883975623-613f78c2ebc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: 'Charvoq',
            id: 2
          },
          {
            url: 'https://c0.wallpaperflare.com/preview/472/671/649/samarqand-uzbekistan-registan-ensemble-ruins.jpg',
            title: 'Samarkand',
            id: 3
          },
          {
            url: 'https://c1.wallpaperflare.com/preview/264/590/560/tashkent-independence-square-monument-water-games.jpg',
            title: 'Independence Square',
            id: 4
          },
          {
            url: 'https://media.gettyimages.com/photos/amir-timur-square-seen-from-above-picture-id505629331?k=6&m=505629331&s=612x612&w=0&h=IkjlKwJbQ-GX17eLrmwHHR6TULy6UklUbJaNmkYq5GA=',
            title: 'Amir Temur Square',
            id: 5
          },
          {
            url: 'https://media.gettyimages.com/photos/fayzobod-khanaka-also-known-as-fayzabad-khanaka-bukhara-uzbekistan-picture-id850909904?k=6&m=850909904&s=612x612&w=0&h=VS1jAW0-IVDW-WRjxrYxZeYJ70CeOb4jwXxD5iE7u_g=',
            title: 'Bukhara',
            id: 6
          },
          {
            url: 'https://media.gettyimages.com/photos/khiva-sunset-twilight-uzbekistan-old-town-islam-khoja-minaret-xiva-picture-id1188560326?k=6&m=1188560326&s=612x612&w=0&h=nSH6aTTW50EZ9EHrAjiq6vnf2q715qisO4wstT-5llg=',
            title: 'Xiva',
            id: 7
          },
          {
            url: 'https://media.gettyimages.com/photos/alisher-navoi-metro-station-in-tashkent-uzbekistan-picture-id1184024108?k=6&m=1184024108&s=612x612&w=0&h=bNdjCThmpM4aBvgxhvDscXZM-gTp1ji-BlarEcAR7B4=',
            title: 'Alisher Navoi',
            id: 8
          },
        ],
        id: 0,
        index: 0,
        visible: false,
        likeID: null,
        counter: 0,
      }
    },
    methods: {
      likeBtn(id) {
        // this.likeID = id;
        // Math.floor(Math.random() * 100)
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
        return this.id + 1 < this.visitImages.length;
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
