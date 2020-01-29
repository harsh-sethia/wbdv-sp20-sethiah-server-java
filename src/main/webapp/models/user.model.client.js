function User(username, password, email, firstName, lastName, phone, role,
dateOfBirth) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.role = role;
  this.dateOfBirth = dateOfBirth;

  this.setUsername = setUsername;
  this.getUsername = getUsername;

  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
}
