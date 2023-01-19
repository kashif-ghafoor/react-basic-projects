import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SubURLsTable from "./suburlsTable";
import { paginate } from "./common/paginate";
import React from "react";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import D3Chart from "./d3chart";
import CircularProgress from "@mui/material/CircularProgress";
import LatencyChart from "./latencyChart";

const MonitorURL = () => {
  const { url } = useParams();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [suburls, setSuburls] = useState([]);
  const [latencyData, setLatencyData] = useState({});
  const endpoint = `http://localhost:4000/${encodeURIComponent(url)}`;
  useEffect(() => {
    (async () => {
      try {
        console.log("fetching suburls from database");
        const response = await axios.get(endpoint);
        setSuburls(response.data.suburls);
        setLatencyData({
          timestamps: response.data.Timestamps,
          values: response.data.Values,
        });
        console.log("data fetched");
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line
  }, [url]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const count = Math.ceil(suburls.length / pageSize);
  const paginated = paginate(suburls, currentPage, pageSize);
  return (
    <div style={{ margin: 100 }}>
      <SubURLsTable subURLs={paginated} url={url} />
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="contained"
          shape="rounded"
          onChange={(event, pageNumber) => handlePageChange(pageNumber)}
        />
      </Stack>
      {suburls.length !== 0 ? (
        <>
          <D3Chart suburls={suburls} url={url} />
          <LatencyChart url={url} latencyData={latencyData} />
        </>
      ) : (
        <div>
          <CircularProgress />
          <div>fetching data</div>
        </div>
      )}
    </div>
  );
};

export default MonitorURL;
