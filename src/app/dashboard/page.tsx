import PlusIcon from "@/components/icons/plusIcon"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 rounded-sm p-1 flex gap-2 items-center justify-center text-[#F6F5F4] hover:cursor-pointer hover:bg-blue-400 font-sans">
          <PlusIcon />
          <div className="">Add link</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-sans">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>
            Paste the link you want to save.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Link
            </Label>
            <Input
              id="URL"
              placeholder="https://your-link.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
