var restify = require('restify')
var models = require('./models/')
var users = require('./controllers/user')
var posts = require('./controllers/post')
models.sequelize.sync().then(function () {

  var server = restify.createServer()
  server.use(restify.bodyParser());
  server.use(restify.queryParser());

  server.get('/users', users.list);
  server.get('/users/:id', users.find);
  server.post('/users', users.create);
  server.put('/users/:id', users.update);
  server.del('/users/:id', users.delete);

  server.get('/posts', posts.list);
  server.get('/posts/:id', posts.find);
  server.post('/posts', posts.create);
  server.put('/posts/:id', posts.update);
  server.del('/posts/:id', posts.delete);

  server.get(/app/, restify.serveStatic({
    directory: '.public/app',
    default: 'index.html'
  }));

  server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
  })
})
