const Post = require('../models/Post')

const findAll = async (ctx) => {
  console.log('--------------->  Lista los post!', ctx)
  const posts = await Post.find({})
  ctx.body = posts
}

const create = async (ctx) => {
  // Create New Post from payload sent and save to database
  try {
    console.log('ctx.request.body ----->', ctx.request.body)
    const newPost = new Post(ctx.request.body)
    await newPost.save()
    ctx.body = newPost.toJSON()
  } catch (err) {
    ctx.throw(409)
  }
}

const destroy = async (ctx) => {
  try {
    const { id } = ctx.params
    const deletedPost = await Post.findByIdAndRemove(id)
    if (!deletedPost) {
      throw new Error(`no post was found with id:${id}`)
    }
    console.log('deleted a post')
    ctx.status = 202
  } catch (err) {
    console.log(err)
    ctx.throw(500, err)
    ctx.status = 501
  }
}

const destroyAll = async (ctx) => {
  try {
    const deletedPost = await Post.deleteMany()
    if (!deletedPost) {
      throw new Error(`no post was found with id:${id}`)
    }
    console.log('deleted all post')
    ctx.status = 202
  } catch (err) {
    console.log(err)
    ctx.throw(500, err)
    ctx.status = 501
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
  destroyAll,
  update
}
