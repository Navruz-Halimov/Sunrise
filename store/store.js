import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        gallery:[],
        mediaURL: 'http://188.225.83.193/',
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

    },
})

export default store