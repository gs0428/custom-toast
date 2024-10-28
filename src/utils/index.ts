import { useToast } from "../store";
import { ToastOptions } from "../types";

export const toast = (message: string, options?: ToastOptions) => {
  const { setToast } = useToast.getState();
  setToast({ message, options });
};
