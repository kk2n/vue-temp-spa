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
                        <a :href="'kcinfo.html?id='+x.id"><img :src="x.img" alt="" class="klie-img"></a>
                    </li>
                </ul>
                <ul>
                    <li class="klist-tit">
                        <a :href="'kcinfo.html?id='+x.id">
                           {{xx}} {{x.title}}
                        </a>
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
    import ajaxUrl from '../../js/ajax'

    export default {
        props: ['type'],
        data(){
            return {
                zdata: [1],
                kclist: [],
                loading: 0,
                ii: 2,
                nodata: 0,
            }
        },
        created(){
            //相关
            __.ajax({
                url: ajaxUrl.kecheng_list
            }).then((reg) => {
                this.zdata=reg.data.data.filterObj({type:this.type});
                //初始化10条
                __._.each(this.zdata,  (a,aa)=> {
                    if(aa<10){
                    this.kclist.push(a)
                    }
                });
            });
            //设置滚动加载区域高度
            setTimeout(() => {
                let vdom = __.getClass('loadmore');
                let hh = __.getWinHei;
                __._.each(vdom, function (a) {
                    a.style.height = __.getWinHei() - 55 - 50 - 45 - 10-88 + 'px';
                });
            },100);

        },
        methods: {
            loadMore() {
                this.nodata= 0;
                this.loading = true;
                setTimeout(() => {

                    //this.zdata = this.kcdata;
                    //console.log(this.kcdata);
                    //找到最后一个
                    let _last = __._.last(this.kclist);
                    //在总数据找到最后一个的位置
                    let _ind = __._.indexOf(this.zdata, _last);
                    if (_ind < 0) {
                        this.nodata= 1;
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