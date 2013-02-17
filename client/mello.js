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

Template.task.events({
  'change [name=listId]': function(event, template) {
    Tasks.update({_id: template.data._id}, {$set: {listId: this._id}});
  }
});