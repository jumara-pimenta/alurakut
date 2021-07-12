import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "jumara-pimenta";
  const pessoasFavoritas = [
  'allanina', 
  'simaraconceicao', 
  'padumaciel', 
  'patbarnabe', 
  'DianaMartine', 
  'RaissaMariaB'
]

  return (
    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
            </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRealtionsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`}/>
                  <span>{itemAtual}</span>
                </a>
              )              
            })}
            </ul>

          </ProfileRelationsBoxWrapper>
 
        </div>
      </MainGrid>
    </>
  );
}
