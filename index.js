class Dispositivo {

    Ligado

    constructor() {
        this.Ligado = false
    }


    Ligar() {
        this.Ligado = true
        console.log("Iniciando Dispositivo")
    }

    Desligar() {
        this.Ligado = false
        console.log("Encerrando Dispositivo")
    }

    Status() {
        if (this.Ligado == true) {
            return "on"
        } else {
            return "off"
        }
    }
}

class Smartphone extends Dispositivo {

    ModoAviao
    constructor() {
        super()
        this.ModoAviao = false
    }

    Ligar() {
        super.Ligar()
        console.log("Smartphone ligado")
        console.log("Estado atual: " + super.Status())
    }

    Desligar() {
        super.Desligar()
        console.log("Smartphone Desligado")
        console.log("Estado atual: " + super.Status())
    }

    LigarModoAviao() {
        this.ModoAviao = true
        console.log("Modo avião Ligado")
    }
}

class Computador extends Dispositivo {

    constructor() {
        super()
    }

    Ligar() {
        super.Ligar()
        console.log("Computador ligado")
        console.log("Estado atual: " + super.Status())
    }

    Desligar() {
        super.Desligar()
        console.log("Computador Desligado")
        console.log("Estado atual: " + super.Status())
    }

    reiniciar() {
        console.log("Reiniciando...")
        this.Ligado = false
        console.log("Estado atual: " + super.Status())

        for (let index = 5; index >= 1; index--) {
            if (index > 1) {
                console.log(index + " Segundos")
            } else {
                console.log(index + " Segundo")
            }
        }

        this.Ligado = true
        console.log("Reinicialização Completa")
        console.log("Estado atual: " + super.Status())
    }


}

class Televisor extends Dispositivo {

    Canal
    Index

    constructor() {
        super()
        this.Canal = ["Globo", "SBT", "Record", "HBO"]
        this.Index = 0
    }

    Ligar() {
        super.Ligar()
        console.log("Televisor ligado")
        console.log("Estado atual: " + super.Status())
    }

    Desligar() {
        super.Desligar()
        console.log("Televisor Desligado")
        console.log("Estado atual: " + super.Status())
    }

    mudarCanal() {

        if (this.Index === 3) {
            this.Index = 0
        } else {
            this.Index++
        }

        let canalAtual = this.Canal[this.Index]

        console.log("O canal atual é " + canalAtual)
    }
}

let iphone16 = new Smartphone()
let pcGamer = new Computador()
let tvOled85 = new Televisor()


function Operar() {

    let opcao = Number(prompt("Qual o seu dispositivo:   1: Smartphone | 2: Computador | 3: Televisor"))

    switch (opcao) {
        case 1:
            let opcao1 = Number(prompt("Oque deseja fazer:   1: Ligar | 2: Desligar | 3: Ligar Modo Avião"))

            switch (opcao1) {
                case 1:
                    iphone16.Ligar()
                    break;

                case 2:
                    iphone16.Desligar()
                    break;

                case 3:
                    iphone16.LigarModoAviao()
                    break;

                default:
                    alert("Opção Inválida")
                    break;
            }

            break;

        case 2:
            let opcao2 = Number(prompt("Oque deseja fazer:   1: Ligar | 2: Desligar | 3: Reiniciar"))

            switch (opcao2) {
                case 1:
                    pcGamer.Ligar()
                    break;

                case 2:
                    pcGamer.Desligar()
                    break;

                case 3:
                    pcGamer.reiniciar()
                    break;

                default:
                    alert("Opção Inválida")
                    break;
            }

            break;

        case 3:
            let opcao3 = Number(prompt("Oque deseja fazer:   1: Ligar | 2: Desligar | 3: Mudar Canal"))

            switch (opcao3) {
                case 1:
                    tvOled85.Ligar()
                    break;

                case 2:
                    tvOled85.Desligar()
                    break;

                case 3:
                    tvOled85.mudarCanal()
                    break;

                default:
                    alert("Opção Inválida")
                    break;
            }

            break;

        default:
            alert("Opção Inválida")
            break;
    }
}

function verStatus() {
    console.log(iphone16.Status())
    console.log(pcGamer.Status())
    console.log(tvOled85.Status())
}

let loop = true
while (loop) {

    Operar()

    let allStatus = Number(prompt("Deseja ver o Status atual de todos os dispositivos :   1: sim | 2: não"))

    if (allStatus === 1) {
        verStatus()
    }

    let loopEnd = Number(prompt("Deseja continuar fazendo alterações nos dispositivos:   1: sim | 2: não"))
    if (loopEnd != 1) {
        loop = false
    }
}