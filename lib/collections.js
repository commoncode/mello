var Lists = new Meteor.Collection('lists');
var Tasks = new Meteor.Collection('tasks');

if (Meteor.isServer && Lists.find().count() === 0) {
  var lists = [
   {type: 'todo', tasks: [
     {title: 'Add Collections', description: 'Collections are great'},
     {title: 'Build out Functionality'}
   ]},
   {type: 'doing', tasks: [
     {title: 'Learn about helpers'}
   ]},
   {type: 'done', tasks: [
     {title: 'Create basic HTML and Styles', description: 'Lots of cut and paste blows.'},
     {title: 'Create meteor app'}
   ]}
  ];
  
  _.each(lists, function(listData) {
    var listId = Lists.insert({type: listData.type});
    
    _.each(listData.tasks, function(taskData) {
      Tasks.insert(_.extend(taskData, {listId: listId}));
    });
  });
}