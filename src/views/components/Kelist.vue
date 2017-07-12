<template>
    <div class="loadmore" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="0"
         infinite-scroll-immediate-check="0"
    >
        <div v-for="x,xx in kclist">
            <div class="ke-list">
                <ul>
                    <li class="klist-img">
                        <router-link :to="{path:'/pages/kcinfo', query: {id:x.id} }">
                            <img :src="x.img" alt="" class="klie-img">
                        </router-link>
                    </li>
                </ul>
                <ul>
                    <li class="klist-tit">
                        <router-link :to="{path:'/pages/kcinfo', query: {id:x.id} }">
                            {{x.title}}
                        </router-link>
                    </li>
                    <li class="klist-tag">
                        <span>适用于：{{x.shiyong}}</span>
                        <span>{{x.ren}}人学习</span>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
        </div>
        <div class="loading" v-show="loading"></div>
        <div class="nodata" v-show="nodata">没有数据</div>
    </div>
</template>
<script>
    import __ from '../../js/comm'

    export default {
        props: ['type', 'kcdata'],
        data(){
            return {
                zdata: [1],
                kclist: [],
                loading: 0,
                ii: 1,
                nodata: 0,
            }
        },
        created(){
            //设置滚动加载区域高度
            setTimeout(() => {
                let vdom = __.getClass('loadmore');
                let hh = __.getWinHei;
                __._.each(vdom, function (a) {
                    a.style.height = __.getWinHei() - 55 - 50 - 45 - 10 + 'px';
                });

                //初始化10条
                __._.each(this.kcdata,  (a,aa)=> {
                    if(aa<10){
                        this.kclist.push(a)
                    }
                });
                this.loadMore()
            },100);

        },

        methods: {
            loadMore() {
                this.nodata=0;
                this.loading = true;
                setTimeout(() => {
                    this.zdata = this.kcdata;
                    //找到最后一个
                    let _last = __._.last(this.kclist);
                    //在总数据找到最后一个的位置
                    let _ind = __._.indexOf(this.zdata, _last);
                    //console.log(_ind);
                    if (_ind < 0) {
                        __._.each(this.zdata, (a) => {
                            if (this.kclist.length < (this.ii * 10)) {
                                this.kclist.push(a);
                            }
                        });
                        this.ii += 1;
                        this.nodata=1;
                        this.loading = false;
                    } else {
                        this.zdata.splice(0, _ind + 1);
                        __._.each(this.zdata, (a) => {
                            if (this.kclist.length < (this.ii * 10)) {
                                this.kclist.push(a);
                            }
                        });
                        this.ii += 1;
                    }
                    this.loading = false;
                }, 2000);
            }
        }

    }
</script>