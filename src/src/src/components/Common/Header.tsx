const Header = () => {
  return (
    <>
    <header className="fixed  h-14 w-full px-12 bg-white flex items-center justify-between text-gray-800">
      <div>
        <p className="text-xl">
          <span className="text-2xl text-red-600 font-semibold">T</span>ask <span className="text-2xl text-green-600 font-semibold">D</span>eck
        </p>
      </div>
      <ul className="flex">
        <li>
          <button 
          className="text-sm h-14 w-20 bg-red-600 text-white hover:bg-red-500 transition-all"
          >
            登録
          </button>
        </li>
        <li>
          <button 
          className="text-sm h-14 w-20 hover:bg-neutral-100 transition-all"
          >
            ログイン
          </button>
        </li>
      </ul>
    </header>
    </>
  )
}

export default Header