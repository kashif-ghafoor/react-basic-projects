import React, { Component } from "react";
import { validURL } from "./common/validateURL";
import Input from "./input";
import AddButton from "./addButton";
import axios from "axios";
import URLsTable from "./urlsTable";
// import DeleteURL from "./deleteURL";
// import SearchURL from "./searchURL";
import { paginate } from "./common/paginate";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

class Main extends Component {
  endpoint = "http://localhost:4000/";
  state = {
    URLs: [],
    url: "",
    isValidURL: false,
    inputStatus: "",
    suburls: [],
    currentPage: 1,
    pageSize: 5,
  };
  async componentDidMount() {
    try {
      console.log("in CDM fetuching URLs from database");
      const { data: URLs } = await axios.get(this.endpoint);
      // const URLs = response.data.map((doc) => doc.url);
      console.log("in CDM got the data from database.");
      this.setState({ URLs });
      console.log(URLs);
    } catch (err) {
      console.error("error while fetching data from server.", err.message);
    }
  }
  handleUrlChange = (event) => {
    const isValidURL = validURL(event.target.value);
    this.setState({ url: event.target.value, isValidURL });
  };
  handleURLsChange = (URLs) => {
    this.setState({ URLs });
  };
  handleValidationChange = (isValidURL) => {
    this.setState({ isValidURL });
  };
  handleInputStatusChange = (inputStatus) => {
    this.setState({ inputStatus });
  };
  handleSuburlsChange = (suburls) => {
    this.setState({ suburls });
  };
  handlePageChange(currentPage) {
    this.setState({ currentPage });
  }
  render() {
    const { url, isValidURL, inputStatus, URLs, currentPage, pageSize } =
      this.state;
    const count = Math.ceil(URLs.length / pageSize);
    const paginated = paginate(URLs, currentPage, pageSize);
    return (
      <div className="main-content">
        <div className="input">
          <Input
            onUrlChange={this.handleUrlChange}
            isValid={isValidURL}
            inputStatus={inputStatus}
          />
          <AddButton
            url={url}
            isValid={isValidURL}
            inputStatus={inputStatus}
            onInputStatus={this.handleInputStatusChange}
            onValidationChange={this.handleValidationChange}
            onURLsChange={this.handleURLsChange}
            URLs={URLs}
          />
        </div>
        {URLs.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className="urlsTable">
            <URLsTable
              paginated={paginated}
              URLs={URLs}
              onURLsChange={this.handleURLsChange}
            />
            <Stack spacing={2}>
              <Pagination
                count={count}
                variant="contained"
                shape="rounded"
                onChange={(event, pageNumber) =>
                  this.handlePageChange(pageNumber)
                }
              />
            </Stack>
          </div>
        )}

        {/* <DeleteURL
            url={url}
            isValid={isValidURL}
            inputStatus={inputStatus}
            handleInputStatus={this.handleInputStatusChange}
            validationChange={this.handleValidationChange}
          />
          <SearchURL
            url={url}
            inputStatus={inputStatus}
            isValid={isValidURL}
            suburls={suburls}
            handleInputStatus={this.handleInputStatusChange}
            validationChange={this.handleValidationChange}
            handleSuburlsChange={this.handleSuburlsChange}
          />
           */}
        {/* </div> */}
      </div>
    );
  }
}

export default Main;
