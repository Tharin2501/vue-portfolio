<template>
    <div id="app">
        <Home/>
        <Repository/>
    </div>
</template>

<script>
    import Repository from "./components/Repository";
    import Home from "./components/Home"

    export default {
        components: {
            Repository,
            Home
        }
    }
</script>

<style>

</style>
