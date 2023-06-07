import "./styles.css";
import LoadingSpinner from "./LoadingSpinner";
import React from "react";
import List from "./List";
import InputWithLabel from "./InputWithLabel";
import { useToast } from '@chakra-ui/react'

//On a stocké l'URL de l'API utilisée dans une constante appelé API_ENDPOINT
const API_ENDPOINT = "https://theaudiodb.com/api/v1/json/2/album.php?i=112024";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    "");
  const [albums, setAlbums] = React.useState([]);//pour la liste des albums
  const [isLoading, setIsLoading] = React.useState(false); //pour indiquer si les données sont en cours de chargement
  const [isError, setIsError] = React.useState(false); //pour indiquer s'il y a une erreur lors de la récupération des données
  const [url, setUrl] = React.useState(`${API_ENDPOINT}`);
  const toast = useToast()


  React.useEffect(() => {
    setIsLoading(true); //pour afficher le spinner de chargement
    //on a utilisé setTimeout pour simuler un délai de 2 secondes avant d'effectuer la requête fetch vers l'URL spécifiée
    setTimeout(function () {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setAlbums(result.album);   //ici la liste des albums est mise à jour dans l'état albums
          console.log(result)
          setIsLoading(false); //après on a désactivé IsLoading pour afficher la liste des albums
        })
        .catch(() => setIsError(true));
    }, 2000);

  }, [url]);

  //Suppression d'un album 
  const handleRemoveAlbum = (item) => {
    toast({
      title: 'Album deleted.',
      description: "Album have been deleted successefully",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    const newAlbums = albums.filter(
      (album) => item.idAlbum !== album.idAlbum
    );
    setAlbums(newAlbums);
  };

  const handleSearchInput = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  };

  const SearchedList = albums.filter(res => res.strAlbum.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div className="container-sm">
        <h1 className="d-flex justify-content-center">Album </h1>
        <InputWithLabel
          id="search"
          value={searchTerm}
          onInputChange={handleSearchInput}
        >
          <strong>Search:</strong>
        </InputWithLabel>

        <hr />
        {isError && <p>Something went wrong ...</p>}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <List list={SearchedList} onRemoveItem={handleRemoveAlbum} />
        )}
      </div>

      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3">
          © 2023 Copyright: Nouran ZOUABI
        </div>
      </footer>
    </>
  );
};


export default App;
