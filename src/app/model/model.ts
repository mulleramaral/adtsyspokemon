export class Model {
    clima: Clima;
    pokemon: Pokemon;
    GetTipoPokemon(): string {
        if (this.clima.chovendo === 'Sim') {
            return 'electric';
        }
        if (this.clima.temperatura < 5) {
            return 'ice';
        }
        if (this.clima.temperatura >= 5 && this.clima.temperatura < 10) {
            return 'water';
        }
        if (this.clima.temperatura >= 12 && this.clima.temperatura < 15) {
            return 'grass';
        }
        if (this.clima.temperatura >= 15 && this.clima.temperatura < 21) {
            return 'ground';
        }
        if (this.clima.temperatura >= 23 && this.clima.temperatura < 27) {
            return 'bug';
        }
        if (this.clima.temperatura >= 27 && this.clima.temperatura <= 33) {
            return 'rock';
        }
        if (this.clima.temperatura > 33) {
            return 'fire';
        }
        return 'normal';
    }
}

export class Clima {
    idcondicao: number;
    temperatura: number;
    chovendo: string;
    clima: string;
    descricao: string;
    icone: string;
}

export class Pokemon {
    nome: string;
    detalhes = new DetalhesPokemon();
}

export class DetalhesPokemon {
    frontDefault: string;
    backDefault: string;
    frontFemale: string;
    backFemale: string;
    frontShiny: string;
    backShiny: string;
    frontShinyFemale: string;
    backShinyFemale: string;
}

export class Error {
    cod: string;
    message: string;
}
