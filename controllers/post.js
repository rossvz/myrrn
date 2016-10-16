var Post = require('../models').Post

module.exports = {
  list(req, res){
    var query = { where: req.query }
    Post.findAll(query)
      .then(function (posts) {
        var results = {
          message: 'Posts list query successful',
          query: query,
          count: posts.length,
          posts: posts
        }
        res.send(results)
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  find(req, res){
    var query = {
      where: {
        id: req.params.id
      }
    }
    Post.findOne(query).then(post=> {
      res.send({
        message: post ? `Post find query successful` : 'No post found',
        query: query,
        post: post ? post : {}
      })
    })
  },
  create(req, res){
    Post.create(req.body)
      .then(newPost=> {
        res.send({
          message: 'Post created successfully',
          post: newPost
        })
      }, err=> {
        res.send(err)
      })
  },
  update(req, res) {
    Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function (updatedPosts) {
        res.send({
          message: `Post ${req.params.id} updated`,
          count: updatedPosts
        });
      })
      .catch(function (error) {
        res.send(error);
      });
  },
  delete(req, res) {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (deletedPosts) {
        res.send({
          message: `Post ${req.params.id} deleted successfully`,
          posts: deletedPosts
        });
      })
      .catch(function (error) {
        res.send(error);
      });
  }
}