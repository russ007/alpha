//check status of user on page load
import{axiosInst} from '../base';

export default class Session{

    constructor(){
    }
    
    async checkSession() {
        //try {
          
          const res = await axiosInst.post('user/check-session');
          this.result = res.data;
          console.log(res.data);
          

        //} catch(error){
            //alert(error);
        //}
    } 
}
