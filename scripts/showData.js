async function getData(url) {
    let res = await fetch(url)
    let data = res.json()
   
    return data;
}

function append(data, container) {
    container.innerHTML = null

    data.forEach((d) => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.id='pname'
        let img = document.createElement('img')

        let p2 = document.createElement('p')
        p2.innerHTML = d.strInstructions


        if (d.strMeal) {
            p.textContent = d.strMeal 
            img.src = d.strMealThumb;

        }
        else if (d.strCategory) {
            p.textContent = d.strCategory 
            img.src = d.strCategoryThumb;
        }

        div.append(img,p)
        div.onclick = () => {
    localStorage.setItem('mealDetail', JSON.stringify(d))
    window.location.href = 'recipeDetails.html'
        };
        container.append(div)
    })

}

function showDetails(recipeDetail) {

    let rimg = document.getElementById('rimg')
    let rName = document.getElementById('rName')
    let ins = document.getElementById('ins')

    if (recipeDetail.strMealThumb) {
        rimg.src = recipeDetail.strMealThumb;
        rName.innerHTML = recipeDetail.strMeal
        ins.innerHTML=recipeDetail.strInstructions

        
        // let x=recipeDetail.strInstructions.split(".")
        // // ins.innerHTML = x
        // console.log(x)
        // //    for(let i=0;i<x.length-1;i++){        
        //     let para =document.createElement('p')
        //     para.innerHTML=i+1+". "+x[i]
        //     ins.append()
            
        // }
        
    }
    else if (recipeDetail.strCategory) {
        rimg.src = recipeDetail.strCategoryThumb;
        rName.innerHTML = recipeDetail.strCategory
        ins.innerHTML = recipeDetail.strCategoryDescription
    }

}



export { getData, append,showDetails }






