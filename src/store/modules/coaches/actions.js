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
    },
    async loadCoaches(context) {
        const response = await fetch(`https://find-test-coach-default-rtdb.firebaseio.com/coaches.json`)

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to Fetch');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                img: responseData[key].img
            }
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches)
    }
}