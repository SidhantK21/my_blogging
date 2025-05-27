import { motion } from "framer-motion";

type BlogCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
};

export const BlogCard = ({
    title,
    description,
    imageUrl,
    category,
    author,
    date,
}: BlogCardProps) => {
    return (
        <motion.div
            layout
            className="bg-white rounded-xl shadow-md overflow-hidden"
        >
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <motion.div 
                    layout
                    className="md:w-1/3 h-64 md:h-auto"
                >
                    <img
                        src={imageUrl}
                        alt="Blog"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                    layout
                    className="flex flex-col justify-between p-6 md:w-2/3"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <motion.span 
                                layout
                                className="text-xs px-3 py-1 bg-gray-100 rounded-full uppercase font-semibold tracking-tighter text-black"
                            >
                                {category}
                            </motion.span>
                            <motion.span 
                                layout
                                className="text-sm text-gray-500"
                            >
                                {date}
                            </motion.span>
                        </div>
                        <motion.h2 
                            layout
                            className="text-2xl font-bold mb-3 text-gray-800"
                        >
                            {title}
                        </motion.h2>
                        <motion.p 
                            layout
                            className="text-gray-600 text-base leading-relaxed line-clamp-3"
                        >
                            {description}
                        </motion.p>
                    </div>
                    
                    <motion.div 
                        layout
                        className="mt-6 flex items-center justify-between"
                    >
                        <motion.div 
                            layout
                            className="flex items-center gap-3"
                        >
                            <motion.img
                                layout
                                className="w-10 h-10 rounded-full object-cover"
                                src={author.avatar}
                                alt={author.name}
                            />
                            <motion.p 
                                layout
                                className="text-sm font-medium text-gray-700"
                            >
                                {author.name}
                            </motion.p>
                        </motion.div>
                        <motion.button 
                            layout
                            className="text-black font-semibold text-sm hover:text-gray-700 transition-colors cursor-pointer"
                        >
                            Read More →
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};
