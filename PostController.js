import PostService from "./PostService.js";

// Controller
class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      //   res.json(posts);
      //   return res.json(posts);
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);

      res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

// ----> Initial v.
// import Post from "./Post.js";

// class PostController {
//   async create(req, res) {
//     // // Query params
//     // console.log(req.query);

//     // // Body query
//     // console.log(req.body);

//     try {
//       const { author, title, content, picture } = req.body;

//       const post = await Post.create({
//         author,
//         title,
//         content,
//         picture,
//       });

//       res.status(200).json(post);
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }

//   async getAll(req, res) {
//     try {
//       const posts = await Post.find();
//       //   res.json(posts);
//       //   return res.json(posts);
//       res.status(200).json(posts);
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }

//   async getOne(req, res) {
//     try {
//       const { id } = req.params;
//       const post = await Post.findById(id);

//       res.status(200).json(post);
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }

//   async update(req, res) {
//     try {
//       const post = req.body;

//       if (!post._id) {
//         return res.status(400).json({ message: "id - не указан" });
//       }

//       const updatePost = await Post.findByIdAndUpdate(post._id, post, {
//         new: true,
//       });

//       res.status(200).json(updatePost);
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }

//   async delete(req, res) {
//     try {
//       const { id } = req.params;

//       const post = await Post.findByIdAndDelete(id);

//       if (!post) {
//         return res.status(400).json({ message: "id - не указан" });
//       }

//       res.status(200).json(post);
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }
// }

export default new PostController();
