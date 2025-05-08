import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { LayoutContainer } from "./styles"

export const DefaultLayout = () => {
    return (
        <LayoutContainer>
            <Navigation />
            <Outlet />
        </LayoutContainer>
    )
}