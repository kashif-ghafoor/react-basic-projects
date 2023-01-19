import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useState } from "react";
import urlExist from "./common/urlExist";

const AddButton = ({
  url,
  inputStatus,
  isValid,
  URLs,
  onInputStatus,
  onValidationChange,
  onURLsChange,
}) => {
  const [loading, setLoading] = useState(false);
  const endpoint = "http://localhost:4000";
  // "https://44yjovy8e3.execute-api.us-east-1.amazonaws.com/prod";
  function updateURLs(insertedId) {
    URLs.push({ _id: insertedId, url: url });
    onURLsChange(URLs);
  }
  // function to send url to endpoint using post method
  const sendDatattoEndpoint = async () => {
    try {
      const result = await axios.post(endpoint, { url: url });
      const { acknowledged, insertedId } = result.data;
      if (acknowledged) {
        inputStatus = `${url} added to database`;
        // if url is added to database update state
        updateURLs(insertedId);
      } else {
        inputStatus = result.data;
      }
    } catch (err) {
      console.log("internal server error", err);
    }
    setLoading(false);
  };

  // function to handle click event of add button
  const handleClick = async () => {
    setLoading(true);
    const exists = await urlExist(url);
    if (exists) {
      await sendDatattoEndpoint();
    } else {
      setLoading(false);
      onValidationChange(false);
      inputStatus = "either network problem or url doesn't exists";
    }
    onInputStatus(inputStatus);
  };

  return (
    <LoadingButton
      variant="contained"
      disabled={!isValid}
      loading={loading}
      onClick={handleClick}
    >
      Add
    </LoadingButton>
  );
};

export default AddButton;
