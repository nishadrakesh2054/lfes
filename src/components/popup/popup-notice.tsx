"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type PopupNoticeData = {
  _id: string;
  image: {
    url: string;
    alt?: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
};

type PopupNoticeProps = {
  popupData: PopupNoticeData | null;
};

const PopupNotice = ({ popupData }: PopupNoticeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (popupData) {
      setIsOpen(true);
    }
  }, [popupData]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!mounted || !isOpen || !popupData) {
    return null;
  }

  const popupContent = (
    <div
      className="popup-notice-overlay"
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        className="popup-notice-content"
        style={{
          position: "relative",
          maxWidth: "600px",
          maxHeight: "80vh",
          width: "90%",
          backgroundColor: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1px",
            right: "1px",
            background: "rgba(0, 0, 0, 0.5)",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            color: "red",
            fontSize: "30px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
          }}
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Image */}
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={popupData.image.url}
            alt={popupData.image.alt || "Popup notice"}
            width={popupData.image.metadata?.dimensions?.width || 800}
            height={popupData.image.metadata?.dimensions?.height || 600}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              objectFit: "contain",
            }}
            unoptimized
          />
        </div>
      </div>
    </div>
  );

  return typeof window !== "undefined"
    ? createPortal(popupContent, document.body)
    : null;
};

export default PopupNotice;
