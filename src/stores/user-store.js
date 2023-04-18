import { defineStore } from "pinia";
import { apiUsers, crfsToken, api } from "src/boot/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    async getSanctumCookie() {
      try {
        const response = await crfsToken.get("sanctum/csrf-cookie");
        console.log("getSanctumCookie", response);
      } catch (error) {
        console.log(error);
      }
    },
    async login(data) {
      console.log("login pinia", data);
      try {
        const response = await apiUsers.post("/apiLogin", data);
        console.log("login pinia consultass", response.data);
        return response.data;
      } catch (error) {
        console.log("error de tray", error);
        return new Error(error);
      }
    },
    async loginApi(data) {
      console.log("login pinia", data);
      try {
        const response = await api.post(
          "api/authVerify",
          {
            id: data.id,
            withCredentials: true,
          },
          {
            headers: {
              Authorization: "Bearer " + data.token,
            },
          }
        );
        console.log("login pinia consultass", response.data);
        return response.data;
      } catch (error) {
        console.log("error de tray", error);
        return new Error(error);
      }
    },

    setUser(payload) {
      console.log("setUser", payload);
      this.user = payload.user;
      this.token = payload.token;
    },
    setToken(payload) {
      console.log("setToken", payload);
      this.token = payload;
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
  persist: true,
});
