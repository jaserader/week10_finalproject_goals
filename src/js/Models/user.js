import $ from 'jquery';

class User{
  constructor(props){
    this.token = null;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);

    // Unsubscribe
    return () => {
      this.listeners = this.listeners.filter(listener => listener != callback);
    }
  }

  dispatch() {
    this.listeners.forEach(callback => callback());
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
      this.dispatch();
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

    $.ajax(options).then(response => {
      this.token = response.access_token;
      this.dispatch();
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
