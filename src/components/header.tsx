import { Home, Pizza, UtensilsCrossed } from "lucide-react"
import { Separator } from "./ui/separator"
import { NavLink } from "./nav-link"


export const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
          <Pizza className="h-6 w-6" />
          <Separator orientation="vertical" className="h-6" />
          <nav className="flex items-center space-x-4 lg:space-x-6">
                <NavLink to="/">
                    <Home className="size-4" />
                    Inicio
                </NavLink>
                <NavLink to="/orders">
                    <UtensilsCrossed className="size-4" />
                    Pedidos
                </NavLink>
          </nav>
      </div>
    </div>
  )
}