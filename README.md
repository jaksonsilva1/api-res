
Instalar  as dependencias 
### npm install

Criar a base de dados no banco de dados MySQL, necessário ter o MySQL instalado na máquina e rodando.
### CREATE DATABASE db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Alterar as credenciais do banco de dados no arquivo ".env" 

Executar as migrations
### npx sequelize-cli db:migrate

Executar o projeto
### node app.js

Criar o arquivo package
### npm init

Criar a base de dados
### CREATE DATABASE bd CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript 
### npm install --save sequelize

drive do banco de dados
### npm install --save mysql2

 arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Executar o projeto
### node app.js

Manipular variáveis 
### npm install --save dotenv

migration
### npx sequelize-cli migration:generate --name create-users

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados.
### npx sequelize-cli db:migrate:undo --name nome-da-migration

Criar a Models users
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,image:string