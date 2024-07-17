<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <h1 class="text-center">PRIVATE BUSINESS WORKSHOPS</h1>
      <router-link to="/workshops" class="text-dark"> <i class="bi bi-arrow-right fs-1"></i></router-link>
    </div>

    <div class="row align-items-center">
      <div class="col-md-8">
        <div class="workshop-type mb-4">
          <h3 class="text-uppercase text-muted">Visioning Workshops</h3>
          <p>Visioning workshops derive a sense of purpose and shared values for the organisation. They align the team's
            focus and energy on striving towards a common goal</p>
        </div>

        <div class="workshop-type mb-4">
          <h3 class="text-uppercase text-muted">Strategy Workshops</h3>
          <p>Strategy workshops are set to understand the long-term goals and create step-by-step actionable blueprints
            to achieve the objectives in the most efficient manner. It bridges the gap between where the company is
            today and where it wants to be in the future</p>
        </div>

        <div class="workshop-type mb-4">
          <h3 class="text-uppercase text-muted">Core Team Alignment Workshops</h3>
          <p>Core team alignment workshops bring together the leadership and the team on their common objective, opening
            up a productive space to evaluate progress and formulate the best possible plan forward</p>
        </div>
      </div>

      <div class="col-md-4">
        <img
          src="https://static.wixstatic.com/media/90cf6d_c295018421484de5991238657c76df83~mv2.png/v1/fill/w_529,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90cf6d_c295018421484de5991238657c76df83~mv2.png"
          alt="TEDx Speaker" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivateBusinessWorkshops'
}
</script>

<style scoped>
.workshop-type h3 {
  font-size: 1.2rem;
  color: #b8860b;
}
</style>