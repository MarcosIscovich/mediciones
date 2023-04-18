<script setup>
import { useUserStore } from "../../stores/user-store";
import turnosServices from "../../services/complements/turnos-services";

const userStore = useUserStore();

//esto no va aca
const token = userStore.getToken;

const handleapi = async () => {
  console.log("TOKEN DASHBOARDddd", token);
  const res = await turnosServices.getAllTurnos();
  alert("GET Turnos", res);
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <h2>Bienvenido {{ userStore.getUser?.nombre_completo }}</h2>
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Rutinas</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="() => $router.push('/rutinas')" flat
          ><q-icon name="arrow_right_alt" />Ir</q-btn
        >
      </q-card-actions>
    </q-card>

    <q-btn @click="() => handleapi()">Probar api</q-btn>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
