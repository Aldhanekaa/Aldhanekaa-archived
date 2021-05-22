export interface siteMetadataI {
  site: {
    siteMetadata: {
      name: string
      about: string
      avatar: string
    }
  }
}

export interface BlogPost {
  id: string
  titles: string
  slug: string
  cover: {
    file: {
      url: string
    }
  }
  createdAt: string
  description: {
    description: string
  }
  content: {
    content: string
  }
  tags: Array<string>
}
