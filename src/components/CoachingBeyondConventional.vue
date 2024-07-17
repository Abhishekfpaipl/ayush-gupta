<template>
  <div class="container-fluid py-5" style="background-color: #d2b48c;">
    <div class="row justify-content-center text-center text-white">
      <div class="col-md-8">
        <h2 class="mb-4">Coaching that goes beyond the conventional</h2>
        <p class="mb-5">
          Create sustainable enterprises and brands that scale organically and deliver
          the value you intended, the way you intended - to all its stakeholders
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="text-center text-white mb-3">
        <p class="mb-0">PRIVATE BUSINESS OWNER</p>
        <p>COACHING</p>
      </div>

      <div class="vertical-line mb-3"></div>

      <div class="logo-circle mb-3 p-3">
        <img src="/img/logo.svg" alt="" style="width: 100%;height: 100%">
        <!-- <span class="circular-text">AYUSH GUPTA GROW YOUR BUSINESS</span> -->
      </div>

      <div class="vertical-line mb-3"></div>

      <div class="text-center text-white">
        <p class="mb-0">PRIVATE BUSINESS</p>
        <p>WORKSHOPS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoachingBeyondConventional',

}
</script>

<style scoped>
.vertical-line {
  width: 2px;
  background-color: white;
  height: 30px;
}

.logo-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sk-text {
  color: white;
  font-weight: bold;
  font-size: 36px;
}

.circular-text {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 8px;
  text-align: center;
  animation: rotate 20s linear infinite;
}
 

p {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .d-flex {
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
  }

  .vertical-line {
    width: 100px;
    height: 2px;
    margin: 0 20px;
  }
}
</style>