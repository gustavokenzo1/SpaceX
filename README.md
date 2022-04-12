# SpaceX

# Status
Work In Progress

# About
This is a project that I have been wanting to do for a while, I just had no idea where to begin with, so I decided to just sit on my chair and search for some videos and documentations. It is a ReactJS web app that consumes the SpaceX API. Since I like to learn new things every project, I decided that I wanted to use GraphQL instead of the more common REST approach.

I found out that GraphQL was quite pleasant to work with. From what I've read, the benefits only show up on larger applications, due to it's increased complexity for small projects, if you are the one developing the API. Since I'm just consuming this API, I could take full advantage of the benefits of GraphQL, such as only needing to make 1 requisition, and modeling the requisition with what and how I actually want the response to be, instead of making a requisitions that sends everything and then filtering on the client-side, like REST APIs.

For the 3D part, I used React Three Fiber, which is a React no-compromises adaptation of ThreeJS. While being a very complete adaptation, I found it quite hard to learn, since Fiber has way less material on the internet, so I had to rely a lot on the documentation, which was very helpful. React Three Fiber takes benefits from React, such as Hooks and Components, which makes the code much cleaner than codes I've read that used ThreeJS. For the camera movements, I combined Fiber's Canvas Camera with React Three Drei for adding Stars and Orbit Controls. I also added custom Shaders using GLSL. For this part, it was mostly following a video along, because we had to manipulate vectors and matrices, which was very confusing and is something I'll have to study further later.

For styling, I used styled-compoents, which made it very easy to work with re-using styles and conditionally changing them according to, for example, some state. Along with styled-compoents, I experimented with the Framer Motion library, which is used for animations. It made it very easy to make animations when the page was loaded, an action happened or the component was umounted from the DOM.

And, finally, I used TypeScript as the main language. That's because, although many people hate having to type their variables, it proved to be extremely helpful as this project started growing in number of files, reducing the amount of error because of different types that JavaScript might've missed. It was also really nice when paired with React's Context API, which provided auto-completion throughout the whole application once I declared the types on the context folder.

This is my favorite project so far. I wanted to make it special because it combines two fields I really enjoy: Programming and Space. It also was developed exactly 1 year after I started programming, so I wanted to make something kind of like a progress ruler. 

# Technologies
As mentioned above, here is a summary:

- ReactJS
- TypeScript
- Styled Components
- ThreeJS
- React Three Fiber
- React Three Drei
- GraphQL
- GLSL
- Framer Motion

# Images

![alt text](https://github.com/gustavokenzo1/SpaceX/blob/main/thumbnail.png?raw=true)
