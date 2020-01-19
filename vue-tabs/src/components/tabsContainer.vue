<template>
    <div>
        <div class="tabs-container">
            <b-card no-body>
                <b-tabs pills card vertical>
                <b-tab title="Tab" active>
                    <b-card-text>
                        <tab-one-content></tab-one-content>
                    </b-card-text>
                </b-tab>
                <b-tab title="Tab">
                    <b-card-text>
                        <tab-tow-content></tab-tow-content>    
                    </b-card-text>
                </b-tab>
                <b-tab title="Tab">
                    <b-card-text>
                        <tab-three-content></tab-three-content>
                        
                    </b-card-text></b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    }
}
</script>

<style>

    .tabs-container .card-header {
        padding: 0
    }
    .tabs-container .col-auto {
        width: 200px;
    }

    .tabs-container .nav-pills .nav-link{
        position:relative
    }

    .tabs-container .nav-pills .nav-item:nth-child(1) .nav-link:before {
        content: '1';
        position:absolute;
        right:30px;
    }

    .tabs-container .nav-pills .nav-item:nth-child(2) .nav-link:before {
        content: '2';
        position:absolute;
        right:30px;
    }
    .tabs-container .nav-pills .nav-item:nth-child(3) .nav-link:before {
        content: '3';
        position:absolute;
        right:30px;
    }

    .tabs-container .col-auto {left: -140px; transition: all .5s ease-in-out}
    .tabs-container .col-auto:hover {
        left:0
    }
</style>