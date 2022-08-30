<template>
    <div>
        <div>
            <p @click="gotToPage">{{  numeroAleatoire  }} sdghj</p>
        </div><br>
        {{  $router  }}
        <h1>{{ $store.state.count}}</h1>
    </div>

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
            console.log('qzsertyui')
            this.$router.push('/');
        }
    }
}
</script>

<style>
</style>