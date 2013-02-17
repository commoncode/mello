Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.setInterval(
  function() {
    Meteor.call('lastSeen');
  }, 1000
)

Template.header.helpers({
  usersOnline: function() {
    return Meteor.users.find({
      'profile.isOnline': true, 
      _id: {$ne: Meteor.userId()}
    }).fetch();
  },
  allCount: function() {
    return Tasks.find().count();
  },
  myCount: function() {
    return Tasks.find({userId: Meteor.userId()}).count();
  },
  allActiveClass: function() {
    return !Session.get('showMine') && 'active';
  },
  mineActiveClass: function() {
    return Session.get('showMine') && 'active';
  }
});

Template.header.events({
  'click .showMine': function() {
    Session.set('showMine', true);
  },
  'click .showAll': function() {
    Session.set('showMine', false);
  }
});


Template.taskLists.helpers({
  lists: function() {
    return Lists.find();
  }
});

Template.taskList.helpers({
  tasks: function() {
    var filter = {listId: this._id};
    if (Session.get('showMine', true))
      filter.userId = Meteor.userId();
    return Tasks.find(filter);
  }
});

Template.taskList.events({
  'click .addTask': function() {
    // insert a task and set it to edit mode
    var newTaskId = Tasks.insert({listId: this._id, title: 'New Task'});
    Session.set('editing-task-id', newTaskId);
  }
});

Template.task.helpers({
  editing: function() { 
    return Session.equals('editing-task-id', this._id); 
  },
  username: function() {
    var owner = Meteor.users.findOne(this.userId);
    return owner && owner.username;
  }
});

Template.task.events({
  'click .edit': function() {
    Session.set('editing-task-id', this._id); 
  },
  'click .done': function() {
    Session.set('editing-task-id', null); 
  }
})

Template.taskForm.helpers({
  lists: function() {
    var task = this;
    return Lists.find().map(function(list) {
      list.selected = (task.listId === list._id);
      return list;
    });
  },
  listCheckedAttr: function() {
    return this.selected && 'checked';
  },
  noUserSelected: function() {
    return !this.userId;
  },
  users: function() {
    var task = this;
    return Meteor.users.find().map(function(user) {
      user.selected = (user._id === task.userId) 
      return user;
    });
  },
  userSelectedAttr: function() {
    return this.selected && 'selected';
  }
});

Template.taskForm.events({
  'keyup [name=title]': function() {
    Tasks.update(this._id, {$set: {title: $(event.target).val()}});
  },
  'keyup [name=description]': function() {
    Tasks.update(this._id, {$set: {description: $(event.target).val()}});
  },
  'change [name=listId]': function(event, template) {
    Tasks.update({_id: template.data._id}, {$set: {listId: this._id}});
  },
  'change .userSelector': function(event, template) {
    Tasks.update(template.data._id, {$set: {userId: $(event.target).val()}});
  },
  'click .delete': function(event) {
    event.preventDefault();
    Tasks.remove(this._id);
  }
});
