<template>
  <div class="">
    <CarouselBanner />
    <AboutSection/>
    <WelcomeModal/>
    <PromiseSection/>
    <BrandExposure/>
    <CoachingBeyondConventional/>
    <PrivateBusinessWorkshops/>
    <CustomCounter :counters="counters"/> 
    <RotatingText/>
  </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue";
import AboutSection from "@/components/AboutSection.vue";
import WelcomeModal from "@/components/WelcomeModal.vue";
import CustomCounter from "@/components/CustomCounter.vue"; 
import PromiseSection from "@/components/PromiseSection.vue"; 
import BrandExposure from "@/components/BrandExposure.vue"; 
import CoachingBeyondConventional from "@/components/CoachingBeyondConventional.vue"; 
import PrivateBusinessWorkshops from "@/components/PrivateBusinessWorkshops.vue"; 
// import RotatingText from "@/components/RotatingText.vue"; 

export default {
  name: "HomeView",
  components: {
    CarouselBanner,
    AboutSection,
    WelcomeModal,
    CustomCounter, 
    PromiseSection,
    BrandExposure,
    CoachingBeyondConventional,
    PrivateBusinessWorkshops,
    // RotatingText,
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
