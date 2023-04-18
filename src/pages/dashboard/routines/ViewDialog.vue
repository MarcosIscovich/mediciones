<script setup>
import { ref, computed, onMounted } from "vue";
import TabsDialogView from "./components/TabsDialogView.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const moreContent = ref(true);
const dataDialog = ref(props.data.data);
const layout = ref(props.data.open);
const dialogSectores = ref(false);
const drawer = ref(false);
const drawerR = ref(false);
const lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!";

onMounted(() => {
  console.log("open", props.data.data);
});
</script>

<template>
  <q-dialog v-model="layout">
    <!--  <q-card class="my-card">
      <q-img
        src="https://th.bing.com/th/id/R.df4a2d201d268ff0e9d8aeb96108b2aa?rik=0rjx9khoDc6H2Q&riu=http%3a%2f%2fwww.bram-cor.com%2fupload%2fcpsg-st-section-with-vessel.jpg&ehk=fm6k47aBWT0RSTe%2bQ%2f2U4yghCHrwK6TOFHV446rAH2A%3d&risl=&pid=ImgRaw&r=0"
        style="height: 200px"
      />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center q-pt-md q-pr-md">
          <div class="col text-h6 ellipsis">{{ dataDialog?.nombre }}</div>
        </div>
        <div class="flex justify-between">
          <div>
            <q-chip
              color="accent"
              text-color="white"
              :label="dataDialog?.horaDesde"
              title="Horario Desde"
            />
            -
            <q-chip
              color="info"
              text-color="blue-grey"
              :label="dataDialog?.horaHasta"
              title="Horario Hasta"
            />
          </div>
          <div>
            <q-chip
              color="primary"
              text-color="white"
              :label="dataDialog?.frecuencia[0]?.label"
              title="Frecuencia"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1"></div>
        <div
          class="text-caption text-grey"
          v-if="dataDialog?.observacion?.lenght > 0"
        >
          {{ dataDialog?.observacion }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Reserve" />
        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card> -->
    <q-card class="my-card">
      <img
        src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/archivo/nota_periodistica/central-nuclear-de-embalse.jpg"
        style="height: 273px"
      />
      <div class="text-overline text-secondary text-center q-pa-sm">
        {{ dataDialog.nombre }}
      </div>
      <q-card-section class="flex justify-between">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="punch_clock" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Turno</q-item-label>
              <q-item-label caption>{{
                dataDialog.turno[0]?.label || "Mañana"
              }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="watch_later" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Horario</q-item-label>
              <q-item-label caption>
                <!--       <q-chip
                color="accent"
                text-color="white"
                :label="dataDialog?.horaDesde"
                title="Horario Desde" />
              -
              <q-chip
                color="info"
                text-color="blue-grey"
                :label="dataDialog?.horaHasta"
                title="Horario Hasta"
            /> -->
                {{ dataDialog.horaDesde }} - {{ dataDialog.horaHasta }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="calendar_month" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Frecuencia</q-item-label>
              <q-item-label caption>{{
                dataDialog?.frecuencia[0].label
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="factory" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Estado de Planta</q-item-label>
              <q-item-label caption>{{
                dataDialog?.estadoDePlanta?.label
              }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            class="hvr-sweep-to-rights"
            @click="() => (dialogSectores = true)"
          >
            <q-item-section avatar>
              <img src="~assets/icons/icons8-gears-50.png" style="width: 25px"
            /></q-item-section>

            <q-item-section class="hvr-sweep-to-rights">
              <q-item-label>Sectores y variables</q-item-label>
              <q-item-label caption class="">
                <q-icon size="30px" color="primary" name="arrow_right_alt" />
              </q-item-label>
            </q-item-section>
          </q-item> </q-list
      ></q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="dialogSectores"
    persistent
    transition-show="slide-left"
    transition-hide="slide-right"
  >
    <q-card class="text-white" style="width: 500px">
      <q-card-section class="bg-secondary">
        <div class="text-h6">Sectores y Variables</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <TabsDialogView :sector="dataDialog.sector" />
      </q-card-section>
      <!--       <q-card-section class="q-pt-none">
        <q-chip
          v-for="(sector, indx) in dataDialog.sector"
          :key="indx"
          :label="sector"
        />
      </q-card-section>
      <q-card-section class="q-pt-none flex q-gutter-md wrap">
        <q-card
          class=""
          style="width: 130px; height: 130px"
          v-for="(sector, indx) in dataDialog.sector"
          :key="indx"
        >
          <q-card-section>
            <div class="text-subtitle2 text-dark">{{ sector }}</div>
            <q-separator />
            <div class="text-subtitle2">
              <q-chip
                v-for="(vari, index) in sector?.variables"
                :key="index"
                size="xs"
                :label="vari.nombre"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-card-section> -->
      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
