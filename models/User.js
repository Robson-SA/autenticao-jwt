import bcrypt from 'bcrypt';

const bcrypt = bcrypt();

class User{
    constructor(id, nome, contato, dataNascimento, login, senha){
        this.id = id;
        this.nome = nome;
        this.contato = contato;
        this.dataNascimento = dataNascimento;
        this.login = login;
        this.senha = bcrypt.hashSync(senha, 10);
    };

    toJSON(){
        return {
            id: this.id,
            nome: this.nome,
            contato: this.contato,
            dataNascimento: this.dataNascimento,
            login: this.login
        };
    }

    validar(){
        if(!this.nome || typeof this.nome !== "string"){
            throw new Error("Nome é obrigatório");
        }
        if(!this.login || typeof this.login !== "string"){
            throw new Error("login é obrigatório");
        }
        if(!this.senha || typeof this.senha !== "string"){
            throw new Error("senha é obrigatório");
        }
        
    }

}

export default User;


