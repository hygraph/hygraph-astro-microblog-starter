# More Button in Astro with Hygraph Pagination

This is a demo that corresponds to [this article](https://hygraph.com/blog/lazy-load-content-astro-hygraph-pagination) about Hygraph pagination. 

## Getting Started 

For the quickest start, use the button below to clone the Hygraph project with schemas and content. 

[![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/17eb970b42d544c595b5772ba3614551?name=Microblog)


For a slightly slower start, you'll need a new Hygraph project with a `post` schema that has a `slug` and `content` field. `content` should be a Rich Text field.

To run the site locally run the following commands in your CLI.

```
git clone git@github.com:brob/astro-hygraph-timeline-example.git

cd astro-hygraph-timeline-example && npm install
```

Once you have that, create a `.env` file in the root directory and the `ASTRO_HYGRAPH_ENDPOINT` variable with a link to your API endpoint from Hygraph.

