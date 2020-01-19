<template>
    <div>
        <h2 class="mb-5">this is content tab tow</h2>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <i class="far fa-address-book fa-2x blu-clr"></i>
                    <br />
                    <p @click="$bvToast.show('example-books')">Books</p>
                    <b-toast id="example-books" title="Books list" static no-auto-hide>
                        <items-comp :books="books"></items-comp>
                    </b-toast>
                </b-col>
                <b-col>
                    <i class="fas fa-newspaper fa-2x blu-clr"></i>
                    <br />
                    <p @click="$bvToast.show('example-articles')">Articles</p>
                     <b-toast 
                     id="example-articles" title="Articles List" static no-auto-hide>
                        <items-comp :articles="articles"></items-comp>
                    </b-toast>
                </b-col>
                <b-col>
                    <i class="fas fa-book fa-2x blu-clr"></i>
                    <br />
                    <p @click="$bvToast.show('example-posts')">Posts</p>
                    <b-toast id="example-posts" title="Posts list" static no-auto-hide>
                        <items-comp :posts="posts"></items-comp>
                    </b-toast>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
           books: [
               'Sciences',
               'Mathematics',
               'Geography'
           ],
           articles: [
               'html',
               'css',
               'bootstrap'
           ],
           posts: [
               'UI/UX post',
               'Frameworks post',
               'Library posts'
           ]    
        }
    }
}
</script>

<style>
  .bv-example-row p {font-weight: bold; cursor: pointer; display:inline-block}  

 .bv-example-row p::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f0da";
    font-size: 20px;
    margin-left: 10px;
    display: inline-block;
    transform: rotate(37deg) translate(3px, 3px);
  }
    .blu-clr {
        color: #007bff
    }

    

</style>