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
          <Payment />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Payment from '../../components/Payment'
   export default {
    props: {
      type: Array,
      default() {
        return [];
      }
    },
    components:{
      Payment
    },
    data() {
      return {
        textDetails: 'Show stay breakdown',
      }
    },
    methods: {
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
