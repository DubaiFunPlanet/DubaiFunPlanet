<script setup lang="ts">
   const { slug } = useRoute().params;

   const props = defineProps({
    date: {
        type: [String, Number],
        default: null,
    },
   })
   
   const formatDate = function() {
    return new Date(props.date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
}
</script>

<!-- <script>
export default {
    methods: {
      formatDate(date) {
        // format the date to be displayed in a readable format
        return new Date(date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      },
    },
}
</script> -->

<template>
    <article class="postPage">
        <ContentDoc :path="`/blogposts/${slug}`" v-slot="{ doc }">
           <div>
            <header>
            <h2 class="mediumHeader dark:white-text croissant mt-12"> {{ doc.title }} </h2>
            <h2 class="descriptionHeader my-2"> {{ doc.description }} </h2>
            <div class="croissant bar-text text-gold-200 md:gap-8 mb-10">
                <p> {{ doc.author }} </p>
                <p>{{ doc.date }}</p>
                <div class="flex flex-col md:flex-row gap-4">
                    <span>Posted: {{ formatDate(doc.gitCreatedAt) }}</span>
                    <span>Updated: {{ formatDate(doc.gitUpdatedAt) }}</span>
                </div>
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
