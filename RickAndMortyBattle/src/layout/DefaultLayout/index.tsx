import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'


export function DefaultLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}