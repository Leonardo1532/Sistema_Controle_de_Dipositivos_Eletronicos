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


