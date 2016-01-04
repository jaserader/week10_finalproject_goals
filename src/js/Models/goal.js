import $ from 'jquery';

import User from "./user";
import Homepage from "../Views/homepage";

class Goal{

  constructor(props){
    this.currentGoal = "";
  }

  post(data, done){
    let url = 'https://goals-api.herokuapp.com/goals';

    let options = {
      url: url,
      method: 'POST',
      data: {
        "goal": data
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  postComment(data, id, done){
    let url = `https://goals-api.herokuapp.com/goals/${id}/comments`;

    let options = {
      url: url,
      method: 'POST',
      data: {
        "comment":
        {
          "body": data
        }
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  viewGoal(goal){
    this.currentGoal = goal;
  }
}

export default new Goal();
