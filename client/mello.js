var Lists = [
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
]

Template.taskLists.helpers({
  lists: function() {
    return Lists;
  }
})