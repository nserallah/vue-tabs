<template>
    <div class="my-list">
        <ul class="list-unstyled black-clr">
            <li v-for="(book, index) in books" :key="index">{{book}} <b-dropdown-divider></b-dropdown-divider></li>
            <li v-for="(article, index) in articles" :key="index">{{article}} <b-dropdown-divider></b-dropdown-divider></li>
            <li v-for="(post, index) in posts" :key="index">{{post}} <b-dropdown-divider></b-dropdown-divider></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['books', 'articles', 'posts'],
    data: function() {
        return {

        }
    }
}
</script>

<style>
    .toast-header {
        background-color: #007bff;
        color: #fff
    }

    .b-toast button.close {
        color: #fff !important;
        opacity: 1
    }
</style>