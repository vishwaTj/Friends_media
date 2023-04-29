import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";


function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
       removeAlbum(album);
    }
    const header = <>
        <Button className='mr-2 border-black' loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>
    return (
     <div className="border-yellow-400"> 
      <ExpandablePanel key={album.id} warning header={header}>
         <PhotosList album={album} />
      </ExpandablePanel>
     </div> );
}

export default AlbumsListItem;


