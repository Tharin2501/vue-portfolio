<template>
    <div class="title-container ">
        <h1 class="title">Tharin</h1>
        <h1 class="title">Chobkaphol</h1>
        <h4 class="under-title pt-3">
            <p>I am a programmer interested in new frontend technologies.
            </p>
        </h4>
        <div>
            <h3>Here are some of my projects: <a class="styled-Link" href="https://github.com/Tharin2501">Github</a>
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style>

    .title-container {
        margin-left: 5%;
        color: #4EA1FD;
        display: flex;
        flex-direction: column;
        letter-spacing: 2px;
    }

    .title {
        font-size: 3rem;
        letter-spacing: 8px;
    }

    .under-title {
        color: #46BAE3;
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in-out;
    }

    .styled-Link:hover {
        padding-bottom: 2px;
        color: #3279b5;
        text-decoration: none;
        border-bottom: 2px solid #06a77d;
    }


</style>
