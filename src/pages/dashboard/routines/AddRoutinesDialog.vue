<script setup>
import { ref, onMounted, nextTick } from "vue";
const props = defineProps({
  dialogData: {
    type: Object,
    required: true,
  },
  dataGeneral: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "save", "submit"]);

const dialogData = ref(props.dialogData);
const dataGenerales = ref(props.dataGeneral);
const horaActual = ref("");
const dataRoutine = ref(props.dialogData.data);
const dialogObservacion = ref(false);
// inicio pruebas
const modelTipos = ref(props.dialogData.data.tipodeRecorrida);
const filterOptionsTipos = ref(dataGenerales.value.tipodeRecorrida);
const filterOptionsEstados = ref(dataGenerales.value.estadoDePlanta);

const columns = [
  {
    name: "label",
    required: true,
    label: "Sector",
    align: "left",
    field: (row) => row.label,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "tipo",
    required: true,
    label: "Tipo de Recorrida",
    align: "left",
    field: (row) => row.tipo,
    format: (val) => `${val}`,
    sortable: true,
  },
];
const columnsVar = [
  {
    name: "label",
    required: true,
    label: "Variable",
    align: "left",
    field: (row) => row.label,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "tipo",
    required: true,
    label: "Sector",
    align: "left",
    field: (row) => row.sistema,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const selected = ref([]);
const selectedVars = ref([]);
const getSelectedString = () => {
  // implementsar esta funcion con nextTick

  variablesBySystem.value = [];
  console.log("getSelectedString", selected.value);
  for (let i = 0; i < selected.value.length; i++) {
    const element = selected.value[i];
    console.log("element", element);
    for (let j = 0; j < element.variables?.length; j++) {
      const element2 = element.variables[j];
      console.log(" vars eelements", element2);
      variablesBySystem.value.push(element2);
    }
  }
};

const systemByTipos = ref(props.dialogData?.data?.sector || []);
const variablesBySystem = ref(props.dialogData?.data?.variables || []);
const proxyTimeDesde = ref(props.dialogData?.data?.horaDesde || horaActual);
const proxyTime2 = ref(props.dialogData?.data?.horaHasta || horaActual);
/* fin de pruebas */

const filterTiposFn = (val, update, abort) => {
  console.log("filterr tiposs", val);
  update(() => {
    if (val === "") {
      filterOptionsTipos.value = dataGenerales.value.tipodeRecorrida;
    } else {
      const needle = val.toLowerCase();
      filterOptionsTipos.value = dataGenerales.value.tipodeRecorrida.filter(
        (v) => v.label.toLowerCase().indexOf(needle) > -1
      );
    }
  });
};
const filterEstadosFn = (val, update, abort) => {
  console.log("filterr tiposs", val);
  update(() => {
    if (val === "") {
      filterOptionsEstados.value = dataGenerales.value.estadoDePlanta;
    } else {
      const needle = val.toLowerCase();
      filterOptionsEstados.value = dataGenerales.value.estadoDePlanta.filter(
        (v) => v.label.toLowerCase().indexOf(needle) > -1
      );
    }
  });
};

const onSubmit = () => {
  const data = {
    ...dataRoutine.value,
    tipo: selected.value,
    variables: selectedVars.value,
    sistemas: selected.value,
    horaDesde: proxyTimeDesde.value,
    horaHasta: proxyTime2.value,
    tipodeRecorrida: modelTipos.value,
  };
  console.log("data", data);

  emit("submit", data);
};

const getHoraActual = () => {
  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();

  horaActual.value = `${hora < 10 ? `0${hora}` : hora}:${
    minutos < 10 ? `0${minutos}` : minutos
  }`;
  dataRoutine.value.horaDesde = horaActual.value;
  dataRoutine.value.horaHasta = horaActual.value;
};
/*
const setDataClone = () => {
  variablesBySystem.value = props.dialogData?.data?.sector?.map((item) => {
    return item.variables;
  });
  console.log("variablesBySystem.value", variablesBySystem.value);
}; */

onMounted(() => {
  getHoraActual();
  console.log("onMounted");
  console.log("data routine.value", dataRoutine.value);

  if (dialogData.value?.open) {
    console.log("data routine.value dentro de open", dataRoutine.value);
    /*     setDataClone(); */
  }
});

const createValueEstado = (val) => {
  console.log("createValueTipo");

  if (val.length > 0) {
    const modelValue = (modelTipos.value || []).slice();

    val
      .split(/[,;|]+/)
      .map((v) => v.trim())
      .filter((v) => v.length > 0)
      .forEach((v) => {
        if (dataGenerales.value.estadoDePlanta.includes(v) === false) {
          dataGenerales.value.estadoDePlanta.push(v);
        }
        if (modelValue.includes(v) === false) {
          modelValue.push(v);
        }
      });

    done(null);
    dataRoutine.value.estadoDePlanta = modelValue;
  }
};

const handleUpdateTipos = () => {
  systemByTipos.value = [];
  console.log("handleUpdateTipos", modelTipos.value);
  for (let i = 0; i < modelTipos.value.length; i++) {
    const element = modelTipos.value[i];
    console.log("element", element);

    for (let j = 0; j < element.sistemas?.length; j++) {
      const element2 = element.sistemas[j];
      console.log("element2", element2);
      systemByTipos.value.push(element2);
    }
  }
  console.log("systemByTipos", systemByTipos.value);
};

const setActive = (value) => {
  console.log("setActive", value);

  if (value.label.toLowerCase() == "todos") {
    dataRoutine.value.turno = [];
    dataRoutine.value.turno.push(value);
    return;
  }

  if (dataRoutine.value.turno.includes(value)) {
    dataRoutine.value.turno = dataRoutine.value.turno.filter(
      (v) => v !== value
    );
    console.log("setActive data return", dataRoutine.value.turno);
    return;
  }

  if (
    dataRoutine.value.turno.length > 0 &&
    dataRoutine.value.turno[0].label.toLowerCase() == "todos"
  ) {
    dataRoutine.value.turno = [];
  }

  if (
    dataRoutine.value.turno.length >=
    dataGenerales.value?.turnos?.length - 2
  ) {
    console.log("setActive data return dataRoutine.value.turno.shift()");
    dataRoutine.value.turno.push(value);
    return dataRoutine.value.turno.shift();
  }

  console.log("lengt data", dataRoutine.value.turno.length);

  dataRoutine.value.turno.push(value);
  console.log("setActive data", dataRoutine.value.turno);
};

const isActive = (value) => {
  console.log("isActive value", value);
  console.log("isActive", dataRoutine.value.turno);
  console.log("isActive", dataRoutine.value.turno.includes(value));
  return dataRoutine.value.turno.includes(value);
};
const setActiveFrec = (value) => {
  console.log("setActivefrec", value);

  if (value.value.toLowerCase() == "diaria/todos") {
    dataRoutine.value.frecuencia = [];
    dataRoutine.value.frecuencia.push(value);
    return;
  }

  if (dataRoutine.value.frecuencia.includes(value)) {
    dataRoutine.value.frecuencia = dataRoutine.value.frecuencia.filter(
      (v) => v !== value
    );
    console.log("setActive data return", dataRoutine.value.frecuencia);
    return;
  }

  if (
    dataRoutine.value.frecuencia.length > 0 &&
    dataRoutine.value.frecuencia[0].label.toLowerCase() == "diaria/todos"
  ) {
    dataRoutine.value.frecuencia = [];
  }

  if (
    dataRoutine.value.frecuencia.length >=
    dataGenerales.value.frecuencia.length - 2
  ) {
    console.log("setActive data return dataRoutine.value.frecuencia.shift()");
    dataRoutine.value.frecuencia.push(value);
    return dataRoutine.value.frecuencia.shift();
  }

  console.log("lengt data", dataRoutine.value.frecuencia.length);

  dataRoutine.value.frecuencia.push(value);
  console.log("setActive data", dataRoutine.value.frecuencia);
};

const isActiveFrec = (value) => {
  return (
    dataRoutine.value.frecuencia.includes(value) ||
    dataRoutine.value.frecuencia.map((v) => v.value).includes(value.value)
  );
};

const addObservation = () => {
  console.log("Add observation", dataRoutine.value.observacion);
};

const cancelarObservation = () => {
  console.log("cancelarObservation");
  dataRoutine.value.observacion = "";
};
</script>

<template>
  <q-dialog v-model="dialogData.open">
    <q-card class="bg-ligth text-white" style="max-width: 70vw">
      <q-card-section>
        <div class="text-h6 text-weight-bold text-blue-grey">
          Planear Rutina
        </div>
      </q-card-section>
      <q-separator />

      <q-card-section style="width: 100%">
        <q-form @submit="() => onSubmit()">
          <div class="row">
            <div class="col-12 row" style="padding-bottom: 32px">
              <div class="col-3 flex items-center justify-end">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey text-right"
                >
                  Nombre
                </div>
              </div>
              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />
              <div class="col-8">
                <q-input outlined v-model="dataRoutine.nombre" />
              </div>
            </div>

            <div class="col-lg-12 col-sm-12 row" style="padding-bottom: 32px">
              <div class="col-3">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey text-right"
                >
                  Turnos
                </div>
              </div>

              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />

              <div class="col-8">
                <div class="flex wrap justify-start items-center q-gutter-sm">
                  <q-btn
                    v-for="(button, index) in dataGeneral.turnos"
                    :key="index"
                    :color="isActive(button) ? 'secondary' : 'primary'"
                    :class="
                      isActive(button) ? 'active-class' : 'not-active-class'
                    "
                    push
                    :label="button.label"
                    @click="() => setActive(button, index)"
                    :role="isActive(button) ? 'button' : 'button'"
                  ></q-btn>
                </div>
              </div>
            </div>

            <div class="col-12 row" style="padding-bottom: 32px">
              <div class="col-3 flex items-center justify-end">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey text-right"
                >
                  Horarios
                </div>
              </div>
              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />
              <div class="col-8 flex items-center q-gutter-sm">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-xs text-blue-grey"
                >
                  desde
                </div>

                <q-input
                  rounded
                  outlined
                  v-model="dataRoutine.horaDesde"
                  style="width: 100px"
                  mask="time"
                >
                  <template v-slot:append>
                    <q-icon
                      name="access_time"
                      color="primary"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time v-model="dataRoutine.horaDesde" format24h>
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <div
                  class="text-subtitle1 text-weight-bold q-pr-xs text-blue-grey"
                >
                  hasta
                </div>
                <q-input
                  rounded
                  outlined
                  v-model="dataRoutine.horaHasta"
                  style="width: 100px"
                  mask="time"
                >
                  <template v-slot:append>
                    <q-icon
                      name="access_time"
                      color="primary"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time v-model="dataRoutine.horaHasta" format24h>
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 row" style="padding-bottom: 32px">
              <div class="col-3 flex justify-end items-center">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey text-right"
                >
                  Frecuencia
                </div>
              </div>

              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />

              <div class="col-8">
                <div class="flex wrap justify-start items-center q-gutter-sm">
                  <q-btn
                    v-for="(button, index) in dataGeneral.frecuencia"
                    :key="index"
                    :color="isActiveFrec(button) ? 'secondary' : 'primary'"
                    :class="
                      isActiveFrec(button) ? 'active-class' : 'not-active-class'
                    "
                    push
                    :label="button.label"
                    @click="() => setActiveFrec(button, index)"
                    :role="isActiveFrec(button) ? 'button' : 'button'"
                  ></q-btn>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 row" style="padding-bottom: 32px">
              <div class="col-3 flex items-center justify-end">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey"
                >
                  Tipos de Recorrida
                </div>
              </div>
              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />
              <div class="col-8 row">
                <div class="col-sm-4 col-md q-mr-md wrap">
                  <q-select
                    outlined
                    v-model="modelTipos"
                    use-input
                    use-chips
                    multiple
                    input-debounce="0"
                    placeholder="Tipos de Recorrida"
                    :options="filterOptionsTipos"
                    @filter="filterTiposFn"
                    @update:model-value="() => handleUpdateTipos()"
                  />
                </div>
                <div class="col-sm-4 col-md" style="width: 100%">
                  <q-select
                    outlined
                    v-model="dataRoutine.estadoDePlanta"
                    use-input
                    use-chips
                    placeholder="Estado de Planta"
                    input-debounce="0"
                    :options="filterOptionsEstados"
                    @filter="filterEstadosFn"
                    @new-value="createValueEstado"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 row">
              <div class="col-3 flex items-center justify-end">
                <div
                  class="text-subtitle1 text-weight-bold q-pr-md text-blue-grey text-right"
                >
                  Vincular sectores y variables
                </div>
              </div>
              <q-separator
                vertical
                class="q-mr-md bg-blue-grey"
                style="padding: 2px"
              />
              <div class="col-8">
                <div class="q-gutter-md row flex justify-start">
                  <div class="col-6">
                    <q-table
                      title="Sectores"
                      :rows="systemByTipos"
                      :columns="columns"
                      row-key="id"
                      selection="multiple"
                      v-model:selected="selected"
                      @update:selected="() => getSelectedString()"
                      :style="
                        systemByTipos?.length > 0
                          ? 'min-width: 420px'
                          : 'min-width:373px'
                      "
                    />
                  </div>
                  <div class="col-6 table-custom">
                    <q-table
                      title="Variables"
                      :rows="variablesBySystem"
                      :columns="columnsVar"
                      row-key="value"
                      selection="multiple"
                      v-model:selected="selectedVars"
                      class="table-custom"
                      :style="
                        variablesBySystem?.length > 0
                          ? 'min-width: 420px'
                          : 'min-width:100%'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md bg-blue-grey" style="padding: 2px" />
          <div class="row">
            <div class="col-6 flex justify-start items-center">
              <q-btn
                :label="
                  dataRoutine?.observacion?.length > 0
                    ? 'Editar Observacion'
                    : 'Agregar Observacion'
                "
                @click="() => (dialogObservacion = true)"
                color="secondary"
              />
              <q-dialog v-model="dialogObservacion" persistent>
                <q-card style="width: 300px">
                  <q-card-section class="">
                    <div class="text-subtitle1 text-blue-grey">
                      Observacion:
                    </div>
                    <div class="" style="max-width: 300px">
                      <q-input
                        v-model="dataRoutine.observacion"
                        filled
                        type="textarea"
                        autogrow
                      />
                    </div>
                  </q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn
                      color="blue-grey"
                      flat
                      label="Cancelar"
                      @click="() => cancelarObservation()"
                      v-close-popup
                    />
                    <q-btn
                      color="blue-grey"
                      label="OK"
                      @click="() => addObservation()"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <div
                class="q-pl-md row flex items-lg-center"
                :class="{ 'truncate-chip-labelsDialog': true }"
              >
                <q-chip
                  v-if="dataRoutine?.observacion?.length > 0"
                  removable
                  v-model="dataRoutine.observacion"
                  color="primary"
                  text-color="white"
                  :label="dataRoutine.observacion"
                  :title="dataRoutine.observacion"
                />
              </div>
            </div>
            <div class="col-6 flex justify-end">
              <q-btn label="Guardar" type="submit" color="secondary" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<style lang="sass" scoped>
.q-icon-size > .q-icon
  font-size: 1rem

.chips-class
  box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  -webkit-box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  -moz-box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  cursor: pointer

.truncate-chip-labels > .q-chip
  max-width: 50px

.truncate-chip-labelsDialog > .q-chip
  max-width: 300px
.full-height
    background-color: black


.my-card
  width: 45%
  height: auto
  margin-left: 20px
  position: relative

  @media screen and (max-width: 600px)
    width: 100%

.not-active-class
  box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  -webkit-box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  -moz-box-shadow: 0px 6px 8px -2px rgba(49, 32, 224, 0.71)
  border-radius:10px
</style>
