<script setup lang="ts">
   const { slug } = useRoute().params;
</script>

<template>
    <article class="postPage">
        <ContentDoc :path="`/blogposts/${slug}`" v-slot="{ doc }">
           <div>
            <header>
            <h2 class="slugHeader croissant"> {{ doc.title }} </h2>
            <h2 class="descriptionHeader my-2"> {{ doc.description }} </h2>
            <div class="croissant bar-text text-gold-200 md:gap-8 mb-10">
                <p> {{ doc.author }} </p>
                <p>{{ doc.date }}</p>
                <!-- <NuxtTime :datetime="Date.now()" second="numeric" month="long" day="numeric" year="numeric" /> -->
            </div>
            </header>

            <div class="my-[40px]">
            <ContentRenderer :value="doc">
            </ContentRenderer>
            </div>
           </div>
        </ContentDoc>

        <div>
            <ForYou/>
            <!-- <MeetOurSponsors/>
            <Youtube/>
            <Twitter/> -->
            <SendMail/>
        </div>
    </article>
</template>
