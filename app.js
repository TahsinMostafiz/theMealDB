// Preloader 
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    loader.style.display = 'none';
});



document.getElementById('search-btn').addEventListener('click', () => {
    let getSearchValue = document.getElementById('search-input')
    const getSearchTest= getSearchValue.value;
    loadMeal(getSearchTest);
    getSearchValue.value = '';
})
const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
    .catch(err => console.log(err))
}


const displayMeal = (meals) => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        //const description = ;
        //console.log(description);
        const mealDiv = document.createElement('div');
        
        mealDiv.classList.add('col-3');
        mealDiv.innerHTML = `
            <div class="card" onclick="mealDetails(${meal.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.split(' ').splice(0, 9).join(' ')}</p>
                <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
        
    });
}

const mealDetails = (details) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.meals[0]))
    .catch(err => console.log(err))
}

const displayModal = (meal) => {
    const modalTitle = document.getElementById('meal-title');
    modalTitle.innerText = `${meal.strMeal}`
    const modalBody = document.getElementById('meal-modal-body');
    modalBody.innerHTML = `
        <img src="${meal.strMealThumb}" class="img-thumbnail" alt="...">
        <div class="row">
            <p class="card-text">${meal.strArea}  ${meal.strCategory}</p>
            <p class="card-text">${meal.strTags ? meal.strTags : ''}</p>
            <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
            <p class="card-text">${meal.strIngredient1 ? meal.strIngredient1 : ''} ${meal.strIngredient2 ? meal.strIngredient2 : ''} ${meal.strIngredient3 ? meal.strIngredient3 : ''} ${meal.strIngredient4 ? meal.strIngredient4 : ''} ${meal.strIngredient5 ? meal.strIngredient5 : ''} ${meal.strIngredient6 ? meal.strIngredient6 : ''} ${meal.strIngredient7 ? meal.strIngredient7 : ''} ${meal.strIngredient8 ? meal.strIngredient8 : ''} ${meal.strIngredient9 ? meal.strIngredient9 : ''}</p>
        </div>
    `
}

loadMeal('');

/**
 * dateModified: null
idMeal: "52802"
strArea: "British"
strCategory: "Seafood"
strCreativeCommonsConfirmed: null
strDrinkAlternate: null
strImageSource: null
strIngredient1: "Floury Potatoes"
strIngredient2: "Olive Oil"
strIngredient3: "Semi-skimmed Milk"
strIngredient4: "White Fish Fillets"
strIngredient5: "Plain flour"
strIngredient6: "Nutmeg"
strIngredient7: "Double Cream"
strIngredient8: "Jerusalem Artichokes"
strIngredient9: "Leek"
strIngredient10: "Prawns"
strIngredient11: "Parsley"
strIngredient12: "Dill"
strIngredient13: "Lemon"
strIngredient14: "Gruyère"
strIngredient15: "Lemon"
strIngredient16: ""
strIngredient17: ""
strIngredient18: ""
strIngredient19: ""
strIngredient20: ""
strInstructions: "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens."
strMeal: "Fish pie"
strMealThumb: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg"
strMeasure1: "900g"
strMeasure2: "2 tbsp"
strMeasure3: "600ml"
strMeasure4: "800g"
strMeasure5: "1 tbsp"
strMeasure6: "Grating"
strMeasure7: "3 tbsp"
strMeasure8: "200g"
strMeasure9: "1 finely sliced"
strMeasure10: "200g peeled raw"
strMeasure11: "Large handful"
strMeasure12: "Handful"
strMeasure13: "Grated zest of 1"
strMeasure14: "25g grated"
strMeasure15: "Juice of 1"
strMeasure16: ""
strMeasure17: ""
strMeasure18: ""
strMeasure19: ""
strMeasure20: ""
strSource: ""
strTags: "Fish,Pie,Breakfast,Baking"
strYoutube: "https://www.youtube.com/watch?v=2sX4fCgg-UI"
 */