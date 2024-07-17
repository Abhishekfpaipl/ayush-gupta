<template>
    <div class="bg-dark">
        <div class="container py-5">
            <h2 class="text-center fw-bold text-warning text-capitalize">I can promise that</h2>
            <p class="text-center text-capitalize text-white">you will have a life-changing expiernce if you join me to become the
                ceo of your business!</p>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col" v-for="(promise, index) in promises" :key="index">
                    <div class="card d-flex flex-column justify-content-center align-items-center px-3">
                        <img :src="promise.img" alt="" style="height: 80px; width: 80px;">
                        <p>{{ promise.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            promises: [
                { img: 'https://rahulmalodia.com/wp-content/uploads/2022/08/Freedom.png', title: "Freedom from everyday business Activities, connecting back to Old Life" },
                { img: "https://rahulmalodia.com/wp-content/uploads/2022/08/Sale-Management-.png", title: "More time for Business strategy, less for managing the workforce" },
                { img: "https://rahulmalodia.com/wp-content/uploads/2022/08/G002-Busi-5.png", title: "Creating a system that leads your organization to work without your monitoring    " },
            ]
        }
    }
}
</script>
<style lang="">

</style>