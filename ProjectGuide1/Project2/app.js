//category start
const keyboard = [
    {
        id: 1,
        title: "SharpKeysSharpKeys Crimson Star PBT Cherry MX Keycap Set (167 pcs)",
        category: "Keycaps",
        price: "₱3,400.00",
        img: "./images/item-1.png",
        desc: `Made from PBT materials with ergonomic ladder design and OEM profile height, it’s anti-grease to ensure better using experience.Good gift to the Mechanical Keyboard lover. `,
    },
    {
        id: 2,
        title: "SharpKeys TTC Quicksilver / Speed Silver Linear Switches",
        category: "Keyboard Switches",
        price: "₱400.00",
        img: "./images/item-2.png",
        desc: `TTC Quicksilver also known as speed silver switches are the perfect linear switches for those who have a need for speed. The 45 g of actuation force combined with a short pre-travel of 1.08mm makes these the ideal switches for fast accurate typists and gamers alike who need the quickest responses possible. The quicksilver's switch features POM box stem, top polycarbonate housing and a bottom housing made of PA66. The box style stem insures that there is less than wobble compared to other popular switches like the cherry MX speed silver.
 `,
    },
    {
        id: 3,
        title: "SharpKeys Tofu 84 Aluminum Mechanical Keyboard Case (Grey)",
        category: "Keyboard Cases",
        price: "₱6,800.00",
        img: "./images/item-3.png",
        desc: `Material: CNC anodized aluminum
Compatible with KBD75 REV 2.0 PCB
7° typing angle
Case Only - PCB/Plate Purchased Separately
`,
    },
    {
        id: 4,
        title: "SharpKeys Green Dragon Scale PBT OEM Keycap Set (RGB shine through)",
        category: "Keycaps",
        price: "₱2,300.00",
        img: "./images/item-4.png",
        desc: `Thock King's Green Scale keycaps feature shades of greenish blue PBT keycaps running in a horizontal pattern with white/translucent legend for clear keyboard RGB shine through. These keycaps will allow north or south facing LED lights to shine through and light up the legends. This 128 piece set is OEM style which is similar to Cherry profile only slightly taller and is ideal for keyboard sizes: 61, 64, 68, 84, 87, 98, 104 and 108. Keycaps are durable, made of thick solid PBT material and would look great on any keyboard. 
 `,
    },
    {
        id: 5,
        title: "SharpKeys Gateron Azure Dragon V3 Tactile Switches",
        category: "Keyboard Switches",
        price: "₱400.00",
        img: "./images/item-5.png",
        desc: `Gateron GoPolar Azure Dragon V3 switch offers welcome improvements over the previous version from the KS-9 mold.`,
    },
    {
        id: 6,
        title: "SharpKeys Glorious PC GMMK PRO 75% Aluminum Top Case Prism Pink",
        category: "Keyboard Cases",
        price: "₱3,400.00",
        img: "./images/item-6.png",
        desc: `CNC machined aluminum
Side light diffusers and gaskets preinstalled
Includes screws
Top case only- keyboard not included
Satin-like, metallic finish
Customize the look of your GMMK PRO with a new colored top case. Installation is hassle-free, requiring only a screwdriver.
`,
    },
    {
        id: 7,
        title: "SharpKeys Dark Prism Rainbow PBT OEM Keycap Set (134 pcs)",
        category: "Keycaps",
        price: "₱3,400.00",
        img: "./images/item-7.png",
        desc: `Thock King's Dark Prism keycap set gives your mechanical keyboard and gaming desk setup that bright colorful flare you've been looking featuring south facing RGB shine though legends on rainbow color PBT keycaps. This keycap set comes with 134 pieces which is ideal for most keyboard sizes: 61, 64, 68, 84, 87, 98, 104 and108. Keycaps are durable and made of PBT material and is OEM profile.  `,
    },
    {
        id: 8,
        title: "SharpKeys Gray Silent Tactile Switches",
        category: "Keyboard Switches",
        price: "₱300.00",
        img: "./images/item-8.png",
        desc: `The popular Wu Que Studio mechanical keyboard switches offer the ultimate typing experience with their newly release range of switches that cover all the bases when it comes to offering the best linear, tactile and silent keyboard switch experience. Thock King is an official vendor for Wuque studio and is proud to be the first vendor specializing in hand lube and film services. The Gray silent tactile switch offers a smooth but heavier typing while eliminating the Nosie to allow for a quite noise free environment for the office or pc gaming session. `,
    },
    {
        id: 9,
        title: "SharpKeys KBD75 V2 75% Anodized Aluminum Case Red",
        category: "Keyboard Cases",
        price: "₱7,100.00",
        img: "./images/item-9.png",
        desc: `Solid CNC Aluminum 75% Keyboard Case
Compatible with KB75 PCB and Plate
Arylic Side Strip for RGB Underglow
Rubber Feet and Screws Included
Case Only - No PCB or Plate Included
Fully Programmable - QMK Compatible
`,
    },
    {
        id: 10,
        title: "SharpKeys DZ60 SOLDERABLE 60% MECHANICAL KEYBOARD PCB",
        category: "Keyboard PCB",
        price: "₱2,200.00",
        img: "./images/item-10.png",
        desc: `Compatible with Tofu60%, Blade 60%, 60% Plastic, 60% ALUMINUM LOW PROFILE, 60% Bamboo, 60% Wood, KBDfans 5° 60%, D60 HHKB/WKL/WK cases
Compatible with DZ60 CNC ALUMINUM/BRASS 60% PLATE, 60% CNC'D ALUMINUM PLATE, 60% BRASS ANSI PLATE, 60% PC MATERIAL PLATE, CARBON FIBER 60% PLATE, D60 FR4/ PC PLATE/BRASS
`,
    },
    {
        id: 13,
        title: "SharpKeys Plastic Transparent, Custom&Programmable Mechanical Keyboard",
        category: "Pre-built",
        price: "₱2,200.00",
        img: "./images/item-14.png",
        desc: `68-key ANSI layout wireless mechanical keyboard.The built-in poron switch mat, poron foam, and silicone pad combined with the Gasket Mount design give a pleasant typing sound. And the smooth connecting responsiveness made Mojo68 Plastic the perfect piece for both work and game.`,
    },
    {
        id: 14,
        title: "SharpKeys Christian Transparent, Custom&Programmable Mechanical Keyboard",
        category: "Pre-built",
        price: "₱2,200.00",
        img: "./images/item-13.png",
        desc: `68-key ANSI layout wireless mechanical keyboard.The built-in poron switch mat, poron foam, and silicone pad combined with the Gasket Mount design give a pleasant typing sound. And the smooth connecting responsiveness made Mojo68 Plastic the perfect piece for both work and game. `,
    },
];
const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")

window.addEventListener('DOMContentLoaded', () => {
    displayKeyboardItems(keyboard)
    displayKeyboardButtons()
})

const maxDescriptionLength = 100;

displayKeyboardItems = (keyboardItems) => {
    let displayKeyboard = keyboardItems.map((item) => {
        let description = item.desc;
        let truncatedDescription = description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description;

        return `<article class="keyboard-item">
        <img src="${item.img}" alt="${item.title}" class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                    ${truncatedDescription}
                </p>
                <a href="product-details.html?id=${item.id}" class="see-more">See More</a>
            </div>
    </article>`;
    }).join("");
    sectionCenter.innerHTML = displayKeyboard;

}

displayKeyboardButtons = () => {
    const categories = keyboard.reduce(() => {
        let unique = []
        unique.push('all')
        keyboard.forEach((item) => {
            if (!unique.includes(item.category)) {
                unique.push(item.category)
            }
        })
        return unique
    })
    console.log(categories)

    const displayBtn = categories.map((category) => {
        return `<button class="filter-btn" type"button" data-id="${category}">${category}</button>`
    }).join("")
    console.log(displayBtn)
    container.innerHTML = displayBtn
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id
            console.log(category)
            const keyboardCategory = keyboard.filter((keyboardItem) => {
                if (keyboardItem.category === category) {
                    return keyboardItem
                }
            })
            if (category === 'all') {
                displayKeyboardItems(keyboard)
            } else {
                displayKeyboardItems(keyboardCategory)
            }
        })
    })
}
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// Fetch product data from the menu array
const product = keyboard.find(item => item.id === parseInt(productId));

// Update HTML elements with product details
document.getElementById('product-image').src = product.img;
document.getElementById('product-title').textContent = product.title;
document.getElementById('product-description').textContent = product.desc;
document.getElementById('product-price').textContent = `Php${product.price}`;
//category end



//navbar
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    console.log("I am clicked")
    console.log(links.classList)
    console.log(links.classList.contains('links'))
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }else{
        links.classList.add('show-links')
    }*/
    links.classList.toggle('show-links')
}
)


//FAQs
const questions = document.querySelectorAll('.question')
questions.forEach((question) => {
    console.log(question)
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

