<template>
    <div>
        <h2>new component</h2>
        <button @click="generateHelloWorld">Hello</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text : 'hello world'
        };
    },
    methods: {
        generateHelloWorld(){
            console.log(this.text);
        }
    }
}
</script>

<style scoped>/* solo afecta a este componente */
    h2{
      font-size: 16px;
      font-weight: 700;
    }
</style>