<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.username"
                    />
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                    />
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr />
                <input type="text" class="form-control" v-model="node" />
                <br /><br />
                <button class="btn btn-primary" @click="fetchData">
                    Get Data
                </button>
                <ul class="list-group mt-4">
                    <li
                        class="list-group-item"
                        v-for="(u, i) in users"
                        :key="i + '-' + u.username"
                    >
                        {{ u.username }} - {{ u.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
    data() {
        return {
            user: {
                username: '',
                email: '',
            },
            users: [],
            resource: {},
            node: 'data',
        };
    },
    methods: {
        submit() {
            this.resource.saveAlt(this.user);
        },
        fetchData() {
            this.resource
                .getData({node: this.node})
                .then((response) => response.json())
                .then((data) => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
        },
    },
    created() {
        const customActions = {
            saveAlt: {
                method: 'POST',
                url: 'alternative.json',
            },
            getData: {method: 'GET'},
        };
        this.resource = this.$resource('{node}.json', {}, customActions);
    },
};
</script>

<style></style>
