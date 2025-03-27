import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { DefaultLayout } from "./layout/DefaultLayout"
import { Favorites } from "./pages/Favorites"
import { Battle } from "./pages/Battle"
import { Teams } from "./pages/Teams"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/battle" element={<Battle />} />
            </Route>
        </Routes>
    )
}