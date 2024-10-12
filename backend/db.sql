-- Criação do banco de dados para o sistema de votação
CREATE DATABASE IF NOT EXISTS sistema_votacao;

-- Selecionar o banco de dados para uso
USE sistema_votacao;

-- Criação da tabela de partidos
CREATE TABLE partidos (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único do partido
    nome VARCHAR(100) NOT NULL,                  -- Nome do partido
    sigla VARCHAR(10) NOT NULL,                  -- Sigla do partido
    numero_registro INT NOT NULL UNIQUE           -- Número de registro do partido
);

-- Criação da tabela de candidatos
CREATE TABLE candidatos (
    id INT AUTO_INCREMENT PRIMARY KEY,              -- Identificador único do candidato
    nome VARCHAR(100) NOT NULL,                      -- Nome do candidato
    partido_id INT NOT NULL,                         -- ID do partido (chave estrangeira)
    numero_candidato INT NOT NULL UNIQUE,            -- Número do candidato
    FOREIGN KEY (partido_id) REFERENCES partidos(id) ON DELETE CASCADE -- Chave estrangeira
);

-- Inserção de dados na tabela de partidos
INSERT INTO partidos (nome, sigla, numero_registro) VALUES
('Partido A', 'PA', 123456),
('Partido B', 'PB', 234567),
('Partido C', 'PC', 345678),
('Partido D', 'PD', 456789);

-- Inserção de dados na tabela de candidatos
INSERT INTO candidatos (nome, partido_id, numero_candidato) VALUES
('Candidato 1', 1, 1001),
('Candidato 2', 1, 1002),
('Candidato 3', 2, 2001),
('Candidato 4', 2, 2002),
('Candidato 5', 3, 3001),
('Candidato 6', 4, 4001);
