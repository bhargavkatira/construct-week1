let cart_data = JSON.parse(localStorage.getItem("cart"));

let data_div = document.getElementById("cart_data");

cart_data.forEach(function(product) {


function Cart_items() {
        let total = 0;
        cart_data.forEach(function (product) {

                let div = document.createElement("div");

                let increment = document.createElement('button');
                increment.innerHTML = "+";
                let btn = document.createElement('input');
                btn.value = 1;
                let decrement = document.createElement('button');
                decrement.innerHTML = "-";


                let m_name = document.createElement('b');
                m_name.innerText = product.name;

                let m_price1 = document.createElement('p');
                m_price1.innerText = '₹' + " " + product.Price1;

                let image = document.createElement('img');
                image.src = product.image;

                div.append(image, m_name, increment, btn, decrement, m_price1);
                data_div.append(div);

                increment.addEventListener('click', function () {
                        let value = parseInt(btn.value, 15);
                        if (value < 10)
                        {
                                value++
                        }
                        btn.value = value;
                });
                decrement.addEventListener('click', function () {
                        let value = parseInt(btn.value, 15);
                        if (value > 1)
                        {
                                value--
                        }
                        btn.value = value;
                });

                total += Number(product.Price1);

        });
        proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
        totalAmount.innerHTML = `Final Payable ₹ ${total} `;
        cartItem.innerHTML = `My Cart`
        pincode.innerHTML = 'Pincode'
        coupon.innerHTML = 'Apply Code →'
        order.innerHTML = "Order Summery";
        shipping.innerHTML = "Shipping Charges - Free"
};
Cart_items();

    });

