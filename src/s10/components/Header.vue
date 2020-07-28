<template>
    <div class="row">
        <div class="col col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="calculatedWidth"
                >
                    {{ quoteCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['quoteCount', 'maxQuotes'],
    computed: {
        calculatedWidth() {
            return {
                width: (this.quoteCount / this.maxQuotes) * 100 + '%',
            };
        },
    },
};
</script>
