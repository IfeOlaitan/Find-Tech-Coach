export default {
    contactCoachData(context, formData) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: formData.coachId,
            userName: formData.name,
            userEmail: formData.email,
            userMobile: formData.mobile,
            message: formData.message
        }
        context.commit('addRequest', newRequest);
    }
}