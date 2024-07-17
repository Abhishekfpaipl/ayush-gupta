<template>
    <div class="" style="padding-top: 66px;">
        <div class="text-white py-5" style=" background-color:var(--brand-color) ;padding-bottom: 6rem !important;"
            v-observe>
            <h1 class="text-center mb-0 fw-bold">Contact Page</h1>
            <p class="small mb-0 text-capitalize text-center">The secret of getting ahead, is getting started</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <div class="row p-3">
                <div class="col-12 col-md-6 pt-4 text-center">
                    <ContactForm />

                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 pt-4 text-center">
                    <h1 class="text-uppercase my-3">We Believe</h1>
                    <p class="text-capitalize fs-5 fw-bold">"If you don't take care of your customers, <br> your
                        competitors
                        will do!"</p>
                    <h1 class="text-uppercase cutout my-3"><span>So Relax </span></h1>
                    <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together <br>We will take
                        care of
                        you !"</p>
                </div>

            </div>
        </div>
        <div class="container-fluid mt-5 py-5 text-white" style="background-color: var(--brand-color)" v-observe>
            <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
            <div class="row">
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/img/contactus.svg" style="width: 500px; max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 d-flex">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-between align-items-center border p-2 px-4">
                                <a class="text-white d-flex gap-2 align-items-center text-decoration-none"
                                    :href="icon.url" target="_blank">
                                    <i :class="icon.icon" class=""></i>
                                    <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                                </a>
                                <img src="/img/right-arrow.svg" style="width: 30px;filter: invert(1);" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"; 
export default {
    name: "ContactPage",
    components: { 
        ContactForm,
    },
    data() {
        return {
            contact: [
                { name: 'support@covisor.in', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '918860012001', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                { name: '918860012001', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'B1/632, Janakpuri, Delhi', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
            ],
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    color: 'blue',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-twitter-x fs-3',
                    name: 'Twitter',
                    color: 'black',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    color: 'blue',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
            mobile: '',
            email: '',
            number: '',
            note: '',
        }
    },
    methods: {
        loginAccount() {
            console.log(this.mobile, this.email, this.number, this.note)
        },
        submitQuery() {
            if (this.name != '' && this.note != '') {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name} i would like to book my 30 mins free consultation. Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "";
                this.note = "";
            }
        },
        handleIconClick(action) {
            const phoneNumber = '+918860012001';
            const emailAddress = 'support@covisor.in';
            const location = '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058';

            switch (action) {
                case 'openEmail':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
                case 'openDialer':
                    window.location.href = `tel:${phoneNumber}`;
                    break;
                case 'openWhatsapp':
                    window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
                    break;
                case 'openMaps':
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                    break;
                default:
                    break;
            }
        },
    }
}
</script>

<style scoped>
.cutout {
    overflow: hidden;
    text-align: center;
}

.cutout>span {
    position: relative;
    display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 900px;
    /* Adjust width as needed */
    margin: 0 20px;
}

.cutout>span:before {
    right: 100%;
    border-bottom: 2px solid;
    border-color: black;
    border-image-slice: 1;
}

.cutout>span:after {
    left: 100%;
    border-bottom: 2px solid;
    border-color: black;
    border-image-slice: 1;
}
</style>
