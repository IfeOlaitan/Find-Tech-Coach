export default {
    coaches(state) {
        //Coaches data from coach store
        return state.coaches;
    },
    hasCoaches(state) {
        //Check if coaches data exist and array is not empty
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
        //Get coaches from coaches getter
        const coaches = getters.coaches;

        //Get userId from root getter
        const userId = rootGetters.userId;

        //Check if a coach id matches the userId in the root store
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;

        if (!lastFetch) {
            return true;
        }

        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp / lastFetch) / 1000 > 60;
    }
}