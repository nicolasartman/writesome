var postsData = [
  {
    body: 'Introducing Telescope',
    done: true
  },
  {
    body: 'Meteor',
    done: true,
  },
  {
    body: 'The Meteor Book',
    done: false
  }
];

Template.postsList.helpers({
  posts: postsData.map(function(el, i) {
    el.editable = (!el.done && (i == 0));
    return el;
  })
});
