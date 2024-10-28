"use client";

import React, { useEffect, useRef } from "react";
import { useToast } from "../store";
import "../styles/index.css";

export const Toast = () => {
  const { toast, setToast } = useToast();
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toast.message && toastRef.current) {
      toastRef.current.classList.add(
        "show",
        toast.options?.type || "success",
        toast.options?.position || "top-right"
      );

      if (toast.options?.duration) {
        toastRef.current.style.animationDuration = `${toast.options.duration}ms`;
      }
      const timer = setTimeout(() => {
        if (toastRef.current) {
          toastRef.current.classList.remove(
            "show",
            toast.options?.type || "success",
            toast.options?.position || "top-right"
          );
        }
        setToast({ message: "", options: {} });
      }, toast.options?.duration || 1500);

      return () => clearTimeout(timer);
    }
  }, [toast.message, setToast]);

  return (
    <div ref={toastRef} id="toast">
      {toast.message}
    </div>
  );
};
