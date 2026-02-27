// Function for Discount Button
function buttonDiscount (){
    let ogbudget = document.getElementById("budgetInput").value;
    let percentoff = Number(ogbudget * .2)

    document.getElementById("discinfo").innerHTML = `
            <div class="container bg-white shadow rounded mt-5">
            <h4 class="text-dark">Recommended Brands:</h4>
            <button class="btn btn-primary mt-3">Acer</button>
            <button class="btn btn-primary mt-3">Lenovo</button>
            <button class="btn btn-primary mt-3">Asus</button>

            <p class="text-dark"> Elligible discount: <span class="text-warning fw-bold">${percentoff}</span></p>
        </div>`;
}

function buttonLocation (){
    document.getElementById("storeLoca").innerHTML = `
        <div class="container bg-white shadow rounded mt-5">
            <h4 class="text-dark">Store Locations:</h4>
            <p class="text-dark">1. Manila, Philippines</p>
            <p class="text-dark">2. Cebu, Philippines</p>
            <p class="text-dark">3. Davao, Philippines</p>
        </div>`;
}