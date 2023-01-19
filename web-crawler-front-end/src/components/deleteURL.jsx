import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import axios from "axios";

const DeleteURL = ({ url, URLs, onURLsChange }) => {
  const [loading, setLoading] = useState(false);
  const endpoint = "http://localhost:4000";

  //function to send url to endpoint using post method
  const sendDatattoEndpoint = async () => {
    try {
      const result = await axios.delete(endpoint, {
        data: {
          url: url,
        },
      });
      if (result.data.deletedCount === 1) {
        // if url is scuccefully deleted from database update state
        URLs = URLs.filter((item) => item.url !== url);
        console.log("in delete after updating state", URLs);
        onURLsChange(URLs);
      }
    } catch (err) {
      console.log("Internal server error", err);
    }
    setLoading(false);
  };

  const handleClick = async () => {
    setLoading(true);
    await sendDatattoEndpoint();
  };
  return (
    <LoadingButton
      variant="outlined"
      color="error"
      onClick={handleClick}
      loading={loading}
    >
      Delete
    </LoadingButton>
  );
};

export default DeleteURL;
