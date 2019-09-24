<template>
  <!-- Top navigation -->
  <div class="main-header">
    <div style="margin: auto"></div>

    <div class="header-part-right">
      <!-- Full screen toggle -->
      <a class="top-text" href="#search">Explore photos</a>
      <a class="top-text" href="#about">Find a photographer</a>
      <a class="top-text" href="#about">
        <i class="far fa-newspaper fa-fw"></i>
      </a>
      <a class="top-text" href="#about">
        <i class="far fa-bell fa-fw"></i>
      </a>
      <a class="top-text" href="#about">
        <i class="far fa-envelope fa-fw"></i>
      </a>
      <a class="top-text" href="#about">
        <img
          src="../../assets/images/bitmap.png"
          alt=""
          style="width: 31px; height:31px"
        />
      </a>
      <div class="dropdown">
        <a class=" dropdown-toggle" data-toggle="dropdown">
          {{ currentUser.email }}
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" @click="logout" href="#">Logout </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  components: {},
  computed: {
    name: function() {
      return this.$store.state.user;
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
<style scoped>
.main-header {
  position: fixed;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 100;
  background: #fefbf3;
}
.main-header .header-part-right {
  display: flex;
  align-items: center;
}
/* Style the links inside the navigation bar */
.main-header a.top-text {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 24px 16px;
  text-decoration: none;
  font-size: 14px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4caf50;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {
  .topnav a,
  .topnav-right {
    float: none;
    display: block;
  }
}
</style>
