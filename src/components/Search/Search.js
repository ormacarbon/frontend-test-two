export function Search({ onUpdateSearch }) {
  return (
    <div className="flex center">
      <input placeholder="Pesquise pelo nome..." onChange={onUpdateSearch} />
    </div>
  );
}
