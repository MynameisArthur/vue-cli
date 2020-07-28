<template>
    <div class="container">
        <appHeader
            :quoteCount="quotes.length"
            :maxQuotes="maxQuotes"
        ></appHeader>
        <newQuote @quoteAdded="newQuote"></newQuote>
        <quoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></quoteGrid>
        <div class="row">
            <div class="col col-sm-12 text-center my-4">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

export default {
    data: function() {
        return {
            maxQuotes: 10,
            quotes: [
                'I need to move',
                'I need to transform',
                'People are stupid and so am I',
            ],
        };
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert('Please delete quotes first');
            }
            this.quotes.push(quote);
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1);
        },
    },
    components: {
        quoteGrid: QuoteGrid,
        newQuote: NewQuote,
        appHeader: Header,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arizonia&display=swap');
</style>
