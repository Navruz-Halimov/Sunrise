<template>
  <div class="payment pay__details py-5">
    <b-container>
      <b-row>
        <b-col class="book__header mb-5" cols="12" md="12">
          <b-row>
            <b-col cols="12" sm="6" md="6" lg="3">
              <img src="../../assets/images/rooms/ABDUMANNONRAKHIMOVV-279.jpg" alt="">
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="4">
              <div class="pt-1">
                <h3>Sunrise Tashkent</h3>
                <p>
                  <span>Sat, Oct 10, 2020 - Mon, Nov 9, 2020</span>
                  <span>King Rooms</span>
                  <span>1 Room,  1 Guest</span>
                  <span>Member Rate</span>
                </p>
              </div>
            </b-col>
            <b-col class="p-0" lg="4">
              <div class="total">
                <h6>Total Cash Per Room <b>{{  }}</b></h6>
                <b-collapse id="total" class="mt-2">
                  <ul>
                    <li><span>Sat, Oct 10</span><span>1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>1,494,000.00 UZS</span></li>
                    <li><span>Sat, Oct 10</span><span>1,494,000.00 UZS</span></li>
                  </ul>
                </b-collapse>
                <p><span>Subtotal</span><span>44,820,000.00 UZS</span></p>
                <p><span>Taxes & Fees</span><span>6,723,000.00 UZS</span></p>
                <a v-b-toggle.total @click="showDetails()">
                  {{textDetails}}
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="12">
          <h5>Almost there!</h5>
          <p>Enter your payment details to complete your reservation.</p>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="" active>
              </b-tab>
              <b-tab title="Visa Card">
                <visa />
              </b-tab>
              <b-tab title="Master Card">
                <master />
              </b-tab>
              <b-tab title="Uz Card" active>
                <div class="uz__card">
                  <b-form-group>
                    <b-form-radio  name="some-radios">
                      <img @click="formCard(1)" src="https://docs.click.uz/wp-content/themes/click_help/assets/images/logo.png" alt="">
                    </b-form-radio>
                    <b-form-radio name="some-radios">
                      <img @click="formCard(2)" src="https://hopshop.uz/images/image_page/3a2a03488ceb.png?1601266356239" alt="">
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div class="mt-3 text-center">Selected: <strong>{{ selected }}</strong></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Visa from '../../components/Visa';
  import Master from '../../components/Master'
   export default {
    components:{
      Visa,
      Master
    },
    data() {
      return {
        textDetails: 'Show stay breakdown',
        selected: '',
        id: 0,
      }
    },
    methods: {
      formCard(id) {
        console.log(id);
        this.selected = `${id}`;
      },
      showDetails() {
        if (this.textDetails === 'Show stay breakdown') {
          this.textDetails = 'Hide stay breakdown';
        } else {
          this.textDetails = 'Show stay breakdown';
        }
      },
    },
    mounted() {
      console.log('Props', this.props);
    },
    created() {
    }
  }
</script>
