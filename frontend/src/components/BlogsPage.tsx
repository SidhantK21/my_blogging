import { BlogCard } from "./BlogCard"; // Adjust path as needed



const blogPosts = [
    {
        title: "How AI is Transforming the Tech Landscape",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat cum ad libero minus! Magni, obcaecati. Vel aut illo blanditiis. Ab fugit, accusantium nemo id in sequi error similique mollitia ipsum nam quos praesentium voluptatem perspiciatis odio repellat exercitationem? Consectetur explicabo harum repellendus quo impedit est totam saepe sequi ea similique velit natus, beatae autem odit iusto cupiditate nemo ab quod facere ",
        imageUrl: "https://images.unsplash.com/photo-1743125612767-0f54571fb1fa?w=900",
        category: "Technology",
        author: {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        date: "April 10, 2025",
    },
    {
        title: "The Future of Web Development",
        description: "Explore trends like serverless, edge computing, and component-first design.",
        imageUrl: "https://source.unsplash.com/600x400/?coding",
        category: "Web Dev",
        author: {
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        date: "April 8, 2025",
    },
    // Add more objects here
];

export default function BlogPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto grid gap-10">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </div>
    );
}
