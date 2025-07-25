"use client";
import { useEffect, ReactNode } from "react";

interface FormProps {
  children?: ReactNode;
  className?: string;
}

export default function Form({ children, className }: FormProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button
      type="button"
      className={className}
      data-tf-popup="01K0ZNPZRZ8FHBKYP3A50HS899"
      data-tf-iframe-props="title=Inscripción al Taller"
    >
      {children || "Inscribirse al Taller"}
    </button>
  );
}
