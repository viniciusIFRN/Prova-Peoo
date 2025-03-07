class Locacao {
    constructor(id,equipamento,cliente_nome,data_inicio,data_fim,valor_total,status){
        this.id = id
        this.nome = equipamento
        this.email = cliente_nome
        this.telefone = data_inicio
        this.endereco = data_fim
        this.data_nascimento = valor_total
        this.status = status
    }
}
export default Locacao;