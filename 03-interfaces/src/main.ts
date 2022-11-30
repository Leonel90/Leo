/*CLASE ABUELO */
interface Vehiculo{
    modelo:string;
    fabricandte:string;
    encender ():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}

/*CLASES PADRES */
interface VehiculoTerrestre{
    numeroLlantas:number;
    conducir():void;
    encender():void;
    apagar():void;
    acelerar():void;
    frenar():void;
}
interface VehiculoMaritimo{
    numeroTurbinas:number;
    numeroAnclas:number;
    navegar():void;
    encender():void;
    apagar():void;
    bajarAnclas():void;
    subirAnclas():void;
}
interface VehiculoAereo{
    numeroElices:number;
    pilotear():void;
    encender():void;
    apagar():void;
    despegar():void;
    descender():void;
}

/*CLASES HIJAS*/

/*Vehiculos Terrestres*/
class Camion implements VehiculoTerrestre{
    numeroLlantas: number = 8;


    conducir():void{
        console.log("El camión esta siendo conducido");
    }
    encender():void{
        console.log("El camión esta encendido --->VEHÍCULOS TERRESTRES");
    }
    acelerar():void{
        console.log("El camión esta acelerado");
    }
    frenar():void{
        console.log("El camión esta frenado");
    }
    apagar():void{
        console.log("El camión esta apagado");
    }
    cargar():void{
        console.log("El camión esta cargado");
    }
}

function procesar(vehiculo:VehiculoTerrestre):void{
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}

let camion = new Camion();
console.log("##############################################################################");
camion.encender();
camion.acelerar();
camion.conducir();
camion.frenar();
camion.apagar();

class Camioneta implements VehiculoTerrestre{
    numeroLlantas: number = 8;


    conducir():void{
        console.log("La camioneta esta siendo conducido");
    }
    encender():void{
        console.log("La camioneta esta encendido");
    }
    acelerar():void{
        console.log("La camioneta esta acelerado");
    }
    frenar():void{
        console.log("La camioneta esta frenado");
    }
    apagar():void{
        console.log("La camioneta esta apagado");
    }
    cargar():void{
        console.log("La camioneta esta cargado");
    }
}

function procesar1(vehiculo:VehiculoTerrestre):void{
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}

let camioneta = new Camioneta();
camioneta.encender();
camioneta.acelerar();
camioneta.conducir();
camioneta.frenar();
camioneta.apagar();


class Automovil implements VehiculoTerrestre{
    numeroLlantas: number = 8;


    conducir():void{
        console.log("El automóvil esta siendo conducido");
    }
    encender():void{
        console.log("El automóvil esta encendido");
    }
    acelerar():void{
        console.log("El automóvil esta acelerado");
    }
    frenar():void{
        console.log("El automóvil esta frenado");
    }
    apagar():void{
        console.log("El automóvil esta apagado");
    }
    cargar():void{
        console.log("El automóvil esta cargado");
    }
}

function procesar2(vehiculo:VehiculoTerrestre):void{
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.frenar();
    vehiculo.apagar();
}

let automovil = new Automovil();
automovil.encender();
automovil.acelerar();
automovil.conducir();
automovil.frenar();
automovil.apagar();
console.log("==================================================================");

/*Vehiculos Maritimos*/
class Yate implements VehiculoMaritimo{
    numeroTurbinas: number = 8;
    numeroAnclas: number = 3;

    encender():void{
        console.log("El yate esta encendido --->VEHÍCULOS MARITIMOS");
    }
    navegar():void{
        console.log("El yate esta navegando");
    }
    bajarAnclas():void{
        console.log("El yate esta bajando el ancla");
    }
    subirAnclas():void{
        console.log("El yate esta subiendo el ancla");
    }
    apagar():void{
        console.log("El yate esta apagado");
    }
}

function procesarY(vehiculo:VehiculoMaritimo):void{
    vehiculo.encender();
    vehiculo.navegar();
    vehiculo.apagar();
    vehiculo.bajarAnclas();
    vehiculo.subirAnclas();
}

let yate = new Yate();
yate.encender();
yate.navegar();
yate.bajarAnclas();
yate.subirAnclas();
yate.apagar();


class Velero implements VehiculoMaritimo{
    numeroTurbinas: number = 8;
    numeroAnclas: number = 3;

    encender():void{
        console.log("El velero esta encendido");
    }
    navegar():void{
        console.log("El velero esta navegando");
    }
    bajarAnclas():void{
        console.log("El velero esta bajando el ancla");
    }
    subirAnclas():void{
        console.log("El velero esta subiendo el ancla");
    }
    apagar():void{
        console.log("El velero esta apagado");
    }
}

function procesarV(vehiculo:VehiculoMaritimo):void{
    vehiculo.encender();
    vehiculo.navegar();
    vehiculo.apagar();
    vehiculo.bajarAnclas();
    vehiculo.subirAnclas();
}

let velero = new Velero();
velero.encender();
velero.navegar();
velero.bajarAnclas();
velero.subirAnclas();
velero.apagar();
console.log("==================================================================");


/*Vehiculos Aereos*/
class Avion implements VehiculoAereo{
    numeroElices: number = 8;


    encender():void{
        console.log("El avión esta encendido --->VEHÍCULOS AEREOS");
    }
    pilotear():void{
        console.log("El avión esta en el aire");
    }
    despegar():void{
        console.log("El avión esta despegando");
    }
    descender():void{
        console.log("El avión esta descendiendo");
    }
    apagar():void{
        console.log("El avión esta apagado");
    }
}

function procesarA(vehiculo:VehiculoAereo):void{
    vehiculo.encender();
    vehiculo.pilotear();
    vehiculo.despegar();
    vehiculo.descender();
    vehiculo.apagar();
}

let avion = new Avion();
avion.encender();
avion.pilotear();
avion.despegar();
avion.descender();
avion.apagar();


class Avioneta implements VehiculoAereo{
    numeroElices: number = 8;


    encender():void{
        console.log("La avioneta esta encendida");
    }
    pilotear():void{
        console.log("La avioneta esta en el aire");
    }
    despegar():void{
        console.log("La avioneta esta despeganda");
    }
    descender():void{
        console.log("La avioneta esta descendiendo");
    }
    apagar():void{
        console.log("La avioneta esta apagada");
    }
}

function procesarAv(vehiculo:VehiculoAereo):void{
    vehiculo.encender();
    vehiculo.pilotear();
    vehiculo.despegar();
    vehiculo.descender();
    vehiculo.apagar();
}

let avioneta = new Avioneta();
avioneta.encender();
avioneta.pilotear();
avioneta.despegar();
avioneta.descender();
avioneta.apagar();