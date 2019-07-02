const Post = require('../models/Post')

const findAll = async (ctx) => {
  console.log('--------------->  Lista los post!', ctx)
  const posts = await Post.find({})
  ctx.body = posts
}

const create = async (ctx) => {
  // Create New Post from payload sent and save to database
  try {
    const newPost = new Post(ctx.request.body)
    await newPost.save()
    ctx.body = newPost.toJSON()
  } catch (err) {
    ctx.throw(409)
  }
}

const destroy = async (ctx) => {
  try {
    const id = ctx.params.id
    await Post.findByIdAndRemove(id)
    // ctx.body = id
    console.log('deleted a post')
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
