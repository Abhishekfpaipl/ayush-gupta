<template>
    <div style="padding-top: 60px;">
        <div class="">
            <img src="https://businesscoachingindia.com/sites/default/files/2022-11/Website%20Banner-01_0.jpg"
                style="width: 100%;" alt="">
        </div>
        <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col" v-for="(fair, index) in workshops" :key="index">
                    <router-link to=""
                        class="text-decoration-none my-1 card border position-relative rounded-0 overflow-hidden">
                        <div class="card-img-container">
                            <img :src="fair.img" class="card-img-top rounded-0" alt="..."
                                style="object-fit: fill;height: 150px;">

                        </div>
                        <div class="card-body p-2">
                            <p class="fw-bold text-capitalize">{{ fair.title }}</p>
                            <p class="text-start text-capitalize">{{ fair.subtitle }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-2 fs-5 text-ellipsis2">{{ fair.state }}</p>
                                <p class="mb-2 fs-5 text-ellipsis2 text-danger">{{ fair.price }}</p>
                            </div>
                            <div class="d-flex gap-2">
                                <i class="bi bi-calendar"></i>
                                <p>&nbsp;{{ fair.start_date }} to&nbsp;</p>
                                <p>{{ fair.end_date }}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <button class="btn btn-dark text-capitalize rounded-0">Read More</button>
                                <button class="btn btn-dark text-capitalize rounded-0">Register and pay now</button>
                            </div>
                            <p class="fs-4 my-3 fw-bold text-start">GST @18% to be charged extra.</p>
                        </div>
                        <!-- <div class="position-absolute text-center start-0 ms-0" style="top: 0px;">
                            <span class="text-dark  p-1 pt-0 rounded-end-3"
                                style="background-color:rgba(255, 206, 86, 1); border:1px solid rgba(255, 162, 0, 1) !important;">₹
                                {{ fair.price }}</span>
                        </div> -->
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            workshops: [
                {
                    img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
                    title: "Business Mastery program - july'24",
                    subtitle: "BMP- Business Mastery program",
                    state: "Delhi",
                    price: 1000000,
                    start_date: "july 10, 2024",
                    end_date: "march 19, 2025",
                },
                {
                    img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
                    title: "Business Mastery program - july'24",
                    subtitle: "BMP- Business Mastery program",
                    state: "Delhi",
                    price: 1000000,
                    start_date: "july 10, 2024",
                    end_date: "march 19, 2025",
                },
                {
                    img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
                    title: "Business Mastery program - july'24",
                    subtitle: "BMP- Business Mastery program",
                    state: "Delhi",
                    price: 1000000,
                    start_date: "july 10, 2024",
                    end_date: "march 19, 2025",
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>