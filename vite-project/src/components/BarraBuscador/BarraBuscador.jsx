export default function BarraBuscador({ itemToSearch, setItemToSearch }) {
  return (
    <input
      className="form-control me-2"
      type="text"
      placeholder="Buscar"
      aria-label="Buscar"
      value={itemToSearch}
      onChange={(e) => setItemToSearch(e.target.value)}
    />
  );
}
