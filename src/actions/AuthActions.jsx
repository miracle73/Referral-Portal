import axios from "axios";



export const loginUser = async (data, setSuccess, setError, setLoggingin) => {
  setLoggingin(true);

  try {
    const response = await axios.post('https://beelsfinance.com/api/api/v1/ambassador/login', data, {
      headers: { Accept: "application/json" },
    });
    console.log(response)
    if (response.data.status == "Error") {
      console.log(response.data.message)
      setError(response.data.message);
    } else {
      console.log(response.data);
      setSuccess(response.data?.data);
    }


  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err);
      setError(err);
    }
  }

  setLoggingin(false);
};

export const Logout = async (token, setUserdetail, setError, email) => {
  try {
    const response = await axios.get(`https://beelsfinance.com/api/api/v1/ambassador/logout`, {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    });

    if (response.data.status !== "Success") {
      console.log(response.data.message)
      setError(response.data.message);
    }
    setUserdetail(response.data?.data);

  } catch (err) {
    if (!err?.response) {
      setError("No Response from Server");
    } else {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }
};



