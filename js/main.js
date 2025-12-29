const rowBody= document.getElementById("rowBody")
const btns = document.querySelectorAll(".nav-link");
const loading=document.getElementById("loading");


async function getMeals(query='pizza') {
    let data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    let meals = await data.json();
    let res= meals.recipes;
    console.log(res);
    display(res)
    loading.classList.add('d-none')
}

function display(arr){
   let box='';
    for(let i =0 ;i<arr.length ; i++){
        box+=`
        <div class="col-md-3 py-3" >
                    <div class="card" >
                    <img src="${arr[i].image_url}" class="card-img-top"  alt="...">
                    <div class="card-body">
                    <p class="card-text">${arr[i].title}</p>
                     </div>
                    </div>
                </div>
        `
    }
    rowBody.innerHTML=box;
    rowBody.style.cssText='padding:20px;'
}

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let mealName = e.target.innerHTML;
        getMeals(mealName);
    })
})
getMeals()

