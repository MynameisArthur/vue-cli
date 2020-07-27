<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn">Reset Name Function</button>
    </div>
</template>

<script>
import {eventBus} from '../main';
export default {
    props: {
        myName: {
            type: String,
            default: 'Arthur',
        },
        resetFn: Function,
        userAge: Number,
    },
    methods: {
        switchName() {
            let reversed = this.myName
                .split('')
                .reverse()
                .join('')
                .toLowerCase();
            return (
                reversed[0].toUpperCase() + reversed.slice(1, reversed.length)
            );
        },
        resetName() {
            this.myName = 'Max';
            this.$emit('nameWasReset', this.myName);
        },
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    },
};
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
