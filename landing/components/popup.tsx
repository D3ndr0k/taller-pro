"use client";
import { PopupButton } from "@typeform/embed-react";
import { ReactNode } from "react";

interface PopupProps {
  title?: string;
  className?: string;
  children?: ReactNode;
}

export const Popup = ({ title, className, children }: PopupProps) => {
  return (
    <PopupButton id="yQtoTAlO" className={className}>
      {children || title}
    </PopupButton>
  );
};
