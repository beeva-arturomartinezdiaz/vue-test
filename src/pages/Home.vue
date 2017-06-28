<template lang="pug">
    .home
        app-menu
        .content
</template>

<script>
    import AppMenu from '@/components/AppMenu';
    import {markdown} from 'markdown';

    export default {
        components  : {AppMenu},
        name        : 'home',
        data ()
        {
            return  {};
        },
        created()
        {
            this._fetchMD();
        },
        methods : {
            _fetchMD()
            {
                let request = new window.XMLHttpRequest();
                if (request)
                {
                    request.withCredentials = false;
                    request.timeout = 60000;
                    request.onreadystatechange = function()
                    {
                        if (request.readyState === window.XMLHttpRequest.DONE)
                        {
                            if (request.status === 200)
                            {
                                this.$el.querySelector('.content').innerHTML = markdown.toHTML(request.response);
                            }
                        }
                    }.bind(this);
                    request.open('GET', '/static/Home.md');
                    request.send();
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
    h1, h2
        font-weight: normal
</style>
