let men =[
    {title:"BRUNELLO CUCINELLI",
     heading:"Oxford cotton shirt",
     price : "405",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/33/P00661762_b1.jpg"
       
    },  
    {title:"ZIMMERMANN KIDS",
    price :"105",
    heading:"Oxford cotton shirt",
    img : " https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3f/P00685349_b1.jpg"
    },
    {title:"BRUNELLO CUCINELLI",
     heading:"Oxford cotton shirt",
     price : "429",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/09/P00661779_b1.jpg"
       
    },
    {title :"ALEXANDER MCQUEEN",
    heading: "Polyfaille minidress",
    price : '1,425'  ,
    img : "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00644088_b1.jpg"
    },
    {title:"TOM FORD",
     heading:"Oxford cotton shirt",
     price : "555",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f9/P00611739_b1.jpg"
       
    },
    {title:"ZIMMERMANN KIDS  ",
    price : "95",
    heading:"Oxford cotton shirt",
    img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b4/P00685259_b1.jpg"
},
    {title:"GIVENCHY",
     heading:"Oxford cotton shirt",
     price : "605",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e4/P00687175_b1.jpg"
       
    },
    {title:"AURALEE",
    heading:"Oxford cotton shirt",
     price : "319",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c5/P00662109_b1.jpg"
       
    },
    {title :"ALEXANDER MCQUEEN",
    heading: "Puff-sleeved crêpe gown",
    price : '2,439'  ,
    img :"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00667050.jpg"
    },

    {title:"JOHANNA ORTIZ",
    heading: "Vin Du Marco silk maxi dress",
    price: '1,275',
    img:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d9/P00638832.jpg"
},
    {title:"TOM FORD",
    heading:"Oxford cotton shirt",
     price : "2,945",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00611711.jpg"
       
    },
    {title:"WALES BONNER",
    heading:"Oxford cotton shirt",
     price : "1,135",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/49/P00653221_b1.jpg"
       
    },
    {title:"LARDINI",
    heading:"Oxford cotton shirt",
     price : "835",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2f/P00656715_b1.jpg"
       
    },
    {title:"GUCCI",
    heading:"Oxford cotton shirt",
     price : "2,105",
     img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/12/P00613392_b1.jpg"
     },
    {title:"SNOW PEAK",
    heading:"Oxford cotton shirt",
    price : "229",
    img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bd/P00665080.jpg"
      
   },
   {title:"THE NORTH FACE",
   heading:"Oxford cotton shirt",
   price : "129",
   img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8d/P00652144_b1.jpg"
     
  },
  {title:"HERNO",
  heading:"Oxford cotton shirt",
  price : "475",
  img : "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/18/P00648673_b1.jpg"
    
  },
   ]

   let lableArr=["A-Cold-Wall",
    "Acne Studios",
    "Acronym",
    "Adidas",
    "Adish",
    "Alanui",
    "Alexander McQueen",
    "All Blues",
    "Ami Paris",
    "Amiri",
    "And Wander",
    "Arrels Barcelona",
    "Asics Sportstyle",
    "Auralee",
    "Aztech Mountain",
   "Balenciaga",
    "Balmain",
    "Barena Venezia",
    "Berluti",
    "Birkenstock Men",
    "Bode",
    "Bogner",
    "Borsalino",
   "Bottega Veneta",
    "BRAM",
   "Brunello Cucinelli",
    "Burberry",
    "Byborre",
    "C.P. Company",
    "Canada Goose",
    "Cartier Eyewear Collection",
    "Casablanca",
    "Celine Eyewear",
    "Christian Louboutin",
    "Church's",
    "Clarks Originals",
    "Commas",
    "Simons",
    "RRL",
    "Sacai",
    "Saint Laurent",
    "Salomon",
    "Santoni",
    "Satisfy"];

    var sizeArr=[
        "XXS",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "EU 36",
        "EU 37",
        "EU 38",
        "EU 39",
        "EU 40",
        "EU 41",
        "EU 42",
        "EU 43",
        "EU 43,5",
        "EU 44,5",
        "EU 45",
        "4XL",
        "28",
        "29"];
    
    var colorArr=[
        "Beige",
        "Black",
        "Blue",
        "Brown",
        "Gold",
        "Green",
        "Grey",
        "Metallic",
        "Multicoloured",
        "Neutrals",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "Silver",
        "White",
        "Yellow"];

    var patternArr=[
        "Animal-Print",
        "Camouflage",
        "Checked",
        "Embellished",
        "Embroidered",
        "Floral",
        "Patterned",
        "Plain",
        "Polka Dots",
        "Printed",
        "Striped"];

    
   localStorage.setItem("menslable", JSON.stringify(lableArr));
   localStorage.setItem("mensSize", JSON.stringify(sizeArr));
   localStorage.setItem("mensColor", JSON.stringify(colorArr));
   localStorage.setItem("mensPattern", JSON.stringify(patternArr));
   localStorage.setItem("mensData", JSON.stringify(men));