<template>
  <div class="col-md-9" id="signup">
    <div id="accordion" class="mg-top">
      <p>
        Signing Up
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
              What information do I need to create an account?<i
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
            Your first name, last name and email address.
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
              What happens after I sign up on Peexoo?<i
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
            You get a notification to update your profile. Once your account is
            updated, you can explore and discover photographers using
            FindMyPhotographer or use FindMyFace to find your photos.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <a
              href="#"
              class="collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can I sign up for both the customer and photographer accounts?
              <i class="fa fa-angle-down rotate-icon"></i>
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
            Yes. However, you must be a professional photographer to sign up as
            a photographer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
