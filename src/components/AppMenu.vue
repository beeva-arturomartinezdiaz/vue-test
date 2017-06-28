<template lang="pug">
    nav(role="navigator")
        ul
            li
                a(href="#/") Home
            li
                a(href="#/about") About
</template>

<script>
    export default {
        name    : 'app-menu',
        data ()
        {
            return {};
        }
    };
</script>

<style lang="sass" scoped>
    ul
        display: block
        width: 100%
        height: auto
        overflow: hidden
        list-style: none

        li
            width: auto
            margin: 0 5px
            padding: 5px
            float: left
</style>
