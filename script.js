let btn = document.querySelector('.btnnn'),
    business = document.querySelector('.business'),
    tech = document.querySelector('.tech'),
    crypto = document.querySelector('.crypto')
    dis = document.querySelector('.news');


btn.addEventListener("click", news)


function news(){
    const Get = new Fet

    Get.get("https://newsapi.org/v2/everything?q=apple&from=2022-08-04&to=2022-08-04&sortBy=popularity&apiKey=debc006fb2c345aeb3852667d4e94d8d")

        .then((art,name,author,title,description,publishedAt,urlToImage,source)=>{
            console.log(art.articles)

            let info = art.articles

            dis.textContent='';

            art.articles.forEach((info)=>{
                var div = document.createElement('div');
                div.classList.add('card', 'p-3','mt-3','col-xl-5','col-10','ms-4','mx-xl-auto')
                div.innerHTML = `<h2 style="color:#0a0a80;"><b>${info.title}</b></h2> 

                    <h4>By <b>${info.author}</b> from <b>${info.source.name}</b></h4>
                    <h6  style="color:#0a0a80;">${info.publishedAt}</h6>

                    <div class="text-center"><img src="${info.urlToImage}" class="w-75 rounded" alt="no image"></div>

                    <p class="mt-3">${info.description} <br> <a href="${info.url}" target="_blank" style="text-decoration:none;" > Read more here...</a></p>
                `

                dis.append(div)
            })
        })

    .catch( (error)=> console.log(error))

    
}

business.addEventListener('click', busNews)

function busNews(){

    const Get = new Fet

    Get.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=debc006fb2c345aeb3852667d4e94d8d")

        .then((art,name,author,title,description,publishedAt,urlToImage,source)=>{
            console.log(art.articles)

            let info = art.articles

            dis.textContent='';

            art.articles.forEach((info)=>{
                var div = document.createElement('div');
                div.classList.add('card', 'p-3','mt-3','col-xl-5','col-10','ms-4','mx-xl-auto')
                div.innerHTML = `<h2 style="color:#0a0a80;"><b>${info.title}</b></h2> 

                    <h4>By <b>${info.author}</b> from <b>${info.source.name}</b></h4>
                    <h6  style="color:#0a0a80;">${info.publishedAt}</h6>

                    <div class="text-center"><img src="${info.urlToImage}" class="w-75 rounded" alt="no image"></div>

                    <p class="mt-3">${info.description} <br> <a href="${info.url}" target="_blank" style="text-decoration:none;" > Read more here...</a></p>
                `

                dis.append(div)
            })
        })

    .catch( (error)=> console.log(error))


}

tech.addEventListener('click', techNews)


function techNews(){
    const Get = new Fet

    Get.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=debc006fb2c345aeb3852667d4e94d8d")

        .then((art,name,author,title,description,publishedAt,urlToImage,source)=>{
            console.log(art.articles)

            let info = art.articles

            dis.textContent='';

            art.articles.forEach((info)=>{
                var div = document.createElement('div');
                div.classList.add('card', 'p-3','mt-3','col-xl-5','col-10','ms-4','mx-xl-auto')
                div.innerHTML = `<h2 style="color:#0a0a80;"><b>${info.title}</b></h2> 

                    <h4>By <b>${info.author}</b> from <b>${info.source.name}</b></h4>
                    <h6  style="color:#0a0a80;">${info.publishedAt}</h6>

                    <div class="text-center"><img src="${info.urlToImage}" class="w-75 rounded" alt="no image"></div>

                    <p class="mt-3">${info.description} <br> <a href="${info.url}" target="_blank" style="text-decoration:none;" > Read more here...</a></p>
                `

                dis.append(div)
            })
        })

    .catch( (error)=> console.log(error))

}

crypto.addEventListener('click', cryptoNews)

function cryptoNews(){
    const Get = new Fet

    Get.get("https://newsapi.org/v2/everything?q=bitcoin&from=2022-07-05&sortBy=publishedAt&apiKey=debc006fb2c345aeb3852667d4e94d8d")

        .then((art,name,author,title,description,publishedAt,urlToImage,source)=>{
            console.log(art.articles)

            let info = art.articles

            dis.textContent='';

            art.articles.forEach((info)=>{
                var div = document.createElement('div');
                div.classList.add('card', 'p-3','mt-3','col-xl-5','col-10','ms-4','mx-xl-auto')
                div.innerHTML = `<h2 style="color:#0a0a80;"><b>${info.title}</b></h2> 

                    <h4>By <b>${info.author}</b> from <b>${info.source.name}</b></h4>
                    <h6  style="color:#0a0a80;">${info.publishedAt}</h6>

                    <div class="text-center"><img src="${info.urlToImage}" class="w-75 rounded" alt="no image"></div>

                    <p class="mt-3">${info.description} <br> <a href="${info.url}" target="_blank" style="text-decoration:none;" > Read more here...</a></p>
                `

                dis.append(div)
            })
        })

    .catch( (error)=> console.log(error))

}