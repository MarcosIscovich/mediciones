<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  sector: {
    type: Array,
    required: true,
  },
});

const tab = ref(props.sector[0].value);
const splitterModel = ref(20);

onMounted(() => {
  console.log("open tabs", props.sector);
});
</script>
<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 250px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-primary">
          <q-tab
            :name="sector.value"
            :icon="sector.icon"
            :label="sector.label"
            v-for="(sector, indx) in props.sector"
            :key="indx"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            :name="sector.value"
            v-for="(sector, indx) in props.sector"
            :key="indx"
          >
            <template
              v-for="(variable, index) in sector.variables"
              :key="index"
            >
              <q-chip
                :label="variable.nombre || variable.label"
                color="primary"
                text-color="white"
              />
            </template>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>
