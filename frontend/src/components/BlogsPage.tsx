import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { AnimatePresence, motion } from "motion/react";
import Footer from "./LandingPageComp/Footer";
import Navbar from "./Navbar";

interface BlogPost {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
}

const blogPosts: BlogPost[] = [
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
        imageUrl: "https://images.unsplash.com/photo-1743125612767-0f54571fb1fa?w=900",
        category: "Web Dev",
        author: {
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        date: "April 8, 2025",
    },
    {
        title: "Sustainable Living in the Digital Age",
        description: "Discover how technology can help us live more sustainably while maintaining our digital lifestyle.",
        imageUrl: "https://source.unsplash.com/600x400/?sustainability",
        category: "Lifestyle",
        author: {
            name: "Alex Green",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        date: "April 5, 2025",
    },
    {
        title: "The Art of Mindful Coding",
        description: "Learn how mindfulness practices can improve your coding skills and overall productivity.",
        imageUrl: "https://source.unsplash.com/600x400/?mindfulness",
        category: "Productivity",
        author: {
            name: "Sarah Chen",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        date: "April 3, 2025",
    },
    {
        title: "Building Scalable Applications",
        description: "Best practices and patterns for creating applications that can handle millions of users.",
        imageUrl: "https://source.unsplash.com/600x400/?architecture",
        category: "Development",
        author: {
            name: "Mike Johnson",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        date: "April 1, 2025",
    },
    {
        title: "The Psychology of User Experience",
        description: "Understanding how users think and behave to create better digital experiences.",
        imageUrl: "https://unsplash.com/photos/aerial-view-of-village-on-mountain-cliff-during-orange-sunset-cYrMQA7a3Wc",
        category: "UX Design",
        author: {
            name: "Emily Brown",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        date: "March 30, 2025",
    },
];

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

    const postsPerPage = 3;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const currentPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <Navbar/>
        <div className="min-h-screen relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Blog List */}
                <AnimatePresence>
                    <div className="space-y-8 mb-16">
                        {currentPosts.map((post, index) => (
                            <div key={index} className="cursor-pointer" onClick={() => setCurrentPost(post)}>
                                <motion.div
                                    layoutId={`post-${(currentPage - 1) * postsPerPage + index}`}
                                >
                                    <BlogCard {...post} />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </AnimatePresence>

                {/* Modal for displaying selected post */}
                <AnimatePresence>
                    {currentPost && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                            onClick={() => setCurrentPost(null)}
                        >
                            {/* Find the index of the current post to determine the layoutId */}
                            {(() => {
                                const postIndex = blogPosts.findIndex(
                                    (post) => post.title === currentPost.title
                                );
                                const pageIndex = Math.floor(postIndex / postsPerPage);
                                const inPageIndex = postIndex % postsPerPage;
                                
                                return (
                                    <motion.div
                                        layoutId={`post-${pageIndex * postsPerPage + inPageIndex}`}
                                        className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img src={currentPost.imageUrl} alt="" className="rounded-lg" />

                                        <div className="pt-2">
                                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                {currentPost.title}
                                            </h2>
                                        </div>

                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-3">
                                            <img
                                                src={currentPost.author.avatar}
                                                alt={currentPost.author.name}
                                                className="w-6 h-6 rounded-full"
                                            />
                                            <span>By {currentPost.author.name}</span> •{' '}
                                            <time dateTime={currentPost.date}>{currentPost.date}</time>
                                        </div>

                                        <article className="prose prose-lg dark:prose-invert max-w-none">
                                            {currentPost.description}
                                        </article>

                                        <button
                                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                            onClick={() => setCurrentPost(null)}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                );
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                <div className="flex justify-center">
                    <nav className="inline-flex items-center space-x-2 rounded-lg bg-white p-2 shadow-sm" aria-label="Pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md
                             disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </button>

                        <div className="flex space-x-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                        currentPage === page
                                            ? 'bg-black text-white'
                                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}