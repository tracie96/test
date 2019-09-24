<template>
  <div class="col-md-9" id="pricing">
    <div id="accordion" class="mg-top">
      <p>Creating a Profile</p>

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
              What is the best way to create my profile to attract customers?<i
                class="fa fa-angle-down rotate-icon"
              ></i>
            </a>
          </h5>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            Simple! Upload your best photography portfolio and ensure you
            specify the category of photography you specialize in.
          </div>
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
              What price package should I set?<i
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
            Your pricing package should depend on factors like years of
            experience, speciality, high-in-demand requests, etc. We suggest you
            begin at a price rate you’re most comfortable with and experiment
            with it. Your dashboard will be useful for spotting trends in the
            price rate you set vs income from clients’ requests.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
