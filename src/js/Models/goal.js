import $ from 'jquery';

import User from "./user";

class Goal{

  post(data, done){
    let url = 'https://goals-api.herokuapp.com/goals';

    let options = {
      url: url,
      method: 'POST',
      data: {
        "goal" : data
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }
}

export default new Goal();
