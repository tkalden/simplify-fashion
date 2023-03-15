
export const folder = {
    "shoe-folder": "/images/shoes",
    "dress-folder": "/images/dress"
}
export const pages = { 'virtual-closet': 'View Current Closet', 'virtual-try-on': 'Virtual Try On' };
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const CLOTHING = [
    {
        "title": "White Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["dress-folder"] + "/white-glittering-dress.jpg",
        "type": "dress"

    },
    {
        "title": "Zebra Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["dress-folder"] + "/zebra-dress.jpg",
        "type": "dress"


    },
    {
        "title": "Striped Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["dress-folder"] + "/striped-dress.jpg"

    },
    {
        "title": "Dot Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["dress-folder"] + "/dot-dress.jpg",
        "type": "dress"


    },
    {
        "title": "Plain Black Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": folder["dress-folder"] + "/plain-black-dress.jpg",
        "type": "dress"


    }

]


export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};