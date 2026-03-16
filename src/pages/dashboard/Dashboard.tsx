import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

interface IDashBoardPaginaProps {
  children?: React.ReactNode;
}

export const Dashboard: React.FC<IDashBoardPaginaProps> = ({children}) => {
    return (
        <LayoutBasePagina 
        titulo="Página Inicial" 
        barraDeFerramentas={(
            <FerramentasDaListagem
                mostrarInputBusca
                textoBotaoNovo='nova'
            />
        )}>
        </LayoutBasePagina>
    );
};