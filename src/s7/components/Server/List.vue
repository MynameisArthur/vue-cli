<template>
    <ul class="list-group">
        <appServer
            v-for="server in servers"
            :server="server"
            :key="server.id"
        ></appServer>
    </ul>
</template>
<script>
import Server from './Server.vue';
export default {
    data: function() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'},
            ],
        };
    },
    components: {
        appServer: Server,
    },
};
</script>
<style scoped>
ul {
    border: 1px solid blue;
}
</style>
