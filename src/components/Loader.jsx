import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "200px" }}
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#473192"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
