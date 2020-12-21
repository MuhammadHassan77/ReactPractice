// import P-img From './hero_bg_pk.jpg';
// var Vehicles, Animals, Mobiles, FashionBeaty, abc;
const INITIAL_STATE = {
    province: ['Sindh', 'Punjab', 'Balochistan', 'Khyber Pakhtonkhwa'],
    city: ['Bahawalpur', 'Bannu', 'Chitral', 'Dera Ghazi Khan', 'Dera Ismail Khan',
            'Faisalabad', 'Gilgit', 'Gujranwala', 'Gujrat', 'Gwadar', 'Hyderabad', 'Jiwani',
            'Karachi', 'Lahore', 'Larkana', 'Mardan', 'Nawabshah', 'Ormara', 'Panjgur', 'Pasni', 'Peshawar',
            'Quetta', 'Saidu', 'Skardu', 'Sukkur',
            'Surab', 'Tank'],
    subcategories: {
        "Vehicles": ["Car", "Bike", "Tractor", "Bus", "Boat", "Other Vehicles"],
        "Animals": ["Cats", "Dogs", "Parrots", "Fishes", "Ducks", "Pigeons"],
        "Mobiles": ["Mobiles", "Tablets", "Accessories"],
        "Fashion & Beauty": ["Other Fashion", "Couture", "Lawn & Pret", "Wedding", "Watches", "Skin & Hair", "Make Up", "Jewellery", "Footwear", "Clothes", "Accessories"],
        // abc = ["Other Fashion", "Couture", "Lawn & Pret", "Wedding", "Watches", "Skin & Hair", "Make Up", "Jewellery", "Footwear", "Clothes", "Accessories"],
    },
    categories: ["Vehicles", "Animals", "Mobiles", "Fashion & Beauty",],

    adv: [{
        'id': 1,
        'pname': "Car",
        'price': 2700000,
        'description': "Civic",
        // images: P_img,
        'date': "07-11-2020",
        'location': "Karachi",
    },
    {
        'id': 2,
        'pname': "Bike",
        'price': 55000,
        'description': "Honda",
        // images: P_img,
        'date': "24-09-2020",
        'location': "Lahore",
    },
    {
        'id': 3,
        'pname': "TV",
        'price': 35000,
        'description': "Samsung",
        // images: P_img,
        'date': "30-04-2020",
        'location': "Islamabad",
    }, {
        'id': 4,
        'pname': "House",
        'price': 550000,
        'description': "Banglow",
        // images: P_img,
        'date': "30-05-2020",
        'location': "Hyderabad",
    }, {
        'id': 5,
        'pname': "Tablet",
        'price': 650000,
        'description': "Toshiba",
        // images: P_img,
        'date': "10-07-2020",
        'location': "Mulatan",
    }, {
        'id': 6,
        'pname': "Laptop",
        'price': 80000,
        'description': "DELL",
        // images: P_img,
        'date': "17-10-2020",
        'location': "Quetta",
    }, {
        'id': 7,
        'pname': "Furniture",
        'price': 60000,
        'description': "Sofa Set",
        // images: P_img,
        'date': "16-02-2020",
        'location': "Peshawar",
    }, {
        'id': 8,
        'pname': "Land",
        'price': 780000,
        'description': "120 ft Plot",
        // images: P_img,
        'date': "19-03-2020",
        'location': "Gilgit",
    }],
    // default_props: this.state.props,

}
export default (state = INITIAL_STATE) => {
    return state;
}