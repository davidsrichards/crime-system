import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import SignIn from "./components/Admin/SignIn/SignIn.vue";
import { Axios } from "axios";
import Dasboard from "./components/Admin/Dashboard/Dasboard.vue";
import UserDasboard from "./components/User/Dashboard/Dashboard.vue";
import ManageMembers from "./components/Admin/Dashboard/Manage-Members/Manage-Members.vue";
import ManageCrime from "./components/Admin/Dashboard/Manage-Crime/Manage-Crime.vue";
import SignUp from "./components/User/SignUp/SignUp.vue";
import UserSignIn from "./components/User/SignIn/SignIn.vue";
import AddCrime from "./components/User/Dashboard/Add-Crime/Add-Crime.vue";
import UserProfile from './components/User/Dashboard/Profile/Profile.vue'
import Profile from "./components/Admin/Dashboard/Profile/Profile.vue";
import CrimeDetails from "./components/Admin/Dashboard/Manage-Crime/Crime-Details.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faBell, faNewspaper, faUser, faPeopleRobbery, faStreetView, faSignOut, faEye, faEyeSlash, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faBell, faNewspaper, faUser, faPeopleRobbery, faStreetView, faSignOut, faEye, faEyeSlash, faDeleteLeft);


const routes = [
  { path: "/", component: UserSignIn },
  { path: "/admin-signin", component: SignIn },
  {
    path: "/admin-dashboard",
    component: Dasboard,
    children: [
      { path: "members", component: ManageMembers },
      { path: "crime", component: ManageCrime },
      { path: "", component: ManageCrime },
      { path: "crime-details", component: CrimeDetails },
      { path: "admin-profile", component: Profile },
    ],
  },
  { path: "/user-signup", component: SignUp },
  {
    path: "/user-dashboard",
    component: UserDasboard,
    children: [
      { path: "crime", component: AddCrime },
      { path: "profile", component: UserProfile },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount("#app");
