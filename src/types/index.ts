export interface ToastOptions {
  position?:
    | "top-right"
    | "top-mid"
    | "top-left"
    | "bottom-right"
    | "bottom-mid"
    | "bottom-left";
  duration?: number;
  type?: "default" | "success" | "error";
}

export interface ToastProps {
  message: string;
  options?: ToastOptions;
}
