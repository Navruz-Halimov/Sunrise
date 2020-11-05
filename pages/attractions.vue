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
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipMj2gVFctADS3jYXo66lhiSYzTskyRG0uXTd8cw=w408-h306-k-no ',
            name: 'Memorial complex in memory of victims of repression',
            address: 'Yunusabad district Tashkent, Uzbekistan',
            kilometer: '6,9 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9+%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%B8+%D0%B6%D0%B5%D1%80%D1%82%D0%B2+%D1%80%D0%B5%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B9+%D0%BF%D1%80%D0%B8+%D0%9A%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82%D0%B5+%D0%9C%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%BE%D0%B2+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3181241,69.2836469,13.5z/data=!4m14!4m13!1m5!1m1!1s0x38aef4aaa9e21209:0x9ee6a42080259222!2m2!1d69.2882191!2d41.3469165!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/%D0%9C%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%B8+%D0%B6%D0%B5%D1%80%D1%82%D0%B2+%D1%80%D0%B5%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B9/@41.3471983,69.2870046,17.25z/data=!4m5!3m4!1s0x38aef4aa99d8a0e9:0x3364c0222bd37e8b!8m2!3d41.3476449!4d69.2884983',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipMh2sx17zPaEGOD-maMsG7UOnIar3VcUaVWS8uS=w408-h271-k-no',
            name: 'Tashkent circus',
            address: 'Khadra Square, 1, Toshkent 100011, Uzbekistan',
            kilometer: '8,1 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/Sirk,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3179398,69.2671338,14z/data=!4m14!4m13!1m5!1m1!1s0x38ae8b767e0fea69:0x57144c7c05319162!2m2!1d69.2429965!2d41.3243516!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D1%86%D0%B8%D1%80%D0%BA/@41.3241994,69.2421001,16.75z/data=!4m8!1m2!2m1!1ssirk!3m4!1s0x38ae8b767e0fea69:0x57144c7c05319162!8m2!3d41.3243516!4d69.2429965',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipOgl93H6QVirilOGEfZkmiryZm5o0DNqic4scHo=w408-h271-k-no',
            name: 'Japanese garden',
            address: 'Yunusabad district Japanese garden Tashkent, Uzbekistan',
            kilometer: '6,4 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/Yapon+Bogi,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3269949,69.2803606,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x38ae8b53fba97e07:0xc6bf9903636d4703!2m2!1d69.2823289!2d41.3406411!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/%D0%AF%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%81%D0%B0%D0%B4/@41.3394412,69.2823699,16z/data=!4m5!3m4!1s0x38ae8b53dc15862d:0x8d24b8c872b8c98!8m2!3d41.3397326!4d69.282352',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipP8IBjB0GdtEfVKO67CGBB7mUPsipUSLNOjZa-A=w408-h299-k-no',
            name: 'Tashkent Land',
            address: 'Amir Temur shoh ko\'chasi 107, Toshkent, 100084, O\'zbekiston',
            kilometer: '5,4 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/Tashkentland,+107+%D0%90%D0%BC%D0%B8%D1%80%D0%B0+%D0%A2%D0%B5%D0%BC%D1%83%D1%80%D0%B0+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82,+Tashkent+100084,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3257772,69.2810912,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x38ae8b53a8d51b2b:0xbad18833d901c3bd!2m2!1d69.284401!2d41.3393671!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/Tashkentland/@41.3388426,69.2838994,17z/data=!4m5!3m4!1s0x38ae8b53a8d51b2b:0xbad18833d901c3bd!8m2!3d41.3393671!4d69.2844012',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipPSIvvv3Vp9gvy15EYmtHr4yTrilFm8YLHDKBwm=w408-h306-k-no',
            name: 'Tashkent zoo',
            address: '232-a Boғishamol kўchasi, Toshkent, Uzbekistan',
            kilometer: '6,9 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%91%D0%BE%D0%B3%D0%B8%D1%88%D0%B0%D0%BC%D0%BE%D0%BB,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3257836,69.3087246,14z/data=!4m15!4m14!1m5!1m1!1s0x38aef4bd7ca466b5:0xa84ef0b43d49e980!2m2!1d69.3100084!2d41.3440087!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0!5i1',
            map: 'https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA/@41.3430811,69.3087649,16.25z/data=!4m5!3m4!1s0x38aef4bd7ca466b5:0xa84ef0b43d49e980!8m2!3d41.3440098!4d69.3100083',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipMqP9J8z0WjcAqmW4Y3WpfuU9kVX3pnkzjjhlef=w408-h317-k-no',
            name: 'Chorsu bazaar',
            address: '57 Tafakkur ko\'chasi, Toshkent, Uzbekistan',
            kilometer: '9,3 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/%D0%A7%D0%BE%D1%80c%D1%83+%D0%B1%D0%B0%D0%B7%D0%B0%D1%80,+Tafakkur+ko\'chasi,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3180959,69.2389213,13z/data=!4m14!4m13!1m5!1m1!1s0x38ae8b9cdd04953d:0xf8109d550917a88e!2m2!1d69.235!2d41.3266667!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/%D0%A7%D0%BE%D1%80c%D1%83+%D0%B1%D0%B0%D0%B7%D0%B0%D1%80/@41.3216275,69.225712,13.75z/data=!4m5!3m4!1s0x38ae8b9cdd04953d:0xf8109d550917a88e!8m2!3d41.3266818!4d69.2349815',
          },
          {
            url: 'https://lh5.googleusercontent.com/p/AF1QipP98qt5QoX0jvp-UbXUapKlewSGjhXwb-1Nj4iH=w408-h264-k-no',
            name: 'Hilton Tashkent City',
            address: '2, Islam Karimov Street Block 5, 100027, Узбекистан',
            kilometer: '7,9 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/Hilton+Tashkent+City,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3129488,69.270256,14z/data=!4m14!4m13!1m5!1m1!1s0x38ae8b685b689e13:0xaf4cdf526e02f5e7!2m2!1d69.2488975!2d41.3139827!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/Hilton+Tashkent+City/@41.3135193,69.2481679,17z/data=!4m8!3m7!1s0x38ae8b685b689e13:0xaf4cdf526e02f5e7!5m2!4m1!1i2!8m2!3d41.3139827!4d69.2488975',
          },
          {
            url: 'data:image/jpeg;base64,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',
            name: 'State Art Museum of Uzbekistan',
            address: '16, Toshkent, Uzbekistan',
            kilometer: '4,1 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/The+State+Museum+Of+Arts,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3034427,69.2851996,14z/data=!4m14!4m13!1m5!1m1!1s0x38ae8ad73c0e7845:0xca4415881e7cee5c!2m2!1d69.2777892!2d41.3027455!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/O\'zbekiston+davlat+sa\'nat+muzeyi/@41.3026931,69.2771669,17z/data=!4m5!3m4!1s0x38ae8ad73c0e7845:0xca4415881e7cee5c!8m2!3d41.3027455!4d69.2777892',
          },
          {
            url: 'http://cdn.tripzaza.com/ru/destinations/files/2018/06/2-Tashkent_TV_tower.jpg',
            name: 'TV tower',
            address: 'Amir Temur shok kuchasi, Toshkent, Uzbekistan',
            kilometer: '6,1 km from Sunrise Hotel',
            direction: 'https://www.google.com/maps/dir/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D1%8B%D1%88%D0%BA%D0%B0,+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%90%D0%BC%D0%B8%D1%80%D0%B0+%D0%A2%D0%B5%D0%BC%D1%83%D1%80%D0%B0,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/Sunrise+Hotel,+1+Mirzo+Ulugbek+Avenue,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3276027,69.294694,14z/data=!4m14!4m13!1m5!1m1!1s0x38ae8b557622ee09:0x7fe6ccc1c041fedf!2m2!1d69.2849598!2d41.3456295!1m5!1m1!1s0x38aef5131ebd9013:0x4183b783c23f57eb!2m2!1d69.3129668!2d41.3122697!3e0',
            map: 'https://www.google.com/maps/place/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D1%8B%D1%88%D0%BA%D0%B0/@41.3462144,69.2837899,16z/data=!4m5!3m4!1s0x38ae8b557622ee09:0x7fe6ccc1c041fedf!8m2!3d41.3456288!4d69.2849591',
          },
        ],
      }
    }
  }
</script>
