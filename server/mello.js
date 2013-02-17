Meteor.methods({
  lastSeen: function() {
    Meteor.users.update(Meteor.userId(), {$set: {
      lastSeen: new Date().valueOf(),
      'profile.isOnline': true
    }});
  }
});

Meteor.setInterval(
  function() {
    Meteor.users.update(
      {lastSeen: {$lt: new Date().valueOf() - 10000}, 'profile.isOnline': true},
      {$set: {'profile.isOnline': false}},
      {multi: true}
    );
  }, 1000
)