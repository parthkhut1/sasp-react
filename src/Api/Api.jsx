import axios from "axios";
// import swal from "sweetalert";

let BaseURL = "https://sapsgroup.in/code/";
// let BaseURL = "http://sapsgroup.in/code/";

const token = () => {
  let token = "bearer " + JSON.parse(localStorage.getItem("access_tocken"));
  return token;
};
let headers = {
  authorization: "bearer " + JSON.parse(localStorage.getItem("access_tocken")),
};

export const Bucket = process.env.REACT_APP_BUCKET;
export const getFileImage = (file) => {
  let ext = file?.split(".").pop(); 
  let filePrev = "";
  let img = [
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
    "bmp",
    "ico",
    "cur",
    "tif",
    "tiff",
  ];
  if (img?.includes(ext?.toLowerCase())) {
    filePrev = BaseURL + file;
  }
  return filePrev;
};
export const ApiGetNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + "api/" + type)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + "api/" + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiPutNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + "api/" + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiDeleteNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + "api/" + type)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response);
        }
      });
  });
};

export const ApiGet = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + "api/" + type, {
        headers: {
          authorization:
            "bearer " + JSON.parse(localStorage.getItem("access_tocken")),
        },
      })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
          } else {
            reject(error?.response?.data);
          }
        } else {
          reject(error);
          // alert(error)
          if (error?.response?.status === 401) {
            localStorage.clear();
            // swal({
            //     title: "Warning",
            //     text: "Token has expired",
            //     icon: "warning",
            //   });
              window.location = "/";
          } 
        }
      });
  });
};

export const ApiPost = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + "api/" + type, userData, {
        headers: {
          authorization:
            "bearer " + JSON.parse(localStorage.getItem("access_tocken")),
        },
      })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
          } else {
            reject(error?.response?.data);
          }
        } else {
          reject(error);
         
          if (error?.response?.status === 401) {
            localStorage.clear();
            // swal({
            //     title: "Warning",
            //     text: "Token has expired",
            //     icon: "warning",
            //   });
              window.location = "/";
          } else if (error?.response?.data?.message === "Too Many Attempts.") {
            alert("Please wait 2 minute, after 2 minute reload website.")
          }
        }
      });
  });
};

export const ApiPut = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + "api/" + type, userData, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
          } else {
            reject(error?.response?.data);
          }
        } else {
          reject(error);
        }
      });
  });
};

export const ApiDelete = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseURL + "api/" + type, { headers: headers })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error?.hasOwnProperty("response") &&
          error?.response?.hasOwnProperty("data") &&
          error?.response?.data?.hasOwnProperty("error") &&
          error?.response?.data?.error
        ) {
          if (error?.response?.status === 403) {
            //   signout();
          } else {
            reject(error?.response?.data);
          }
        } else {
          reject(error);
        }
      });
  });
};
