"use strict";
class MultimediaFile {
    constructor() {
        this.checkSum = "";
    }
    get isValid() {
        if (this.checkSum.length > 10) {
            return true;
        }
        else {
            return false;
        }
    }
    ;
    set newCheckSum(value) {
        this.checkSum = value;
    }
    validateCheckSum() {
        return true;
    }
    ObtenerTipo() {
        return "Multimedia";
    }
}
class DynamicFile extends MultimediaFile {
    ObtenerTipo() {
        if (this.checkSum === "") {
            this.validateCheckSum();
        }
        return "Dinamico";
    }
}
class StaticFile extends MultimediaFile {
    ObtenerTipo() {
        return "estatico";
    }
}
class OtherFile extends MultimediaFile {
}
let multimedia = new MultimediaFile();
const dFile = new DynamicFile();
const sFile = new StaticFile();
const oFile = new OtherFile();
multimedia = dFile;
console.log(multimedia.ObtenerTipo());
multimedia = sFile;
console.log(multimedia.ObtenerTipo());
multimedia = oFile;
console.log(multimedia.ObtenerTipo());
console.log(multimedia.isValid);
multimedia.newCheckSum = "4134353254643765475";
console.log(multimedia.isValid);
