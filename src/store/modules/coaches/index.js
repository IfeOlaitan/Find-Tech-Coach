import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            //Coaches data
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30,
                    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30,
                    img: "https://images.unsplash.com/photo-1596535769582-ae8ee239e96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
                {
                    id: 'c3',
                    firstName: 'Joy',
                    lastName: 'Favour',
                    areas: ['frontend', 'career', 'design'],
                    description:
                        'I am Joy and as a senior developer in a big tech' +
                        ' company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 35,
                    img: "https://images.unsplash.com/photo-1598343672916-de13ab0636ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                },
                {
                    id: 'c4',
                    firstName: 'Maria',
                    lastName: 'Adewale',
                    areas: ['frontend', 'backend', 'career', 'design'],
                    description:
                        'I am Maria and as a senior developer in a big tech' +
                        ' company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 60,
                    img: "https://images.unsplash.com/photo-1533674639815-52f8aea1b132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}