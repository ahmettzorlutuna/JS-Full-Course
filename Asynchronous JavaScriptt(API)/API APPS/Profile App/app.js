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
                // console.log("res");
                // console.log(res.todo);
                // for (let i = 0; i < res.todo.length; i++) {
                //     console.log(res.todo[i].title);
                // }
                ui.showProfile(res.profile[0]); 
                ui.showTodo(res.todo); 
                  
            }
         }).catch(error=>{
            ui.showAlert(text);
         });
    }
})