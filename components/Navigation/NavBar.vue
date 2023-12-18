<template>
    <div class="sticky top-0 z-50 w-full">
        <div class="navBar">
            <div class="navBarMobile">
            <Logo/>
            <!-- <dark-mode-toggle-button class="md:hidden" /> -->
            <div @click="this.close = !this.close" class="md:hidden">
                <icon class="menu-times" v-if="close === true" name="iconamoon:sign-times-duotone"/>
                <icon class="menu-times" v-if="close === false" name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"/>
            </div>
            </div>

            <!-- SEARCH BAR -->
            <div class="searchBar">
                <button class="searchIcons"><icon name="tabler:world-search"/></button>
                <input type="text" class="searchInput" placeholder="Search topic here..." v-model="search" />
                <button @click="this.search = ''" class="searchIcons"><icon name="prime:times-circle"/></button>
            </div>
            <!-- SEARCH BAR -->

            <div class="hidden md:flex items-center gap-10">
            <Links/>
            <dark-mode-toggle-button />
            </div>

            <div  v-if="close === true" class="md:hidden flex flex-col gap-5">
            <Links/>
            <dark-mode-toggle-button />
            </div>
        </div>
    </div>
    
    <!-- SEARCH RESULT -->
    <div v-if="search.length > 0" class="searchResult pt-[-80px] border-b-[4px] border-b-[#604B2E80]">
        <ContentList path="/" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
            <div class="cards md:grid md:grid-cols-2 lg:grid-cols-3">
                <div class="card dark:hover:bg-black/20 overflow-hidden"  v-for="post in list" :key="post._path" v-show="post.title.toLowerCase().includes(search.toLowerCase())">
                    <NuxtLink :to="`/${post.slug}`" class="flex flex-row-reverse items-center gap-2 group">
                        <div class="cardSideA">
                            <h2 class="cardTitleText croissant line-clamp-3 group-hover:underline group-active:underline"> {{ post.title }} </h2>
                            <p class="cardContentText">
                                {{ post.description }}
                            </p>
                        </div>
                        <div>
                        <img class="min-w-[140px] h-[100px] rounded4 mix-blend-luminosity group-hover:mix-blend-normal group-hover:trans" :src="post.thumbnail" alt="">
                        </div>
                    </NuxtLink>
                </div> 
            </div>
        </ContentList>
    </div>
    <!-- SEARCH RESULT -->
</template>

<script>
export default{
    data() {
        return {
            close: false,
            search: '',
        }
    }
    }
</script>

<style>
::-webkit-scrollbar { 
  width: 5px; 
} 
</style>