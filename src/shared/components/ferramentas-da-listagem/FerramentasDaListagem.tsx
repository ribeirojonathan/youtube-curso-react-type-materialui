import { Padding } from "@mui/icons-material";
import { Paper, TextField, Box, Button, useTheme, Icon } from "@mui/material";
import {  } from "@mui/material";

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDaBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({ 
    textoDaBusca = '', 
    mostrarInputBusca = false, 
    aoMudarTextoDaBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo = () => {}
 }) => {
    const theme = useTheme();
    return (
        <Box 
            height={theme.spacing(5)}
            padding={1} 
            gap={1}
            marginX={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            component={Paper}
        >

            {mostrarInputBusca &&(
                <TextField 
                size="small"
                placeholder="Pesquisar..."
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
                />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    );
};