<template>
    <div class="container-fluid py-5 position-relative overlay-container shape-container"
        style="background-image:url('https://rahulmalodia.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-20-at-4.33.06-PM-1.jpeg'); background-repeat: no-repeat;background-size: cover;">
        <div class="overlay"></div>
        <div class="row py-4 position-relative" style="z-index: 2;">
            <div v-if="image" class="col-12 col-md-4">
                <img :src="image" style="width: 450px; max-width: 80%" alt="">
            </div>
            <div :class="{ 'col-12': !image, 'col-12 col-md-8': image }">
                <p class="text-center text-warning fs-4 fw-bold">Apart from talking, in terms of numbers…</p>
                <h2 class="text-center fw-bold text-white">Here's The Impact I Have Created</h2>
                <div class="row mt-4 text-dark row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                    <div class="col" v-for="(counter, index) in counters" :key="index">
                        <div class="card bg-dark text-white text-center py-3">
                            <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                                <AutoCounter :data="counter.number"> </AutoCounter>&nbsp;+
                            </p>
                            <p class="mt-0 text-capitalize">{{ counter.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CustomCounter',
    components: {
        AutoCounter
    },
    props: {
        counters: { type: Array, },
        image: { type: String, },
        title: { type: String, },
        icon: { type: String, },
        path: { type: String, },
    },
}
</script>

<style scoped>
.overlay-container {
    position: relative;
    z-index: 1;
}

.overlay-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black overlay */
    z-index: -1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black overlay */
    z-index: 1;
}
 

/* .shape-container {
    position: relative;
    padding-bottom: 50px;  
}

.shape-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-style: solid;
    border-width: 0 0 50px 98vw;  
    border-color: transparent transparent #ffffff transparent;  
    z-index: 3;
} */
</style>