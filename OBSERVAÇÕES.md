Localização dos requisitos:
    - Botão de alternar o tema entra claro e escuro => { NAVBAR }
    - useContext => { NAVBAR / LAYOUT - Usado com o ThemeProvider do Styled Components para fazer a troca do tema }
    - useState => { usado principalmente no arquivo characters.js, guardando o estado das informações passadas para ele na requisição à API, e também em alguns componentes como NAVBAR e FILTER BUTTON }
    - useEffect => { foi usado para controlar o fetch da requisição à API, no arquivo characters.js  }
    - API utilizada => { The rick and morty API }
    - 3 Páginas navegáveis => { HOME, ABOUT, Characters. Todas presentes na navbar }
    - Items por requisição => { 20 items por requisição na página characters }


Pacotes externos usados no projeto:
    . React-Paginate => { usado para fazer a paginação }
    - React-Debounce-Input => { usado para inserir delay no Input de Seach }
    - React-Switch => { Implementa um switch(Botão) para usar como seletor de tema }
    