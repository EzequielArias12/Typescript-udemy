class Rectangulo {
   // baseRectangulo : number = 2;
    //alturaRectangulo : number = 3;
    //color : string = "Rojo";

     constructor(public baseRectangulo : number, public alturaRectangulo:number, public color:string){
        //this.baseRectangulo = baseRec;
        //this.alturaRectangulo = alturaRect;
        //this.color = color;
     }

    calcularArea():number{
        
        const A = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(A);
        return A;
    }

    calcularPerimetro():number 
    {
        //P = 2* H * 2 b
        return (2 *this.alturaRectangulo) + (2 * this.baseRectangulo);
    }

    static calcularPerimetroRectangulo(alturaRectangulo:number,baseRectangulo:number){
        return (2 *alturaRectangulo) + (2 * baseRectangulo);
    }

    public printResult(result:number) :void{
        //Llevar a cabo validaciones
       /* if(result < 10) 
        {
            console.log("valores normales")
        }else{
            console.log("algo salio mal")
        }*/
        console.log(result);
    }

}
class Circulo {
    static numeroDeCirculos:number = 0;

    static readonly PI:number = 3.1416;

    constructor(private radio:number){
        Circulo.numeroDeCirculos++;
    }
    calcularArea():number{
        return Math.PI * this.radio * this.radio;
    }
}
let variable:number = 0;

// let rectangulo : Rectangulo = new Rectangulo(5,10,"white");
// let rectangulo2 : Rectangulo = new Rectangulo(10,20,"naranja");

// const resultadoPerimetro = Rectangulo.calcularPerimetroRectangulo(2,2);
// console.log("el resultado es : " + resultadoPerimetro)

//rectangulo.calcularArea();
//rectangulo2.calcularArea();

//console.log(Math.pow(2,2));

//rectangulo.printResult(15);
//rectangulo.color = "Black";

const circulo1:Circulo = new Circulo(20);
const circulo2:Circulo = new Circulo(50);
const circulo3:Circulo = new Circulo(10);



console.log("# de circulos" + Circulo.numeroDeCirculos)