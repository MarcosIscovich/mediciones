import { api } from "src/boot/axios";
import headers from "../../utils/getHeaders";

const getAllTurnos = async () => {
  try {
    console.log("headers", headers());
    const response = await api.get("turnos", headers);
    console.log("response.data Get TURNOS SERVICES", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTurno = async (id) => {
  try {
    const response = await api.get(`turnos/${id}`);
    console.log("response.data Get TURNO SERVICES", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createTurno = async (data) => {
  try {
    const response = await api.post("turnos", data);
    console.log("response.data Create TURNO SERVICES", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateTurno = async (id, data) => {
  try {
    const response = await api.put(`turnos/${id}`, data);
    console.log("response.data Update TURNO SERVICES", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTurno = async (id) => {
  try {
    const response = await api.delete(`turnos/${id}`);
    console.log("response.data Delete TURNO SERVICES", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const turnosServices = {
  getAllTurnos,
  getTurno,
  createTurno,
  updateTurno,
  deleteTurno,
};

export default turnosServices;
