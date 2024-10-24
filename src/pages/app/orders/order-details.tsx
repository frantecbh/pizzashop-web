import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: asdlfjasldfjlsakjflsad</DialogTitle>
        <DialogDescription>Datalhes do Pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                  Pendnete
                </span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  Francisco Menezes
                </span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Contato</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  (31)-99999-9999
                </span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  franciscomenezesbh@gmail.com
                </span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  há 3 minutos
                </span>
              </div>
            </TableCell>
          </TableRow>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza a Moda Gigante</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">R$ 10,00</TableCell>
              <TableCell className="text-right">R$ 30,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza a Mussarela</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">R$ 10,00</TableCell>
              <TableCell className="text-right">R$ 30,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className="text-right font-medium">R$ 60,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
