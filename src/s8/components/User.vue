<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>AGE: {{ age }}</p>
        <button @click="changeName">Change My Name</button>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
    data: function() {
        return {
            name: 'Arthur',
            age: 40,
        };
    },
    methods: {
        changeName() {
            this.name = 'Lolo';
        },
        resetName() {
            this.name = 'Arthur';
        },
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit,
    },
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
