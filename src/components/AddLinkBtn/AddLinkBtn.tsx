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

export default function AddLinkBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 rounded-sm flex items-center justify-center text-[#F6F5F4] hover:cursor-pointer hover:bg-blue-400 font-sans">
          <PlusIcon />
          <div className="pr-1 pl-1">Add link</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-sans bg-[#FEFEFF]">
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
              defaultValue="https://google.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
