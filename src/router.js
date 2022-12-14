import { createRouter, createWebHistory } from "vue-router";

//Pages
import CoachDetail from '@/pages/coaches/CoachDetail.vue';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';
import ContactCoach from '@/pages/requests/ContactCoach';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id',
          component: CoachDetail,
          props: true,
          // children: [
          //       { path: 'contact', component: ContactCoach } //coaches/coachID/contact
          //   ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/coaches/:id/contact',
          component: ContactCoach ,
          props: true
        }
    ]
});

export default router;
