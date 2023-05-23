interface IPost {
  _id: string,
  text: string,
  image: string,
  comments?: Array<{
    userId: string,
    id_comment: number,
    comment: string
  }>,
  likes: {
    quantity: number,
    userIds: string[]
  },
  createdByUserId: string,
  createdAt: Date,
}

export default IPost;
