export default {
    coaches(state) {
        //Coaches data from coach store
        return state.coaches;
    },
    hasCoaches(state) {
        //Check if coaches data exist and array is not empty
        return state.coaches && state.coaches.length > 0;
    }
}