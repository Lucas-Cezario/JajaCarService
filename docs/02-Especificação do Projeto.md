# Especificações do Projeto

A especificação  do projeto será feita da seguinte forma: diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

Marco Antônio da Silva Oliveira  tem 27 anos, é Mecânico há 3 anos . Pensa em se desenvolver profissionalmente através de um curso técnico e pensa em ter sua própria oficina, é solteiro e  gosta de sair com amigos nos fins de semana. Está pensando em  fazer faculdade de engenharia mecânica.


André Luiz Madeira, conhecido como Jajá, tem 47  anos, é Mecânico Automotivo há 3 anos e é o dono da oficina. Pensa em desenvolver um sistema de automação para sua oficina, além de ter um site da qual ele possa divulgar melhor os serviços oferecidos pela empresa contendo também nesse site o ambiente de agendamento pelos clientes. Isso para que ele possa ter uma maior produtividade e permitir com que ele descanse mais, por estar cansado de anotar tudo no papel. Ele é casado  e  gosta de ir na igreja e fica com a família com amigos nos fins de semana. Está pensando em aumentar e ampliar sua oficina.


Mariana Fonseca Amaral tem 29 anos e é Arquiteta  há 5  anos . Pensa em se desenvolver profissionalmente através de um pós graduação e ter sua própria consultoria de arquitetura , é casada  e  gosta de sair com a família e filhos para o cinema nos fins de semana. ela é cliente da oficina a 3 anos gosta do  trabalho  feito lá mas acha que seria melhor atendida  se  tivesse um  sistema automatizado.


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

 Eu como Mariana Fonseca Amaral, necessito da validar o orçamento  para a execução da manutenção do veículo, 
 pois isso permitirá com que eu saiba exatamente que qual será o serviço prestado.
 
 Eu como Marco Antônio da Silva Oliveira necessito de uma base de dados para inserir, deletar, alterar e consultar o histórico de manutenção dos carros baseado na placa dos veículos, pois isso aumentaria minha produtividade e até mesmo identificar possíveis problemas crônicos existentes nos veículos.

 Eu como André Luiz Madeira, necessito de um controle de fluxo de caixa para inserir, deletar, alterar e consultar informações de entrada e saída de dinheiro na oficina, pois isso permitirá com que eu possa ter um controle maior dos meus gastos e alocar meus investimentos com uma maior assertividade. 
 
 Eu como André Luiz Madeira, necessito de um controle de estoque para inserir, deletar, alterar e consultar informações de entrada e saída produtos e ferramentas na oficina, pois isso permitirá com que eu possa ter um controle maior dos produtos e ferramentas existentes e comprá-las com antecedência.
 
 Eu como André Luiz Madeira, necessito  realizar um orçamento definido pelo grau de urgência  e necessidade de troca de cada peça do veículo  pois isso permitirá com que eu possa ter um controle maior da entrada e saída de veículos
 
  Eu como Mariana Fonseca Amaral, necessito de  inserir e consultar informações de entrada e saída do veículos, pois isso permitirá com que eu possa ter um acesso ao as informações do veiculos.
  

  


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Especificação |
|------|-----------------------------------------|----|-----------------------------|
|RF-001| Permitir que o mecânico cadastre as ordens de serviço. | ALTA | Através da tela de lista de agendamento o mecênico consegue registrar qual serviço será execultado | 
|RF-002| Permitir que os clientes tenham acesso a um site de apresentação da empresa.| ALTA  | Na tela de Quem somos o cliente tem acesso as informações a respeito da empresa |
|RF-003| Permitir que os clientes se cadastrem através do site da oficina.| ALTA  | Na tela de cadastro o usuário é capaz de realizar seu cadastro no site |
|RF-004| Realizar um agendamento pelos próprios clientes.| ALTA  | Após se cadastrar o cliente pode realizar um agendamento na tela de cadastrar agendamento |
|RF-004| Permitir gerenciar veículos e clientes pelo mecânico.| ALTA  | O mecânico através da tela de administrador pode gerenciar os clientes e seus respectivos veículos |
|RF-004| Realizar cadastro de carros pelos próprios clientes.| ALTA  | Após se cadastrar o cliente pode realizar um cadastro de veículo na tela de cadastrar carro |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel. | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O site deverá retornar um resultado ao pesquisar a placa do carro pelo mecânico. |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02|O projeto está restrito ao que foi especificado nas história dos usuários|
