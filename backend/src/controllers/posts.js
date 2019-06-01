const Post = require('../models/Post')

const findAll = async (ctx) => {
  // console.log('---------------> Funca!', ctx)
  const posts = await Post.find({})
  ctx.body = posts
}

const create = async (ctx) => {
  // Create New Post from payload sent and save to database
  try {
    console.log('---------------> request body', ctx)
    const newPost = await new Post(ctx.request.body)
    console.log('---------------> saved post', ctx)
    await newPost.save()
    console.log('---------------> post to json!', ctx)
    const postedJSON = newPost.toJSON()
    console.log(postedJSON)
    // ctx.body = { postedJSON }
  } catch (err) {
    ctx.throw(409)
  }
}

const destroy = async (ctx) => {
  // Get id from url parameters and find Post in database
  const id = ctx.params.id
  const post = await Post.findById(id)

  // Delete Post from database and return deleted object as reference
  const deletedPost = await post.remove()
  ctx.body = deletedPost
}

const update = async (ctx) => {
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
