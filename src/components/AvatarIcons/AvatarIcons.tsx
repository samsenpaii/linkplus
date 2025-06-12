import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Avataricons() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        
        <Avatar>
          <AvatarImage src="https://github.com/vedant-inamdar.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/kulkarni-soham.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit"/>
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/samsenpaii.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
