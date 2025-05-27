import { motion } from "framer-motion";

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

interface BlogDetailProps {
    post: BlogPost;
    onClose: () => void;
}

export const BlogDetail = ({ post, onClose }: BlogDetailProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Blog content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <span className="text-sm px-3 py-1 bg-gray-100 rounded-full uppercase font-semibold tracking-tighter text-black inline-block mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="font-medium">{post.author.name}</span>
                            </div>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Featured image */}
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                            {post.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}; 