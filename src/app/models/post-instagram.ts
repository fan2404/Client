export interface Post {
  author: string;
  avi: string;
  post: string;
  caption: string;
  timestamp: Date;
  likes: number;
  comments: number;
  source: string;
}

  /*equals(post: Post): boolean {

    return this.author === post.author
      && this.avi === post.avi
      && this.post === post.post
      && this.caption === post.caption
      && this.timestamp === post.timestamp
      && this.likes === post.likes
      && this.comments === post.comments
      && this.source === post.source;
  }*/
