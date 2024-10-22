import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react"
import { Helmet } from "react-helmet-async"


export const Orders = () => {
  return (
   <>
    <Helmet title="Pedidos"  />
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    </div>
    <div className="space-y-2.5">
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="Nome do cliente" className="h-8 w-80"/>
      </form>
      <div className="border rounded-md">
      <Table>
        <TableHeader>
            <TableRow>
              <TableHead className="w-16"></TableHead>
              <TableHead className="w-36">Identificador</TableHead>
              <TableHead className="w-44">Realizado há</TableHead>
              <TableHead className="w-36">Status</TableHead>
              <TableHead className="">Cliente</TableHead>
              <TableHead className="w-36">Total do pedido</TableHead>
              <TableHead className="w-40"></TableHead>
              <TableHead className="w-32"></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
         {
          Array.from({length: 10}).map((_, i) => (
            <TableRow key={i}>
            <TableCell>
              <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do Pedido</span>
              </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">asfdasdfsa</TableCell>
            <TableCell className="text-muted-foreground">há 15 min</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-primary-foreground">Pendnete</span>
              </div>
            </TableCell>
            <TableCell className="font-medium">Francisco Menezes</TableCell>
            <TableCell className="font-medium">
              R$ 149,99
            </TableCell>
            <TableCell>
              <Button variant="outline" size="xs">
                Aprovar
                <ArrowRight className="h-3 w-3 mr-2" />
              </Button>
            </TableCell>
            <TableCell>
            <Button variant="ghost" size="xs">
                <X className="h-3 w-3 mr-2" />
                Cancelar
              </Button>
            </TableCell>
          </TableRow>
          ))
         }
        </TableBody>
      </Table>
      </div>
    </div>
   </>
  )
}
