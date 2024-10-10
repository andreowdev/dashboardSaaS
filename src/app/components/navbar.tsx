export default function Navbar() {

      return(
      <div className="">
            <div className="text-xl font-bold font-sans text-[#5D5FEF] m-10" id="title">
                  <h1>L.A Soft Solutions</h1>
            </div>
            <div className=" flex p-2    text-black">
            <form>
                  <select>
                        <option value="">Status</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Desativado">Desativo</option>
                  </select>
            </form>
            <input type="date" placeholder="Data do Pedido"/>
            <input type="date" placeholder="Realização"/> 
            <input type="text" placeholder="Pesquisa"/>
            </div>
      </div>
      )
}
