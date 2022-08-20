export default {
    registerCoachData(context, formData) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: formData.first,
            lastName: formData.last,
            areas: formData.areas,
            description: formData.desc,
            hourlyRate: formData.rate,
            img: formData.img
        };
        context.commit('addNewCoach', coachData);
    }
}