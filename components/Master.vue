<template>
  <div class="payment__wrapper" id="app">
    <div class="card-form">
      <div class="card-list">
        <div class="card-item" v-bind:class="{ '-active': isCardFlipped }">
          <div class="card-item__side -front">
            <div
              class="card-item__focus"
              v-bind:class="{ '-active': focusElementStyle }"
              v-bind:style="focusElementStyle"
              ref="focusElement"
            ></div>
            <div class="card-item__cover">
              <img
                v-bind:src="
                  'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                  currentCardBackground +
                  '.jpeg'
                "
                class="card-item__bg"
              />
            </div>

            <div class="card-item__wrapper">
              <div class="card-item__top">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                  class="card-item__chip"
                />
                <div class="card-item__type">
                  <transition name="slide-fade-up">
                    <img
                      src="data:image/png;base64,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"
                      v-if="getCardType"
                      v-bind:key="getCardType"
                      alt=""
                      class="card-item__typeImg"
                    />
                  </transition>
                </div>
              </div>
              <label
                for="cardNumber"
                class="card-item__number"
                ref="cardNumber"
              >
                <template v-if="getCardType === 'amex'">
                  <span v-for="(n, $index) in amexCardMask" :key="$index">
                    <transition name="slide-fade-up">
                      <div
                        class="card-item__numberItem"
                        v-if="
                          $index > 4 &&
                          $index < 14 &&
                          cardNumber.length > $index &&
                          n.trim() !== ''
                        "
                      >
                        *
                      </div>
                      <div
                        class="card-item__numberItem"
                        :class="{ '-active': n.trim() === '' }"
                        :key="$index"
                        v-else-if="cardNumber.length > $index"
                      >
                        {{ cardNumber[$index] }}
                      </div>
                      <div
                        class="card-item__numberItem"
                        :class="{ '-active': n.trim() === '' }"
                        v-else
                        :key="$index + 1"
                      >
                        {{ n }}
                      </div>
                    </transition>
                  </span>
                </template>

                <template v-else>
                  <span v-for="(n, $index) in otherCardMask" :key="$index">
                    <transition name="slide-fade-up">
                      <div
                        class="card-item__numberItem"
                        v-if="
                          $index > 4 &&
                          $index < 15 &&
                          cardNumber.length > $index &&
                          n.trim() !== ''
                        "
                      >
                        *
                      </div>
                      <div
                        class="card-item__numberItem"
                        :class="{ '-active': n.trim() === '' }"
                        :key="$index"
                        v-else-if="cardNumber.length > $index"
                      >
                        {{ cardNumber[$index] }}
                      </div>
                      <div
                        class="card-item__numberItem"
                        :class="{ '-active': n.trim() === '' }"
                        v-else
                        :key="$index + 1"
                      >
                        {{ n }}
                      </div>
                    </transition>
                  </span>
                </template>
              </label>
              <div class="card-item__content">
                <label for="cardName" class="card-item__info" ref="cardName">
                  <div class="card-item__holder">Card Holder</div>
                  <transition name="slide-fade-up">
                    <div class="card-item__name" v-if="cardName.length" key="1">
                      <transition-group name="slide-fade-right">
                        <span
                          class="card-item__nameItem"
                          v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')"
                          v-if="$index === $index"
                          v-bind:key="$index + 1"
                        >{{ n }}</span
                        >
                      </transition-group>
                    </div>
                    <div class="card-item__name" v-else key="2">Full Name</div>
                  </transition>
                </label>
                <div class="card-item__date" ref="cardDate">
                  <label for="cardMonth" class="card-item__dateTitle"
                  >Expires</label
                  >
                  <label for="cardMonth" class="card-item__dateItem">
                    <transition name="slide-fade-up">
                      <span v-if="cardMonth" v-bind:key="cardMonth">{{
                        cardMonth
                      }}</span>
                      <span v-else key="2">MM</span>
                    </transition>
                  </label>
                  /
                  <label for="cardYear" class="card-item__dateItem">
                    <transition name="slide-fade-up">
                      <span v-if="cardYear" v-bind:key="cardYear">{{
                        String(cardYear).slice(2, 4)
                      }}</span>
                      <span v-else key="2">YY</span>
                    </transition>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item__side -back">
            <div class="card-item__cover">
              <img
                v-bind:src="
                  'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                  currentCardBackground +
                  '.jpeg'
                "
                class="card-item__bg"
              />
            </div>
            <div class="card-item__band"></div>
            <div class="card-item__cvv">
              <div class="card-item__cvvTitle">CVV</div>
              <div class="card-item__cvvBand">
                <span v-for="(n, $index) in cardCvv" :key="$index"> * </span>
              </div>
              <div class="card-item__type">
                <img
                  v-bind:src="
                    'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                    getCardType +
                    '.png'
                  "
                  v-if="getCardType"
                  class="card-item__typeImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-form__inner">
        <div class="card-input">
          <label for="cardNumber" class="card-input__label">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            class="card-input__input"
            v-mask="generateCardNumberMask"
            v-model="cardNumber"
            v-on:focus="focusInput"
            v-on:blur="blurInput"
            data-ref="cardNumber"
            autocomplete="off"
          />
        </div>
        <div class="card-input">
          <label for="cardName" class="card-input__label">Card Holders</label>
          <input
            type="text"
            id="cardName"
            class="card-input__input"
            v-model="cardName"
            v-on:focus="focusInput"
            v-on:blur="blurInput"
            data-ref="cardName"
            autocomplete="off"
          />
        </div>
        <div class="card-form__row">
          <div class="card-form__col">
            <div class="card-form__group">
              <label for="cardMonth" class="card-input__label"
              >Expiration Date</label
              >
              <select
                class="card-input__input -select"
                id="cardMonth"
                v-model="cardMonth"
                v-on:focus="focusInput"
                v-on:blur="blurInput"
                data-ref="cardDate"
              >
                <option value="" disabled selected>Month</option>
                <option
                  v-bind:value="n < 10 ? '0' + n : n"
                  v-for="n in 12"
                  v-bind:disabled="n < minCardMonth"
                  v-bind:key="n"
                >
                  {{ n < 10 ? '0' + n : n }}
                </option>
              </select>
              <select
                class="card-input__input -select"
                id="cardYear"
                v-model="cardYear"
                v-on:focus="focusInput"
                v-on:blur="blurInput"
                data-ref="cardDate"
              >
                <option value="" disabled selected>Year</option>
                <option
                  v-bind:value="$index + minCardYear"
                  v-for="(n, $index) in 12"
                  v-bind:key="n"
                >
                  {{ $index + minCardYear }}
                </option>
              </select>
            </div>
          </div>
          <div class="card-form__col -cvv">
            <div class="card-input">
              <label for="cardCvv" class="card-input__label">CVV</label>
              <input
                type="text"
                class="card-input__input"
                id="cardCvv"
                v-mask="'####'"
                maxlength="4"
                v-model="cardCvv"
                v-on:focus="flipCard(true)"
                v-on:blur="flipCard(false)"
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        <button class="card-form__button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: '',
        minCardYear: new Date().getFullYear(),
        amexCardMask: '#### ###### #####',
        otherCardMask: '#### #### #### ####',
        cardNumberTemp: '',
        isCardFlipped: false,
        focusElementStyle: null,
        isInputFocused: false,
      }
    },
    mounted() {
      this.cardNumberTemp = this.otherCardMask
      document.getElementById('cardNumber').focus()
    },
    computed: {
      getCardType() {
        let number = this.cardNumber
        let re = new RegExp('^4')
        if (number.match(re) != null) return 'visa'

        re = new RegExp('^(34|37)')
        if (number.match(re) != null) return 'amex'

        re = new RegExp('^5[1-5]')
        if (number.match(re) != null) return 'mastercard'

        re = new RegExp('^6011')
        if (number.match(re) != null) return 'discover'

        re = new RegExp('^9792')
        if (number.match(re) != null) return 'troy'

        return 'visa' // default type
      },
      generateCardNumberMask() {
        return this.getCardType === 'amex'
          ? this.amexCardMask
          : this.otherCardMask
      },
      minCardMonth() {
        if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1
        return 1
      },
    },
    watch: {
      cardYear() {
        if (this.cardMonth < this.minCardMonth) {
          this.cardMonth = ''
        }
      },
    },
    methods: {
      flipCard(status) {
        this.isCardFlipped = status
      },
      focusInput(e) {
        this.isInputFocused = true
        let targetRef = e.target.dataset.ref
        let target = this.$refs[targetRef]
        this.focusElementStyle = {
          width: `${target.offsetWidth}px`,
          height: `${target.offsetHeight}px`,
          transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
        }
      },
      blurInput() {
        let vm = this
        setTimeout(() => {
          if (!vm.isInputFocused) {
            vm.focusElementStyle = null
          }
        }, 300)
        vm.isInputFocused = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap');

  body {
    background: #ddeefc;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  .wrapper {
    min-height: 100vh;
    display: flex;
    padding: 50px 15px;
    @media screen and (max-width: 700px), (max-height: 500px) {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  .card-form {
    max-width: 570px;
    margin: 5rem auto;
    width: 100%;
    @media screen and (max-width: 576px) {
      margin: 0 auto;
    }

    &__inner {
      background: #fff;
      box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
      /*box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);*/
      border-radius: 10px;
      padding: 35px;
      padding-top: 180px;

      @media screen and (max-width: 480px) {
        padding: 25px;
        padding-top: 165px;
      }
      @media screen and (max-width: 360px) {
        padding: 15px;
        padding-top: 165px;
      }
    }

    &__row {
      display: flex;
      align-items: flex-start;
      @media screen and (max-width: 480px) {
        flex-wrap: wrap;
      }
    }

    &__col {
      flex: auto;
      margin-right: 35px;

      &:last-child {
        margin-right: 0;
      }

      @media screen and (max-width: 480px) {
        margin-right: 0;
        flex: unset;
        width: 100%;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &.-cvv {
        max-width: 150px;
        @media screen and (max-width: 480px) {
          max-width: initial;
        }
      }
    }

    &__group {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      .card-input__input {
        flex: 1;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__button {
      width: 100%;
      height: 55px;
      background: #FFB612;
      border: none;
      border-radius: 5px;
      font-size: 22px;
      font-weight: 500;
      font-family: 'Source Sans Pro', sans-serif;
      box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
      color: #fff;
      margin-top: 20px;
      cursor: pointer;

      @media screen and (max-width: 480px) {
        margin-top: 10px;
      }
    }
  }

  .card-item {
    max-width: 430px;
    height: 270px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
    width: 100%;

    @media screen and (max-width: 480px) {
      max-width: 310px;
      height: 220px;
      width: 90%;
    }

    @media screen and (max-width: 360px) {
      height: 180px;
    }

    &.-active {
      .card-item__side {
        &.-front {
          transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
          rotateZ(0deg);
        }
        &.-back {
          transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
          // box-shadow: 0 20px 50px 0 rgba(81, 88, 206, 0.65);
        }
      }
    }

    &__focus {
      position: absolute;
      z-index: 3;
      border-radius: 5px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.65);

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: rgb(8, 20, 47);
        height: 100%;
        border-radius: 5px;
        filter: blur(25px);
        opacity: 0.5;
      }

      &.-active {
        opacity: 1;
      }
    }

    &__side {
      border-radius: 15px;
      overflow: hidden;
      // box-shadow: 3px 13px 30px 0px rgba(11, 19, 41, 0.5);
      box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
      transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
      transform-style: preserve-3d;
      transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
      backface-visibility: hidden;
      height: 100%;

      &.-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
        z-index: 2;
        padding: 0;
        // background-color: #2364d2;
        // background-image: linear-gradient(
        //   43deg,
        //   #4158d0 0%,
        //   #8555c7 46%,
        //   #2364d2 100%
        // );
        height: 100%;

        .card-item__cover {
          transform: rotateY(-180deg);
        }
      }
    }
    &__bg {
      max-width: 100%;
      display: block;
      max-height: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &__cover {
      height: 100%;
      background-color: #1c1d27;
      position: absolute;
      height: 100%;
      background-color: #1c1d27;
      left: 0;
      top: 0;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(6, 2, 29, 0.45);
      }
    }

    &__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 40px;
      padding: 0 10px;

      @media screen and (max-width: 480px) {
        margin-bottom: 25px;
      }
      @media screen and (max-width: 360px) {
        margin-bottom: 15px;
      }
    }

    &__chip {
      width: 60px;
      @media screen and (max-width: 480px) {
        width: 50px;
      }
      @media screen and (max-width: 360px) {
        width: 40px;
      }
    }

    &__type {
      height: 45px;
      position: relative;
      display: flex;
      justify-content: flex-end;
      max-width: 100px;
      margin-left: auto;
      width: 100%;

      @media screen and (max-width: 480px) {
        height: 40px;
        max-width: 90px;
      }
      @media screen and (max-width: 360px) {
        height: 30px;
      }
    }

    &__typeImg {
      max-width: 100%;
      object-fit: contain;
      max-height: 100%;
      object-position: top right;
    }

    &__info {
      color: #fff;
      width: 100%;
      max-width: calc(100% - 85px);
      padding: 10px 15px;
      font-weight: 500;
      display: block;

      cursor: pointer;

      @media screen and (max-width: 480px) {
        padding: 10px;
      }
    }

    &__holder {
      opacity: 0.7;
      font-size: 13px;
      margin-bottom: 6px;
      @media screen and (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }

    &__wrapper {
      font-family: 'Source Code Pro', monospace;
      padding: 25px 15px;
      position: relative;
      z-index: 4;
      height: 100%;
      text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
      user-select: none;
      @media screen and (max-width: 480px) {
        padding: 20px 10px;
      }
    }

    &__name {
      font-size: 18px;
      line-height: 1;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      @media screen and (max-width: 480px) {
        font-size: 16px;
      }
    }
    &__nameItem {
      display: inline-block;
      min-width: 8px;
      position: relative;
    }

    &__number {
      font-weight: 500;
      line-height: 1;
      color: #fff;
      font-size: 27px;
      margin-bottom: 35px;
      display: inline-block;
      padding: 10px 15px;
      cursor: pointer;

      @media screen and (max-width: 480px) {
        font-size: 21px;
        margin-bottom: 15px;
        padding: 10px 10px;
      }

      @media screen and (max-width: 360px) {
        font-size: 19px;
        margin-bottom: 10px;
        padding: 10px 10px;
      }
    }

    &__numberItem {
      width: 16px;
      display: inline-block;
      &.-active {
        width: 30px;
      }

      @media screen and (max-width: 480px) {
        width: 13px;

        &.-active {
          width: 16px;
        }
      }

      @media screen and (max-width: 360px) {
        width: 12px;

        &.-active {
          width: 8px;
        }
      }
    }

    &__content {
      color: #fff;
      display: flex;
      align-items: flex-start;
    }

    &__date {
      flex-wrap: wrap;
      font-size: 18px;
      margin-left: auto;
      padding: 10px;
      display: inline-flex;
      width: 80px;
      white-space: nowrap;
      flex-shrink: 0;
      cursor: pointer;

      @media screen and (max-width: 480px) {
        font-size: 16px;
      }
    }

    &__dateItem {
      position: relative;
      span {
        width: 22px;
        display: inline-block;
      }
    }

    &__dateTitle {
      opacity: 0.7;
      font-size: 13px;
      padding-bottom: 6px;
      width: 100%;

      @media screen and (max-width: 480px) {
        font-size: 12px;
        padding-bottom: 5px;
      }
    }
    &__band {
      background: rgba(0, 0, 19, 0.8);
      width: 100%;
      height: 50px;
      margin-top: 30px;
      position: relative;
      z-index: 2;
      @media screen and (max-width: 480px) {
        margin-top: 20px;
      }
      @media screen and (max-width: 360px) {
        height: 40px;
        margin-top: 10px;
      }
    }

    &__cvv {
      text-align: right;
      position: relative;
      z-index: 2;
      padding: 15px;
      .card-item__type {
        opacity: 0.7;
      }

      @media screen and (max-width: 360px) {
        padding: 10px 15px;
      }
    }
    &__cvvTitle {
      padding-right: 10px;
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      margin-bottom: 5px;
    }
    &__cvvBand {
      height: 45px;
      background: #fff;
      margin-bottom: 30px;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      color: #1a3b5d;
      font-size: 18px;
      border-radius: 4px;
      box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);

      @media screen and (max-width: 480px) {
        height: 40px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 360px) {
        margin-bottom: 15px;
      }
    }
  }

  .card-list {
    margin-bottom: -130px;

    @media screen and (max-width: 480px) {
      margin-bottom: -120px;
    }
  }

  .card-input {
    margin-bottom: 20px;
    &__label {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 500;
      color: #1a3b5d;
      width: 100%;
      display: block;
      user-select: none;
    }
    &__input {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      box-shadow: none;
      border: 1px solid #ced6e0;
      transition: all 0.3s ease-in-out;
      font-size: 18px;
      padding: 5px 15px;
      background: none;
      color: #1a3b5d;
      font-family: 'Source Sans Pro', sans-serif;

      &:hover,
      &:focus {
        border-color: #FFB612;
      }

      &:focus {
        box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
      }
      &.-select {
        -webkit-appearance: none;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC');
        background-size: 12px;
        background-position: 90% center;
        background-repeat: no-repeat;
        padding-right: 30px;
      }
    }
  }

  .slide-fade-up-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
  }
  .slide-fade-up-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
  }
  .slide-fade-up-enter {
    opacity: 0;
    transform: translateY(15px);
    pointer-events: none;
  }
  .slide-fade-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
    pointer-events: none;
  }

  .slide-fade-right-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
  }
  .slide-fade-right-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
  }
  .slide-fade-right-enter {
    opacity: 0;
    transform: translateX(10px) rotate(45deg);
    pointer-events: none;
  }
  .slide-fade-right-leave-to {
    opacity: 0;
    transform: translateX(-10px) rotate(45deg);
    pointer-events: none;
  }

  .github-btn {
    position: absolute;
    right: 40px;
    bottom: 50px;
    text-decoration: none;
    padding: 15px 25px;
    border-radius: 4px;
    box-shadow: 0px 4px 30px -6px rgba(36, 52, 70, 0.65);
    background: #24292e;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 16px;
    text-align: center;
    transition: all 0.3s ease-in-out;

    @media screen and (min-width: 500px) {
      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);
      }
    }

    @media screen and (max-width: 700px) {
      position: relative;
      bottom: auto;
      right: auto;
      margin-top: 20px;

      &:active {
        transform: scale(1.1);
        box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);
      }
    }
  }
</style>
