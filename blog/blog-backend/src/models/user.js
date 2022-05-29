import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { func } from '../../node_modules/joi/lib/index';

const UserSchma = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchma.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchma.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; //true / false
};

UserSchma.statics.findByUsername = function (username) {
  //this는 모델을 가리킨다. 여기서는 User
  return this.findOne({ username });
};

UserSchma.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchma);
export default User;
