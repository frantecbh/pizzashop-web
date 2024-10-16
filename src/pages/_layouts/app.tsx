
import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
    <Header />
      <div className='flex-1 flex flex-col gap-4 p-8 pt-6'>
        <Outlet />
      </div>
    </div>
  )
}
