import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import FavoritosProvider from "Contextos/Favoritos"
import { Outlet } from "react-router-dom"


const PaginaBase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
export default PaginaBase;