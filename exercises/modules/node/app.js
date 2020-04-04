const { getPostsForUser, getUserById } = require('./api');
const { users, posts } = require('./data');

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  getUserById(userId, users => {
    const profile = `
      <div>
        ${users.name}
      </div>
    `
    cb(users)
  })
}

module.exports = {
  showPostsForCurrentUser,
  showUserProfile
}
