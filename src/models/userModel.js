import mongoose from mongoose;
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({

  firstname:{
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  lastname:{
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email:{
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Invalid email format.'
    }
  },
  password:{
    type: String,
    required: true,
    minlength: 8,
    select: false 
  },
  avatar:{
   id:{
    type: String
   },
   secure_url:{
    type: String
   }
  },
  isVerifed:{
    type: Boolean,
    default: false,
    select: false,
    validate: {
      validator: function(v) {
        return v === true || v === false;
      },
      message: '{VALUE} is not a boolean.'
    }
  }



} , {
  timestamps: true,
  

})


//hash password before save
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
  
    this.password = await bcrypt.hash(this.password.toString(), 10);
    next();
  });

  //validate password or compare password
userSchema.methods.isValidatedPassword = async function (usersendPassword) {
    return await bcrypt.compare(usersendPassword.toString(), this.password);
  };
  
  //access token
  userSchema.methods.signAccessToken = function () {
    return jwt.sign({ id: this._id }, _config.ACCESS_TOKEN || "", {
      expiresIn: _config.ACCESS_TOKEN_EXPIRY,
    });
  };
  
  //refresh token
  userSchema.methods.signRefreshToken = function () {
    return jwt.sign({ id: this._id }, _config.REFRESH_TOKEN || "", {
      expiresIn: _config.REFRESH_TOKEN_EXPIRY,
    });
  };


const usermodel = new mongoose.model('user', userSchema)


export default usermodel;