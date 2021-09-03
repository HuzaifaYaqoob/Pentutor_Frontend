


const BlogView = (props) => {
    return (
        <div>
            <div className=' relative w-full h-96 bg-cover bg-center bg-no-repeat mb-10' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/blog/blogImage.png)` }}>
                <div className='absolute bottom-5 text-center  w-full'>
                    <p className='bg-yellow-450 py-3 px-10 text-white font-bold inline-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

            </div>
            <div className='container mx-auto border border-gray-300 py-16 px-10'>
                <div className='mb-3'>
                    <h3 className='mb-4 text-indigo-900 font-bold text-lg'>Description Heading</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptas excepturi eaque unde rem illum necessitatibus ad veniam. Laborum, magnam reiciendis id perferendis a enim optio eos atque? Assumenda odit, laborum nulla, hic animi modi dolorem dolores quod, debitis magnam perspiciatis. Vitae animi ipsam, quidem explicabo libero, consequatur fugiat similique nihil, ad ipsum totam quia. Omnis mollitia pariatur accusamus, nostrum, assumenda illo natus facere cum tenetur sit consequuntur fugit odio labore qui animi? Id beatae porro explicabo obcaecati dolore, provident deleniti tenetur harum dolores dolor fugit optio ipsam ut, quae modi itaque expedita dicta aspernatur cupiditate ullam, unde repellat maiores laboriosam. Eaque tenetur labore sed et optio aspernatur, deserunt porro dignissimos! Non nam, ad rerum error nesciunt voluptates repudiandae quae fuga esse fugiat reprehenderit illo. Eum ex laborum aspernatur aut repellat. Labore tenetur quaerat, aut consectetur ratione sunt fugit, eveniet repellat, unde corporis saepe! Tempore, maxime sit! Eius delectus impedit quam corporis maiores a non deserunt culpa ea. Sit, accusamus commodi. Ipsam sequi harum esse nihil ab. Deleniti esse numquam quaerat doloremque itaque vel nam unde reiciendis ipsa ducimus repudiandae culpa modi optio nihil, illum ratione facere odit vitae consequuntur sequi? Id, numquam magni. Laborum dicta, minus beatae quisquam voluptatibus debitis iste. Non eveniet officiis in quidem sed suscipit asperiores deserunt, accusamus rem cupiditate vel autem aspernatur eius modi nemo? Excepturi ullam facere explicabo id debitis ab rem, aliquid nesciunt obcaecati error! Vero sunt consequatur numquam quod quo excepturi accusantium voluptatum soluta adipisci, mollitia omnis repudiandae autem deserunt placeat! Doloremque reprehenderit consectetur totam ratione iusto! Veritatis excepturi ea repellendus impedit placeat. Cum non debitis sit neque iure iusto, accusamus magnam fugiat fugit quam! Error, impedit nam. Enim optio soluta eligendi facere? Temporibus asperiores explicabo assumenda dolorum officia. Corporis aliquid nesciunt nihil reiciendis beatae adipisci laudantium consequatur earum esse! Modi reiciendis veritatis iure cupiditate officiis molestiae itaque veniam reprehenderit eos odio, sed fugit eligendi pariatur rem at! Voluptas quod voluptates esse autem, dolor enim excepturi, asperiores minima maiores odit fugiat cumque in error eligendi impedit voluptatem beatae fuga ipsam totam magni! Officiis exercitationem pariatur itaque eligendi debitis ducimus neque voluptates architecto nam? Voluptas ex debitis quasi, voluptatem incidunt laborum a amet praesentium cumque ullam cum perferendis, esse sint sunt officiis repellat necessitatibus iusto recusandae excepturi. Quae vero quibusdam atque? Ut voluptates provident veniam non inventore nobis quibusdam nisi minima mollitia! Exercitationem architecto quia dolorum eligendi quasi beatae eum, totam quo ipsam?</p>
                </div>
                <div>
                    <h3 className='mb-4 text-indigo-900 font-bold text-lg'>Points To Be Noted</h3>
                    <div className='ml-3 text-sm'>

                        <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogView