import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  const urls = [{name: "Myztree", link: "https://img.itch.zone/aW1nLzMyNjM3MzUucG5n/315x250%23c/F1jYEr.png"},
  {name: "Star Marten", link: "https://img.itch.zone/aW1hZ2UvMzAyMjg2LzE0NzkyMzYucG5n/315x250%23c/dES5f5.png"},
  {name: "Demon Lord's Birthday", link: "https://img.itch.zone/aW1nLzM3NTk0NTYucG5n/315x250%23c/fE%2FivB.png"},
  {name: "Tiny Tacticians", link: "https://img.itch.zone/aW1nLzU4NTczNTEucG5n/315x250%23c/wdfol1.png"},
  {name: "Sleepy Cookie Eatie", link: "https://img.itch.zone/aW1nLzU3OTY4NDMucG5n/105x83%23/QBU%2B30.png"},
  {name: "Yonko Battle", link: "https://img.itch.zone/aW1nLzI0MzE5MDcucG5n/315x250%23c/T89JqF.png"},
]

  const getProjFromName= (name) => {
    const url = urls.find((url) => url.name === name)
    return !!url && url.link || ""
  }

  return (
    <Section title="All Projects">
      {posts.map((post, index) => (
        <div style={{display: "flex", flexDirection:"row", alignItems: "center"}}>
          <img src={getProjFromName(post.node.frontmatter.title)}alt="" style={{width: "105px", height: "83px", margin: "20px"}}/>
          <SummaryItem
            key={post.node.fields.slug}
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
        </div>
      ))}
    </Section>
  );
};

export default BlogPosts;
