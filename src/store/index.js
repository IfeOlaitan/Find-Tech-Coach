import { createStore } from "vuex";

import coachesModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule
    },
    state() {
        return {
            userId: 'c5' //the new registered coach
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;
