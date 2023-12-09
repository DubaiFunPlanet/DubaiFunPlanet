<template>
    <!-- FOR YOU -->
    <div>
        <TitleBar
        label="For you: You may also like"
        date=""
        class="mb-[40px]"
        />
        <ContentList path="/foryou" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
            <div class="cards lg:grid lg:grid-cols-2">
                <NuxtLink :to="`/${post.slug}`" class="foryoucard group"  v-for="post in list" :key="post._path">
                    <!-- side A -->
                    <div class="foryoucardSideA">
                        <h2 class="foryouTitleText croissant"> {{ post.title }} </h2>
                        <!-- <p class="cardContentText">
                            {{ post.description }}
                        </p> -->
                        <!-- <div class="flex justify-between items-end">
                            <p class="cardDate"> {{ post.date }} </p>
                        </div> -->
                    </div>
            
                    <!-- side B -->
                    <div class="foryoucardSideB bg-gray-200">
                        <img class="foryoucardImage" :src="post.thumbnail" alt="">
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