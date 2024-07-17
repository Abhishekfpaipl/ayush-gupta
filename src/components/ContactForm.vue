<template>
    <div>
        <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation">
            <div class="w-100 form-floating mt-2">
                <input type="text" class="form-control" placeholder="" v-model="name" required>
                <label for="floatingInput" class="text-muted ms-2">Your Name</label>
            </div>
            <div class="w-100 form-floating mt-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                    v-model="service"></textarea>
                <label for="floatingTextarea" class="ms-2 text-muted">Services Required</label>
            </div>
            <div class="w-100 form-floating mt-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                    v-model="note"></textarea>
                <label for="floatingTextarea" class="ms-2 text-muted">Notes</label>
            </div>

            <div class="col-12">
                <button class="btn btn-warning py-2 w-100" type="submit"><i class="bi bi-whatsapp me-2"></i> <span
                        class="text-uppercase">Enquiry</span></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            service: '',
            note: '',
        };
    },
    methods: {
        submitQuery() {
            if (this.name != "" && this.service != "" && this.notes != "") {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name}. I need the following services: ${this.service}. Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "",
                    this.service = "",
                    this.note = "";
            }
        }
    }
}
</script>
<style lang="">

</style>