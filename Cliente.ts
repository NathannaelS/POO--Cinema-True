export class Cliente{
  private id:string;
  private fone:string;

  public constructor(id:string,fone:string){
      this.id = id;
      this.fone = fone;
  }
  public getId():string{
      return this.id;
  }
  public setId(novoId:string):void{
      this.id = novoId;
  }

  public getFone():string{
      return this.fone;
  }
  public setFone(novoFone:string):void{
      this.fone = novoFone;
  }
}
