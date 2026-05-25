"use client";

import { Download } from "lucide-react";
import { site } from "@/data/portfolio";

export default function ResumeDownloadLink({
  children,
  className = "",
  showIcon = false,
  iconClassName = "h-4 w-4 shrink-0 text-accent",
  onDownloadStart,
}) {
  async function handleDownload(e) {
    e.preventDefault();
    onDownloadStart?.();

    try {
      const response = await fetch(site.resumeDownloadUrl);

      if (!response.ok) {
        throw new Error("Resume download failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = site.resumeFileName;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {
      window.location.assign(site.resumeUrl);
    }
  }

  return (
    <a
      href={site.resumeDownloadUrl}
      onClick={handleDownload}
      className={className}
      aria-label="Download resume PDF"
    >
      {showIcon && <Download className={iconClassName} aria-hidden />}
      {children}
    </a>
  );
}
