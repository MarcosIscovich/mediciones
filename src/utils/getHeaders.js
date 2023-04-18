const getToken = () => {
  if (!localStorage.getItem("user")) {
    return "";
  }
  const { token } = JSON.parse(localStorage.getItem("user"));

  console.log("tokensss", token);
  if (token) {
    return token;
  } else {
    return "";
  }
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer " + getToken(),
};

export default headers;
