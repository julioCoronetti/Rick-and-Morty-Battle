import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { LayoutContainer } from "./styles"
import { Footer } from "../components/Footer"

export const DefaultLayout = () => {
    return (
        <LayoutContainer>
            <Navigation />
            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}