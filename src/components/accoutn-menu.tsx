import { Building, ChevronDown, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator  } from "./ui/dropdown-menu"


export const AccoutMenu = () => {
  return (
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          Pizza Shop
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
            <span>Francisco Menezes</span>
            <span className="text-xs font-normal text-muted-foreground">franciscomenezesbh@gmail.com</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="size-4 mr-2" />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="size-4 mr-2" />
          <span>sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
   </DropdownMenu>
  )
}
