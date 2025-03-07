create table Equipamento (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(300) not null,
    descricao text,
    categoria varchar(50) not null,
    status enum(ENUM: 'Disponível', 'Alugado', 'Manutenção') DEFAULT 'Manutenção',
    preco_diaria decimal(DECIMAL(10,2)) not null
);

create table locacao (
    id int AUTO_INCREMENT PRIMARY KEY,
    Equipamento_id (INT, FK → Equipamento)
    cliente_nome (VARCHAR(100)) not null,
    data_inicio (DATE) not null,
    data_fim (DATE) not null,
    valor_total (DECIMAL(10,2)) not null,
    status enum(ENUM: 'Ativa', 'Encerrada') DEFAULT 'Encerrada'
)