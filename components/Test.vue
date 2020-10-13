<template>
  <div class="gallery">
    <b-container>
      <b-row class="gallery__content">
        <b-col
          v-for="(image, index) of images.slice(0, 10)"
          :key="index"
          cols="10"
          offset="1"
          sm="6"
          offset-sm="0"
          md="6"
          lg="3"
        >
          <div class="photo" @click.prevent="show(index)">
            <img class="photo__img" :src="require(`../assets/images/rooms/${image}`)"  alt="gallery image" />
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
          <img v-for="i of images" :key="i" :src="require(`../assets/images/rooms/${i}`)" />
        </div>
        <div class="prev" @click.stop="prev" :class="{ invisible: !hasPrev() }">
          <svg
            class="pointer-events-none"
            fill="#777"
            height="40"
            viewBox="0 0 24 24"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
            <path d="M0-.5h24v24H0z" fill="none" />
          </svg>
        </div>
        <div class="next" @click.stop="next" :class="{ invisible: !hasNext() }">
          <svg
            class="pointer-events-none"
            fill="#777"
            height="40"
            viewBox="0 0 24 24"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            <path d="M0-.25h24v24H0z" fill="none" />
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
        'ABDUMANNONRAKHIMOVV-162.JPG',
        'ABDUMANNONRAKHIMOVV-194.JPG',
        'ABDUMANNONRAKHIMOVV-217.JPG',
        'ABDUMANNONRAKHIMOVV-218.JPG',
        'ABDUMANNONRAKHIMOVV-235.JPG',
        'ABDUMANNONRAKHIMOVV-239.JPG',
        'ABDUMANNONRAKHIMOVV-241.JPG',
        'ABDUMANNONRAKHIMOVV-258.JPG',
        'ABDUMANNONRAKHIMOVV-260.JPG',
        'ABDUMANNONRAKHIMOVV-261.JPG',
        'ABDUMANNONRAKHIMOVV-262.JPG',
        'ABDUMANNONRAKHIMOVV-263.JPG',
        'ABDUMANNONRAKHIMOVV-279.JPG',
        'ABDUMANNONRAKHIMOVV-281.JPG',
        'ABDUMANNONRAKHIMOVV-286.JPG',
        'ABDUMANNONRAKHIMOVV-289.JPG',
        'photo_2020-10-12_16-13-54.jpg',
        'photo_2020-10-12_16-13-55.jpg',
        'photo_2020-10-12_16-13-56.jpg',
        'photo_2020-10-12_16-14-03 (2).jpg',
        'photo_2020-10-12_16-14-05 (3).jpg',
        'photo_2020-10-12_16-14-06 (2).jpg',
        'photo_2020-10-12_16-14-15 (2).jpg',
        'photo_2020-10-12_16-14-16 (2).jpg',
        'photo_2020-10-12_16-14-20 (4).jpg',
        'photo_2020-10-12_16-14-22 (3).jpg',
        'photo_2020-10-12_16-14-56 (2).jpg',
        'photo_2020-10-12_16-14-57.jpg',
        'photo_2020-10-12_16-14-58 (3).jpg',
        'photo_2020-10-12_16-15-06.jpg',
        'photo_2020-10-12_16-15-07 (2).jpg',
        'photo_2020-10-12_16-15-08 (2).jpg',
        'photo_2020-10-12_16-15-08.jpg',
        'photo_2020-10-12_16-15-09 (2).jpg',
        'photo_2020-10-12_16-15-11 (2).jpg',
        'photo_2020-10-12_16-15-17 (2).jpg',
        'photo_2020-10-12_16-15-18.jpg',
        'photo_2020-10-12_16-15-19 (3).jpg',
        'photo_2020-10-12_16-15-19.jpg',
        'photo_2020-10-12_16-15-21 (3).jpg',
        'photo_2020-10-12_16-15-23 (2).jpg',
        'photo_2020-10-12_16-15-24.jpg',
        'photo_2020-10-12_16-15-25 (2).jpg',
        'photo_2020-10-12_16-15-28 (3).jpg',
        'photo_2020-10-12_16-15-30 (2).jpg',
        'photo_2020-10-12_16-15-39 (2).jpg',
        'photo_2020-10-12_16-15-41 (2).jpg',
        'photo_2020-10-12_16-15-42 (2).jpg',
        'photo_2020-10-12_16-15-43 (2).jpg',
        'photo_2020-10-12_16-15-46 (3).jpg',
        'photo_2020-10-12_16-15-47 (3).jpg',
        'photo_2020-10-12_16-15-49.jpg',
        'photo_2020-10-12_16-15-51 (3).jpg',
        'photo_2020-10-12_16-15-53 (2).jpg',
      ],
      visible: false,
      index: 0,
      id: 0,
    }
  },
  methods: {
    show(id) {
      this.visible = true
      this.id = id
    },
    hide() {
      this.visible = false
      this.id = 0
    },
    hasNext() {
      return this.id + 1 < this.images.length
    },
    hasPrev() {
      return this.id - 1 >= 0
    },
    prev() {
      if (this.hasPrev()) {
        this.id -= 1
      }
    },
    next() {
      if (this.hasNext()) {
        this.id += 1
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
            this.next()
            break
          case 'ArrowLeft':
            this.prev()
            break
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault()
            break
          case 'Escape':
            this.hide()
            break
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
}
</script>
