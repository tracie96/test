<template>
  <div class="col-md-9" id="pricing" v-if="current === 14">
    <div id="accordion" class="mg-top">
      <p>
        Customer Photos
      </p>

      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <a
              href="#"
              class=""
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How many photos should I upload?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Am I expected to edit the photos?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div class="card-body">
            Yes, we recommend you edit/retouch before uploading. After all, this
            is your business and brand we’re talking about.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Who owns the copyright of the photos?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div class="card-body">
            Clients own the right to their photos. You will need to get their
            consent before using any photos for marketing purposes, e.g. posting
            on social media.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingFour">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How does Peexoo benefit upcoming photographers?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseFour"
          class="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordion"
        >
          <div class="card-body">
            Peexoo is dedicated to helping upcoming photographers grow and earn.
            This was why we came up with the idea of the marketplace to improve
            visibility and enable easy booking based on your portfolio.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingFive">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Can photographers upload their pricing packages?
              <i class="fa fa-angle-down rotate-icon"></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseFive"
          class="collapse"
          aria-labelledby="headingFive"
          data-parent="#accordion"
        >
          <div class="card-body">
            Yes, photographers can upload and customize their pricing packages.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingSix">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Are photographers’ equipment going to be vetted?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseSix"
          class="collapse"
          aria-labelledby="headingSix"
          data-parent="#accordion"
        >
          <div class="card-body">
            Yes, this is part of the vetting process required before joining the
            platform.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingSeven">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              What happens when a client asks for a refund?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseSeven"
          class="collapse"
          aria-labelledby="headingSeven"
          data-parent="#accordion"
        >
          <div class="card-body">
            If the job hasn’t been executed, the 60% upfront payment is split
            equally (30% each) between the client and photographer. This amount
            acts as compensation for any delay and irrecoverable time on the
            part of the photographer.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingEight">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              How safe is Peexoo’s cloud?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseEight"
          class="collapse"
          aria-labelledby="headingEight"
          data-parent="#accordion"
        >
          <div class="card-body">
            Peexoo’s cloud repository is one of the safest in the world. It’s
            secured under amazon web services with server farms scattered across
            the globe.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingNine">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              How safe is Peexoo’s cloud?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseSix"
          class="collapse"
          aria-labelledby="headingNine"
          data-parent="#accordion"
        >
          <div class="card-body">
            Peexoo’s cloud repository is one of the safest in the world. It’s
            secured under amazon web services with server farms scattered across
            the globe.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTen">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              What happens when a client asks for all pictures or raw files?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseTen"
          class="collapse"
          aria-labelledby="headingTen"
          data-parent="#accordion"
        >
          <div class="card-body">
            Clients will only get what was agreed upon with the photographer
            during the booking of the shoot.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingEleven">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              Can I rent equipment on the Peexoo?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseEleven"
          class="collapse"
          aria-labelledby="headingEleven"
          data-parent="#accordion"
        >
          <div class="card-body">
            Yes, we’ve got you covered. We’re in the process of releasing a
            feature to enable photographers who can’t afford high-end camera
            equipment to get access to such equipment on lease.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwelve">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              Does Peexoo cater to videographers?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseTwelve"
          class="collapse"
          aria-labelledby="headingTwelve"
          data-parent="#accordion"
        >
          <div class="card-body">
            Yes, we cater to videographers too.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingThirteen">
          <h5 class="mb-0">
            <a
              href="#"
              class=" collapsed"
              data-toggle="collapse"
              data-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
            >
              Are there training programs for photographers?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>
        <div
          id="collapseThirteen"
          class="collapse"
          aria-labelledby="headingThirteen"
          data-parent="#accordion"
        >
          <div class="card-body">
            Of course! Photographers can access top-notch trainings via our
            community on Peexoo.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
