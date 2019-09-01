//get id of user when follow button clicked.
export const getId = e => e.target.dataset.uid;

//update button text and css class for follow/unfollow

export const unfollowUI = e => {
    const target = e.target;
    target.className = 'flw follow';
    target.innerHTML = 'Follow';
    target.previousElementSibling.innerHTML = eval(target.previousElementSibling.innerHTML) - 1;
}


export const followUI = e => {
    const target = e.target;
    target.className = 'flw following';
    target.innerHTML = 'Following';
    target.previousElementSibling.innerHTML = eval(target.previousElementSibling.innerHTML) + 1;
}