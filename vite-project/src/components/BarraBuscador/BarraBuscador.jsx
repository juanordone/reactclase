export default function BarraBuscador({ itemToSearch, setItemToSearch }) {
  return (
    <>
    <input
      className="form-control mt-5 ms-5  text-primary border border-dark fw-bold "
      style={{ width: "50rem" }}
      type="text"
      placeholder="Buscar "
      aria-label="Buscar"
      value={itemToSearch}
      onChange={(e) => setItemToSearch(e.target.value)}
     
      
    />
    
    </>
  );
}
