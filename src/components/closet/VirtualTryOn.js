
import { folder } from '../../static/helper/constant'

export default function VirtualTryOn(props) {
    const test =
    {
        "title": "Black Sandal ",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["shoe-folder"] + "/black-sandal.jpg"

    }
    return (
        <button onClick={() => props.updateCurrentClothing(oldArray => [...oldArray, test])}>Add</button>

    );
}
