<template>
  <div class="payment pay__details py-5">
    <b-container>
      <b-row>
        <b-col class="book__header mb-5" cols="12" md="12">
          <b-row>
            <b-col cols="12" sm="6" md="6" lg="3">
              <img src="../../assets/images/3D/1night.jpg" alt="">
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="4">
              <div class="pt-1">
                <h3>Sunrise Tashkent</h3>
                <p>
                  <span>Mon, {{ info.start_day }} - Mon, {{ info.end_day }}</span>
                  <span>Room type: {{ info.room_type }}</span>
                  <span>Total day: {{ info.total_days }}</span>
                </p>
              </div>
            </b-col>
            <b-col class="p-0" lg="4">
              <div class="total">
                <h6>Total Cash Per Room <b>{{ Math.round(info.total_price * getCost) }} UZS</b></h6>
                <p><span>Real price:</span><span>{{ Math.round(info.real_price * getCost) }} UZS</span></p>
                <p><span>Discount:</span><span>{{ info.discount }}%</span></p>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="12">
          <h5>Almost there!</h5>
          <p>Enter your payment details to complete your reservation.</p>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="Visa Card">
                <visa />
              </b-tab>
              <b-tab title="Master Card">
                <master />
              </b-tab>
              <b-tab title="Uz Card">
                <div class="uz__card">
                  <b-form-group>
                    <b-form-radio  name="some-radios">
                      <img @click="formCard('click')" src="https://docs.click.uz/wp-content/themes/click_help/assets/images/logo.png" alt="">
                    </b-form-radio>
                    <b-form-radio name="some-radios">
                      <img @click="formCard('payme')" src="https://hopshop.uz/images/image_page/3a2a03488ceb.png?1601266356239" alt="">
                    </b-form-radio>
                  </b-form-group>
                </div>
                <div v-if="click">
                  <b-form class="pay_form">
                    <b-row>
                      <b-col lg="4" offset-lg="4">
                        <b-form-group label="Card number" label-for="click-number" >
                          <b-form-input class="pay__input" id="click-number" type="text" required placeholder="#### #### #### ####"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Expiration Date" label-for="click-date" >
                          <b-form-input style="width: 32%;" class="pay__input" id="click-date" type="text" required placeholder="MM / YY"></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                      </b-col>
                    </b-row>
                  </b-form>
                </div>
                <div v-if="payme">
                  <b-form class="pay_form">
                    <b-row>
                      <b-col lg="4" offset-lg="4">
                        <b-form-group label="Card number" label-for="payme-number" >
                          <b-form-input class="pay__input" id="payme-number" type="text" required placeholder="#### #### #### ####"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Expiration Date" label-for="payme-date" >
                          <b-form-input style="width: 32%;" class="pay__input" id="payme-date" type="text" required placeholder="MM / YY"></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="info">Submit</b-button>
                      </b-col>
                    </b-row>
                  </b-form>
                </div>
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
  import {mapGetters} from 'vuex';
   export default {
    components:{
      Visa,
      Master
    },
    data() {
      return {
        info: [],
        click: false,
        payme: false,
        id: 0,
      }
    },
    methods: {
      formCard(id) {
        if (id === 'click') {
          this.click = true;
          this.payme = false;
        } else {
          this.payme = true;
          this.click = false;
        }
      },
    },
    mounted() {
      this.info = this.$store.state.data;
      this.$store.dispatch('getCost');
    },
     computed: {
       ... mapGetters({
         getCost: 'getCost'
       })
     },
    created() {}
  }
</script>
