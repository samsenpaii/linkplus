"use client";
import { useState } from "react";
import PlusIcon from "@/components/icons/plusIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddLinkBtn() {
  const [url, setUrl] = useState("https://google.com");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/getLinkDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setResult(data);
        setUrl("");
        setTimeout(() => {
        location.reload(); // Refresh page after 2 seconds
      }, 1000); 
        setOpen(false);
        // Trigger refresh
      } else {
        setError(data.error || "Failed to fetch details");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 rounded-sm flex items-center justify-center text-[#F6F5F4] hover:cursor-pointer hover:bg-blue-400 font-sans">
          <PlusIcon />
          <div className="pr-1 pl-1">Add link</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-sans bg-[#FEFEFF]">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>Paste the link you want to save.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              Link
            </Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="col-span-3"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </div>
        <DialogFooter>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Processing..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}