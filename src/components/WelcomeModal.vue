<template>
    <div>
        <div class="query border rounded-circle" style="background-color: var(--brand-color)" @click="openModal">
            <img src="/img/query.svg" style="width: 25px; height: 25px; filter: invert(1);" alt="">
        </div>

        <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" :class="{ 'show': showModal }">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content text-white position-relative" style="background-color: var(--brand-color)">
                    <div class="modal-body">
                        <h3 class="my-2 text-capitalize">Hello, how can we help you?</h3>
                        <div class="row d-flex align-items-center">
                            <div class="col-md-6 mt-4 mt-md-0">
                                <img src="/img/welcome.svg" style="width: 200px; max-width: 90%" alt="">
                            </div>
                            <div class="col-md-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 bg-light text-dark px-2 p-1 end-0"
                        @click="closeModal" style="top: -3%">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            showModal: false,
        };
    },
    mounted() {
        if (!localStorage.getItem('popupShown')) {
            setTimeout(() => {
                this.showModal = true;
            }, 2000);
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            localStorage.setItem('popupShown', 'true');
        },
    }
};
</script>

<style scoped>
/* Optional: Add custom styles for the modal */
.modal {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    /* semi-transparent background */
    transition: opacity 0.3s ease;
}

.modal.show {
    display: block;
    opacity: 1;
}

.query {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
</style>
