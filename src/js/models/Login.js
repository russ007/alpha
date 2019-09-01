import{axiosInst} from '../base';

export default class Login{

    constructor(uName){
      this.uName = uName
    }
    
    async setSession() {
        //try {
          
          const res = await axiosInst.post('user/login', {
            userName: this.uName
          });
          this.result = res.data;
          console.log(res.data);

        //} catch(error){
            //alert(error);
        //}
    } 
}