import $ from 'jquery';
import React from 'react';

class User{
  constructor(props){
    this.token = null;
    this.id = null;
    this.listeners = [];
    this.goals = [];
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
      $.ajaxSetup({
        headers: {
          "Authorization": "Bearer " + this.token
         }
       });
      this.dispatch();
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  logout(){
    this.token = null;
    this.id = null;
    $.ajaxSetup({
      headers: {
        "Authorization": "Bearer " + this.token
       }
     });
  }

};

export default new User();
