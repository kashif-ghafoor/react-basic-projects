import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LatencyChart = ({ url, latencyData }) => {
  let { timestamps, values: latencies } = latencyData;
  console.log(timestamps);
  const data = timestamps.map((timestamp, index) => [
    timestamp,
    latencies[index],
  ]);
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Latency Chart",
    },
    subtitle: {
      text: `${url}`,
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time",
      },
    },
    yAxis: {
      title: {
        text: "Latency",
      },
    },
    series: [
      {
        data: data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LatencyChart;
