import './index.css'
import Imagebg from './assets/santriproject/harisantri.jpg'

function Home() {
    return(
        <>
        <div className='bg-green-700 flex w-screen text-3xl' style={{ backgroundImage: `url(${Imagebg})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className="w-screen h-screen flex flex-col relative justify-center items-center">
            <div className='bg-black/10 p-4 absolute flex justify-center w-auto mt-20 flex-col items-center backdrop-blur-sm text-center rounded-xl border-0'>
                <h2 className='text-green-100 py-5 flex p-10'>Selamat Datang !</h2>
                <p className='text-green-100 py-5 pt-10 p-10 text-2xl flex'>Situs yang menampung seluruh Santri Nusantara.</p>
                <button className='bg-green-800 hover:bg-green-900 transition-all duration-200 rounded-lg w-auto flex p-2'><a href="#" className='text-lg text-green-100'>Selengkapnya</a></button>
            </div>
</div>
        </div>
        {/* <p className='text-xl p-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium porro molestias, dolores eum totam aut officia enim a vitae dolore, minima, veritatis laboriosam numquam perferendis velit odit corrupti itaque esse ipsa facere! Veniam optio tenetur expedita velit harum ex! Iusto officiis inventore animi vero tenetur! Culpa laudantium minus aliquam id. Laudantium odio doloribus iste beatae saepe nostrum. Magnam quas voluptatem voluptas. Nisi nemo amet, fuga quasi blanditiis commodi modi, consectetur nulla vitae eos voluptatum in quis. Quas ratione laborum corrupti, est minus culpa voluptatem vitae enim inventore, nihil recusandae deleniti. Esse sed officiis fugiat consectetur vitae, reiciendis impedit perferendis. Ipsum voluptatibus et enim recusandae voluptates doloremque, cumque repellat. Modi iusto pariatur eaque reprehenderit ducimus, eum esse aliquam. Dignissimos corrupti aliquid illum delectus magnam, consequuntur similique quis ad dicta ratione a dolorem nostrum aspernatur sint necessitatibus beatae laborum veniam voluptatibus omnis quibusdam culpa quidem. Repudiandae vitae voluptatem exercitationem! Quibusdam fugiat doloribus inventore voluptas dicta reiciendis. A autem similique sunt deserunt ipsa magnam nesciunt esse perspiciatis amet aut ab obcaecati, maiores consectetur, quas unde consequatur aliquid iusto praesentium voluptas quaerat voluptatibus culpa quasi beatae! Est cum, nulla eius excepturi consequatur culpa et repudiandae ratione quod ipsum doloremque ea eos vel distinctio!</p> */}
        </>
    )
}

export default Home