<template>
    <div class="container-fluid pt-3 border-top border-bottom" style="color: var(--brand-color) !important">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <router-link to="/">
                    <img :src="img" style="width: 100px;object-fit: contain;">
                </router-link>
                <p class="mb-0 fw-bold fs-2 text-uppercase" >Ayush Gupta</p>
                <!-- <p class="mb-2 text-capitalize" >solutions for business</p> -->

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : support@covisor.in</p>
                <p class="mb-2">Mob no. : 91 8860012001</p>
                <p class="mb-2">Address : 2nd Floor, Block B1/632, <br> Janakpuri, 110058, Delhi, India</p>
                <div class="d-flex gap-2 justify-content-center">
                    <p class="fw-bold">Follow Us :</p>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column"> 
                        <router-link :to="link.link" class="text-decoration-none my-1 " style="color: var(--brand-color) !important"
                            v-for="(link, index) in company" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column"> 
                        <router-link :to="link.link" class="text-decoration-none my-1" style="color: var(--brand-color) !important"
                            v-for="(link, index) in links" :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="bg-light text-center py-3 d-flex align-items-center justify-content-center">
        <p class="text-dark mb-0"> Copyright © 2024 Covisor Infotech Pvt Ltd All rights reserved</p>
    </div>
</template>

<script>
 export default {
    name: 'FooterBar', 
    data() {
        return {
            img: '/img/logo.svg',
            company: [
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    id: 3,
                    name: 'Patnership',
                    link: '/reseller-program'
                },
                {
                    id: 9,
                    name: 'Career',
                    link: '/career'
                },
            ],
            links: [
                {
                    id: 13,
                    name: 'Legal',
                    link: '/legal-warning'
                },
                {
                    id: 1,
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },
                {
                    id: 1,
                    name: 'Terms Of Use',
                    link: '/terms-of-use'
                },

                {
                    id: 3,
                    name: 'Business',
                    link: '/business'
                },

            ],
        }
    },
}
</script>

<style></style>
