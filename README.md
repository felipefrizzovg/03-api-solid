# App

GymPass style app

## Rfs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar
- [X] Deve ser possível se autenticar
- [X] Deve ser possível obter os perfil de um usuário logado
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [X] Deve ser possível o usuário obter seu histórico de check-ins
- [] Deve ser possível obter o usuário logado buscar academias próximas
- [] Deve ser possível obter o usuário logado buscar academias pelo nome
- [X] Deve ser possível obter o usuário logado realizar check-in em uma academia
- [] Deve ser possível validar o check-in de um usuário
- [X] Deve ser possível cadastrar uma academia

## Rn (Regras de negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado
- [X] O usuário não pode fazer dois check-ins no mesmo dia
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O check-in só pode ser validado até 20min após criado
- [] O check-in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [X] Todas listas de dados precisam estar paginadas com 20 items por página
- [] O usuário deve ser identificado com um JWT (JSON Web Token)