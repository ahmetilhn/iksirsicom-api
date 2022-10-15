# İksirsi API

_This api is the open source API of the iksirsi.com website_

#### Endpoints

_Base URL_: `https://iksirsi-api.onrender.com/`

_All ends go through the same control and the same service. (Base controller and base service)_

##### Posts

- **Get** All Posts
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts?limit=10", {
    method: "GET",
  });
  ```
- **Get** One Post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts/post_id", {
    method: "GET",
  });
  ```
- **Post** Create Post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: String,
      poster: URL,
      content: [
        {
          type: "code",
          text: String,
        },
        {
          type: "p",
          text: String,
        },
        {
          type: "img",
          img_source: String,
        },
      ],
      medium_link: "",
      tags: [String],
      info: {
        author: {
          user_name: String,
        },
      },
    }),
  });
  ```
- **Delete** Delete post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts/post_id", {
    method: "DELETE",
  });
  ```
- **Put** Update Post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts", {
    method: "PUT",
    body: JSON.stringify({
      title: String,
      poster: URL,
      content: [
        {
          type: "code",
          text: String,
        },
        {
          type: "p",
          text: String,
        },
        {
          type: "img",
          img_source: String,
        },
      ],
      medium_link: "",
      tags: [String],
      info: {
        author: {
          user_name: String,
        },
      },
    }),
  });
  ```

##### Users

- **Get** All Users
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/users", {
    method: "GET",
  });
  ```
- **Get** One User
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/users/email || id", {
    method: "GET",
  });
  ```
- **Post** Create User
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: String,
      full_name: String,
      user_name: String,
      avatar: String,
      medium_url: String,
      github_url: String,
      linkedin_url: String,
    }),
  });
  ```
- **Delete** Delete User
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/users", {
    method: "DELETE",
  });
  ```
- **Put** Update User
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/users", {
    method: "PUT",
    body: JSON.stringify({
      email: String,
      full_name: String,
      user_name: String,
      avatar: String,
      medium_url: String,
      github_url: String,
      linkedin_url: String,
    }),
  });
  ```

##### Likes

- **Get** All Likes
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/likes", {
    method: "GET",
  });
  ```
- **Get** Likes of Post
  <br>

  ```js
  fetch("https://iksirsi-api.onrender.com/likes/post_id", {
    method: "GET",
  });
  ```

  ##### Likes

- **Get** All Likes
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/likes", {
    method: "GET",
  });
  ```
- **Get** Likes of Post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/likes/post_id", {
    method: "GET",
  });
  ```
- **Post** Create Like
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/likes", {
    method: "DELETE",
    body: JSON.stringify({
      post_id: String,
    }),
  });
  ```
- **Delete** Delete Like
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/likes/post_id", {
    method: "DELETE",
  });
  ```

##### Views

- **Get** All Views
  <br>

  ```js
  fetch("https://iksirsi-api.onrender.com/views", {
    method: "GET",
  });
  ```

- **Get** Views of Post
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/views/post_id", {
    method: "GET",
  });
  ```
- **Post** Create View
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/views", {
    method: "DELETE",
    body: JSON.stringify({
      post_id: String,
    }),
  });
  ```
- **Delete** Delete View
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/views/post_id", {
    method: "DELETE",
  });
  ```
