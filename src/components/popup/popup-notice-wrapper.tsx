"use client";
import React, { useEffect, useState } from "react";
import PopupNotice from "./popup-notice";

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

const PopupNoticeWrapper = () => {
  const [popupData, setPopupData] = useState<PopupNoticeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const response = await fetch("/api/popup-notice");
        const data = await response.json();
        if (data.popup) {
          setPopupData(data.popup);
        }
      } catch (error) {
        // Error handled silently
      } finally {
        setLoading(false);
      }
    };

    fetchPopup();
  }, []);

  if (loading || !popupData) {
    return null;
  }

  return <PopupNotice popupData={popupData} />;
};

export default PopupNoticeWrapper;
