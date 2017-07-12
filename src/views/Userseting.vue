<template>
    <div class="userseting">
        <div class="us-tit">
            请登录
        </div>
        <div class="line"></div>
        <div class="space"></div>
        <div class="line"></div>
        <mt-cell
                title="评价记录"
                :to="'kecheng_list.html?url='"
                is-link
                value="">
        </mt-cell>
        <div class="line"></div>
        <mt-cell
                title="课程表"
                :to="'kecheng_list.html?url='"
                is-link
                value="">
        </mt-cell>
        <div class="line"></div>
        <mt-cell
                title="我的上传"
                :to="'kecheng_list.html?url='"
                is-link
                value="">
        </mt-cell>
        <div class="line"></div>
        <mt-cell
                title="帮助与反馈"
                :to="'kecheng_list.html?url='"
                is-link
                value="">
        </mt-cell>
        <div class="line"></div>
        <mt-cell
                title="关于我们"
                :to="'kecheng_list.html?url='"
                is-link
                value="">
        </mt-cell>
        <div class="line"></div>
        <div class="tc-btu">
            <mt-button type="default" size="large">退出系统</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style lang="scss">
    @import "./css/userseting.scss";
</style>