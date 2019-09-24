import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Photographers from "./views/Home-user.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/SignUp.vue";
import Pricing from "./views/Pricing.vue";
import Faqs from "./views/Faqs.vue";
import MobileFaqs from "./views/MobileFaqs.vue";
import Community from "./views/Community.vue";
import JoinCommunity from "./views/JoinCommunity.vue";
import SearchPhotographers from "./views/SearchPhotographer.vue";
import PhotographerPage from "./views/Photographer.vue";
import ExplorePhoto from "./views/Explore-photo";
import PageNotFound from "./views/404";
import CommunitySuccess from "./views/community-success";
import BookingPage from "./views/booking";
import BookingSuccessPage from "./views/booking-success";
import Profile from "./views/User/Profile";
import Bookings from "./views/User/Bookings";
import BookingDetails from "./views/User/Booking-Details";
import BookingAlbums from "./views/User/Booking-Albums";
import Billings from "./views/User/Billings";
import Subscriptions from "./views/User/Subscriptions";
import Albums from "./views/User/Albums";
import CreateAlbum from "./views/User/Create-Album";
import AlbumDetails from "./views/User/Album-Details";
import FindFace from "./views/FindFace.vue";
import FindFaceAlbum from "./views/FindFaceAlbum.vue";
import MainBook from "./components/Booking/MainBook.vue";
import ImageEdit from "./components/Booking/ImageEdit.vue";
import MainImages from "./components/Booking/MainImages.vue";
import MarkBooking from "./components/Booking/MarkBooking.vue";
import ShootFolder from "./components/Booking/ShootFolder.vue";
import PhotographerPortfolio from "./views/PhotographerPortfolio";
import BookAShoot from "./views/BookAShoot";
import Portfolio from "./views/User/Portfolio";
import CreatePackage from "./views/User/CreatePackage";
import BookPackage from "./views/BookPackage";
import Packages from "./views/User/Packages";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/photographers",
      name: "photographers",
      component: Photographers
    },
    {
      path: "/photographer",
      name: "photographer-page",
      component: PhotographerPage
    },
    {
      path: "/booking/create",
      name: "booking-page",
      component: BookingPage
    },
    {
      path: "/photographer/book-a-shoot",
      name: "book-a-shot-page",
      component: BookAShoot
    },
    {
      path: "/photographer/portfolio",
      name: "portfolio-page",
      component: PhotographerPortfolio
    },
    {
      path: "/booking/package",
      name: "book-package",
      component: BookPackage
    },
    {
      path: "/photographers/search",
      name: "search-photographers",
      component: SearchPhotographers
    },
    {
      path: "/photographer",
      name: "photographer-page",
      component: PhotographerPage
    },
    {
      path: "/booking/create",
      name: "booking-page",
      component: BookingPage
    },
    {
      path: "/booking/success",
      name: "booking-successpage",
      component: BookingSuccessPage
    },
    {
      path: "/photographers/search",
      name: "search-photographers",
      component: SearchPhotographers
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/photos/explore",
      name: "explorephotos",
      component: ExplorePhoto
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: +Signup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/bookings",
      name: "bookings",
      component: Bookings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/findface",
      name: "find-my-face",
      component: FindFace
    },
    {
      path: "/albums/findface/:id",
      name: "findface-album",
      component: FindFaceAlbum
    },
    {
      path: "/bookings/details/:id",
      name: "booking-details",
      component: BookingDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/bookings/albums",
      name: "booking-albums",
      component: BookingAlbums,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/billings",
      name: "billings",
      component: Billings
    },
    {
      path: "/subscriptions",
      name: "subscriptions",
      component: Subscriptions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/albums",
      name: "albums",
      component: Albums
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/albums/create",
      name: "create-album",
      component: CreateAlbum
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/album/details/:id",
      name: "album-details",
      component: AlbumDetails
      // meta: {
      //   requiresAuth: true
      // }
    },

    {
      path: "/pricing",
      name: "pricing",
      component: Pricing
    },
    {
      path: "/packages",
      name: "packages",
      component: Packages
    },
    {
      path: "/packages/create",
      name: "create-packages",
      component: CreatePackage
    },
    {
      path: "/faqs",
      name: "faqs",
      component: Faqs
    },
    {
      path: "/faqs/mobile/:id",
      name: "mobilefaqs",
      component: MobileFaqs
    },
    {
      path: "/community",
      name: "community",
      component: Community
    },
    {
      path: "/community/join",
      name: "join-community",
      component: JoinCommunity
    },
    {
      path: "/community/success",
      name: "community-success",
      component: CommunitySuccess
    },
    {
      path: "/booking/main",
      name: "main-booking",
      component: MainBook
    },
    {
      path: "/add/Booking",
      name: "MarkBooking",
      component: MarkBooking
    },
    { path: "/shoot/folder", name: "shootFolder", component: ShootFolder },
    { path: "/edit/image", name: "EditImage", component: ImageEdit },
    { path: "/main/image", name: "MainImages", component: MainImages },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    { path: "*", component: PageNotFound }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requiresAuth)) {
    if (store.getters.isLoggedIn == false) {
      return next({ path: "/" });
    }

    // if (store.getters.emailStatus == false) {
    //   return next({path:'/'})
    // }

    return next();
  }
  return next();
});

export default router;
