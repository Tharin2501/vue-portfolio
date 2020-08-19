<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-nav-item href="/">
                <b-navbar-brand>Home</b-navbar-brand>
            </b-nav-item>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/about">About</b-nav-item>
                    <b-nav-item href="/contact">link til githuben?</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

    export default {
        name: 'Navbar'
    }
</script>
