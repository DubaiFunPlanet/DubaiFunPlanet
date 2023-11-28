<template>
    <div>
        <div class="navBar">
            <div class="navBarMobile">
            <Logo/>
            <div @click="this.close = !this.close" class="md:hidden">
                <icon class="menu-times" v-if="close === true" name="iconamoon:sign-times-duotone"/>
                <icon class="menu-times" v-if="close === false" name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"/>
            </div>
            </div>

            <!-- SEARCH BAR -->
            <div class="searchBar">
                <button class="searchIcons"><icon name="tabler:world-search"/></button>
                <input type="text" class="searchInput" placeholder="Search topic here..." v-model="search" />
                <button class="searchIcons"><icon name="prime:times-circle"/></button>
            </div>
            <!-- SEARCH BAR -->
            
            <Links v-if="close === true" class="md:hidden"/>
            <Links class="hidden md:block"/>
            <dark-mode-toggle-button/>
        </div>
    </div>
    
    <div v-if="search.length > 0" class="w-full p-4 absolute top-[100px] gray dark:dark-gold h-[280px] overflow-scroll">
    <ContentList path="/blogposts" :query="{ draft:false, sort:[{date: -1}] }" v-slot="{list}">
        <div class="cards md:grid md:grid-cols-2">
            <div class="card"  v-for="post in list" :key="post._path" v-show="post.title.toLowerCase().includes(search.toLowerCase())">
            <NuxtLink :to="`/${post.slug}`">
            <div class="cardSideA" >
                <h2 class="cardTitleText croissant"> {{ post.title }} </h2>
                <p class="cardContentText">
                    {{ post.description }}
                </p>
            </div>
            </NuxtLink>
            </div> 
        </div>
    </ContentList>

       <!-- DUMMY DATA -->
        <!-- <div class="cards md:grid md:grid-cols-2 lg:grid-cols-3">
            <div class="card" v-for="post in filteredList" :key="post.title">
                <div class="cardSideA">
                    <h2 class="cardTitleText croissant"> {{ post.title }} </h2>
                    <p class="cardContentText">
                        {{ post.description }}
                    </p>
                </div>
            </div>
        </div> -->
        <!-- DUMMY DATA -->
    </div>
</template>

<script>
export default{
    data() {
        return {
            close: false,
            search: '',
            // searchresult: [
            //     {
            //     title: 'one',
            //     description: 'one',
            //     },
            //     {
            //     title: 'two title',
            //     description: 'two description',
            //     },
            //     {
            //     title: 'three',
            //     description: 'three',
            //     },
            //     {
            //     title: 'four title',
            //     description: 'four description',
            //     }
            // ]
        }
    },

    //  computed: {
    //     filteredList() {
    //       return this.searchresult.filter(post => {
    //         return post.title.toLowerCase().includes(this.search.toLowerCase())
    //       })
    //     }
    //     }
    }
</script>