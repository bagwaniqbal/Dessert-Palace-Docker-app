let product_list = {
    "icecream": [
        {
            p_name: 'pista icecream',
            p_img: 'images/pista.png',
            p_descp:"Lorem ipsum dolor sit, amet consectetur adipisicingelit.Cumque, consectetur quibusdam corporis impedit quidem praesentium nemo?",
            p_price: 110,
            bg_color: 'bg-green-400',
            text_color:'text-green-400'
        },
        {
            p_name: 'blueberry icecream',
            p_img: 'images/blueberry-icecream.png',
            p_descp:"Lorem ipsum dolor sit, amet consectetur adipisicingelit.Cumque, consectetur quibusdam corporis impedit quidem praesentium nemo?",
            p_price: 110,
            bg_color: 'bg-purple-400',
            text_color:'text-purple-400'
        },
        {
            p_name: 'mixed icecream',
            p_img: 'images/mixed_icecream.png',
            p_descp:"Lorem ipsum dolor sit, amet consectetur adipisicingelit.Cumque, consectetur quibusdam corporis impedit quidem praesentium nemo?",
            p_price: 110,
            bg_color: 'bg-pink-400',
            text_color:'text-pink-400'
        },
    ],
    "milkshakes": [
        {
            p_name: 'mango milkshake',
            p_img: 'images/pista.png',
            p_descp:"Lorem ipsum dolor sit, amet consectetur adipisicingelit.Cumque, consectetur quibusdam corporis impedit quidem praesentium nemo?",
            p_price: 110,
            bg_color: 'bg-green-400',
            text_color:'text-green-400'
        },
        {
            p_name: 'pista icecream',
            p_img: 'images/pista.png',
            p_descp:"Lorem ipsum dolor sit, amet consectetur adipisicingelit.Cumque, consectetur quibusdam corporis impedit quidem praesentium nemo?",
            p_price: 110,
            bg_color: 'bg-green-400',
            text_color:'text-green-400'
        }
    ],
    "mousse": []
}

let icecream = document.querySelector('#icecream');
let milkshakes = document.querySelector('#milkshakes');
let mousse = document.querySelector('#mousse');
let products = document.querySelector('#products');

milkshakes.addEventListener('click', ()=>
    {
        console.log("hi");
        let milkshake_list = product_list["milkshakes"];
        products.innerHTML="";
        milkshakes_list.map((element, index)=>
        {
            products.innerHTML+= ` <div class="flex items-center justify-center gap-50">
                        <div>
                            <img src="${element.p_img})"
                                class="w-full object-scale-down scale-140 drop-shadow-2xl">
                        </div>
                        <div class="w-1/3">
                            <h2 class="font-winky font-bold text-3xl ${element.text_color}">${element.p_name}</h2>
                            <p class="my-3">${element.p_descp}</p>
                            <p class="font-semibold text-xl font-winky"><i class="fa fa-indian-rupee"></i>110</p>
                            <button
                                class="px-5 py-2 ${element.bg_color} text-white mt-5 rounded-md shadow-2xl hover:scale-105 duration-300">Buy
                                Now</button>
                        </div>
                    </div>`;
        })
    }
)