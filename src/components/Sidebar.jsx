
export default function Sidebar({}) {

  return (
    <aside className="h-screen max-w-48 bg-gray-100 px-1 py-1">
        <div className="h-full flex flex-col  bg-gray-100 p-4">
            <div className="mb-4 flex flex-col items-center">
                <img src="https://img.logoipsum.com/351.svg" className="w-36 h-36" alt=""/>
                <h1 className="text-xl">WIKI</h1>
            </div>
            <h1 className="text-left text-sm font-bold mb-6">página principal</h1>
            <nav className="text-left text-sm mb-6">
                <h1 className="border-b font-bold">colaboração</h1>
                <p>criar página</p>
                <p>criar categoria</p>
                <p>adicionar quote</p>
                <p>adicionar imagem</p>
            </nav>
            <nav className="text-left text-sm mb-6">
                <h1 className="border-b font-bold">administração</h1>
                <p>usuários</p>
            </nav>
            <nav className="text-left text-sm mb-6">
                <h1 className="border-b font-bold">navegação</h1>
                <p>todas as páginas</p>
                <p>todas as categorias</p>
            </nav>
            <nav className="text-left text-sm mb-6">
                <h1 className="border-b font-bold">principais categorias</h1>

            </nav>
            <nav className="text-left text-sm mb-6">
                <h1 className="border-b font-bold">últimas páginas</h1>

            </nav>


        </div>
    </aside> 
  )
}