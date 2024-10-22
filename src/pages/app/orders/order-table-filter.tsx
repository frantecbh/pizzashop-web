import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, X } from 'lucide-react'


export const OrderTalbeFilter = () => {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto"/>
      <Input placeholder="Nome Cliente" className="h-8 w-80"/>
      <Select defaultValue='all'>
        <SelectTrigger className='h-8 w-28 '>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>Todos</SelectItem>
          <SelectItem value='pending'>Pendente</SelectItem>
          <SelectItem value='canceled'>Cancelado</SelectItem>
          <SelectItem value='processing'>Em preparo</SelectItem>
          <SelectItem value='delivering'>Em entrega</SelectItem>
          <SelectItem value='delivred'>Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button type='submit' variant="secondary" size="xs">
        <Search className='w-4 h-4 mr-2' />
        Filtrar buscas
      </Button>
      <Button type='button' variant="outline" size="xs">
        <X className='w-4 h-4 mr-2' />
       Limpar Filtros
      </Button>
  </form>
  )
}
