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
        </>
    )
}

export default Home