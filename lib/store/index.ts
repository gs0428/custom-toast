import { create } from "zustand";
import { ToastProps } from "../types";

interface ToastState {
  toast: ToastProps;
  setToast: (toast: ToastProps) => void;
}

export const useToast = create<ToastState>((set) => ({
  toast: { message: "", options: {} },
  setToast: (toast) => set({ toast }),
}));
