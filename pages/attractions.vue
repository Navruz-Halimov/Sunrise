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
            url: 'https://media-cdn.tripadvisor.com/media/photo-w/0c/a8/0f/f6/exterior-view.jpg',
            name: 'Museum of Timurid History (Amir Timur Museum)',
            address: '13 Amir Temur Avenue, Tashkent 100000, Uzbekistan',
            kilometer: '4.1 km from Sunrise hotel',
            direction: 'https://www.google.com/maps/dir/Temuriylar+tarixi+davlat+muzeyi,+%D0%90%D0%BC%D0%B8%D1%80+%D0%A2%D0%B5%D0%BC%D1%83%D1%80+%D1%88%D0%BE%D2%B3+%D0%BA%D1%9E%D1%87%D0%B0%D1%81%D0%B8,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@41.3164865,69.2802074,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x38ae8b2efdebfa1b:0x162c34a35b86b93c!2m2!1d69.2791!2d41.3135!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2',
            map: 'https://www.google.com/maps/place/Temuriylar+tarixi+davlat+muzeyi/@41.313504,69.2769113,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b2efdebfa1b:0x162c34a35b86b93c!8m2!3d41.3135!4d69.2791',
          },
          {
            url: 'https://media-cdn.tripadvisor.com/media/photo-w/08/96/e7/b2/piazza-dell-indipendenza.jpg',
            name: 'Independence Square (Mustakillik Square)',
            address: 'Independence Square, Tashkent, Uzbekistan',
            kilometer: '5.5 km from Sunrise hotel',
            direction: 'https://www.google.com/maps/dir/%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C+%D0%9C%D1%83%D1%81%D1%82%D0%B0%D0%BA%D0%B8%D0%BB%D0%BB%D0%B8%D0%BA,+Must%D0%B0qillik+m%D0%B0yd%D0%BEni,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@41.3203641,69.2740148,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x38ae8b3d1fa871fd:0x4258d276119ab627!2m2!1d69.2667148!2d41.3154334!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2',
            map: `https://www.google.com/maps/place/Ploshchad'+Mustakillik/@41.3154374,69.2645261,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b3d1fa871fd:0x4258d276119ab627!8m2!3d41.3154334!4d69.2667148`,
          },
          {
            url: 'https://media-cdn.tripadvisor.com/media/photo-w/13/53/92/b8/all-lit-up.jpg',
            name: 'Registan',
            address: `Registon ko'chasi, Samarqand, Oʻzbekiston`,
            kilometer: '356 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/Registan,+Registon+ko'chasi,+Samarqand/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.5117979,67.0345218,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3f4d18b7c2e59337:0x532c8e039ecc92af!2m2!1d66.9757204!2d39.654676!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2`,
            map: `https://www.google.com/maps/place/Registon/@39.6550837,66.9741837,17.66z/data=!4m5!3m4!1s0x3f4d18b7c2e59337:0x532c8e039ecc92af!8m2!3d39.654676!4d66.9757204`,
          },
          {
            url: 'https://media-cdn.tripadvisor.com/media/photo-o/03/d6/67/9e/great-minaret-of-the.jpg',
            name: 'Minaret Kalyan',
            address: `9 Khakikat Str., Buxoro, Oʻzbekiston`,
            kilometer: '600 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/Minorai+kalon,+9+Khakikat+Str.,+Buxoro,+O%CA%BBzbekiston/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.5028124,65.1424484,7z/data=!4m19!4m18!1m10!1m1!1s0x3f50061dc9c1e65f:0x6f2c28eb11a76984!2m2!1d64.4150181!2d39.7757203!3m4!1m2!1d68.9327026!2d40.4435592!3s0x38b1f83e2599b76f:0x38442af3e60ececb!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2`,
            map: `https://www.google.com/maps/place/Minorai+kalon/@39.7757244,64.4128294,17z/data=!3m1!4b1!4m5!3m4!1s0x3f50061dc9c1e65f:0x6f2c28eb11a76984!8m2!3d39.7757203!4d64.4150181`,
          },
          {
            url: 'https://lh3.googleusercontent.com/proxy/rFWq8GHGJYE2jUoOkUM0b9QADauHUFDkUITmIAdMNDCxkJMWBUfsSDJulkrN48Ldjj6T-92ytnb_UXlT4ab1zQ0Asc6Hi3M',
            name: 'Shahi Zinda architectural complex',
            address: `M-37, Samarkand, Oʻzbekiston`,
            kilometer: '354 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/%D0%A8%D0%B0%D1%85%D0%B8+%D0%97%D0%B8%D0%BD%D0%B4%D0%B0,+M-37,+Samarqand/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.5161594,67.0405281,8z/data=!4m15!4m14!1m5!1m1!1s0x3f4d18a4c6c66ab5:0x607614aaff7009ee!2m2!1d66.987778!2d39.663055!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2!5i2`,
            map: `https://www.google.com/maps/place/Shohizinda/@39.6630591,66.9855893,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d18a4c6c66ab5:0x607614aaff7009ee!8m2!3d39.663055!4d66.987778`,
          },
          {
            url: 'https://media-cdn.tripadvisor.com/media/photo-w/13/fa/f8/7d/caption.jpg',
            name: 'Ichan-Kala',
            address: `Xiva, Oʻzbekiston`,
            kilometer: '1056 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/%D0%98%D1%87%D0%B0%D0%BD-%D0%9A%D0%B0%D0%BB%D0%B0,+Xiva/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.6178805,62.5918508,7z/data=!4m19!4m18!1m10!1m1!1s0x41dfa411a8e50c73:0x3920d4663f44b9c6!2m2!1d60.35933!2d41.3780695!3m4!1m2!1d69.2561739!2d40.3846102!3s0x38b1ea44448deb39:0x783472239ca3e673!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2`,
            map: `https://www.google.com/maps/place/Ichan+Qa'la/@41.3780735,60.3571413,17z/data=!3m1!4b1!4m5!3m4!1s0x41dfa411a8e50c73:0x3920d4663f44b9c6!8m2!3d41.3780695!4d60.35933`,
          },
          {
            url: 'https://media-cdn.tripadvisor.com/media/photo-w/09/f0/e5/8b/state-museum-of-history.jpg',
            name: 'State Museum of History of Uzbekistan',
            address: `3 Buyuk Turon Street, Tashkent, Uzbekistan`,
            kilometer: '5.2 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9+%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0,+Buyuk+Turon+ko'chasi,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@41.3195255,69.2752683,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x38ae8b238fb120d3:0x46bc080843d639a2!2m2!1d69.2692218!2d41.3115068!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2`,
            map: `https://www.google.com/maps/place/O%CA%BBzbekiston+tarixi+davlat+muzeyi/@41.3115108,69.2670331,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b238fb120d3:0x46bc080843d639a2!8m2!3d41.3115068!4d69.2692218`,
          },
          {
            url: 'http://cdn.tripzaza.com/ru/destinations/files/2018/05/16-Ulugh_Beg_Observatory-e1526606012157.jpg',
            name: 'Ulugbek Observatory',
            address: `Toshkent yo'li, Samarqand, Oʻzbekiston`,
            kilometer: '352 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/%D0%9E%D0%B1%D1%81%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F+%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA%D0%B0,+Toshkent+yo'li,+Samarqand/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.5221878,67.0493696,8z/data=!4m19!4m18!1m10!1m1!1s0x3f4d2273770f4189:0x6cfc09ae9d0b2352!2m2!1d67.00563!2d39.6751933!3m4!1m2!1d69.2370109!2d40.3419301!3s0x38b1eb26fe2e255b:0xb591d2ecd46d284c!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2`,
            map: `https://www.google.com/maps/place/Ulug%CA%BBbek+rasadxonasi/@39.6751974,67.0034413,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d2273770f4189:0x6cfc09ae9d0b2352!8m2!3d39.6751933!4d67.00563`,
          },
          {
            url: 'http://cdn.tripzaza.com/ru/destinations/files/2018/05/7-Bibi-Khanym_Mosque-e1526605718236.jpg',
            name: 'Bibi-Khanum Mosque in Samarkand',
            address: `Bibikhonim Str., Samarqand, Oʻzbekiston`,
            kilometer: '355 km from Sunrise hotel',
            direction: `https://www.google.com/maps/dir/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C+%D0%91%D0%B8%D0%B1%D0%B8-%D0%A5%D0%B0%D0%BD%D1%83%D0%BC,+Bibikhonim+Str.,+Samarqand/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+O%CA%BBzbekiston/@40.5481495,67.1141018,8z/data=!4m15!4m14!1m5!1m1!1s0x3f4d18b96f1a8c49:0x710d9f233b69199e!2m2!1d66.9800816!2d39.660748!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e2!5i2`,
            map: `https://www.google.com/maps/place/Bibi-Xonum/@39.6607521,66.9778929,17z/data=!3m1!4b1!4m5!3m4!1s0x3f4d18b96f1a8c49:0x710d9f233b69199e!8m2!3d39.660748!4d66.9800816`,
          }
        ],
      }
    }
  }
</script>
