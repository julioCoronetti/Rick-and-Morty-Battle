import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { Characters } from "./pages/Characters"
import { Battle } from "./pages/Battle"
import { DefaultLayout } from "./layouts"
import { Generate } from "./pages/Generate"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/history" element={<History />} />
                <Route path="/battle" element={<Battle />} />
            </Route>
        </Routes>
    )
}