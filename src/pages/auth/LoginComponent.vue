<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import { useUserStore } from "../../stores/user-store";
import { API_DATA } from "../../utils/constants";

import { api, apiUsers } from "boot/axios";
/* import { plugin, defaultConfig } from "@formkit/vue"; */

//declaracion de variables
const username = ref("");
const password = ref("");
const formLogin = ref(null);
const isPwd = ref(true);

const userStore = useUserStore();

//userdata test
const dataUser = {
  username: "admin",
  password: "admin",
};

//instancias
const $q = useQuasar();
const router = useRouter();

const images = ref([
  { id: 1, url: "https://cdn.quasar.dev/img/mountains.jpg", name: "image 1" },
  { id: 2, url: "https://cdn.quasar.dev/img/parallax1.jpg", name: "image 2" },
  { id: 3, url: "https://cdn.quasar.dev/img/parallax2.jpg", name: "image 3" },
]);

const currentImage = ref(0);
const urlImage = ref(images.value[currentImage.value].url);

const stylePage = ref({
  backgroundImage: `url(${urlImage.value})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
});

const changeImage = () => {
  if (currentImage.value < images.value.length - 1) {
    currentImage.value++;
  } else {
    currentImage.value = 0;
  }
  urlImage.value = images.value[currentImage.value].url;
  stylePage.value = {
    backgroundImage: `url(${urlImage.value})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    transition: "all 1s ease-in-out",
  };
};

onMounted(() => {
  setInterval(changeImage, 10000);
  console.log("mounted");
});
onBeforeUnmount(() => {
  clearInterval(changeImage);
  console.log("unmounted");
});

const submitToMailchimp = async () => {
  console.log("submitToMailchimp", API_DATA);

  const data = {
    username: username.value,
    password: password.value,
    sistema: API_DATA?.sistema,
  };
  //cookies de sanctum
  /*   await userStore.getSanctumCookie(); */
  const response = await userStore.login(data);

  if (response?.success) {
    userStore.setUser(response);
    router.push("/");
    $q.notify({
      message: "Bienvenido",
      color: "green",
      textColor: "white",
      position: "top",
      timeout: 2000,
    });
    formLogin.value.resetValidation();
    resetForm();
  } else {
    $q.notify({
      message: response?.message,
      color: "red",
      textColor: "white",
      position: "top",
      timeout: 2000,
    });
    formLogin.value.resetValidation();
    resetForm();
  }

  console.log(username.value, password.value);
};

const resetForm = () => {
  username.value = "";
  password.value = "";
};
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center" :style="stylePage">
        <q-card class="cardContainer">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Sistema [nombre]</div>
            <div class="text-subtitle2">Inicio de sesión</div>
          </q-card-section>

          <q-card-section>
            <div class="q-pa-md" style="max-width: 400px">
              <q-form
                @submit.prevent="submitToMailchimp"
                class="row q-gutter-md"
                @reset="resetForm"
                ref="formLogin"
              >
                <div class="col-12">
                  <div class="flex flex-start items-center">
                    <q-icon
                      name="person
                    "
                      size="20px"
                      class="q-mr-sm"
                    />
                    <div class="text-h6">Nombre de usuario</div>
                  </div>
                  <q-input
                    outlined
                    v-model="username"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Por favor ingrese su nombre de usuario',
                    ]"
                  />
                </div>
                <div class="col-12">
                  <div class="flex flex-start items-center">
                    <q-icon name="lock" size="20px" class="q-mr-sm" />
                    <div class="text-h6">Password</div>
                  </div>
                  <q-input
                    outlined
                    :type="isPwd ? 'password' : 'text'"
                    v-model="password"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Por favor ingrese su contraseña',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>

                <div class="col-12 flex justify-end">
                  <q-btn label="Iniciar Sesión" type="submit" color="primary" />
                </div>
              </q-form>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style>
.containerPage {
  background-color: red;
  width: 100%;
}

.cardContainer {
  width: 450px;
  border-radius: 15px;
}

@media (max-width: 600px) {
  .cardContainer {
    width: 90%;
  }
}

@media (max-width: 400px) {
  .cardContainer {
    width: 90%;
  }
}

.formkit-wrapper {
  max-width: 100% !important;
  margin: 0;
}
.inputLogin {
  width: 100%;
}
</style>
