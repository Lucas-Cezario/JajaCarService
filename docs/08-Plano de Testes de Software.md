# Plano de Testes de Software

## Objetivos

Identificar informações de projeto existentes e os componentes de software que devem ser testados.
Listar os Requisitos a Testar.
Descrever as estratégias de teste a serem empregadas.
Listar os elementos resultantes do projeto de testes.

## Requisitos a Testar

- **Teste do Banco de Dados**

| Ação a Ser   Executada                                                                                       | Resultado Esperado                                                                           |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Verifique que as informações do usuário   podem ser cadastradas, consultadas, atualizadas e removidas.       | As informações do usuário serão cadastradas, consultadas, atualizadas e   removidas.         |
| Verifique que as informações dos   funcionários podem ser inseridas, atualizadas e consultadas ou removidas. | As informações dos funcionários serão inseridas, atualizadas e   consultadas ou removidas.   |
| Verifique que o sistema pode criar,   cadastrar, atualizar e remover um novo cliente de seu banco de dados.  | O sistema criará, cadastrará, atualizará e removerá um novo cliente de   seu banco de dados. |

- **Teste Funcional**

| Ação a ser   executada                                                                                       | Resultado Esperado                                                                               |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Verifique que qualquer usuário pode   acessar sua própria conta através de login e senha                     | Qualquer usuário poderá acessar sua própria conta através de login e   senha                     |
| Verifique que o mecânico pode acessar sua   própria conta com acesso administrativo através de login e senha | O mecânico poderá acessar sua própria conta com acesso administrativo   através de login e senha |


- **Teste da Interface do Usuário**

| Ação a ser   executada                                                                                                                      | Resultado Esperado                                                                                                   |
|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Navegue através de todas as telas,   verificando que cada tela de interface gráfica pode ser rapidamente entendida   e facilmente utilizada | Cada tela de interface gráfica poderá ser rapidamente entendida e   facilmente utilizada                             |
| Verifique que toda ajuda online funciona                                                                                                    | Toda ajuda online funcioná                                                                                           |
| Verifique que todas as palavras e   expressões apresentadas estão em conformidade com as devidas normas   sintáticas e gramaticais          | Todas as palavras e expressões apresentadas estarão em conformidade com   as devidas normas sintáticas e gramaticais |


- **Teste de Segurança e de Controle de Acesso**

| Ação a ser   executada                                                                                                             | Resultado Esperado                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Verificar que usuários não cadastrados   não podem acessar informações restritas aos cadastrados                                   | Os usuários não cadastrados não podeão acessar informações restritas aos   cadastrados                               |
| Verificar que os usuários do sistema   podem acessar apenas as funcionalidades e dados associados ao seu próprio   tipo de usuário | Os usuários do sistema poderão acessar apenas as funcionalidades e dados   associados ao seu próprio tipo de usuário |
| Verifique que todas as palavras e   expressões apresentadas estão em conformidade com as devidas normas   sintáticas e gramaticais | Todas as palavras e expressões apresentadas estarão em conformidade com   as devidas normas sintáticas e gramaticais |

- **Teste de Função**

| Ação a ser   executada                                                                                                         | Resultado Esperado                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Garantir a funcionalidade apropriada do   alvo do teste, incluindo navegação, entrada de dados, processamento, e   recuperação | A funcionalidade apropriada do alvo do teste, incluindo navegação,   entrada de dados, processamento, e recuperação deverá ser garantida |
| Executar história do usuário usando dados   válidos e inválidos                                                                | Os resultados esperados ocorrem quando dados válidos são usados                                                                          |
| As mensagens de erro ou aviso apropriadas   são exibidas quando dados inválidos são usados                                     | As mensagens de erro ou aviso apropriadas serão exibidas quando dados   inválidos são usados                                             |
| Cada regra de negócio é aplicada   apropriadamente                                                                             | Cada regra de negócio será aplicada apropriadamente                                                                                      |


- **Teste da Interface do Usuário**

| Ação a ser   executada                                                                                           | Resultado Esperado                                                                                              |
|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| A navegação através dos alvos de teste   reflete as funções e os requisitos do negócio apropriadamente           | A navegação através dos alvos de teste refletirá as funções e os   requisitos do negócio apropriadamente        |
| Objetos e características da janela, tais   como menus, tamanho, posição, estado e foco conformam-se aos padrões | Objetos e características da janela, tais como menus, tamanho, posição,   estado e foco conformarão aos padrões |
| Criar ou modificar os testes para cada   janela                                                                  | verificar a navegação e os estados de objeto apropriados para cada janela   e objetos da aplicação              |


- **Segurança do Nível de Aplicação**

| Ação a ser   executada                                                                                                                | Resultado Esperado                                                                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Verifique que o usuário do sistema  possa acessar apenas aquelas funções ou   dados para os quais o seu tipo de usuário tem permissão | o usuário do sistema poderá acessar apenas aquelas funções ou dados para   os quais o seu tipo de usuário tem permissão |


- **Segurança do Nível de Sistema**

| Ação a ser   executada                                                                                    | Resultado Esperado                                                                          |
|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Verifique que apenas aqueles   usuários  com acesso ao sistema e   aplicações têm permissão de acessá-los | Apenas aqueles usuários  com acesso   ao sistema e aplicações terão permissão de acessá-los |


- **Segurança do Nível de Aplicação**

| Ação a ser   executada                                                                                 | Resultado Esperado                                                                                        |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Identifique e liste cada tipo de usuário   e as funções ou dados para os quais cada tipo tem permissão | Identificará e listará cada tipo de usuário e as funções ou dados para os   quais cada tipo tem permissão |
| Crie testes para cada tipo de usuário                                                                  | Verifique cada permissão criando transações específicas para cada tipo de   usuário                       |
| Modifique o tipo de usuário e repita os   testes para os mesmos usuários                               | Em cada caso, verifique que funções ou dados adicionais estão   corretamente disponíveis ou negados       |

- **Teste de Integridade de Dados do Banco de Dados.**

| Ação a ser   executada                                                                                                                                                                                                                                                    | Resultado Esperado                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Garantir que os métodos e processos de   acesso ao banco de dados funcionam apropriadamente e sem corrupção dos dados                                                                                                                                                     | Garantirá que os métodos e processos de acesso ao banco de dados   funcionarão apropriadamente e sem corrupção dos dados                                                                                                 |
| Invocar cada método e processo de acesso   ao banco de dados, alimentando cada um com dados ou requisições de dados   válidos e inválidos                                                                                                                                 | Invocará cada método e processo de acesso ao banco de dados, alimentando   cada um com dados ou requisições de dados válidos e inválidos                                                                                 |
| Inspecionar o banco de dados para   garantir que os dados foram criados como pretendido, que todos os eventos do   banco de dados ocorreram apropriadamente, ou revisar os dados retornados para   garantir que os dados corretos foram recuperados pelas razões corretas | Os dados foram criados como pretendido, que todos os eventos do banco de   dados ocorreram apropriadamente, ou revisar os dados retornados para garantir   que os dados corretos foram recuperados pelas razões corretas |











