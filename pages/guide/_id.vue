<template>
  <div class="guide py-5">
    <b-container fluid="">
      <b-row>
        <b-col lg="12">
        </b-col>
        <b-col class="guide__content" lg="12">
          <b-card border-variant="0" no-body>
            <b-tabs pills card vertical>
              <div v-for="(guideDesc,index) in subGuide" :key="index">
                <b-tab v-for="sub in guideDesc" :key="sub" :title="sub.title_ru">
                  <b-card-text>
                    <h4>{{ sub.title_ru }}</h4>
                    <p v-html="sub.description_ru"></p>
                  </b-card-text>
                </b-tab>
              </div>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        subGuide: [],
      }
    },
    methods: {
      async getSubGuides() {
        await this.$axios.get(`menu/guide/clicked/${this.$route.params.id}/`)
          .then((res) => {
            console.log("Sub Guides", res);
            this.subGuide = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
    },
    mounted() {
      this.getSubGuides();
      console.log("ID ",this.$route.params.id)
    },
  }
</script>
