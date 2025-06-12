import { AlertCircleIcon} from "lucide-react"

import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertMessage() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Refresh the page to see updates</AlertTitle>
      </Alert>
    </div>
  )
}
