<template>
  <div class="gallery">
    <b-container>
      <b-row class="gallery__content">
        <b-col v-for="(image,index) of images" :key="index" cols="10" offset="1" sm="6" offset-sm="0" md="6" lg="3">
          <div class="photo" @click.prevent="show(index)">
            <img class="photo__img" :src="image" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="modals" v-if="visible" @click="hide">
      <button type="button" @click.stop="hide" class="close">
        <i></i>
        <i></i>
      </button>
      <div class="modals__content" @click.stop="">
        <div class="modals__img">
          <img :src="images[id]">
        </div>
        <div class="prev"
             @click.stop="prev"
             :class="{'invisible': ! hasPrev()}">
          <svg class="pointer-events-none" fill="#777" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div class="next"
             @click.stop="next"
             :class="{'invisible': ! hasNext()}">
          <svg class="pointer-events-none" fill="#777" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            <path d="M0-.25h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img from '../assets/images/rooms/ABDUMANNONRAKHIMOVV-162.JPG'
  export default {
    data() {
      return {
        images: [
          'data:image/jpeg;base64,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',
          'img',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-162.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-194.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-217.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-218.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-235.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-239.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-241.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-258.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-260.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-261.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-262.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-263.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-279.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-281.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-286.JPG',
          '../assets/images/rooms/ABDUMANNONRAKHIMOVV-289.JPG',
          '../assets/images/rooms/photo_2020-10-12_16-13-54.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-13-55.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-13-56.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-03 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-05 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-06 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-15 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-16 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-20 (4).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-22 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-56 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-57.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-14-58 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-06.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-07 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-08 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-08.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-09 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-11 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-17 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-18.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-19 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-19.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-21 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-23 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-24.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-25 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-28 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-30 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-39 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-41 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-42 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-43 (2).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-46 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-47 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-49.jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-51 (3).jpg',
          '../assets/images/rooms/photo_2020-10-12_16-15-53 (2).jpg',
        ],
        visible: false,
        index: 0,
        id: 0,
      };
    },
    methods: {
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
      onKeydown(e) {
        if (this.visible) {
          switch (e.key) {
            case 'ArrowRight':
              this.next();
              break;
            case 'ArrowLeft':
              this.prev();
              break;
            case 'ArrowDown':
            case 'ArrowUp':
            case ' ':
              e.preventDefault();
              break;
            case 'Escape':
              this.hide();
              break;
          }
        }
      },
    },
    mounted() {
      window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
      window.removeEventListener('keydown', this.onKeydown)
    },
  };
</script>
