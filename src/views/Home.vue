<template>
    <div class="index">
        <mt-header title="翼评价">
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <keep-alive>
        <index></index>
        </keep-alive>
    </div>
</template>

<script>
    import Index from './components/Indexs'

    export default {
        name: 'home-view',
        components: {Index},
        data () {
            return {}
        },

        methods: {}
    }
</script>
<style lang="scss">
    @import "./css/homeview.scss";
</style>
