import { Helmet } from 'react-helmet-async'
import { CardReceitaMensal } from './receita-mensal-card'
import { CardTotalPedidosMes } from './total-pedidos-mes-card'
import { CardTotalPedidosDia } from './total-pedidos-dia-card'
import { CardTotalPedidosCanceladosMes } from './total-pedidos-cancelados-mes'
import { RevenueChart } from './revenue-chart'
import { PopularProductsCharts } from './popular-products-charts'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <CardReceitaMensal />
          <CardTotalPedidosMes />
          <CardTotalPedidosDia />
          <CardTotalPedidosCanceladosMes />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsCharts />
        </div>
      </div>
    </>
  )
}
