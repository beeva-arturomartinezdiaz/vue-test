<template lang="pug">
  .about
    app-menu
    h1 {{message}}
</template>

<script>
    import AppMenu from '@/components/AppMenu';
    export default {
        components  : {AppMenu},
        name        : 'about',
        data ()
        {
            return {
                message : 'About'
            };
        }
    };
</script>

<style lang="sass" scoped>
    h1, h2
        font-weight: normal
</style>
