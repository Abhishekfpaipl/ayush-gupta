<template>
    <div style="padding-top: 66px;">
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--brand-color)" v-observe>
            <p class="fs-1">About Us</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <SuccessStory :tests="tests" v-observe />
            <div class="my-5">
                <InfoSection :techTeam="techTeam" :marketingTeam="marketingTeam" :managementTeam="managementTeam"
                    v-observe />
            </div>
            <div class="my-3">
                <AutoScrollingFeatured :links=featured textColor="text-dark" bgColor="white" v-observe />
            </div>
        </div>
        <div class="">
            <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
                :categoryCount="10" place="projects completed" :placeCount="4000" image="/img/smile.svg"
                title="know about us"  path="/" v-observe />
        </div>
    </div>
</template>
<script>
// import SuccessStory from "@/components/SuccessStory.vue";
// import InfoSection from "@/components/InfoSection.vue";
// import AutoScrollingFeatured from "@/components/AutoScrolling.vue";
// import CustomCounter from "@/components/CustomCounter.vue";
export default {
    name: "AboutUs",
    components: {
        // SuccessStory,
        // InfoSection,
        // AutoScrollingFeatured,
        // CustomCounter,
    }, 
    computed: {
        featured() {
            return this.$store.getters.getFeaturedIn
        },
        techTeam() {
            return this.$store.getters['about/getTechTeam']
        },
        marketingTeam() {
            return this.$store.getters['about/getMarketingTeam']
        },
        managementTeam() {
            return this.$store.getters['about/getManagementTeam']
        },
    }
}
</script>