import Login from './models/Login';
import Follow from './models/Follow';
import Session from './models/Session';
import * as loginView from './views/loginView';
import * as listView from './views/listView';
import * as fView from './views/followView';

//state object
const state = {};

//check if user logged in.
const init = async () => {
    state.session = new Session();

    try {
        await state.session.checkSession();

        if(state.session.result !=false){
            setDashboard();
        }
    } catch(error) {
        alert(error);
    }
    
}

init();


//login and setup dashboard
const controlLogin = async () => {
    //get username from view
    const loginUname = loginView.login();

    if(loginUname){
        //add current session object to state
        state.session = new Login(loginUname);

        try {
            //check db for user
            await state.session.setSession();
            //console.log(state.session.result);
                setDashboard();

        }catch(error) {
            alert(error);
        }
    }
}

//follow/unfollow users
const controlFollow = e => {
    //id of user to follow
    const uid = fView.getId(e);
    //console.log(uid);
     state.follow.arrFollow(e,uid);
     //console.log(state.follow.follows);
     state.follow.dbUpdate();
}

const setDashboard = () => {

    const following = JSON.parse(state.session.result['user'].following);

    //display welcome message
    loginView.loggedIn(state);

    //clear results before render new results
    listView.clearRes();

    state.follow = new Follow(following);
    console.log(state.follow);

    //display the list of people to follow
    listView.renderResults(state.session.result['list'], state.session.result['user'].id, following);
}


/**
 * EVENTS
 */

//login and setup dashboard
document.querySelector('.login').addEventListener('submit', e => {
    e.preventDefault();
    controlLogin();
});

//follow/unfollow users
document.addEventListener('click', e => {
    if(e.target.classList.contains('flw')){
        controlFollow(e);
    }
})