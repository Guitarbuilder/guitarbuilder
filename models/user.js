var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: {
      type : String,
      required : true,
      unique: true
    },
    password: String,
    OauthId: String,
    OauthToken: String,
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    address:   {
        zip : {
          type : Number,
          require : true
        },
        city : {
          type : String,
          require : true
        },
        country : {
          type : String,
          require : true
        }
    },
  
    img : {
      type : String,
      required : false      
    },
    "objectsId" : [{
      type: Schema.Types.ObjectId,
      ref : 'Objects'
    }],
    feedbacksId: {
        in:{
            type: Schema.Types.ObjectId,
            ref:'Feedback'
        },
        out:{
            type: Schema.Types.ObjectId,
            ref:'Feedback'
        }
    }
}, {
    timestamps: true
});


User.methods.getName = function() {
    return (this.firstname + ' ' + this.lastname);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);