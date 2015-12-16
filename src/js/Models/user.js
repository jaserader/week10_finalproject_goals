import $ from 'jquery';

class User{
  constructor(props){
    this.token = null;
  }


  register(data, done){
    let url = "https://goals-api.herokuapp.com/users";

    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  signin(data, done){
    let url = "https://goals-api.herokuapp.com/oauth/token";


    let options = {
      url: url,
      method: 'POST',
      data: data
    };

    $.ajax(options).then(response =>{
      this.token = response.access_token;
    });

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  logout(){
    this.token = null;
  }

};

export default new User();
