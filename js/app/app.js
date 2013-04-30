window.App = Ember.Application.create({
  LOG_TRANSITION: true
});

App.Router.map(function() {
  this.resource('posts');
  this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
  });
  this.route("meetup", { path: "meetup.webrookies.org" });
  this.route("tutorials", { path: "/tutorials" });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Learn to code!");
  }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.IndexController = Ember.Controller.extend({
  appName: 'Web Rookies',
  links: function() {

  }
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')
});

App.PostRoute = Ember.Route.extend({
    // activate: function() {},
    // deactivate: function() {},
    setupController: function(controller, model) {
      controller.set('content', model);
    },
    renderTemplate: function() {
      this.render({
        into: 'posts',
        outlet: 'posts',
        controller: 'blogPost'
      });
    },
    model: function(params) {
        return App.Post.find(params.post_id);
    }
});

App.TutorialsRoute = Ember.Route.extend({
    // activate: function() {},
    // deactivate: function() {},
    setupController: function(controller, model) {},
    // renderTemplate: function() {},

    model: function() {
        return ;
    }
});