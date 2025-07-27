"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

declare global {
  interface Window {
    typeformEmbed?: {
      makePopup: (id: string, opts?: any) => { open: () => void };
    };
  }
}

interface FormProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

export default function Form({ children, className, title }: FormProps) {
  const popup = useRef<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.typeformEmbed) {
        popup.current = window.typeformEmbed.makePopup(
          "01K0ZNPZRZ8FHBKYP3A50HS899",
          {
            mode: "popup",
            iframeProps: { title: title || "Formulario" },
          }
        );
        setReady(true);
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [title]);

  const handleClick = () => {
    console.log("click en botón, popup:", popup.current);
    if (popup.current) {
      popup.current.open();
    } else {
      alert("Formulario no listo");
    }
  };

  return (
    <button className={className} disabled={!ready} onClick={handleClick}>
      {children || "Inscribirse al Taller"}
    </button>
  );
}
