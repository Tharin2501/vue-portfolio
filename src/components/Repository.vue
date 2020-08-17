<template>
    <div>
        <div class="w-100 mt-5"></div>
        <!-- v-for executes a new line after each loop, use float-left removes that-->
        <div v-for="item in list" v-bind:key="item.id" class="float-right p-5 mt-5">
            <div id="card">
                <div id="mycard-header">
                    <img src="../assets/github_logo.png" class="w-50 float-right " alt="img not found">
                </div>
                <div id="card-body">
                    <div id="card-body-header">
                        <b-row>
                            <b-col><h3>{{item.name}}</h3></b-col>
                            <div class="w-100 mt-4"></div>
                            <b-col>
                                <div id="card-header-date">{{item.language}}</div>
                            </b-col>
                        </b-row>
                    </div>
                    <div id="card-body-description">
                        <p>
                            {{item.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
-->
<!--
<template>
    <div>

        <div v-for="item in list" v-bind:key="item.id">
            <div id="card">
            {{repoImg}}
            <div id="mycard-header"></div>
                {{item.name}}
            <div>{{item.description}}</div>
            <div>{{item.language}}</div>
            <div>{{item.date}}</div>
            <div>{{item.created_at}}</div>
            </div>
        </div>
    </div>
</template>
-->
<script>
    import axios from "axios"

    export default {
        name: 'Repository',
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
        }
    }
</script>

<style>

    #card {
        height: 20rem;
        width: 16rem;
        padding: 0;
        transform: translate(0, -8%);
        margin-top: 50%;


    }

    #mycard-header {
        width: 100.1%;
        min-height: 175px;
        max-height: 175px;
        transition: all .3s ease-in-out;
        background: rgb(89,183,219);
        background: linear-gradient(0deg, rgba(89,183,219,1) 0%, rgba(108,140,226,1) 100%);
    }

    .card:hover #mycard-header {
        background-size: 403px 267px;
        background-position: -16px -16px;
    }


    /* card bak */
    #card-body {
        background: rgb(89,183,219);
        border-radius: 0 0 1px 1px;
        padding: 0 26px 26px 26px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        height: 70%;
    }

    /* card foran */
    #card-body-header {
        position: absolute;
        left: 0;
        background: rgb(89,183,219);
        padding-top: 12%;
        transition: all .3s ease-in-out;
        width: 100%;
        height: 63%;
        text-align: center;
        color: #FFFFFF;
        text-transform: uppercase;
        text-shadow: 2px 2px blueviolet;
    }

    #card-body-description {
        opacity: 0;
        color: white;
        line-height: 110%;
        padding-top: 5%;
        transition: all .2s ease-in-out;
    }

    #card:hover #card-body-description {
        opacity: 1;
        transition: all .5s ease-in-out;
    }

    /* Hvor høyt kort foran beveger seg opp når hover */
    #card:hover #card-body-header {
        margin-top: -78%; /*-39.5vh hvor høyt den går*/
        /* høyden på hover kort */
    }


    #card-header-date {
        text-transform: uppercase;
        background-color: gold;
        color: whitesmoke;
        font-weight: bold;
        text-align: center;
        padding: 16px 8px;
        line-height: 15px;
        font-size: 15px;
        text-shadow: none;

    }
</style>

