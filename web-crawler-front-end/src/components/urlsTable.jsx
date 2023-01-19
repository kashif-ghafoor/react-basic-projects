import BasicTable from "./common/BasicTable";
import { Link } from "react-router-dom";
import DeleteURL from "./deleteURL";

const URLsTable = ({ paginated, URLs, onURLsChange }) => {
  const columns = [
    {
      key: "url",
      content: (url) => (
        <Link
          to={`/${encodeURIComponent(url)}`}
          style={{ textDecoration: "none" }}
        >
          {url}
        </Link>
      ),
    },
    {
      key: "delete",
      content: (url) => (
        <DeleteURL url={url} onURLsChange={onURLsChange} URLs={URLs} />
      ),
    },
  ];
  return (
    <div>
      <BasicTable URLs={paginated} columns={columns} />
    </div>
  );
};

export default URLsTable;
