import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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

UserSchma.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
    {
      expiresIn: '7d', // 7일 동안 유효함
    }
  );
  return token;
};

const User = mongoose.model('User', UserSchma);
export default User;
