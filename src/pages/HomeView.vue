<template>
  <div class="">
    <CarouselBanner />
    <AboutSection/>
    <WelcomeModal/>
    <CustomCounter :counters="counters"/> 
  </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue";
import AboutSection from "@/components/AboutSection.vue";
import WelcomeModal from "@/components/WelcomeModal.vue";
import CustomCounter from "@/components/CustomCounter.vue"; 

export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    AboutSection,
    WelcomeModal,
    CustomCounter, 
  },
  data(){
    return {
      counters:[
        {name:"Businessmen Trained", number:155300},
        {name:"Cities", number:450},
        {name:"Industry", number:250},
        {name:"Webinar", number:1000},
        {name:"Views", number:910},
      ]
    }
  }
};
</script>
