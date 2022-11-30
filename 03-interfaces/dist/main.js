"use strict";
/*CLASES HIJAS*/
/*Vehiculos Terrestres*/
class Camion {
    constructor() {
        this.numeroLlantas = 8;
    }
    conducir() {
        console.log("El camión esta siendo conducido");
    }
    encender() {
        console.log("El camión esta encendido --->VEHÍCULOS TERRESTRES");
    }
    acelerar() {
        console.log("El camión esta acelerado");
    }
    frenar() {
        console.log("El camión esta frenado");
    }
    apagar() {
        console.log("El camión esta apagado");
    }
    cargar() {
        console.log("El camión esta cargado");
    }
}
function procesar(vehiculo) {
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
class Camioneta {
    constructor() {
        this.numeroLlantas = 8;
    }
    conducir() {
        console.log("La camioneta esta siendo conducido");
    }
    encender() {
        console.log("La camioneta esta encendido");
    }
    acelerar() {
        console.log("La camioneta esta acelerado");
    }
    frenar() {
        console.log("La camioneta esta frenado");
    }
    apagar() {
        console.log("La camioneta esta apagado");
    }
    cargar() {
        console.log("La camioneta esta cargado");
    }
}
function procesar1(vehiculo) {
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
class Automovil {
    constructor() {
        this.numeroLlantas = 8;
    }
    conducir() {
        console.log("El automóvil esta siendo conducido");
    }
    encender() {
        console.log("El automóvil esta encendido");
    }
    acelerar() {
        console.log("El automóvil esta acelerado");
    }
    frenar() {
        console.log("El automóvil esta frenado");
    }
    apagar() {
        console.log("El automóvil esta apagado");
    }
    cargar() {
        console.log("El automóvil esta cargado");
    }
}
function procesar2(vehiculo) {
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
class Yate {
    constructor() {
        this.numeroTurbinas = 8;
        this.numeroAnclas = 3;
    }
    encender() {
        console.log("El yate esta encendido --->VEHÍCULOS MARITIMOS");
    }
    navegar() {
        console.log("El yate esta navegando");
    }
    bajarAnclas() {
        console.log("El yate esta bajando el ancla");
    }
    subirAnclas() {
        console.log("El yate esta subiendo el ancla");
    }
    apagar() {
        console.log("El yate esta apagado");
    }
}
function procesarY(vehiculo) {
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
class Velero {
    constructor() {
        this.numeroTurbinas = 8;
        this.numeroAnclas = 3;
    }
    encender() {
        console.log("El velero esta encendido");
    }
    navegar() {
        console.log("El velero esta navegando");
    }
    bajarAnclas() {
        console.log("El velero esta bajando el ancla");
    }
    subirAnclas() {
        console.log("El velero esta subiendo el ancla");
    }
    apagar() {
        console.log("El velero esta apagado");
    }
}
function procesarV(vehiculo) {
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
class Avion {
    constructor() {
        this.numeroElices = 8;
    }
    encender() {
        console.log("El avión esta encendido --->VEHÍCULOS AEREOS");
    }
    pilotear() {
        console.log("El avión esta en el aire");
    }
    despegar() {
        console.log("El avión esta despegando");
    }
    descender() {
        console.log("El avión esta descendiendo");
    }
    apagar() {
        console.log("El avión esta apagado");
    }
}
function procesarA(vehiculo) {
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
class Avioneta {
    constructor() {
        this.numeroElices = 8;
    }
    encender() {
        console.log("La avioneta esta encendida");
    }
    pilotear() {
        console.log("La avioneta esta en el aire");
    }
    despegar() {
        console.log("La avioneta esta despeganda");
    }
    descender() {
        console.log("La avioneta esta descendiendo");
    }
    apagar() {
        console.log("La avioneta esta apagada");
    }
}
function procesarAv(vehiculo) {
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
