


import BlogPost from "../Blogs/BlogPost"

const BlogSection = () =>{
    return(
        <div className='py-20 px-5'>
            <div className="container mx-auto ">
                <h3 className='text-indigo-900 font-bold text-3xl text-center mb-9'><span className='text-yellow-400'>Blogs</span></h3>
                <div className='grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    <BlogPost/>
                    <BlogPost className='transform lg:-translate-y-10' />
                    <BlogPost/>
                </div>
                <button className='mx-auto  block my-9 rounded border border-yellow-400 bg-yellow-100 text-yellow-400 py-1 px-3 text-xl'>View All</button>

            </div>
        </div>
    )
}

export default BlogSection