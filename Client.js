export class Client{
     defaultPath = 'https://my-json-server.typicode.com/alllef/LipovetskyFrontLab4/';
     async getData(endPath){
         let response = await fetch(this.defaultPath+endPath,);
         return await response.json();
     }
}