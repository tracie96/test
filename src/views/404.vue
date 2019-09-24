<template>
  <div>
    <div class="centered text-center peexo-body-text ">
      <p class="big-title">
        Ooops 404! <br />
        You should return home now
      </p>
      <br />
      <router-link to="/" class="home-text">
        <button style="color:#fff" class="btn btn-p btn-rounded btn-peexoo">
          Go back Home
        </button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.home-text {
  color: #ffb503;
}
</style>
