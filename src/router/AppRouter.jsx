import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BarberRoutes } from "../barber/routes/BarberRoutes"


export const AppRouter = () => {
    return (
        <Routes>

            {/*login y registri*/}

            <Route path="/auth/*" element={<AuthRoutes />} />


            {/*BarberApp*/}

            <Route path="/*" element={ <BarberRoutes /> } />


        </Routes>
    )
}
