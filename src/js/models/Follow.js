import {axiosInst} from '../base';
import {followUI, unfollowUI} from '../views/followView';

export default class Follow {
    constructor(following){
        this.following = following;
    }

    //add/remove from follow
    arrFollow(e, id) {
        //add the user to follow id to object
        this.fuid = id;

        if(this.following.find(el => el === id) != undefined){
            //unfollow
            const found = this.following.indexOf(id);
            this.following.splice(found, 1);
            //update ui
            unfollowUI(e);
            this.incr = -1;
        }else{
            //follow
            this.following.push(id);
            //update ui
            followUI(e);
            this.incr = +1;
        }
        console.log(this.following);
    }

    //update db on state change
    dbUpdate() {
        //const follow_array = JSON.stringify(this.following);
        const follow_array = this.following;
        try {
            const x = axiosInst.post('user/follow', {
                follow_array, 
                incr: this.incr,
                fuid: this.fuid
            });
            console.log(x);
            
        } catch(error) {
            alert(error);
        }
    }

  /*  
    followCount(id) {

    } */
}