export class Contact {
  id:string;
  lastName:string;
  firstName:string;
  avatarUrl:string;
  gender:string;
  age:number;
  email:string;
  phone:string;
  address:string;

  getFullname():string
  {
    return this.firstName+' '+this.lastName;
  }
}
