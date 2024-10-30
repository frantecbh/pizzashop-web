import { Pie, PieChart } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { BarChart } from 'lucide-react'

import colors from 'tailwindcss/colors'

const data = [
  { product: 'Peperoni', amount: 40, fill: 'var(--color-peperoni)' },
  { product: 'Mussarela', amount: 30, fill: 'var(--color-mussarela)' },
  { product: 'Calabresa', amount: 20, fill: 'var(--color-calabresa)' },
  { product: 'Bacon', amount: 60, fill: 'var(--color-bacon)' },
  { product: 'Catupiri', amount: 25, fill: 'var(--color-catupiri)' },
]
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  peperoni: {
    label: 'Peperoni',
    color: colors.sky[500],
  },
  mussarela: {
    label: 'Mussarela',
    color: colors.amber[500],
  },
  calabresa: {
    label: 'Calabresa',
    color: colors.violet[500],
  },
  bacon: {
    label: 'Bacon',
    color: colors.emerald[500],
  },
  catupiri: {
    label: 'Catupiri',
    color: colors.rose[500],
  },
} satisfies ChartConfig

export const PopularProductsCharts = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular mais vendidos
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="products"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
