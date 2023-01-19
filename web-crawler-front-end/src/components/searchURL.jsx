import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import urlExist from "./common/urlExist";
import axios from "axios";
const SearchURL = ({
  url,
  inputStatus,
  isValid,
  suburls,
  handleInputStatus,
  validationChange,
  handleSuburlsChange,
}) => {
  const [loading, setLoading] = useState(false);
  const endpoint = "http://localhost:4000/";

  // function to send url to endpoint using post method
  // and return response object having status and reponse
  // if url is present in database then endpoinot will
  // return an object {url: url , suburls : suburls}
  const sendDatattoEndpoint = async () => {
    try {
      const result = await axios.get(endpoint + encodeURIComponent(url));
      return { status: result.status, response: result.data };
    } catch (err) {
      return { status: err.response.status, response: err.message };
    }
  };

  // function to handle click event of add button
  const handleClick = async () => {
    setLoading(true);
    const exists = await urlExist(url);
    if (exists) {
      const response = await sendDatattoEndpoint();
      if (response.status === 200) {
        inputStatus = `${url} url is present in database`;
        // in response we have url and it's suburls
        handleSuburlsChange(response.response.suburls);
      } else if (response.status === 404) {
        inputStatus = `${url} not found in database`;
      } else {
        console.error("internal server error", response.response);
      }
    } else {
      // if url doesn't exists
      validationChange(false);
      inputStatus = "url doesn't exists remember to add protocol at start";
    }
    setLoading(false);
    handleInputStatus(inputStatus);
  };
  return (
    <LoadingButton
      variant="outlined"
      disabled={!isValid}
      loading={loading}
      onClick={handleClick}
    >
      Search
    </LoadingButton>
  );
};

export default SearchURL;
