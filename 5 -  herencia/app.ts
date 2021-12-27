class MultimediaFile {

    protected checkSum : string="";

    get isValid():boolean{

        if(this.checkSum.length > 10){
            return true;
        }else{
            return false;
        }
    };

    set newCheckSum(value:string){
        this.checkSum = value;
    }

   protected validateCheckSum ():boolean{
        return true;
    }

    ObtenerTipo():string{
        return "Multimedia"
    }
}

class DynamicFile extends MultimediaFile{
  ObtenerTipo(): string {
      if(this.checkSum === ""){
        this.validateCheckSum();
      }
      return "Dinamico"
  }
}

class StaticFile extends MultimediaFile{
    ObtenerTipo(): string {
        return "estatico"
    }
}

class OtherFile extends MultimediaFile{

}

let multimedia:MultimediaFile = new MultimediaFile();
const dFile:DynamicFile = new DynamicFile();
const sFile:StaticFile = new StaticFile();
const oFile:OtherFile = new OtherFile();

multimedia = dFile;
console.log(multimedia.ObtenerTipo());

multimedia = sFile;
console.log(multimedia.ObtenerTipo());

multimedia = oFile;
console.log(multimedia.ObtenerTipo());

console.log(multimedia.isValid);

multimedia.newCheckSum =  "4134353254643765475";
console.log(multimedia.isValid);
