<template>
    <div>
    <!-- TOP NEWS -->
    <div>
        <TitleBar
        label="Today | Top News"
        date=""
        class="mb-[40px]"
        />
        <ContentList path="/topnews" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
            <div class="cards md:grid md:grid-cols-2">
                <NuxtLink :to="`/${post.slug}`" class="topnewscard group"  v-for="post in list" :key="post._path">
                    <!-- side A -->
                    <div class="dark:topnewscover"></div>

                    <div class="topnewstext">
                        <h2 class="topnewsTitleText croissant"> {{ post.title }} </h2>
                        <p class="topnewsContentText">
                            {{ post.description }}
                        </p>
                        <div class="flex justify-between items-end">
                            <p class="cardDate"> {{ post.date }} </p>
                            <!-- <NuxtTime class="cardDate" :datetime="Date.now()" month="long" day="numeric" year="numeric" /> -->
                        </div>
                    </div>
            
                    <!-- side B -->
                    <div class="topnewsBgImage">
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

    <!-- LATEST NEWS-->
    <latestCard/>

    <!-- FOR YOU -->
    <ForYou/>
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