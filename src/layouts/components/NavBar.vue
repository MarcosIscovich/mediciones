<script setup>
import { useUserStore } from "../../stores/user-store";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const $router = useRouter();

const userStore = useUserStore();
const logout = () => {
  userStore.logout();
  $q.notify({
    message: "Sesión cerrada",
    color: "primary",
    position: "top",
    timeout: 2000,
  });
  $router.push("/login");
};
</script>

<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar> </q-avatar>
      <span class="q-ml-sm">NASA</span>
    </q-toolbar-title>
    <div>
      <q-btn
        flat
        round
        dense
        icon="dashboard"
        @click="() => $router.push('/dashboard')"
      />
      <q-btn flat round dense icon="logout" @click="() => logout()" />
    </div>
  </q-toolbar>
</template>
