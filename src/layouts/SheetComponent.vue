<template>
  <div class="sheetData">
    <div class="title">
      <h2 v-if="lastTraing">
        Last Training on {{ lastTraing }}
      </h2>
      <v-btn v-if="!logTraining" @click="beginLog">
        Log Training
      </v-btn>
    </div>

    <div class="dogItems" v-if="!logTraining">
      <DogItem v-for="item in sheetItems" :sheetItem="item"></DogItem>
    </div>

    <div class="bottom" v-if="logTraining">
      <DogForm @update:trainingStatus="logTraining = $event"></DogForm>
    </div>
  </div>
</template>

<script lang="ts">
import DogItem from '../components/DogItem.vue';
import DogForm from '../components/DogForm.vue';

export default {
  name: 'SheetComponent',
  components: {
    DogItem,
    DogForm,
  },
  data: () => ({
    logTraining: false,
    date: '',
    duration: 0,
    place: '',
    comment: '',
  }),
  props: {
    sheetData: {
      type: Object as () => SheetData | undefined,
      required: false,
    },
  },
  computed: {
    sheetItems() {
      return this.sheetData?.sheets[0].items;
    },
    lastTraing() {
      return this.sheetItems != undefined ? this.sheetItems[0].Date : null;
    }
  },
  methods: {
    beginLog() {
      this.logTraining = true;
    },
    cancel() {
      this.logTraining = false;
    },
    submit() {
      this.logTraining = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.bottom {
  /* TODO: mixin/extend */
  margin-top: 30px;
  border: 1px solid #6200ea;
  border-radius: 5px;
  padding: 10px;
}

</style>
