<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <Header></Header>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <List></List>
      </div>
      <div class="col-xs-12 col-sm-6">
        <Details></Details>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../Shared/Header.vue";
import Footer from "../Shared/Footer.vue";
import List from "./List.vue";
import Details from "./Details.vue";

export default {
  components: {
    Header,
    List,
    Details,
    Footer,
  },
};
</script>
