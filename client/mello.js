Template.taskLists.helpers({
  lists: function() {
    return Lists.find();
  }
});

Template.taskList.helpers({
  tasks: function() {
    return Tasks.find({listId: this._id});
  }
});

Template.task.helpers({
  editing: function() { 
    return Session.equals('editing-task-id', this._id); 
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
  }
});
