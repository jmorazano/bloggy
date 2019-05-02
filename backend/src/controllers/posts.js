const Post = require('../models/Post')

async function findAll (ctx) {
  // Fetch all Post’s from the database and return as payload
  const posts = await Post.find({})
  // ctx.body = posts
  ctx.body = { message: 'greetings from you local API :P' }
}

async function create (ctx) {
  // Create New Post from payload sent and save to database
  // const newPost = new Post(ctx.request.body)
  // const savedPost = await newPost.save()
  ctx.body = { message: 'greetings from you local API :P' }
}

async function destroy (ctx) {
  // Get id from url parameters and find Post in database
  const id = ctx.params.id
  const post = await Post.findById(id)

  // Delete Post from database and return deleted object as reference
  const deletedPost = await post.remove()
  ctx.body = deletedPost
}

async function update (ctx) {
  // Find Post based on id, then toggle done on/off
  const id = ctx.params.id
  const post = await Post.findById(id)
  post.done = !post.done

  // Update Post in database
  const updatedPost = await post.save()
  ctx.body = updatedPost
}

module.exports = {
  findAll,
  create,
  destroy,
  update
}
