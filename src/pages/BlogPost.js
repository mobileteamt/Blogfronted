import BlogPostPage from "../components/BlogPostPage";


const blogPosts = [
    {
      title: "The Art of Making Perfect Pasta",
      description: "Discover the secrets to homemade pasta that melts in your mouth.",
      fullDescription:
        "Learn how to craft traditional Italian pasta from scratch — from selecting the right flour to kneading, resting, rolling, and pairing it with the perfect sauce. Whether it’s fettuccine or ravioli, homemade pasta offers flavor and texture store-bought can’t match.",
      author: "Chef Maria Rossi",
      date: "2025-05-01",
    },
    {
      title: "Street Foods Around the World",
      description: "A culinary tour of the best street foods you must try.",
      fullDescription:
        "From Indian samosas to Mexican tacos and Thai mango sticky rice, street food captures the soul of a culture. Explore must-try dishes from different continents and tips on where to find the most authentic versions.",
      author: "Anthony Delgado",
      date: "2025-04-20",
    },
    {
      title: "Mastering Sourdough Bread at Home",
      description: "Tips and tricks for baking rustic sourdough with a perfect crust.",
      fullDescription:
        "Sourdough is an art that combines patience and technique. This guide walks you through building your starter, understanding fermentation, scoring, and baking loaves that are chewy inside and golden outside.",
      author: "Baker Linh Tran",
      date: "2025-04-10",
    },
  ];
  

const BlogPost = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <BlogPostPage key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPost;
