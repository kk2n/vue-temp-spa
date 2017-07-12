<template>
    <div class="kcinfo kechenglist">
        <mt-header title="课程详情">
            <a slot="left" href="javascript:window.history.back()">
                <mt-button icon="back" ></mt-button>
            </a>
        </mt-header>
        <div class="ke-list">
            <ul>
                <li class="klist-img">
                    <a :href="'kcinfo.html?id='+x.id"><img :src="x.img" alt="" class="klie-img"></a>
                </li>
            </ul>
            <ul>
                <li class="klist-tit">
                    <a :href="'kcinfo.html?id='+x.id">
                        {{x.title}}
                    </a>
                </li>
                <li class="klist-tag" >
                    <span v-if="x.shiyong">适用于：{{x.shiyong}}</span>
                    <span v-if="x.ren">{{x.ren}}人学习</span>
                </li>
            </ul>
        </div>
        <div class="line"></div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="t1">目录</mt-tab-item>
            <mt-tab-item id="t2">简介</mt-tab-item>
            <mt-tab-item id="t3">
                相关课程
            </mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="t1">
                <mt-cell v-for="n in mulv" :title="n.name" to="//github.com" />
            </mt-tab-container-item>
            <mt-tab-container-item id="t2">
                <div class="con-txt">{{jianjie}}</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="t3">
                    <div id="xiangg"></div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import __ from '../js/comm'
    import ajaxUrl from '../js/ajax'
    import xiangg from './components/xiangg'
    import Vue from 'vue'

    export default {

        data(){
            return {
                selected:'t1',
                x:{
                    id:'',
                    img:'',
                    title:'',
                    shiyong:'',
                    ren:'',
                },
                type:'',
                mulv:[],
                jianjie:''
            }
        },
        methods:{

        },
        created(){
            __.ajax({
                url: ajaxUrl.kecheng_info
            }).then((reg) => {
                this.x=reg.data.data;
                this.mulv=reg.data.data.mulv;
                this.jianjie=reg.data.data.jianjie;
                this.type=reg.data.data.type;
                new Vue({
                    el: '#xiangg',
                    components:{ xiangg },
                    template: '<xiangg type="'+this.type+'" />',
                });
            });


        },
        mounted(){

        }
    }
</script>