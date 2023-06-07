//dans ce composant on a recupéré quelques données de l'API album  dans un tableau

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };
  return (
    <tr>
      <th><a href={item.url}>{item.idAlbum}</a></th>
      <th>{item.idArtist}</th>
      <th>{item.idLabel}</th>
      <th>{item.strAlbum}</th>
      <th>{item.strArtist}</th>
      <th>{item.intYearReleased}</th>
      <th>{item.strLabel}</th>
      <th>
        <button type="button" className="btn btn-danger" onClick={handleRemoveItem}>Dismiss</button>
      </th>
    </tr>
  );
};

export default Item;