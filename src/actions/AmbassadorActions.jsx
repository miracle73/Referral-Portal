import axios from "../baseUrl/axios";


export const getDashboardDetail = async (token, setUserdetail, setError) => {
  try {
    const response = await axios.get("https://beelsfinance.com/api/api/v1/ambassador/dashboard", {
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
export const allAmbassadors = async (token, setUserdetail, setError) => {
  try {
    const response = await axios.get(`https://beelsfinance.com/api/api/v1/ambassador/all`, {
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

export const allSubAmbassadors = async (token, setUserdetail, setError) => {
  try {
    const response = await axios.get(`https://beelsfinance.com/api/api/v1/ambassador/sub`, {
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
export const getPersonalDetail = async (token, setUserdetail, setError, email) => {
  try {
    const response = await axios.get(`https://beelsfinance.com/api/api/v1/ambassador/details/${email}`, {
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

export const sendInvite = async (data, setSuccess, setError, setLoading, token) => {
  setLoading(true);

  try {
    const response = await axios.post('https://beelsfinance.com/api/api/v1/ambassador/invite/send', data, {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    });
    console.log(response)
    if (response.data.status !== "Success") {
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

  setLoading(false);
};