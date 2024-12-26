<script setup>
import carrousselComp from '@/components/carrousselComp.vue';
</script>

<template>
 <carrousselComp title="Mais Assistidos" :gndr="['10749']" page="1" sort="popularity.desc" />
 <carrousselComp title="Lançamentos Recentes" :gndr="['10749']" page="1" sort="release_date.desc" />

</template>


<style>

</style>