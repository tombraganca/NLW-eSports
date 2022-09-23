import './styles/main.css';
import logoImg from './assets/eSports.svg'
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span>está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 left-0 bottom-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden items-center'>
        <div className='bg-[#2A2634] px-8 py-6 justify-between flex'>
          <div>
            <strong className='text-white text-2xl font-black block'>
              Não encontrou seu duo?
            </strong>
            <span className='text-zinc-400'>
              Publique um anuncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 rounded text-white flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
