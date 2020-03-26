export class Persona {
    identificacion: string;
    nombre: string;
    sexo: string;
    edad: number;
    pulsacion: number;

   Calcular(): void
    {
       
        if(this.sexo=="Masculino"){
           this.pulsacion=(220-this.edad);
          
           
        }
        if(this.sexo=="Femenino"){
            this.pulsacion=(225-this.edad);   
           
           
        }
    }
}



