<template>
    <div class="index">
        <!--幻灯-->
        <div class="huandeng">
            <div id="huan_deng" class="huan-deng-cn">
            </div>
        </div>

        <!--三个功能-->
        <div class="gongneng">
            <span class="ping">
                评价
            </span>
            <span class="shang">
                上传
            </span>
            <span class="bao">
                报告
            </span>
        </div>
        <div class="space"></div>
        <!--推荐课程-->
        <div class="tuijian">
            <mt-cell
                    :title="tj_data.name"
                    :to="{path:'/pages/kechenglist', query: {type:1} }"
                    is-link
                    value="更多">
            </mt-cell>
            <div id="container" class="tuijian-img">
                <ul class="img-ui">
                    <li>
                        <a :href="'kecheng_info.html?id='+tj_data.sub[0].id">
                            <img v-lazy.container="tj_data.sub[0].img" class="tujian-tu tujian-tu-load">
                        </a>
                    </li>
                </ul>
                <ul class="tit-ui">
                    <li>
                        <a :href="'kecheng_info.html?id='+tj_data.sub[0].id">{{tj_data.sub[0].title}}</a>
                    </li>
                </ul>
                <ul class="jia-ui">
                    <li class="jia-li">
                        {{tj_data.sub[0].jiage}}
                    </li>
                    <li class="shu-li">
                        {{tj_data.sub[0].renshu}}
                    </li>
                </ul>
            </div>
        </div>
        <!--steam-->
        <div class="steam" v-for="x,xx in other_data">
            <div class="space"></div>
            <div class="tuijian">
                <router-link :to="{path:'/pages/kechenglist',query: {type:xx+1}}" class="mint-cell">
                    <span class="mint-cell-mask"></span>
                    <div class="mint-cell-left"></div>
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">{{x.name}}</span>
                        </div>
                        <div class="mint-cell-value is-link">
                            <span>更多</span>
                        </div>
                    </div>
                    <div class="mint-cell-right">
                    </div>
                    <i class="mint-cell-allow-right"></i>
                </router-link>
            </div>
            <div class="steam-zn">
                <ul v-for="y in x.sub">
                    <li class="img-ff">
                        <a :href="'kecheng_info.html?id='+y.id">
                            <img v-lazy.steam="y.img" alt="" class="steam-zhu-img tujian-tu-load">
                        </a>
                    </li>
                    <li class="steam-tit">
                        <a :href="'kecheng_info.html?id='+y.id">
                            {{y.title}}
                        </a>
                    </li>
                    <li class="steam-tit2">{{y.jiage}}</li>
                    <li class="steam-tit3">{{y.renshu}}</li>
                </ul>
            </div>
        </div>
        <div class="space"></div>
    </div>
</template>
<script>
  import __ from '../../js/comm'
  import ajaxUrl from '../../js/ajax'
  import iSlider from 'islider.js/build/iSlider'
  import 'islider.js/build/iSlider.plugin.dot'
  import 'iSlider.js/build/iSlider.min.css'


  //幻灯组件
  export default {
    data () {
      return {
        hd_img: [
          {content: "/static/img/ban.png"},
          {content: "/static/img/ban.png"},
          {content: "/static/img/ban.png"},
        ],
        tj_data: {
          name: '',
          url: '',
          sub: [{
            title: '',
            img: '',
            jiage: '',
            renshu: ''
          }]
        },
        other_data: [{
          name: '',
          url: '',
          sub: [{
            title: '',
            img: '',
            jiage: '',
            renshu: ''
          }]
        }]
      }
    },
    methods: {},
    //初始化
    mounted () {
      let S = new iSlider({
        dom: document.getElementById('huan_deng'),
        data: this.hd_img,
        isLooping: 1,
        isOverspread: 1,
        animateTime: 800,
        plugins: ['dot']
      })
    },
    created () {
      __.ajax({
        url: ajaxUrl.index_db
      }).then((reg) => {
        this.tj_data = reg.data[0];
        this.other_data = __._.rest(reg.data);
      })
    }
  }
</script>