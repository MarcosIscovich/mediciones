<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import AddRoutinesDialog from "./AddRoutinesDialog.vue";
import ViewDialog from "./ViewDialog.vue";

const $q = useQuasar();

const columns = [
  {
    name: "nombre",
    required: true,
    label: "Nombre",
    align: "left",
    field: "nombre",
    sortable: true,
    style: "width: auto",
    headerTooltip: "Nombre de la rutina",
  },
  {
    name: "turno",
    label: "Turno",
    field: "turno",
    sortable: true,
    style: "width: auto",
    align: "right",
  },
  {
    name: "tipodeRecorrida",
    label: "Tipo de Recorrida",
    field: "tipodeRecorrida",
    sortable: true,
    style: "width: auto",
    align: "right",
  },
  {
    name: "frecuencia",
    label: "Frecuencia",
    field: "frecuencia",
    style: "width: auto",
    align: "right",
  },
  {
    name: "horaDesde",
    label: "Desde (hora)",
    field: "horaDesde",
    style: "width: auto",
    align: "right",
  },
  {
    name: "horaHasta",
    label: "Hasta (hora)",
    field: "horaHasta",
    style: "width:auto",
    align: "right",
  },
  {
    name: "estadoDePlanta",
    label: "Estado De Planta",
    field: "estadoDePlanta",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    style: "width:auto",
    align: "right",
    title: "Estado de la planta",
  },
  {
    name: "actions",
    label: "Acciones",
    field: "actions",
    style: "width: 100px",
    align: "right",
  },
];
const rutinas = [
  {
    id: 18,
    nombre: "Exteriores",
    expand: true,
    rutinas: [
      {
        id: 18,
        nombre: "Exteriores-T. Mañana-Instancia 9:30",
        turno: [{ label: "Mañana", value: "Mañana", slot: "mañana" }],
        tipodeRecorrida: "Exteriores",
        frecuencia: [{ label: "Diaria", value: "Diaria" }],
        horaDesde: "09:30",
        horaHasta: "10:30",
        estadoDePlanta: {
          label: "OP.NORMAL",
          value: "OP.NORMAL",
          slot: "OP.NORMAL",
        },
        sector: [
          {
            label: "Sector 1",
            value: "Sector 1",
            slot: "Sector 1",
            tipo: "Exterior",
            tipodeRecorrida: "Exteriores",
            variables: [
              {
                id: 1,
                nombre: "Temperatura",
                label: "Temperatura",
                valor: "20",
                unidad: "°C",
                tipo: "numerico",
                sistema: "Sector 1",
              },
              {
                id: 2,
                nombre: "Humedad",
                label: "Humedad",
                valor: "50",
                unidad: "%",
                tipo: "numerico",
                sistema: "Sector 1",
              },
              {
                id: 3,
                nombre: "Presión",
                valor: "100",
                unidad: "kPa",
                tipo: "numerico",
              },
              {
                id: 4,
                nombre: "Luminosidad",
                label: "Luminosidad",
                valor: "100",
                unidad: "lux",
                tipo: "numerico",
                sistema: "Sector 1",
              },
              {
                id: 5,
                nombre: "Viento",
                label: "Viento",
                valor: "100",
                unidad: "km/h",
                tipo: "numerico",
                sistema: "Sector 1",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: "Exteriores-T. Mañana-Instancia 10:30",
        turno: [{ label: "Mañana", value: "Mañana", slot: "mañana" }],
        tipodeRecorrida: "Exteriores",
        frecuencia: [{ label: "Diaria", value: "Diaria" }],
        horaDesde: "10:30",
        horaHasta: "11:30",
        estadoDePlanta: {
          label: "OP.NORMAL",
          value: "OP.NORMAL",
          slot: "OP.NORMAL",
        },
        sector: [
          {
            label: "Sector 2",
            value: "Sector 2",
            slot: "Sector 2",
            tipo: "Exterior",
            tipodeRecorrida: "Exteriores",
            variables: [
              {
                id: 18351831,
                nombre: "Temperatura",
                valor: "20",
                unidad: "°C",
                tipo: "numerico",
                label: "Temperatura",
                sistema: "Sector 2",
              },
              {
                id: 28351831,
                nombre: "Humedad",
                valor: "50",
                unidad: "%",
                tipo: "numerico",
                label: "Humedad",
                sistema: "Sector 2",
              },
              {
                id: 48351831,
                nombre: "Luminosidad",
                valor: "100",
                unidad: "lux",
                tipo: "numerico",
                label: "Luminosidad",
                sistema: "Sector 2",
              },
              {
                id: 58351831,
                nombre: "Viento",
                valor: "100",
                unidad: "km/h",
                tipo: "numerico",
                label: "Viento",
                sistema: "Sector 2",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: "Exteriores-T. Mañana-Instancia 11:30",
        turno: [{ label: "Mañana", value: "Mañana", slot: "mañana" }],
        tipodeRecorrida: "Exteriores",
        frecuencia: [{ label: "Diaria", value: "Diaria" }],
        horaDesde: "11:30",
        horaHasta: "12:30",
        estadoDePlanta: {
          label: "OP.NORMAL",
          value: "OP.NORMAL",
          slot: "OP.NORMAL",
        },
        sector: [
          {
            label: "Sector 3",
            value: "Sector 3",
            slot: "Sector 3",
            tipo: "Exterior",
            variables: [
              {
                id: 1,
                label: "Temperatura",
                valor: "20",
                unidad: "°C",
                tipo: "numerico",
                sistema: "Sector 3",
              },
              {
                id: 2,
                label: "Humedad",
                valor: "50",
                unidad: "%",
                tipo: "numerico",
                sistema: "Sector 3",
              },
              {
                id: 3,
                label: "Presión",
                valor: "100",
                unidad: "kPa",
                tipo: "numerico",
                sistema: "Sector 3",
              },
              {
                id: 4,
                nombre: "Luminosidad",
                valor: "100",
                unidad: "lux",
                tipo: "numerico",
                sistema: "Sector 3",
              },
              {
                id: 5,
                nombre: "Viento",
                valor: "100",
                unidad: "km/h",
                tipo: "numerico",
                sistema: "Sector 3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: "Interiores",
    expand: true,
    rutinas: [
      {
        id: 1,
        nombre: "Interiores-T. Mañana-Instancia 9:30",
        turno: [{ label: "Mañana", value: "Mañana", slot: "mañana" }],
        tipodeRecorrida: "Interiores",
        frecuencia: [{ label: "Diaria", value: "Diaria" }],
        horaDesde: "09:30",
        horaHasta: "10:30",
        estadoDePlanta: {
          label: "OP.NORMAL",
          value: "OP.NORMAL",
          slot: "OP.NORMAL",
        },
        sector: {
          label: "Sector 4",
          value: "Sector 4",
          slot: "Sector 4",
        },
      },
    ],
  },
];

const loading = ref(false);
const filter = ref("");
const rowCount = ref(10);
const rows = ref([...rutinas]);
const horaActual = ref("");
const dataGeneral = ref({
  turnos: [
    {
      label: "Mañana",
      slot: "mañana",
      value: "Mañana",
    },
    {
      label: "Tarde",
      slot: "tarde",
      value: "Tarde",
    },
    {
      label: "Noche",
      slot: "noche",
      value: "Noche",
    },
    {
      label: "Todos",
      slot: "todos",
      value: "todos",
    },
  ],
  tipodeRecorrida: [
    {
      label: "Exteriores",
      value: "Exteriores",
      sistemas: [
        {
          id: 13212,
          label: "Recinto 1 ext",
          value: "Recinto 1 ext",
          tipo: "Exteriores",
          variables: [
            {
              label: "variable 1 exteriores",
              value: "variable 1 exteriores",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
            {
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Recinto 1 ext",
            },
          ],
        },
        {
          id: 132123,
          label: "Sector Recinto 2 de Sala 1 ext",
          value: "Sector Recinto 2 de Sala 1 ext",
          tipo: "Exteriores",
          variables: [
            {
              label: "variable 1",
              value: "variable 1",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
            {
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 ext",
            },
          ],
        },
      ],
    },
    {
      label: "Interiores",
      value: "Interiores",
      sistemas: [
        {
          id: 564654,
          label: "Sector Recinto 1 de Sala 1 int",
          value: "Sector Recinto 1 de Sala 1 int",
          tipo: "Interiores",
          variables: [
            {
              id: 9998,
              label: "variable 1",
              value: "variable 1",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 9999,
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10000,
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10001,
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10002,
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10003,
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10004,
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10005,
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
            {
              id: 10006,
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 int",
            },
          ],
        },
        {
          id: 564655,
          label: "Sector Recinto 2 de Sala 1  int",
          value: "Sector Recinto 2 de Sala 1 int",
          tipo: "Interiores",
          variables: [
            {
              id: 10007,
              label: "variable 1",
              value: "variable 1",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10008,
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10009,
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10010,
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10011,
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10012,
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10013,
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10014,
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
            {
              id: 10015,
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 2 de Sala 1 int",
            },
          ],
        },
      ],
    },
    {
      label: "Exteriores e Interiores",
      value: "Exteriores e Interiores",
      sistemas: [
        {
          id: 564656,
          label: "Sector Recinto 1 de Sala 1 ext e int",
          value: "Sector Recinto 1 de Sala 1 ext e int",
          tipo: "Exteriores e Interiores",
          variables: [
            {
              id: 10016,
              label: "variable 1",
              value: "variable 1",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10017,
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10018,
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10019,
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10020,
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10021,
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10022,
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10023,
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
            {
              id: 10024,
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 ext e int",
            },
          ],
        },
      ],
    },
    {
      label: "Zona Conntrolada",
      value: "Zona Conntrolada",
      sistemas: [
        {
          id: 6546843,
          label: "Sector Recinto 1 de Sala 1 zona",
          value: "Sector Recinto 1 de Sala 1 zona",
          tipo: "Zona Conntrolada",
          variables: [
            {
              id: 10025,
              label: "variable 1",
              value: "variable 1",
              parametro: "1",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "qwerty",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10026,
              label: "variable 2",
              value: "variable 2",
              parametro: "2",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10027,
              label: "variable 3",
              value: "variable 3",
              parametro: "3",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10028,
              label: "variable 4",
              value: "variable 4",
              parametro: "4",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10029,
              label: "variable 5",
              value: "variable 5",
              parametro: "5",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10030,
              label: "variable 6",
              value: "variable 6",
              parametro: "6",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10031,
              label: "variable 7",
              value: "variable 7",
              parametro: "7",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10032,
              label: "variable 8",
              value: "variable 8",
              parametro: "8",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
            {
              id: 10033,
              label: "variable 9",
              value: "variable 9",
              parametro: "9",
              par_desde: "",
              par_hasta: "",
              valor_anterior: "0",
              medicion: "",
              observacion: "",
              sistema: "Sector Recinto 1 de Sala 1 zona",
            },
          ],
        },
      ],
    },
  ],
  frecuencia: [
    {
      label: "Diaria/Todos los días",
      value: "Diaria/todos",
    },
    {
      label: "Semanal",
      value: "Semanal",
    },
    {
      label: "Mensual",
      value: "Mensual",
    },
  ],

  estadoDePlanta: [
    {
      label: "OP.NORMAL",
      value: "OP.NORMAL",
    },
    {
      label: "PP",
      value: "PP",
    },
    {
      label: "OP.ESPECIAL",
      value: "OP.ESPECIAL",
    },
    {
      label: "Cualquier Estado",
      value: "Cualquier Estado",
    },
  ],
  horaActual: horaActual.value,
});
const keyView = ref(Math.random());
const keyCreate = ref(Math.random());
const dialogData = ref({
  open: false,
  data: {
    nombre: "",
    turno: [],
    tipodeRecorrida: null,
    frecuencia: [],
    horaDesde: "",
    horaHasta: "",
    estadoDePlanta: null,
    sistemas: [],
    variables: [],
    observacion: "",
  },
});

const dataDialogView = ref({
  open: false,
  data: {},
});
const openView = ref(false);
const openClone = ref(false);
const openDelete = ref(false);

const getCustomRowsCells = (col, value) => {
  console.log(col);
  const cells = {
    nombre: NombreCell,
    /* turno: value.turno,
    tipodeRecorrida: value.tipodeRecorrida,
    frecuencia: value.frecuencia,
    horaDesde: value.horaDesde,
    horaHasta: value.horaHasta,
    estadoDePlanta: value.estadoDePlanta, */
  };
  const cellsDefault = "";

  return cells[col.name] ? h(cells[col.name]) : cellsDefault;
};

const getHoraActual = () => {
  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();

  horaActual.value = `${hora < 10 ? `0${hora}` : hora}:${
    minutos < 10 ? `0${minutos}` : minutos
  }`;
};

const compareTime = (horaDesde, horaHasta) => {
  getHoraActual();
  console.log(horaActual.value);
  if (horaActual.value >= horaDesde && horaActual.value <= horaHasta) {
    console.log("HORA IGUAL");
    return true;
  } else {
    console.log("HORA DIFERENTE");
    return false;
  }
};

const editRow = (row) => {
  console.log(row);
};
const deleteRow = (row) => {
  console.log(row);
};
const openDialog = () => {
  console.log("openDialog");
  dialogData.value.open = true;
};

const submitDialog = (data) => {
  console.log("submitDialog", data);
  dialogData.value.open = false;
  console.log("rowsss", rows.value);

  rows.value.map((row) => {
    data.tipodeRecorrida.map((tipo) => {
      if (row.nombre.toLocaleLowerCase() === tipo.label.toLocaleLowerCase()) {
        let newRutina = {
          id: 10034221,
          nombre: data.nombre,
          turno: data.turno,
          tipodeRecorrida: tipo.label,
          frecuencia: data.frecuencia,
          horaDesde: data.horaDesde,
          horaHasta: data.horaHasta,
          estadoDePlanta: data.estadoDePlanta,
        };
        row.rutinas.push(newRutina);
      }
    });
  });

  /* const newRutina = {
    id: 10034221,
    nombre: data.nombre,
    turno: data.turno,
    tipodeRecorrida: data.tipodeRecorrida,
    frecuencia: data.frecuencia,
    horaDesde: data.horaDesde,
    horaHasta: data.horaHasta,
    estadoDePlanta: data.estadoDePlanta,
  };

  rutinas.value.push(data); */
  console.log("rowsss", rows.value);
};

const openDialogView = (row) => {
  console.log("openDialogView", row);
  dataDialogView.value.open = true;
  dataDialogView.value.data = row;
  keyView.value = Math.random();
};

const openDialogClone = (row) => {
  console.log("openDialogClone", row);
  dialogData.value.data = row;

  dialogData.value.data.variables = row.sector[0].variables;
  dialogData.value.open = true;
  console.log("dialogData", dialogData.value);
  keyCreate.value = Math.random();
};
const openDialogDelete = () => {
  console.log("openDialogDelete");
  openDelete.value = true;
};
</script>
<template>
  <AddRoutinesDialog
    :dialogData="dialogData"
    :dataGeneral="dataGeneral"
    @submit="submitDialog"
    :key="keyCreate"
  />
  <ViewDialog :data="dataDialogView" :key="keyView" />

  <div class="q-pa-md q-ma-lg">
    <div class="flex justify-end q-py-lg">
      <q-btn
        push
        color="primary"
        label="Planear Nueva Rutina"
        icon="add"
        @click="() => openDialog()"
      />
    </div>
    <q-table
      title="Rutinas"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      group-by="turno"
      :expand="true"
    >
      <template v-slot:top>
        <q-chip color="secondary" text-color="white" size="lg">
          Rutinas
        </q-chip>
        <q-space />

        <q-input
          v-model="filter"
          label="Buscar"
          class="q-ml-md"
          color="primary"
          inverted-light
          dense
        />
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            auto-width
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" class="bg-blue-1">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="primary"
              round
              dense
              @click="() => (props.expand = !props.expand)"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>

        <q-tr
          v-show="props.expand"
          :props="props"
          v-for="(col, idx) in props.row.rutinas"
          :key="idx"
        >
          <q-td auto-width />

          <q-td v-for="colTd in props.cols" :key="colTd.name">
            <div v-if="colTd?.name == 'nombre'" class="flex justify-start">
              {{ col.nombre }}
            </div>
            <template v-if="colTd?.name == 'turno'">
              <div
                class="flex justify-end"
                v-for="(turno, indx) in col.turno"
                :key="indx"
              >
                {{ turno.label }}
              </div>
            </template>
            <div
              v-if="colTd?.name == 'tipodeRecorrida'"
              class="flex justify-end"
            >
              {{ col.tipodeRecorrida }}
            </div>

            <template v-if="colTd?.name == 'frecuencia'">
              <div
                class="flex justify-end"
                v-for="(frecuencia, indx) in col.frecuencia"
                :key="indx"
              >
                {{ frecuencia.label }}
              </div>
            </template>
            <div class="flex justify-end">
              <q-chip
                v-if="colTd?.name == 'horaDesde'"
                :color="
                  compareTime(col.horaDesde, col.horaHasta) ? 'red-4' : 'accent'
                "
                text-color="white"
                icon="schedule"
                :label="col.horaDesde"
              />
            </div>
            <div class="flex justify-end">
              <q-chip
                v-if="colTd?.name == 'horaHasta'"
                :color="
                  compareTime(col.horaDesde, col.horaHasta) ? 'red-4' : 'info'
                "
                icon="schedule"
                text-color="blue-grey"
                :label="col.horaHasta"
              />
            </div>
            <div
              v-if="colTd?.name == 'estadoDePlanta'"
              class="flex justify-end"
            >
              <div class="flex justify-end">
                {{ col.estadoDePlanta.label }}
              </div>
            </div>

            <div
              v-if="colTd?.name == 'actions'"
              class="flex justify-end q-mr-xs"
            >
              <q-btn
                size="sm"
                text-color="primary"
                rounded
                color="accent"
                icon="more_vert"
                push
              >
                <q-menu auto-close>
                  <q-list style="min-width: 100px">
                    <q-item clickable @click="() => openDialogView(col)">
                      <q-item-section avatar>
                        <q-icon color="accent" name="visibility" />
                      </q-item-section>

                      <q-item-section>Ver</q-item-section>
                    </q-item>

                    <q-item clickable @click="() => openDialogClone(col)">
                      <q-item-section avatar>
                        <q-icon color="accent" name="edit" />
                      </q-item-section>

                      <q-item-section>Clonar</q-item-section>
                    </q-item>

                    <q-item clickable @click="() => openDialogDelete()">
                      <q-item-section avatar>
                        <q-icon color="accent" name="delete" />
                      </q-item-section>

                      <q-item-section>Borrar</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
