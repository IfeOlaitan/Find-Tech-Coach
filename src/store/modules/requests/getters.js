export default {
    requests(state) {
        //Get requests from requests store
        return state.requests;
    },
    hasRequests(state) {
        return state.requests && state.requests.length > 0;
    }
}