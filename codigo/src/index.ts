class Pessoa {
    nome: string;
    email: string;
    nasc: string;

    constructor(nome: string, email: string, nasc: string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    // Função para imprimir os dados
    imprimir(): void {
        console.log("Nome: " + this.nome);
        console.log("e-Mail: " + this.email);
        console.log("Data Nasc.: " + this.nasc);
        console.log("Idade: " + this.idade(this.nasc) + " anos"); // Chamada correta da função idade
    }

    // Função para calcular a idade
    public idade(nasc: string): number { // Usando o tipo 'string' para o parâmetro nasc
        const hoje = new Date();
        const ano: number = parseInt(nasc.substring(6, 10));
        const mes: number = parseInt(nasc.substring(3, 5)) - 1; // Meses começam do 0 (Janeiro = 0)
        const dia: number = parseInt(nasc.substring(0, 2));
        const datan = new Date(ano, mes, dia);

        let idade: number = hoje.getFullYear() - datan.getFullYear();
        const m: number = hoje.getMonth() - datan.getMonth();

        // Ajustando caso ainda não tenha feito aniversário no ano atual
        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
            idade--;
        }

        return idade;
    }
}

class DataUtil {
    static isBissexto(ano: number) {
    if (ano % 400 == 0){
    return true;
    } else if (ano % 4 == 0 && ano % 100 != 0){
    return true;
    }
    return false;
    }
    }
    
const cliente = new Pessoa("Seu nome", "Seu email", "DD/MM/AAAA");
cliente.imprimir();
