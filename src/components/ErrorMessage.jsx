import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function ErrorMessage() {
  useEffect(() => {
    toast(
      "An error occurred. Please check your search criteria and try again !"
    );
  }, []);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default ErrorMessage;
