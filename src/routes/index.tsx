import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext} from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    const {setDrawerOptions} = useAppDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                label: 'Página Inicial',
                path: '/pagina-inicial'
            },
            
        ]);
    }, [setDrawerOptions]);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}