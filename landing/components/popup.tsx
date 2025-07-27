"use client";
import { PopupButton } from "@typeform/embed-react";

interface PopupProps {
  title?: string;
  className?: string;
  children?: any;
}

export const Popup = ({ title, className, children }: PopupProps) => {
  return (
    <PopupButton id="yQtoTAlO" className={className}>
      {children || title}
    </PopupButton>
  );
};
