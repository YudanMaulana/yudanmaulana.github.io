import './index.css'

function Navbar() {
    return (
        <nav className='flex text-slate bg-slate-900/30 w-screen justify-center backdrop-blur-sm fixed'>
            <a className='navbar' href='#'>Beranda</a>
            <a className='navbar' href='#'>Artikel</a>
            <a className='navbar' href='#'>Tentang</a>
        </nav>
    )
}

export default Navbar