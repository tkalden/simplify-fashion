
let imageFolder = "/images/dress"
export const CLOTHING = [
    {
        "title": "White Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": imageFolder + "/white-glittering-dress.jpg"

    },
    {
        "title": "Zebra Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": imageFolder + "/zebra-dress.jpg"

    },
    {
        "title": "Striped Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": imageFolder + "/striped-dress.jpg"

    },
    {
        "title": "Dot Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": imageFolder + "/dot-dress.jpg"

    },
    {
        "title": "Plain Black Dress",
        "description": "This is white dress that goes well with the dddddd",
        "imageURL": imageFolder + "/plain-black-dress.jpg"

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
        items: 3
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