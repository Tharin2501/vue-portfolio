<template>
    <div class="title-container  ">
        <h2 class="title">Tharin</h2>
        <h2 class="title">Chobkaphol</h2>
        <h4 class="under-title pt-3">
            <p>I am a programmer interested in new frontend technologies.
            </p>
        </h4>
        <div>
            <h3>You can view my <a class="styled-Link" href="https://github.com/Tharin2501">Github </a><a>here</a></h3>
            <h3>You can also click on a card to go directly to the repository</h3>
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
