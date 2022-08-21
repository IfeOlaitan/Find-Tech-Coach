export default {
    async contactCoachData(context, formData) {
        const newRequest = {
            userName: formData.name,
            userEmail: formData.email,
            userMobile: formData.mobile,
            message: formData.message
        }

        const response = await fetch(`https://find-test-coach-default-rtdb.firebaseio.com/requests/${formData.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        )

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send Request');
            throw error;
        }

        //Add id generated in firebase to newRequest object
        newRequest.id = responseData.name;

        //Add coach-id locally
        newRequest.coachId = formData.coachId;

        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context) {
         const coachId = context.rootGetters.userId; //current user id

         const response = await fetch(`https://find-test-coach-default-rtdb.firebaseio.com/requests/${coachId}.json`);
         const responseData = await response.json();

        console.log(responseData);

         if (!response.ok) {
             const error = new Error(responseData.message || 'Failed to fetch requests');
             throw error;
         }

         const requests = [];

         for (const key in responseData) {
             const request = {
                 id: key,
                 coachId: coachId,
                 userName: responseData[key].userName,
                 userEmail: responseData[key].userEmail,
                 userMobile: responseData[key].userMobile,
                 message: responseData[key].message
             }
             requests.push(request);
         }
        console.log(requests);
         context.commit('setRequests', requests);
    }
}