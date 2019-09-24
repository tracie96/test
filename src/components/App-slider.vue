<template>
  <section>
    <canvas id="kenburns">
      <p>Your browser doesn't support canvas!</p>
    </canvas>
    <div class="hero">
      <span class="">
        <!--<div>-->
        <!--<button type="btn btn-peexoo btn-p btn-rounded">Join now!</button>-->
        <!--</div>-->
      </span>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import "bootstrap";

//    import from 'bootstrap';

export default {
  data: function() {
    return {
      images: [
        "https://rave.com.ng/images/DSC.jpg",
        "https://rave.com.ng/images/8x10-3.jpg",
        "https://rave.com.ng/images/DSC_6377.jpg",
        "https://rave.com.ng/images/DSC_1612.jpg"
      ]
    };
  },
  mounted: function() {
    var $canvas = jQuery("#kenburns");
    $canvas.attr("width", jQuery(window).width());
    $canvas.attr(
      "height",
      jQuery(window).height() > 700
        ? jQuery(window).height() - 88
        : jQuery(window).height()
    );
    $canvas.kenburned({
      images: this.images,
      frames_per_second: 100,
      display_time: 7000,
      zoom: 1.2,
      fade_time: 1000
    });
  },

  components: {},
  methods: {
    // created(){
    //     // axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
    //     //     .then(res => res.data.forEach((img) => {
    //     //         this.images.push(img.url)})
    //     //     )
    //     //     .catch(err => console.log(err))
    // }
  }
};
</script>
<style scoped>
.btn .btn-peexoo {
  color: #4d4d4d;
  background-color: #ffb503;
  font-weight: bolder !important;
  box-shadow: none;
  border-radius: 25px !important;
  padding: 0 12px !important;
}

.im {
  width: 100%;
}
.featured-text-container {
  /*margin-top:-70px;*/
  background-color: red;
}
.hero {
  margin-bottom: 100px;
  margin-top: -100px;
  /*color: black;*/
  position: absolute;
  left: 550px;
  top: 400px;
  width: 500px;
  text-align: center;
  font-weight: 500;
  font-size: 3.8rem;
  /*color: #333;*/
  font-family: Cabin, roboto, Helvetica, Arial, sans-serif;
  color: #fff !important;
  text-transform: uppercase;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.45);
  /*background-color: rgba(255, 181, 3, 0.2);*/
  padding: 5px;
}

.hero h1 {
  margin-bottom: 0px !important;
}

@media (max-width: 480px) {
  .hero {
    display: none !important;
    /*margin-bottom: 100px;*/
    /*margin-top: -100px;*/
    /*left: 750px;*/
    /*top: 400px;*/
    /*width: auto;*/
  }
}

/*.btn {*/
/*display: inline-block;*/
/*font-weight: 400;*/
/*color: #212529;*/
/*text-align: center;*/
/*vertical-align: middle;*/
/*-webkit-user-select: none;*/
/*-moz-user-select: none;*/
/*-ms-user-select: none;*/
/*user-select: none;*/
/*background-color: transparent;*/
/*border: 1px solid transparent;*/
/*padding: 0.375rem 0.75rem;*/
/*font-size: 1rem;*/
/*line-height: 1.5;*/
/*border-radius: 0.25rem;*/
/*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/
/*}*/

/*@media (prefers-reduced-motion: reduce) {*/
/*.btn {*/
/*transition: none;*/
/*}*/
/*}*/

/*.btn:hover {*/
/*color: #212529;*/
/*text-decoration: none;*/
/*}*/

/*.btn:focus, .btn.focus {*/
/*outline: 0;*/
/*box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);*/
/*}*/

/*.btn.disabled, .btn:disabled {*/
/*opacity: 0.65;*/
/*}*/

/*a.btn.disabled,*/
/*fieldset:disabled a.btn {*/
/*pointer-events: none;*/
/*}*/

/*.btn-primary {*/
/*color: #fff;*/
/*background-color: #007bff;*/
/*border-color: #007bff;*/
/*}*/

/*.btn-primary:hover {*/
/*color: #fff;*/
/*background-color: #0069d9;*/
/*border-color: #0062cc;*/
/*}*/
</style>
