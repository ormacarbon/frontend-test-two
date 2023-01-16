import { useSnackbar } from "react-simple-snackbar";

function useCustomSnackbar() {
  const options = {
    position: "top-center",
    style: {
      backgroundColor: "midnightblue",
      border: "2px solid lightgreen",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };

  const [openSnackbar] = useSnackbar(options);

  function openCustomSnackbar(message) {
    openSnackbar(message);
  }

  return { openCustomSnackbar };
}

export default useCustomSnackbar;
