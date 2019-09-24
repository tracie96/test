<template>
  <div class="col-md-9" id="bookandreview">
    <div id="accordion" class="mg-top">
      <p>
        Booking and Review
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
              Must I rate and review a photographer?<i
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
            No. However, reviewing a photographer helps us serve you better by
            sorting out top-rated photographers to match your photography needs.
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
              Why do I need to get rated by a photographer?<i
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
            Photographers are allowed to review clients to ensure mutual
            professionalism between the photographer and the client while on the
            job.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
