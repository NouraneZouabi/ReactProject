import Item from "./Item";

/* thead : on a les en-têtes du tableau
   tbody :on utilise la méthode map pour parcourir chaque élément de la list
   et créer une instance du composant Item pour chaque album. 
   Chaque instance Item contient les propriétés item correspondant à l'album actuel de la boucle 
   et onRemoveItem pour gérer la suppression de l'album.
*/
const List = ({ list, onRemoveItem }) => (
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <td >idAlbum</td>
          <td>idArtist</td>
          <td>Label</td>
          <td>Album</td>
          <td>Artist</td>
          <td>YearReleased</td>
          <td>Label</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <Item item={item} onRemoveItem={onRemoveItem} />
        ))}
      </tbody>
    </table>
  </div>
);

export default List;
