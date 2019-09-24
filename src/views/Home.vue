<template>
  <div id="app" class="page">

    <PHeader />

    <section class="banner-area-wraper">

      <div class="banner-slider-area">


       <Appslider/>



      </div>


      <p class="p-slider">
        <span id="title-banner" class="text_1">
         AFROSHOTS
        </span>
        <!-- <span id="title-banner" class="text_1">
         LANRE OLADEJO
        </span> -->
      </p>
    </section><!-- end agency banner section -->
    <section class="xs-section-padding pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="agency-section-title text-center section-title-style2">
              <h2 class="main-title pt-1">Igniting Photography</h2>
              <p style="padding-bottom:25px pt-5">
              Relive your best memories and highlight meaningful moments through the lens of world-class photographers. It’s quick and easy to book now.

              </p>

              <button class="btn btn-peexoo btn-p btn-rounded" style="margin-top:%;">Find a Photographer</p></button>
            </div>
          </div>
        </div><!-- .row end -->

      </div><!-- .container END -->
    </section><!-- end business info section -->
    <Booking />






    <!--BENEFITS AND FEATURES-->
    <section class="xs-section-padding">
      <div class="container">
        <div class="row">
          <div class="col mx-auto">
            <div class="agency-section-title t2 text-center section-title-style2">
              <h2 class="main-title" style="color:#ffb503">Benefits and Features</h2>
              <p class="p-italics">
                Some of our benefits and features include
              </p>

            </div>
            <div class="benefits-row benefits-card">
              <div class="col-lg-4 col-sm-12 card ">
                <img src="../assets/images/vector/findphotographer.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">Find a photographer</h4>
                <p>Looking to hire a photographer for a personal shoot or to cover an event? We’ve got a wide range of professional photographers you can choose from. All our photographers are verified and are the best at what they do.</p>
              </div>
              <div class="col-lg-4 col-sm-12 card">
                <img src="../assets/images/vector/peexootouch.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">Get your photos and videos instantly!</h4>
                <p>Peexoo photographers work with innovative editing tools that take minutes to edit your pictures and videos. Now, you no longer wait for weeks to get your pictures anymore. With Peexoo, your pictures are exceptional, Instagram-worthy and gotten instantly.</p>
              </div>
              <div class="col-lg-4 col-sm-12 card">
                <img src="../assets/images/vector/findmyface.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">Find My Face</h4>
                <p class="mb-5">The memory of an event lives longer than the event especially when you’ve got amazing pictures to look back at. Whether you photobombed random shoots or posed elegantly for photoshoots, Peexoo finds all the pictures you appeared in and brings them right to you. Simply get started by taking a selfie.</p>
              </div>
            </div>
            <div class="benefits-row benefits-card" >
              <div class="col-lg-4 col-sm-12 card">
                <img src="../assets/images/vector/availability.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">Awesome sharing experience</h4>
                <p>Get ready to share exciting experiences with your family and friends. Peexoo Memories makes sharing pictures and videos easy and fun using an image compression AI algorithm to reduce the size of images without affecting its quality. Peexoo Memories is bringing back the bliss of storing and sharing albums digitally.</p>
              </div>

              <div class="col-lg-4 col-sm-12 card">
                <img src="../assets/images/vector/downtime.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">Turning beautiful days into masterpieces</h4>
                <p>Spark up your images with one touch of Peexoo Touch.  Peexoo Touch instantly transforms a basic looking picture into an art of expression in seconds. Give your picture that pop it deserves.</p>
              </div>

              <div class="col-lg-4 col-sm-12 card">
                <img src="../assets/images/vector/peexoohub.svg" alt="benefits" style="width: 100%;" class="mb-5">
                <h4 class="">A bankable network you can count on</h4>
                <p class="mb-5">Get the best of Peexoo Hub. Connect with renowned photographers. Become part of a solid network of creative photographers and videographers in Africa. Get inspired by the best photographers in the industry through networking, meetups, workshops and land juicy deals. Networking is always a win-win.</p>
              </div>
            </div>

          </div>
        </div><!-- .row end -->
      </div>
    </section>


    <Testimony />


       
    <!--<section class="xs-section-padding" style="padding-bottom:80px">-->
      <!--<div class="container">-->
        <!--<div class="row pexo-bg">-->
          <!--<div class="col-md-6 pexo-pad">-->
            <!--<p>-->
              <!--DON’T MISS OUT!-->
              <!--DOWNLOAD OUR MOBILE APP-->
              <!--FOR A FULL MOBILE-->
              <!--EXPERIENCE-->
            <!--</p>-->
            <!--<div class="pad-top-30">-->
              <!--<span>-->
                <!--<img style="width:40%" src="../assets/images/ww_app-store.png" alt="download from app store">-->
              <!--</span>-->
              <!--<span>-->
                <!--<img style="width:45%" src="../assets/images/google-play.png" alt="download from google store">-->
              <!--</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-md-6 pexo-pad">-->
            <!--<img src="../assets/images/app-screen-mockup.png" alt="">-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->
    <Footer />
  
    <Menu />
  </div>
</template>

<script>
  import PHeader from '../components/PHeader'
  import Booking from '../components/Booking'
  import Testimony from '../components/Testimony'
  import Footer from '../components/Footer'
  import Menu from '../components/Menu'
  import Appslider from '../components/App-slider'
  
 
  export default {
    name: "home",
    components: {
      PHeader,
      Booking,
      Testimony,
      Footer,
      Menu,
      Appslider
      
       
    }
   
}

</script>
<style >


   
        .form-wrapper-outer {
            padding: 40px;
            border-radius: 8px;
            margin: auto;
            width: 460px;
            border: 1px solid #DADCE0;
            margin-top: 7%;
        }
    
        .form-wrapper-outer .form-logo {
            margin: 0px auto 15px;
            width: 100px;
        }

        .benefits-card .card h4{
          text-align: left;
          margin-left: 30px;
          /*font-family: Lora !important;*/
          margin-bottom: 20px;
        }

        .benefits-card .card p{
          text-align: left;
          margin-left: 25px;
          margin-bottom: 20px;
          /*font-family: Lora !important;*/
        }
    
        .form-wrapper-outer .form-logo img {
            width: 100%;
        }
    
        .form-greeting {
            text-align: center;
            font-size: 25px;
            margin-bottom: 15px;
        }
    
        .form-button {
            text-align: right;
        }
    
        .field-wrapper {
            position: relative;
            margin-bottom: 15px;
        }
    
        .field-wrapper input {
            border: 1px solid #979797;
            padding: 15px;
            border-radius: 5px;
            width: 100%;
        }
    
        .field-wrapper .field-placeholder {
            font-size: 16px;
            position: absolute;
            /* background: #fff; */
            bottom: 17px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #80868b;
            left: 8px;
            padding: 0 8px;
            -webkit-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
    
            text-align: left;
            width: 100%;
        }
    
        .field-wrapper .field-placeholder span {
            background: #ffffff;
            padding: 0px 0px;
            font-size: 13px;
        }
    
        .field-wrapper input:not([disabled]):focus~.field-placeholder {
            color: #b58000;
        }
    
        .field-wrapper input:not([disabled]):focus~.field-placeholder,
        .field-wrapper.hasValue input:not([disabled])~.field-placeholder {
            -webkit-transform: scale(.75) translateY(-39px) translateX(-60px);
            transform: scale(.75) translateY(-39px) translateX(-60px);
    
        }







        @keyframes typewriter {
          0%, 100% {
            width: 0;
          }
          20%, 80% {
            width: 13em;
          }
        }

        @keyframes caret {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .text_1 {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter;
          display: inline-block;
          position: relative;
          animation-duration: 7s;
          animation-timing-function: steps(25, end);
          animation-iteration-count: infinite;
        }


        .text_1::after {
          content: "|";
          position: absolute;
          right: 0;
          animation: caret infinite;
          animation-duration: 1s;
          animation-timing-function: steps(1, end);
        }

        .benefits-row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          /*flex-wrap: wrap;*/
          margin-right: -15px;
          margin-left: -15px;
          flex-wrap: nowrap !important;;
        }

  .card{
    margin-left: 1rem!important;
  }

  @media (max-width: 480px){

    .row, .benefits-row{
      flex-wrap: wrap !important;
    }
    .p-slider{
      top: -200px;
    }
  }

        
    </style>