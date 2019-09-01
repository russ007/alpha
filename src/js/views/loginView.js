//get username from form
export const login = () => document.querySelector('.u__name').value;

//show welcome message if user login success
export const loggedIn = state => {
    const markup =`<div>Welcome, ${state.session.result['user'].name}</div>`;
    document.querySelector('.user').innerHTML = markup;
};