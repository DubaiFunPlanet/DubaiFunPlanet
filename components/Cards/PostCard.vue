<template>
    <div>
        <TitleBar
        label="Latest"
        date=""
        class="mb-[40px]"
        />
    
        <ContentList path="/blogposts" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
            <div class="cards md:grid md:grid-cols-2">
                <NuxtLink :to="`/${post.slug}`" class="card group"  v-for="post in list" :key="post._path">
                    <!-- side A -->
                    <div class="cardSideA">
                        <h2 class="cardTitleText croissant"> {{ post.title }} </h2>
                        <p class="cardContentText">
                            {{ post.description }}
                        </p>
                        <div class="flex justify-between items-end">
                            <p class="cardDate"> {{ post.date }} </p>
                        </div>
                    </div>
            
                    <!-- side B -->
                    <div class="cardSideB bg-gray-200">
                        <img class="cardImage" :src="post.thumbnail" alt="">
                        <!-- <div class="cardIcons">
                            <div class="cardIcon"><icon name="material-symbols:share"/></div>
                            <div class="cardIcon"><icon name="material-symbols:bookmark"/></div>
                        </div> -->
                    </div>
                </NuxtLink> 
            </div>
        </ContentList>
    </div>
</template>

<style scoped>
.icon {
    font-size: 12px;
}
</style>