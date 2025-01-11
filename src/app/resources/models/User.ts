export class User {
    public id: number;
    public name: string;
    public email: string;
    public senha: string;
    public tipo: string;

    constructor(id: number = 0, name: string = '', email: string = '', senha: string = '', tipo: string = '') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
    }
}
