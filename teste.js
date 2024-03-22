var pi = 3.14
class FormaGeometrica {
    constructor(cor, parametro1, parametro2) {
      this.cor = cor
      this.parametro1 = parametro1
      this.parametro2 = parametro2
    }
    
    CalcularAreaCirculo(raio, pi) {
        let area = raio*raio * pi
        console.log(area)
        return area
    }
    
    CalcularAreaRetangulo(base, altura) {
      let area = base * altura
      console.log('base * altura:', area)
      return area
    }
  }
  
  class Retangulo extends FormaGeometrica {
    constructor(cor, parametro1, parametro2) {
      super(cor, parametro1, parametro2)
      this.area = this.CalcularAreaRetangulo(parametro1, parametro2)
    }
  }

  class Circulo extends FormaGeometrica{
    constructor(cor, parametro1, parametro2){
        super(cor, parametro1, parametro2)
        this.area = this.CalcularAreaCirculo(parametro1, parametro2)
    }
  }
  
var retangulo = new Retangulo('azul', 5, 10)
var circulo = new Circulo('verde', 7, pi)