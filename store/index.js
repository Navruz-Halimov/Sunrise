import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        gallery:[],
        mediaURL: 'http://188.225.83.193/',
        phone_number: "",
        token: "",
    },
    getters: {
    getGallery(state){
        return state.gallery;
    }
    },
    mutations: {
        setGallery(state, payload) {
            state.gallery = payload;
        },
        setToken(state, token) {
            state.token = token;
        },
        setPhone_number(state, phone_number) {
            state.phone_number = phone_number;
        },
        sendCode(state, payload) {
            state.code = payload
        },
    },
    actions: {
        async getNews({ commit }) {
            await this.$axios.get('/gallery/list/')
                .then(res => {
                    console.log(res)
                    commit('setGallery', res.data.results);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        async getCode({ commit }, data) {
            await this.$axios.post('/user/code/send/', { phone_number: data })
                .then(res => {
                    console.log("Code: ", res.data.code)
                })
                .catch(err => console.log(err))
        },
        async sendCode({ commit }, data) {
            await this.$axios.post('/user/code/check/', data)
                .then(res => {
                    commit('setToken', res.data.token)
                    commit('setPhone_number', res.data.phone_number)

                })
                .catch(err => console.log(err))
        },

    },
})

export default store