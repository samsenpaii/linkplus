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



export default function Link({ id, url, title, description }) {
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
        <DialogDescription>
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
            </div>
          </div>
        {copyStatus && (
          <p className="text-xs text-green-600 mt-1">{copyStatus}</p>
        )}
      </div>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
