<template>
  <div>
    <div class="container">
      <!-- <div v-if="studentObjData.length"> -->
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">age</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productObj in studentObjData" :key="productObj.id">
              <th>{{productObj.name}}</th>
              <td>{{productObj.age}}</td>
              <td>{{productObj.address}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ... mapGetters(["studentObjData"]),
     data: {
      set(value) {
        console.log(value);
      },
      get() {
        return this.studentObjData;
      }
    }
  }
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
</style>