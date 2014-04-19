Events.allow({
  insert : function (userId, doc) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    } else {
      return userId === doc.idUser;
    }
  },
  update : function (userId, doc) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    } else {
      return userId === doc.idUser;
    }
  },
  remove : function (userId, doc) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    } else {
      return userId === doc.idUser;
    }
  }
});

// Use Meteor.methods for db operations
Meteor.methods({
});

