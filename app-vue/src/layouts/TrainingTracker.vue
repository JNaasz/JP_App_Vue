<template>
  <div class="sheetData">
    <div class="title">
      <div class="last-date">
        <h2 v-if="lastTraing">
          Last Training: <br> {{ lastTraing }}
        </h2> 
      </div>
      <v-btn v-if="!logTraining" @click="beginLog">
        Log Training
      </v-btn>
    </div>

    <div class="trainingItems" v-if="!logTraining">
      <TrainingItem v-for="item in sheetItems" :sheetItem="item"></TrainingItem>
    </div>

    <div class="bottom" v-if="logTraining">
      <TrainingForm 
      @update:trainingStatus="logTraining = $event"
      @update:submitSuccess="logTraining = $event"></TrainingForm>
    </div>
  </div>
</template>

<script lang="ts">
import TrainingItem from '../components/TrainingItem.vue';
import TrainingForm from '../components/TrainingForm.vue';

export default {
  name: 'TrainingTracker',
  components: {
    TrainingItem,
    TrainingForm,
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
    },
    handleFormSubmit(isSuccess: boolean) {
      if (isSuccess) {
        this.logTraining = false;
        // re-pull sheet items
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  justify-content: space-between;

  .last-date {
    flex: 1 1 auto;
    text-align: left;
  }
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
