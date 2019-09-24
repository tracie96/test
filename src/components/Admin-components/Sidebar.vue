<template>
  <div>
    <div class="side-bar">
      <router-link to="/" class="logo-img text-center">
        <img src="../../assets/images/asset-7.png" alt="" />
      </router-link>
      <router-link to="/dashboard">
        <i class="far fa-fw fa-user"></i> Dashboard
      </router-link>
      <router-link to="/profile">
        <i class="fas fa-fw fa-camera-retro"></i> Profile
      </router-link>
      <router-link class="" to="/packages">
        <i class="far fa-fw fa-images"></i> Pricing Package
      </router-link>
      <router-link class="" to="/availability">
        <i class="fas fa-fw fa-hdd"></i> Availability
      </router-link>
      <router-link class="" to="/bookings">
        <i class="far fa-calendar-check"></i> Bookings
      </router-link>
      <router-link class="" to="/portfolio">
        <i class="fas fa-briefcase"></i> Portfolio
      </router-link>
      <router-link class="" to="/albums">
        <i class="far fa-images"></i> Albums
      </router-link>
      <router-link class="" to="/subscriptions">
        <i class="fas fa-sign-in-alt"></i> Subscriptions
      </router-link>
      <router-link class="" to="/billings">
        <i class="fas fa-comments-dollar"></i> Payments
      </router-link>
      <router-link class="" to="/settings">
        <i class="fas fa-cogs"></i> Settings
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.logo-img {
  margin-bottom: 30px;
}
.logo-img.router-link-active {
  border-left: none !important;
  background-color: #4d4d4d !important;
}
.side-bar {
  margin: 0;
  padding: 0;
  width: 22%;
  background-color: #4d4d4d;
  position: fixed;
  height: 100%;
  overflow: auto;
  z-index: 1000;
}

/* Sidebar links */
.side-bar a {
  display: block;
  color: #fff !important;
  padding: 24px 50px;
  text-decoration: none;
  text-align: left;
  font-family: "Montserrat" !important;
  font-size: 14px;
  font-weight: 500;
}
.router-link-active {
  background-color: #5c5c5c;
  color: #ffb603 !important;
  border-left: 7px solid #ffb603;
}

/* Links on mouse-over */
.side-bar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
.logo-img img {
  justify-content: center;
}
/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .side-bar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .side-bar a {
    float: left;
  }

  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .side-bar a {
    text-align: center;
    float: none;
  }
}
</style>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>
