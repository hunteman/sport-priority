<template>
    <div id="site-app" class="container">
        <v-header />
    </div>
</template>

<script>
import vHeader from './components/v-header.vue'

export default {
    name: "SiteApp",
    components: {
        vHeader
    }
}
</script>

<style lang="scss">
    .container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>