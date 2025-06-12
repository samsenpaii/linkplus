"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
interface LinkProps {
  id: string;
  url: string;
  title: string;
  description: string;
  onDelete?: (url: string) => void; // Updated to use url
}



export default function Link({ id, url, title, description, onDelete }: LinkProps) {



  let hostname = "Unknown";
  try {
    const link = new URL(url);
    hostname = link.hostname;
  } catch (err) {
    console.error("Invalid URL:", url);
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=100x100`;

  const [copyStatus, setCopyStatus] = useState("");

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus("URL copied!");
    } catch (err) {
      setCopyStatus("Failed to copy URL");
    }
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const copyQrImageToClipboard = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopyStatus("QR code copied!");
    } catch (err) {
      setCopyStatus("Failed to copy QR");
    }
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const deleteLink = async () => {
  if (!confirm("Are you sure you want to delete this link?")) return;

  try {
    const response = await fetch("/api/getLinkDetails", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (data.success) {
      setTimeout(() => {
        location.reload(); // Refresh page after 2 seconds
      }, 1000);
    } else {
      setCopyStatus(data.error || "Failed to delete link");
      setTimeout(() => setCopyStatus(""), 2000);
    }
    } catch (err) {
      console.error("Delete error:", err);
      setCopyStatus("Failed to delete link");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="grid grid-cols-[48px_1fr] gap-2.5 p-2 hover:bg-amber-50 rounded-sm cursor-pointer font-sans">
          <div className="bg-[#F6F5F4] h-12 w-12 rounded-sm"></div>
          <div className="text-left">
            <h1 className="text-lg text-blue-600 hover:underline truncate">
              {title || "Untitled"}
            </h1>
            <p className="text-sm text-[#797979] truncate">{url}</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline"
            >
              {title || "Untitled"}
            </a>
          </DialogTitle>
          <DialogDescription className="text-[#183130] font-sans">
            {description || "No description available"}
          </DialogDescription>

          <div className="flex flex-col gap-4 mt-2">
            <p className="text-sm text-neutral-600">
              Hostname: <span className="font-medium">{hostname}</span>
            </p>

            <div className="flex items-center gap-4 mt-1">
              <img
                src={qrUrl}
                alt={`QR code for ${hostname}`}
                className="w-[100px] h-[100px] border border-gray-200 rounded-sm"
              />
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyQrImageToClipboard}
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy QR
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyUrlToClipboard}
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy URL
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={deleteLink}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Link
                </Button>
              </div>
            </div>
            {copyStatus && (
              <p
                className={`text-xs mt-1 ${
                  copyStatus.includes("Failed")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {copyStatus}
              </p>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}