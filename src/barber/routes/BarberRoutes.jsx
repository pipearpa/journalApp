import { BarberPage } from "../pages/BarberPage"
import { Navigate, Route, Routes } from "react-router-dom"



export const BarberRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={ <BarberPage /> } />

            <Route path="/*" element={<Navigate to="" />} />

           


        </Routes>
    )
}
