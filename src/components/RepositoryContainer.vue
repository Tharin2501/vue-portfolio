<template>
    <div>
        <Repository></Repository>
    </div>

</template>

<!-- Container component: API logic  -->
<script>
    import Repository from "./Repository";
    import axios from "axios";

    export default {
        components: {Repository},
        data() {
            return {list: undefined, repoImg: "default github style image for all repos"}
        },
        mounted() {
            axios
                .get('https://api.github.com/users/tharin2501/repos')
                .then((response => {
                    console.log(response.data);
                    this.list = response.data;
                }))
        },
        props : {
            name: 'Object',
            language: 'Object',
            description: 'Object'
        }
    }
</script>

<style>

</style>
