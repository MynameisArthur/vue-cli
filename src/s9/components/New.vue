<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            counter: 0,
        };
    },
    destroyed() {
        console.log(this.$options._componentTag, 'destroyed');
    },
    deactivated() {
        console.log('deactivated');
    },
    activated() {
        console.log('activated');
    },
};
</script>
<style scoped></style>
