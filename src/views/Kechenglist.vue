<template>
    <div class="kechenglist">
        <mt-header title="课程分类">
            <a slot="left" href="javascript:window.history.back()">
                <mt-button icon="back"></mt-button>
            </a>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="xx1">STEAM</mt-tab-item>
            <mt-tab-item id="xx2">生涯研学</mt-tab-item>
            <mt-tab-item id="xx3">核心素养</mt-tab-item>
        </mt-navbar>
        <div class="space"></div>
        <mt-tab-container v-model="selected" class="neir">
            <mt-tab-container-item id="xx1">
                <Kelist type="1" :kcdata="s_data"></Kelist>
            </mt-tab-container-item>
            <mt-tab-container-item id="xx2">
                <Kelist type="2" :kcdata="y_data"></Kelist>
            </mt-tab-container-item>
            <mt-tab-container-item id="xx3">
                <Kelist type="3" :kcdata="h_data"></Kelist>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import __ from '../js/comm'
    import ajaxUrl from '../js/ajax'
    import Kelist from './components/Kelist'

    export default {
        components: { Kelist },
        data(){
            return {
                selected:'',
                s_data: [],
                y_data: [],
                h_data: [],
            }
        },
        //使用缓存后，强刷页面，解决路由参数变化，页面不变的问题
        deactivated(){
            this.$destroy(true)
        },
        created(){
            //显示页为路由传过来的参数
            this.selected='xx'+this.$route.query.type;//改变默认显示页
            __.ajax({
                url: ajaxUrl.kecheng_list
            }).then((reg) => {
                this.s_data = reg.data.data.filterObj({type: '1'});
                this.y_data = reg.data.data.filterObj({type: '2'});
                this.h_data = reg.data.data.filterObj({type: '3'});
            });
        },
        methods: {}
    }
</script>
<style lang="scss">
    @import "./css/kechenglist.scss";
</style>