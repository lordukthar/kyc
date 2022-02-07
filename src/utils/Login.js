

const users = ["jonas@gmail.com", "sonia@gmail.com"]

export const checkUserLogin = (user) => {
    
    //const found = users.find(element => element === user);
    console.log("FOO" + user);
    const found = users.includes(user);
    console.log("FOO" + found);
    return found;

}

