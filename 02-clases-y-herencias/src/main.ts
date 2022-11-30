class Persona{
    protected nombre: string  
    protected cedula: number 
    protected direccion: string 
    protected edad: number
    constructor(nombre:string,cedula:number,direccion:string,edad: number){
        this.nombre=nombre;
        this.cedula=cedula;
        this.direccion=direccion;
        this.edad=edad;
    }
    imprimir(){
        console.log("Nombre: "+ this.nombre);
        console.log("Cedula: "+ this.cedula);
        console.log("direccion: "+ this.direccion);
        console.log("Edad: "+ this.edad);

    }
}

class Empleado extends Persona{
    private cargo: string;
    private horario: string;
    constructor(nombre: string, cedula:number,direccion:string,edad:number,cargo:string,horario:string){
        super(nombre,cedula,direccion,edad);
        this.cargo=cargo;
        this.horario=horario;
    }
    imprimir(){
        super.imprimir();
        console.log("Cargo:"+this.cargo);
    }
}

class Cliente extends Persona{
    tipoCliente: string;
    constructor(nombre: string, cedula:number,direccion:string,edad:number,tipoCliente: string){
        super(nombre,cedula,direccion,edad);
        this.tipoCliente=tipoCliente;
    }
}

let empleado=new Empleado("Leonel",1727737924,"Cuenca", 89, "Gerente","Lunes a Viernes");
let cliente=new Cliente("Carlos" ,1727737924 , "Ibarra", 41, "VIP");
empleado.imprimir();
cliente.imprimir();

//console.log(empleado);
//console.log(cliente);