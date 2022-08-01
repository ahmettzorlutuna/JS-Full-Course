class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }


    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" class="img-thumbnail"></a>
                    </div>

                    <div class="col-md-9">
                        <h4>Contact Information</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                Username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                eMail: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                Adress: ${profile.address.street} - 
                                ${profile.address.suite} - 
                                ${profile.address.city} - 
                                ${profile.address.zipcode} - 
                            </li>
                            <li class="list-group-item">
                                Phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                webSite: ${profile.website}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        `;
    }

    showAlert(text) {
        this.alert.innerHTML = `
            <br>
            <div class="alert alert-danger" role="alert">
                Sorry (${text}) is not found !
            </div>
        `;
    }

    clearAlert(){
        this.alert.innerHTML = '';
    }
}