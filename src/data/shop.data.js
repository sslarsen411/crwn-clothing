import imgFiles from './shop.images'

const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: imgFiles.brownBrim,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: imgFiles.blueBeanie,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: imgFiles.brownCowboy,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: imgFiles.greyBrim,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: imgFiles.greenBeanie,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: imgFiles.palmTreeCap,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: imgFiles.redBeanie,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: imgFiles.wolfCap,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: imgFiles.blueSnapback,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: imgFiles.adidasNmd,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: imgFiles.yeezy,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: imgFiles.blackConverse,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: imgFiles.whiteNikeHighTops,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: imgFiles.nikesRed,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: imgFiles.nikeBrown,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: imgFiles.nikeFunky,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: imgFiles.timberlands,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: imgFiles.blackShearling,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: imgFiles.blueJeanJacket,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: imgFiles.greyJeanJacket,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: imgFiles.brownShearling,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: imgFiles.brownTrench,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tank Top',
        imageUrl: imgFiles.blueTank,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: imgFiles.floralBlouse,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: imgFiles.floralSkirt,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: imgFiles.redPolkaDotDress,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: imgFiles.stripedSweater,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: imgFiles.yellowTrackSuit,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: imgFiles.whiteVest,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: imgFiles.camoVest,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: imgFiles.floralShirt,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: imgFiles.longSleeve,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: imgFiles.pinkShirt,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: imgFiles.rollUpJeanShirt,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: imgFiles.polkaDotShirt,
        price: 25
      }
    ]
  }
}

export default SHOP_DATA
