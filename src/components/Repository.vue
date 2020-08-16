<!--
<template>
    <div id="card">

        <div id="mycard-header">

        </div>

        <div id="card-body">

            <div id="card-body-header">
                <h1>48-hour code: Movie rating application</h1>
            </div>
            <div id="card-body-description pt-3 mt-3">
                <p>
                    This web application is a a movie rating website like IMDb. The application shows a list of movies,
                    where logged-in users can star (1 to 5) them, and write short reviews.
                </p>
                <div id="row mt-3 pl-3">
                    <button type="button" id="btn btn-primary">
                        <a>View code</a>
                    </button>
                </div>
            </div>

            <div id="card-body-footer">
                <div id="card-header-mask">
                    <div id="card-header-date">
                        <div id="card-header-date-day">12</div>
                        <div id="card-header-date-month">May</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
-->
<template>
    <div>
        <!-- https://vuejs.org/v2/guide/list.html -->
        <div v-for="item in list" v-bind:key="item.id">
            <div>{{repoImg}}</div>
            <div>{{item.name}}</div>
            <div>{{item.description}}</div>
            <div>{{item.language}}</div>
            <div>{{item.date}}</div>
            <div>{{item.created_at}}</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Repository',
        data() {
            return {list: undefined,repoImg : "default github style image for all repos"}
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
        height: 22rem;
        width: 16rem;
        padding: 0;
        transform: translate(0, -8%);
        background-color: blue;
        margin: auto;
        margin-top: 15%;
    }

    #mycard-header {
        width: 100.1%;
        min-height: 175px;
        max-height: 175px;
        transition: all .3s ease-in-out;
    }

    .card:hover #mycard-header {
        background-size: 403px 267px;
        background-position: -16px -16px;
    }


    /* card bak */
    #card-body {
        background-color: white;
        border-radius: 0 0 1px 1px;
        padding: 0 26px 26px 26px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);

    }

    /* card foran */
    #card-body-header {
        position: absolute;
        left: 0;
        background-color: white;
        padding-top: 12%;
        transition: all .3s ease-in-out;
        margin-top: -5%;
        width: 100%;
        height: 90%;
    }

    #card-body-description {
        opacity: 0;
        color: #757B82;
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
        height: 200px; /* høyden på hover kort */
    }


    #card-body-footer {
        display: inline;


        z-index: 10;

        margin-right: 50%;

        font-size: 14px;

        color: #9FA5A8;

    }

    #circle {
        color: white;

        height: 45px;
        width: 45px;
        background-color: orange;
        border-radius: 50%;
        display: inline-block;
        margin-left: 85%;
    }

    #card-header-date {

        float: right;


        border-radius: 50%;

        font-weight: bold;

        padding: 12px 15px;

        line-height: 15px;

    }


    #card-header-date-day {

        font-size: 18px;

    }


    #card-header-date-month {

        font-size: 11px;

    }

    #card-header-date, .card-body-header-category {

        text-transform: uppercase;

        background-color: #EF5A31;

        color: #FFF;

        font-weight: bold;

        text-align: center;

    }
</style>

