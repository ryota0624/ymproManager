var User = function( name=null, gender=0, admin=false, password=null, password_confirmation=null ) {
  this.name = name;
  this.gender = gender;
  this.admin = admin;
  this.password = password;
  this.password_confirmation = password_confirmation;
};

export default User;