<template>
  <div class="guide py-5">
    <b-container>
      <b-row>
        <b-col lg="12">
          <h3 class="guide__title">Guide Title</h3>
        </b-col>
        <b-col class="guide__content" lg="12">
          <b-card no-body>
            <b-tabs pills card vertical>
              <!--              <b-tab v-for="(items,index) of item" :key="index"-->
              <!--                     v-bind:title="{ 'text': items.title }" >-->
              <!--                <b-card-text>-->
              <!--                  {{ items.text }}-->
              <!--                </b-card-text>-->
              <!--              </b-tab>-->
              <b-tab title="Tab 1" active>
                <b-card-text>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <a href="#">Link 4</a>
                  <a href="#">Link 5</a>
                </b-card-text>
              </b-tab>
              <b-tab title="Tab 2">
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias aliquam at consequuntur dolorem
                  facilis in ipsum, mollitia quam reprehenderit sapiente sed sequi tenetur. Aliquam blanditiis dolorem
                  earum laborum optio!
                </b-card-text>
              </b-tab>
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
        item: [
          {
            title: 'Tab 1',
            text: 'Lorem 1'
          },
          {
            title: 'Tab 2',
            text: 'Lorem 2'
          }
        ]
      }
    }
  }
</script>
