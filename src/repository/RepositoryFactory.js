import CommentRepository from "./CommentRepository";
import UserRepository from "./UserRepository";
import PostRepository from "./PostRepository";

const repositories = {
  comments: CommentRepository,
  users: UserRepository,
  posts: PostRepository,
};

export default {
  get: (name) => repositories[name],
};