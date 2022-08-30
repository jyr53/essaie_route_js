<template>
    <div>
        <div>
            <p @click="goToPage">{{  numeroAleatoire  }} sdghj</p>
        </div><br>
        {{  $router  }}
        <h1>{{  $store.state.count  }}</h1>
    </div>

</template>
<script>
//import store from '@/store';




export default {
    name: 'RamdomView',
    computed: {
        numeroAleatoire() { 
            return Math.floor(Math.random() * 100); 
        },

    },
    methods: {
        goToPage() {
            this.$router.push('/');

        },
        ajout() {
            this.$store.commit("add2course", "poireaux");
        }
    }
}
</script>

<style>
</style>