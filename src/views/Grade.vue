<template>
    <div class="grade">
        <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
        </mt-search>
        <div class="index-list">
            <mt-index-list>
                <mt-index-section v-for="x,xx in grade_db" v-if="xx==0" :index="x.name">
                    <mt-cell v-for="xx in x.data" :title="xx.zu+'--'+  xx.ke  +'：'+ xx.qi"></mt-cell>
                </mt-index-section>
                <mt-index-section v-for="x,xx in grade_db" v-if="xx!=0" :index="x.name">
                    <mt-cell v-for="xx in x.data" :title="xx.name"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>
<script>
    import __ from '../js/comm'
    import ajaxUrl from '../js/ajax'
    let transliteration = require('transliteration');

    export default {
        data(){
            return {
                grade_db: [],
                value: ''
            }
        },
        //加载数据
        created(){
            __.ajax({
                url: ajaxUrl.grade_db
            }).then((reg) => {
                reg.data.name = '近期浏览';
                this.grade_db.push(reg.data);
                console.log(this.grade_db);
            });
            //获取我的学生
            __.ajax({
                url: ajaxUrl.grade_my_student
            }).then((reg) => {
                let mystudent = reg.data.data;
                //拼音转化
                mystudent = __._.map(mystudent, function (a) {
                    a.pinyin = transliteration.transliterate(a.name)[0][0].substring(0, 1).toUpperCase();
                    return a
                });
                let mys = [];
                let fl = __._.partition(mystudent, function (b) {
                    return b.pinyin == 'A'
                });
                let zm = ['#', "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                __._.each(zm, function (a) {
                    mys.push(__._.partition(mystudent, function (b) {
                        return b.pinyin == a
                    })[0]);
                });
                mys = __._.filter(mys, function (a) {
                    return !__._.isEmpty(a)
                });
                let mms = [];
                __._.each(mys, (a) => {
                    let t_a = {
                        name: a[0].pinyin,
                        data: a
                    };
                    this.grade_db.push(t_a)
                });
            });
        },
        mounted(){

        }
    }
</script>
<style lang="scss">
    @import "./css/grade.scss";
</style>