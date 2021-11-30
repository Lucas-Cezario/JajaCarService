# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Os componentes que fazem parte da solução

![Componentes](https://user-images.githubusercontent.com/11560543/132949908-8fea0529-a91b-4c46-9006-99fe34a5451c.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim que o usuário entra no site, ele é apresentado à tela inicial (Home Page) onde é exibido as seguintes opções - página de cadastro, página de login, sobre e agendamento. 

Na Home Page será apresentado uma descrição da empresa e além disso o usuário poderá ter informação sobre os serviços que são oferecidos por ela. 

Na área de Cadastro o usuário será redirecionado para uma tela onde ele poderá criar a sua conta, já na página de 
Login o usuário poderá inserir suas credenciais para acessar o site.

Quando o usuário acessar o "Sobre" ele terá todo acesso para saber da história da Jajá Car Service e ter informações dos valores que ela segue. 

Na opção de agendamento o usuário poderá visualizar os horários e dias disponíveis para estar levando seu carro até a oficina mecânica.

Quando o usuário acessar área do cliente/Mecânico, na parte do cliente o usuário poderá acessar dados pessoais, fazer alterações, visualizar seus agendamentos e realizar cadastro de novos veículos, na parte de mecânico o usuário poderá acessar o histórico de manutenção do veículo, alterar informações e realizar pesquisas de usuários.



   ![FLUXOUSER](https://user-images.githubusercontent.com/11560543/133348905-f7cc2f7f-767d-49c8-88aa-b79bc1c27ded.jpeg)



## Tecnologias Utilizadas

Para o desenvolvimento do site serão utilizadas tecnologias web como: HTML, CSS, Javascript, e Bootstrap. Usaremos a IDE Visual Code para o desenvolvimento. Para o banco de dados utilizaremos SQL Server. 


## Hospedagem

A compra do domínio será feita através do registro com valor de 40 R$ anual e a hospedagem será feita através da SmarterASP.NET com o valor de $ 2.95 mensal.

https://registro.br

https://www.smarterasp.net
