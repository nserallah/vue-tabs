<template>
    <div>

        <div class="content-tab-one">
            <h2 class="mb-5">this is content tab One</h2>
            <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase text-danger"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3">
                <b-tab title="First" active>
                    <div class="tab-contain">
                        <h2>- this is contant tab One -</h2>
                        <p>Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                            Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                        </p>
                    </div>
                </b-tab>
                <b-tab title="Second">
                     <div class="tab-contain">
                        <h2>- this is contant tab Tow -</h2>
                        <p>Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                            Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                        </p>
                    </div>
                </b-tab>
                <b-tab title="third">
                     <div class="tab-contain">
                        <h2>- this is contant tab Three -</h2>
                        <p>Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                            Some text about Light sit amet, consectetur adipisicing elit. Pariatur modi quod quo iure recusandae eligendi q.t, consectetur adipisicing elit. Pariatur
                        </p>
                    </div>
                </b-tab>
            </b-tabs>
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
    .nav-tabs .nav-link{
        position: relative;
        background: #52ABEA;
        box-shadow: 8px 12px 25px 2px rgba(0,0,0,0.4);
        border: 0px solid #000000;
        transition: padding 0.2s ease, margin 0.2s ease;
        color: #fff;
        font-weight: 700
    }

    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        background: #545f60;
         color: #6edeef !important;
    }

    a.text-danger:hover, a.text-danger:focus{
        color: #6edeef !important;
    }

    /* Tab content style */ 
    .tabs .tab-content{margin-top: 0 !important}
    .tab-content .tab-contain {
        background: #545f60;
        padding: 20px
    }
    .tab-content .tab-contain p, .tab-content .tab-contain h2{
        color: #fff
    }
        
    

    
</style>