# İksirsi API

_This api is the open source API of the iksirsi.com website_

#### Endpoints

_Base URL_: `https://iksirsi-api.onrender.com/`

##### Posts

_All ends go through the same control and the same service. (Base controller and base service)_

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
- **Post**
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: string,
      poster: URL,
      content: [
        {
          type: "code",
          text: string,
        },
        {
          type: "p",
          text: string,
        },
        {
          type: "img",
          img_source: URL,
        },
      ],
      medium_link: "",
      tags: [],
      info: {
        author: {
          user_name: string,
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
- **Update**
  <br>
  ```js
  fetch("https://iksirsi-api.onrender.com/posts", {
    method: "PUT",
    body: JSON.stringify({
      title: string,
      poster: URL,
      content: [
        {
          type: "code",
          text: string,
        },
        {
          type: "p",
          text: string,
        },
        {
          type: "img",
          img_source: URL,
        },
      ],
      medium_link: "",
      tags: [],
      info: {
        author: {
          user_name: string,
        },
      },
    }),
  });
  ```
