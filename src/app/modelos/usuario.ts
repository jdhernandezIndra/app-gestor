export class Usuario {
  constructor(
    public id: number,
    public nombres: string,
    public apellidos: string,
    public usuario: string,
    public password: string,
    public estado: boolean,
    public urlImagen: string
  ) {}

  get imagenUrl(){
    if(this.urlImagen!=''){
      return this.urlImagen;
    }else{
      return "http://localhost:8080/media/visualizar/logo.jpg";
    }
  }
}
