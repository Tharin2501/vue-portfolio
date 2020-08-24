<template>
    <div class="fade-inn-transition">
        <!-- v-for executes a new line after each loop, use float-left removes that-->
        <div v-for="item in list" v-bind:key="item.id" class="float-right p-5 ">
            <div id="card-bot">
                <!--TODO: pass link object as props with vue-router <a href="objectHere" class="text-decoration-none stretched-link">  -->
                <div id="card-bot-img">
                    <img src="../assets/github_logo.png" class="w-50 float-right mt-2" alt="img not found">
                </div>

                <div id="card-mid">

                    <div id="card-top">
                        <h3>{{item.name}}</h3>
                        <div id="card-footer">{{item.language}}</div>
                    </div>

                    <div id="card-mid-description" class="mt-5 pt-5">
                        <p>
                            {{item.description}}
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script>
    import axios from "axios"

    export default {
        name: 'Repository'
        ,
        data() {
            return {list: undefined}
        },
        mounted() {
            axios
                .get('https://api.github.com/users/tharin2501/repos')
                .then((response => {
                    console.log(response.data);
                    this.list = response.data;
                }))
        }

    }

</script>

<style>

    #card-bot {
        height: 20rem;
        width: 16rem;
        margin-top: 16%;
        transform: translate(-5%, -10%);

    }

    #card-bot-img {

        width: 100.1%;
        min-height: 12rem;
        transition: all .3s ease-in-out;
        background: rgb(48, 178, 231);
        background: linear-gradient(0deg, rgba(48, 178, 231, 1) 0%, rgba(6, 102, 200, 1) 100%);
    }


    /* card bak */
    #card-mid {
        background: rgb(48, 178, 231);
        padding: 0 26px 26px 26px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        height: 80%;
        margin-top: -20%;
    }

    /* card foran */
    #card-top {
        position: absolute;
        left: 0;
        background: rgb(48, 178, 231);
        padding-top: 15%;
        transition: all .3s ease-in-out;
        width: 100%;
        height: 80%;
        text-align: center;
        color: #FFFFFF;
        text-transform: uppercase;
        text-shadow: 2px 2px blueviolet;
    }

    #card-mid-description {
        opacity: 0;
        color: white;
        line-height: 130%;
        transition: all .2s ease-in-out;
        padding: 10px;
    }

    #card-bot:hover #card-mid-description {
        opacity: 1;
        transition: all .5s ease-in-out;
    }

    /* Hvor høyt kort foran beveger seg opp når hover */
    #card-bot:hover #card-top {
        margin-top: -80%; /*-39.5vh hvor høyt den går*/
    }

    #card-footer {
        text-transform: uppercase;
        background: rgb(244, 157, 202);
        background: linear-gradient(0deg, rgba(244, 157, 202, 1) 0%, rgba(253, 214, 83, 1) 100%);
        color: white;
        font-weight: bold;
        text-align: center;
        padding: 0.6em;
        font-size: 15px;
        text-shadow: none;
        margin-top: 35%;
    }


    @keyframes setOpacity { /* pulses */
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .fade-inn-transition {
        opacity: 1;
        animation: setOpacity 2s;
    }
</style>

