import { useRef } from "react";
import { Tree } from "./common/tree";
import { useEffect } from "react";

const D3Chart = ({ suburls, url }) => {
  if (suburls.length > 10) {
    suburls = suburls.slice(0, 10);
  }
  const data = {
    name: url,
    children: suburls.map((suburl) => {
      return {
        name: suburl,
      };
    }),
  };
  const chart = Tree(data, {
    label: (d) => d.name,
    width: 1152,
  });
  const myRef = useRef();
  useEffect(() => {
    myRef.current.appendChild(chart);
    console.log("in useEffect of chart");
    const reference = myRef.current;

    return () => {
      reference.removeChild(chart);
    };
    // eslint-disable-next-line
  }, [suburls]);
  return <div ref={myRef}></div>;
};

export default D3Chart;
