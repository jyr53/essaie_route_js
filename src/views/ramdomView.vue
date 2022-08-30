<template>
    <div>
        <div>
            <p @click="gotToPage">{{  numeroAleatoire  }} sdghj</p>
        </div><br>
        {{  $router  }}
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