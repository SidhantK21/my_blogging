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
        <div className="w-full h-auto flex flex-col md:flex-row bg-white shadow-xl rounded-l-xl rounded-bl-xl  overflow-hidden">
            {/* Image Section */}
            <div className="h-60 md:h-auto md:w-1/2">
                <img
                    src={imageUrl}
                    alt="Blog"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-6 md:w-1/2">
                <div>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full uppercase font-semibold tracking-tighter text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
    {category}
</span>
                    <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-800">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={author.avatar}
                            alt={author.name}
                        />
                        <div>
                            <p className="text-sm font-medium text-gray-700">{author.name}</p>
                            <p className="text-xs text-gray-500">{date}</p>
                        </div>
                    </div>
                    <button className="text-indigo-600 font-semibold text-sm hover:underline">
                        Read More →
                    </button>
                </div>
            </div>
        </div>
    );
};
