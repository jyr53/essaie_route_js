<template>
    <div> <a v-on:click="gotToPage">{{  numeroAleatoire  }} bonjour</a></div><br>
    {{  $router  }}


</template>
<script>



export default {
    name: 'ramdomView',
    computed: {
        numeroAleatoire() {
            return Math.floor(Math.random() * 100);
        },

    },
    methods: {
        goToPage() {
            this.$router.push('/');
        }
    }
}
</script>

<style>
</style>