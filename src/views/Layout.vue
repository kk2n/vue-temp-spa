<template>
    <div class="pages-view">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <mt-tabbar v-model="showpage" fixed>
            <mt-tab-item id="tab-1">
                <router-link class="nav-a" to="/">
                    <div class="tubiao-index"></div>
                    首页
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab-2">
                <router-link class="nav-a" to="/pages/grade">
                    <div class="tubiao-grade"></div>
                    小组
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab-3">
                <router-link class="nav-a" to="/pages/userseting">
                    <div class="tubiao-user"></div>
                    我的
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
        name: 'pages-view',
        data () {
            return {
                showpage: 'tab-1'
            }
        },
        methods: {}
    }
</script>