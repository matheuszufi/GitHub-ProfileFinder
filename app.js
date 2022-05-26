const github = new Github;

const ui = new UI;
//Variable

const searchUser = document.getElementById('searchUser');




searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
         //Make http call
         github.getUser(userText)
         .then(data => {
             if(data.profile.message === 'Not Found') {
                //Show Alert 
                ui.showAlert('User not Found', 'alert alert-danger');
             } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
             }
         })
    } else {
        //Clear Profile
        ui.clearProfile();
    }


});