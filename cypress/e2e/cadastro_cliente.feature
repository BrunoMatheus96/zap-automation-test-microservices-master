            #language:pt

            Funcionalidade: Cadastro
            Como time de tecnologia
            Quero executar as requisições do microserviço Cadastro de cliente
            Para validar o contrato descrito no swagger.

            @Smoketest 
            Esquema do Cenário: Cadastro de usuário (Fluxos de sucesso) - 1
            Dado que a pessoa não possui uma conta na Herupu
            Quando realizar a requisição da URL "/Client/create" para criação de uma conta na Herupu informando nome <nome>, email <email>, data de nascimento <ndata>, codigo pessoa <cpf>, zip code <zip_code>
            Então o sistema deve retornar um status code 200
            E validar o response body de Cadastro de usuário

            Exemplos:
            | nome                          | email                        | ndata                    | cpf           | zip_code |
            | "Bruno Matheus Stefano Leite" | "brunolechon2008@gmmai.com"  | "1996-02-02T04:06:29.63" | "46966151890" | "123"    |
            | "DANILLO LIMA CAETANO"        | "danilo.caetano@gmmai.com"   | "2000-03-02T04:06:29.63" | "97116085025" | "200"    |
            | "ELISANDRO LERMEN"            | "elisandro.lamen8@gmmai.com" | "1984-10-02T04:06:29.63" | "23693994064" | "1234"   |
            | "GABRIEL SAYEG LUISI"         | "gabriel.luisi@gmmai.com"    | "1994-04-28T04:06:29.63" | "46946345002" | "0001"   |

            @Smoketest
            Esquema do Cenário: Atualização de usuário (Fluxos de sucesso) - 2
            Dado que o cliente já está cadastrado 
            Mas quer alterar um dos dados cadastrados
            Quando realizar a requisição da URL "/Client/update" para alteração de uma conta na Herupu informando nome <nome>, email <email>, data de nascimento <ndata>, codigo pessoa <cpf>, zip code <zip_code>
            Então o sistema deve retornar um status code 200
            E validar o response body de atualização de usuário

            Exemplos:
            | nome                   | email                        | ndata                    | cpf           | zip_code |
            | "Bruno M S Leite"      | "brunolechon2008@gmmai.com"  | "1996-02-02T04:06:29.63" | "46966151890" | "123"    |
            | "DANILLO LIMA CAETANO" | "danilocaetano@gmmai.com"    | "2000-03-02T04:06:29.63" | "97116085025" | "200"    |
            | "ELISANDRO LERMEN"     | "elisandro.lamen8@gmmai.com" | "1974-10-02T04:06:29.63" | "23693994064" | "1234"   |
            | "GABRIEL SAYEG LUISI"  | "gabriel.luisi@gmmai.com"    | "1994-04-28T04:06:29.63" | "50046345002" | "0001"   |

@Smoketest
Cenário: Busca de clientes (Fluxos de sucesso) - 3
Dado que temos usuários já cadastrados na Herupu
Quando realizar a requisição da URL "/Client/list" para a busca da lista dos clientes
Então o sistema deve retornar um status code 200
E validar o response body de busca de usuário

@Smoketest
Cenário: Busca de clientes (Fluxos de sucesso) - 4
Dado que temos usuários já cadastrados na Herupu
E queremos buscar um usuário específico pelo id
Quando realizar a requisição da URL "/Client/47" para a busca da lista dos clientes pelo id
Então o sistema deve retornar um status code 200
E validar o response body de busca de usuário pelo id

@Smoketest
Cenário:Exclusão de clientes (Fluxos de sucesso) - 5
Dado que o usuário se cadastrou na Herupu
Quando realizar a requisição da URL "/Client/" para excluir o usuário pelo id
Então o sistema deve retornar um status code 200