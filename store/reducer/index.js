// import P-img From './hero_bg_pk.jpg';
var subcategories;
const INITIAL_STATE = {
    province: ['Sindh', 'Punjab', 'Balochistan', 'Khyber Pakhtonkhwa'],
    city: ['Karachi', 'Hyderabad', 'Sukkur', 'Nawabshah', 'Larkana', 'Quetta',
        'Jiwani', 'Gwadar', 'Pasni', 'Ormara', 'Panjgur', 'Surab',
        'Lahore', 'Bahawalpur', 'Dera Ghazi Khan', 'Dera Ismail Khan',
        'Faisalabad', 'Gujranwala', 'Gujrat', 'Peshawar',
        'Tank', 'Bannu', 'Mardan', 'Chitral', 'Saidu', 'Gilgit',
        'Chitral', 'Mardan', 'Saidu', 'Skardu'],
        cat: [
            subcategories = [
                ["Car", "Bike", "Tractor", "Bus", "Boat", "Other Vehicles"],
                ["Cats", "Dogs", "Parrots", "Fishes", "Ducks", "Pigeons"],
                ["Mobiles", "Tablets", "Accessories"],
                ["Other Fashion", "Couture", "Lawn & Pret", "Wedding", "Watches", "Skin & Hair", "Make Up", "Jewellery", "Footwear", "Clothes", "Accessories"],
                // ["Other Fashion", "Couture", "Lawn & Pret", "Wedding", "Watches", "Skin & Hair", "Make Up", "Jewellery", "Footwear", "Clothes", "Accessories"],
            ]
        ],
        categories: ["Vehicles", "Animals", "Mobiles", "Fashion & Beauty", "Services"],
    adv: [{
        pname: "Car",
        price: "2700000",
        description: "Civic",
        // images: P_img,
        date: "07-11-2020",
        location: "Karachi",
    }, {
        pname: "Bike",
        price: "55000",
        description: "Honda",
        // images: P_img,
        date: "24-09-2020",
        location: "Lahore",
    }, {
        pname: "TV",
        price: "35000",
        description: "Samsung",
        // images: P_img,
        date: "30-04-2020",
        location: "Islamabad",
    }, {
        pname: "House",
        price: "550000",
        description: "Banglow",
        // images: P_img,
        date: "30-05-2020",
        location: "Hyderabad",
    }, {
        pname: "Tablet",
        price: "650000",
        description: "Toshiba",
        // images: P_img,
        date: "10-07-2020",
        location: "Mulatan",
    }, {
        pname: "Laptop",
        price: "80000",
        description: "DELL",
        // images: P_img,
        date: "17-10-2020",
        location: "Quetta",
    }, {
        pname: "Furniture",
        price: "60000",
        description: "Sofa Set",
        // images: P_img,
        date: "16-02-2020",
        location: "Peshawar",
    }, {
        pname: "Land",
        price: "780000",
        description: "120 ft Plot",
        // images: P_img,
        date: "19-03-2020",
        location: "Gilgit",
    }
    ],
}
export default (state = INITIAL_STATE) => {
    return state;
}