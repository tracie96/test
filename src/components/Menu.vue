<template>
  <div id="footer-menu" class="footer-menu-3-icons footer-menu-style-1">
    <router-link to="/photographers/search">
      <img
        src="../assets/images/photo-camera.svg"
        alt=""
        width="30%"
        height="30%"
      />
      <span style="font-size:0.7rem">Find Photographers</span>
    </router-link>
    <router-link to="/">
      <img src="../assets/images/search-people-symbol.svg" alt="" />
      <span style="font-size:0.7rem">Find my Photos</span>
    </router-link>
    <router-link to="/photos/explore">
      <img src="../assets/images/picture.svg" alt="" width="30%" height="30%" />
      <span style="font-size:0.7rem">Explore Photos</span>
    </router-link>

    <div class="clear"></div>
  </div>
</template>
<style scoped>
a,
b,
div,
li,
ul {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -moz-outline-: none;
  position: relative;
}
@media only screen and (min-width: 320px) and (max-width: 420px) {
  .single-info-block {
    min-height: 225px;
  }

  #footer-menu a span {
    left: 0;
    right: 0;
    font-weight: 600;
    font-size: 11px;
    padding: 48px 0px 16px 9px;
  }
  #footer-menu a img {
    padding-top: 15px !important;
  }
}
@media (max-width: 480px) {
  .single-info-block {
    min-height: 225px;
  }

  #footer-menu a span {
    left: 0;
    right: 0;
    font-weight: 600;
    font-size: 11px;
    padding: 48px 0px 16px 9px;
  }
}
</style>
