let galleries = [
  {name: "anatomy", count: 13, images: []},
  {name: "characters", count: 19, images: []},
  {name: "landscape", count: 10, images: []},
  {name: "3D", count: 15, images: []}
]

galleries.forEach((gallery) => {
  for (let i = 1; i <= gallery.count; i++) {
    gallery.images.push({tag: `mattdonnici/${gallery.name}_${i}.jpg`})
  }
})

export default galleries








// export default [
//   {
//     "name": "anatomy",
//     "images": [/mattdonnici/anatomy_1.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_1.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_2.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_2.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_3.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_3.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_4.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_4.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_5.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_5.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_6.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_6.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_7.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_7.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_8.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_8.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_9.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_9.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_10.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_10.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_11.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_11.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_12.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_12.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/anatomy_13.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/anatomy_13.jpg"
//       }
//     ]
//   },
//   {
//     "name": "characters",
//     "images": [
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_1.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_1.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_2.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_2.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_3.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_3.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_4.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_4.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_5.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_5.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_6.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_6.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_7.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_7.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_8.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_8.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_9.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_9.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_10.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_10.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_11.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_11.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_12.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_12.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_13.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_13.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_14.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_14.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_15.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_15.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_16.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_16.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_17.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_17.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_18.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_18.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/characters_19.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/characters_19.jpg"
//       }
//     ]
//   },
//   {
//     "name": "landscape",
//     "images": [
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_1.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_1.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_2.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_2.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_3.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_3.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_4.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_4.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_5.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_5.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_6.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_6.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_7.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_7.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_8.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_8.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_9.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_9.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/landscape_10.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/landscape_10.jpg"
//       }
//     ]
//   },
//   {
//     "name": "3d",
//     "images": [
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_1.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_1.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_2.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_2.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_3.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_3.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_4.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_4.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_5.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_5.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_6.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_6.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_7.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_7.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_8.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_8.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_9.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_9.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_10.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_10.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_11.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_11.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_12.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_12.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_13.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_13.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_14.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_14.jpg"
//       },
//       {
//         "src": "http://res.cloudinary.com/mesa/image/upload/c_limit,e_grayscale,q_20,w_300/v1471900845/mattdonnici/3D_15.jpg",
//         "hr": "http://res.cloudinary.com/mesa/image/upload/v1471900845/mattdonnici/3D_15.jpg"
//       }
//     ]
//   }
// ]