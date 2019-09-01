const renderRow = (result, uid, arrFollowing) => {
    const markup = `
        <div class="results__row">
            <div> ${ result.name } </div>
            <div data-gid=${ result.group_id }> ${ result.group_name } </div>
            <div class="f-count"> ${ result.followers_count } </div>
            <button class="flw ${isFollowing(result.id, arrFollowing) ? 'following' : 'follow'}" data-uid=${ result.id }>${isFollowing(result.id, arrFollowing) ? 'Following' : 'Follow'}</button>
        </div>`

        if(result.id != uid){
            document.querySelector('.results').insertAdjacentHTML('beforeend', markup);
        }
};

const isFollowing = (id, following) => {

    //console.log(following);
    const isFollowing = following.find(el => el === id);

    if(isFollowing != undefined){
        return true;
    }

    return false;
}


export const renderResults = (results, uid, arrFollowing) => {
    results.forEach(el => renderRow(el, uid, arrFollowing));
};

export const clearRes = () => {
    document.querySelector('.results').innerHTML = '';
}