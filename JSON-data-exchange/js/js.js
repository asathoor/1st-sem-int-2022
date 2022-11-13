composer = {
    name: "Johann Sebastian",
    lastName: "Bach",
    born: 1685,
    dies:  1750,
    picture: "Johann_Sebastian_Bach.jpg",
    works: [
    "Toccata and Fugue in D-minor", 
    "Lute Suite E-minor", 
     "Chello Suite in G-major" 
    ]
  }

  console.log(composer.name)
  myText.innerHTML = composer.name

  for (let i=0; i<composer.works.length; i++){
    console.log(composer.works[i])
  }


  