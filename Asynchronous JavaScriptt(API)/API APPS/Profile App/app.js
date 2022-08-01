const searchProfile = document.querySelector('#searchProfile');

const profile = new Profile();
const ui = new UI();

searchProfile.addEventListener('keyup',(event)=>{
    let text = event.target.value;

    if(text!==''){
        profile.getProfile(text)
         .then(res => {
            if(res.profile.length == 0){
                ui.showAlert(text);
            }else{
                ui.clearAlert();
                ui.showProfile(res.profile[0]);   
            }
         });
    }
})