export interface ToastOptions {
  position?:
    | "top-right"
    | "top-mid"
    | "top-left"
    | "bottom-right"
    | "bottom-mid"
    | "bottom-left";
  duration?: number;
  type?: "success" | "error" | "info";
}

export interface ToastProps {
  message: string;
  options?: ToastOptions;
}
