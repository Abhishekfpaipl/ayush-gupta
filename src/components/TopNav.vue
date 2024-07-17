<template>
    <div class="position-fixed bg-light top-0 w-100 d-flex justify-content-between align-items-center px-md-4 px-2"
        style="z-index: 999;">
        <div class="p-2">
            <div class="flex-fill d-flex align-items-center">
                <router-link to="/" class="text-decoration-none d-flex align-items-center"
                    style="color:var(--brand-color) !important">
                    <img :src="brandLogo" alt="Brand Logo" style="height: 50px; object-fit: contain;">
                    <div class="d-flex flex-column align-items-end ms-2">
                        <span class="text-uppercase fs-4 fw-bold lh-1">Ayush Gupta</span>
                        <!-- <small class="smaller text-capitalize">Solutions for business</small> -->
                    </div>
                </router-link>
            </div>
        </div>
        <!-- <div class="d-flex gap-3"> -->
            <div class="btn d-flex justify-content-center align-items-center  gap-2"
                style="border-color: var(--brand-color) !important; color:var(--brand-color) !important"
                @click="openDialer()">
                <i class="bi bi-telephone fs-4"></i>
                <span class="d-none d-md-block">Contact Sales</span>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            brandLogo: '/img/logo.svg',
        }
    },
    methods: {
        closeOffcanvas() {
            const offcanvasElement = document.getElementById('offcanvasExample');
            const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        },
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
        openWhatsapp() {
            window.open(`https://wa.me/${918860012001}?text=Hello...`, '_blank');
        }
    },
    mounted() {
        this.$router.afterEach(() => {
            this.closeOffcanvas();
        });
    }
};
</script>
