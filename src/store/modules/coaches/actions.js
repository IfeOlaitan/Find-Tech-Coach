export default {
    async registerCoachData(context, formData) {
        const userId = context.rootGetters.userId;

        const coachData = {
            firstName: formData.first,
            lastName: formData.last,
            areas: formData.areas,
            description: formData.desc,
            hourlyRate: formData.rate,
            img: formData.img
        };

        const response = await fetch(`https://find-test-coach-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            //error
        }

        context.commit('addNewCoach', {
            ...coachData,
            id: userId
        });
    }
}