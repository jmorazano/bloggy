const Post = require('../models/Post')

const findAll = async (ctx) => {
  console.log('--------------->  Lista los post!', ctx)
  const posts = await Post.find({})
  ctx.body = posts
}

const create = async (ctx) => {
  // Create New Post from payload sent and save to database
  try {
    const newPost = await new Post(ctx.request.body)
    await newPost.save()
    ctx.body = newPost.toJSON()
  } catch (err) {
    ctx.throw(409)
  }
}

const destroy = async (ctx) => {
  try {
    const id = ctx.params.id
    const post = await Post.findByIdAndRemove(id)
    console.log(post)
    console.log(id)
    const deletedPost = await post.findByIdAndRemove()
    ctx.body = deletedPost
  } catch (err) {
    ctx.throw(204)
  }
}

const update = async (ctx) => {
  // Find Post based on id, then toggle done on/off
  const { id } = ctx.params
  const updateObject = ctx.request.body
  const updatedPost = await Post.findByIdAndUpdate(id, updateObject, { new: true })
  ctx.body = updatedPost
}

module.exports = {
  findAll,
  create,
  destroy,
  update
}
