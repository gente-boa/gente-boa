Accounts.onCreateUser(function(options, user) {
    // We're enforcing at least an empty profile object to avoid needing to check
    // for its existence later.
    if (user.services && user.services.facebook) {
      var accessToken = user.services.facebook.accessToken,
            result,
            profile;

        result = Meteor.http.get("https://graph.facebook.com/me", {
          params: {
            access_token: accessToken
          }
        });

        if (result.error)
          throw result.error;

        profile = result.data;

        user.profile = profile;
      } else {
        user.profile = options.profile ? options.profile : {};
      }

    return user;
  });

Meteor.users.after.insert(function (userId, doc) {
  if (doc.profile.name === 'Guilherme Decampo') {
    Roles.addUsersToRoles(this._id, ['admin']);
  } else if (doc.services&& doc.services.password) {
    Roles.addUsersToRoles(this._id, ['ong']);
  } else {
    Roles.addUsersToRoles(this._id, ['user']);
  }
});



