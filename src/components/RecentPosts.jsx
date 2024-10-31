"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PostSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-48 bg-gray-200 animate-pulse" />
        <div className="p-4 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
            </div>
        </div>
    </div>
)

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
}

const RecentPosts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts')
                const { success, data } = await response.json()

                if (!success) {
                    throw new Error('Failed to fetch posts')
                }

                setPosts(data.data || [])
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (isLoading) {
        return (
            <div className="w-full space-y-6 container mx-auto px-4 md:px-40 my-24">
                <h2 className="font-bold mb-6 text-center text-6xl" id="harper-bold">Recent Posts</h2>
                <p className="text-gray-600 text-center text-lg mb-12">Stay updated with our latest articles and insights</p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <PostSkeleton key={index} />
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full p-4 bg-red-50 text-red-600 rounded-lg"
            >
                Error: {error}
            </motion.div>
        )
    }

    if (!posts.length) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full p-4 text-gray-600 text-center"
            >
                No posts available yet.
            </motion.div>
        )
    }

    return (
        <div className="w-full space-y-6 container mx-auto px-4 md:px-40 my-24">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-bold mb-6 text-center text-6xl"
                id="harper-bold"
            >
                Recent Posts
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-center text-lg mb-12 font-semibold"
            >
                Stay updated with our latest articles and insights
            </motion.p>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {posts.slice(0, 9).map(post => (
                    <motion.article
                        key={post.id}
                        variants={item}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        whileHover={{ y: -5 }}
                    >
                        {post.thumbnail_url && (
                            <img
                                src={post.thumbnail_url}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">
                                {post.title}
                            </h3>
                            {post.subtitle && (
                                <p className="text-gray-600 mb-3">
                                    {post.subtitle}
                                </p>
                            )}
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>
                                    {new Date(post.publish_date * 1000).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                {post.web_url && (
                                    <a
                                        href={post.web_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Read more →
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    )
}

export default RecentPosts