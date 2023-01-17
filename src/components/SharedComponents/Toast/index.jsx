import { toast } from "react-hot-toast";

export const SucessToast = (props) => {
  toast(props.message, {
    icon: props.icon,
    style: {
      borderRadius: 40,
      fontSize: "0.9rem",
      color: "#FFF",
      background: "#168b25",
      maxHeight: 24,
    },
    duration: props.duration,
  });
};

export const ErrorToast = (props) => {
  toast(props.message, {
    icon: props.icon,
    style: {
      borderRadius: 40,
      fontSize: "0.9rem",
      background: "#da3838",
      color: "#ffd0d0",
      maxHeight: 24,
    },
    duration: props.duration,
  });
};
