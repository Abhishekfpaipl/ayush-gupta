<template>
    <div style="padding-top: 66px;">
        <div class="">
            <img src="/img/aypic.jpg" alt="" style="width: 100%; ">
        </div>
        <div class="container p-4" style="background-color: #EBF5FF">
            <section v-for="(section, index) in sections" :key="index" class="my-5">
                <h2 class="text-start mb-4">{{ section.title }}</h2>
                <p class="text-start fs-5">{{ section.content }}</p>
            </section>

            <div class="achievements d-flex justify-content-between text-center my-5">
                <div v-for="(achievement, index) in achievements" :key="index" class="" >
                    <h3 class="achievement-value">{{ achievement.value }}</h3>
                    <p class="achievement-label">{{ achievement.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutUs",
    data() {
        return {
            sections: [
                {
                    title: "The Person",
                    content: "Sandeep Maheshwari is a renowned motivational speaker, life coach, entrepreneur, and photographer from India. Born on September 28, 1980, in New Delhi, he has become a popular figure in the personal development industry. His journey to success is marked by perseverance, self-belief, and a deep understanding of the human mind."
                },
                {
                    title: "The Journey",
                    content: "Sandeep Maheshwari's journey is a unique one, taking him from the world of entrepreneurship to the stage as a motivational speaker. He is the Founder & CEO of ImagesBazaar.com, the largest collection of creative Indian images. Despite achieving entrepreneurial acclaim, Maheshwari felt a calling to pursue a path that allowed him to inspire and empower others."
                },
                {
                    title: "The Transition",
                    content: "Sandeep Maheshwari's transition from entrepreneur to motivational speaker stemmed from a desire to help others. He began delivering motivational speeches, drawing on his own experiences and challenges to connect with his audience. His relatable approach and simple language resonated deeply."
                },
                {
                    title: "The Core Message",
                    content: "Sandeep Maheshwari's motivational speeches focus on self-improvement, happiness, and goal achievement. He emphasises the importance of self-belief, urging individuals to take charge of their lives and pursue their dreams. His core message is one of encouragement and empowerment, reminding people of their inner strength and potential."
                },
                {
                    title: "The Reach",
                    content: "The impact of Sandeep Maheshwari's motivational message extends far beyond physical speeches. He has a significant social media presence, with a large following on platforms like YouTube, Instagram & Facebook. His YouTube channel features motivational videos viewed by millions, spreading his message of positivity and self-belief on a global scale."
                },
                {
                    title: "The Legacy",
                    content: "Sandeep Maheshwari's influence on millions of people serves as a testament to the power of motivation and self-belief. His journey from photographer, to entrepreneur, to motivational speaker is an inspiration to those seeking to find their purpose and make a positive impact on the world."
                }
            ],
            achievements: [
                { value: "World", label: "Record Holder" },
                { value: "Most Popular", label: "Public Speaker" },
                { value: "2.3 Billion", label: "Views on YouTube" },
                { value: "1200+", label: "Mentorship Sessions" },
                { value: "Awards", label: "& Recognitions" }
            ]
        };
    }
};
</script>

<style scoped> 
 
</style>