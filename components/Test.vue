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
      <div class="modals__content">
        <div class="modals__img">
          <img :src="images[id]">
        </div>
        <div class="prev"
             @click.stop="prev"
             :class="{'invisible': ! hasPrev()}">
          <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div class="next"
             @click.stop="next"
             :class="{'invisible': ! hasNext()}">
          <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
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
      // thumbnail: {
      //   type: String,
      //   required: true,
      // },
      images: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
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
