export default function BarraBuscador({ itemToSearch, setItemToSearch }) {
  return (
    <>
      <input
        className="form-control mt-5 ms-5  text-white border border-dark fw- bg-dark bg-gradient "
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
