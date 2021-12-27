console.log("Hello World");

//TIPO DE DATOS PREDEFINIDOS 

/* const calculate = (side:number) => 

{

    console.log(side * side);
}

const PrintSquadArea = (side : number ,text : string ) => {
    console.log( text + " " + side * side)
}


const squareSide :number = 190;
const color : number = 9e34442;
const bin:number = 0b110;
const text : string = "El area del cuadrado es"
const isPrinted : boolean = false ;

if(isPrinted){
    PrintSquadArea(squareSide,text);
}else {
    calculate(squareSide)
}

//calculate(squareSide);
//PrintSquadArea(squareSide,text); */

//TIPO DE DATOS UNION

/*
//Sumar numeros y concatenar cadenas ¿como? usando el tipo de dato union con el typeof.

const data :(number | string)[] = [1,2,3,4,"hola"];

const merge =  (first : number | string,  second: number | string ) =>
{
    if(typeof first === "number" && typeof second === "number"){
        console.log(first + second);
    }

    if(typeof first === "string" && typeof second === "string"){
        console.log(first.toString() + second.toString());
    }
    
    
}

merge(2,3)
*/ 

//Callback en typescript 
/*const process = (n1:number,n2:number,cb:(result:number)=> void)=> 
{

  const result =  n1 + n2;
  cb(result);

}

process(10,10, (perrito)=>{
    const restar = perrito - 5;
    console.log(restar)
})*/

/*
El tipo never representa el tipo de valores que nunca ocurren. Por ejemplo, never es retornado por la expresión de una función que siempre lanza una excepción o alguna que nunca retorna valores.

El tipo never es un subtipo, que es asignable a cualquier tipo, sin embargo ningún tipo es un subtipo de never, un tipo never solo puede ser asignado con el valor never. Incluso any no puede ser asignado a never.

// esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// esta funcion no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}

// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() : never {
    while(true){}
}

*/