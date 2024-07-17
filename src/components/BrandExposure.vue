<template>
    <div class="py-5" style="background-color: #d2b48c;">
        <div class="container">
            <h2 class="text-center text-white mb-5">BRAND EXPOSURE</h2>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="(exposure, index) in brandExposures" :key="index">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ exposure.title }}</h5>
                            <p class="card-text text-muted">{{ exposure.subtitle }}</p>
                            <img :src="exposure.image" :alt="exposure.title" class="img-fluid mb-3"
                                style="max-height: 200px; object-fit: cover;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BrandExposure',
    data() {
        return {
            brandExposures: [
                {
                    title: 'BUSINESS OWNERS',
                    subtitle: 'from CII, PHD Chamber, MSME Forum, Magicka etc.',
                    image: 'https://static.wixstatic.com/media/90cf6d_c097a77dc3ae4539bf4a08f17e86995d~mv2.png/v1/fill/w_320,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CII%20Workshop.png'
                },
                {
                    title: 'ENTREPRENEURS',
                    subtitle: 'from Startup Grind, Harvard, MIT, Cornell, IIT, IIM',
                    image: 'https://static.wixstatic.com/media/90cf6d_1952df7f6fbe4d26b1d2955e0b11d05d~mv2.png/v1/crop/x_40,y_32,w_1528,h_1528/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90cf6d_1952df7f6fbe4d26b1d2955e0b11d05d~mv2.png'
                },
                {
                    title: 'FORTUNE 500s',
                    subtitle: 'Including Unilever, Reliance, Maruti, AMARON, NALCO etc.',
                    image: 'https://static.wixstatic.com/media/90cf6d_3909938340704f3097b489985c2765d8~mv2.png/v1/fill/w_319,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90cf6d_3909938340704f3097b489985c2765d8~mv2.png'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>