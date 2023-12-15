<template>
    <div>
        <TitleBar
        label="Latest"
        date=""
        class="mb-[40px]"
        />
        <ContentList path="/blogposts" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
            <div class="cards lg:grid lg:grid-cols-2">
                <NuxtLink :to="`/${post.slug}`" class="card group"  v-for="post in list" :key="post._path">
                    <!-- side A -->
                    <div class="cardSideA">
                        <h2 class="cardTitleText croissant"> {{ post.title }} </h2>
                        <p class="cardContentText">
                            {{ post.description }}
                        </p>
                        <div class="flex justify-between items-end">
                            <p class="cardDate"> {{ post.date }} </p>
                            <!-- <NuxtTime class="cardDate" :datetime="Date.now()" month="long" day="numeric" year="numeric" /> -->
                        </div>
                    </div>
            
                    <!-- side B -->
                    <div class="cardSideB">
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

.topnewstext {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.56) 39.17%, rgba(0, 0, 0, 0.81) 100%);
}
</style>