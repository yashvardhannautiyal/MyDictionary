const fetchData = async () => {
  const inputField = document.getElementById("input-word");
  const wordInput = inputField.value.trim(); //trim spaces
  const apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;

  const searchSection = document.getElementById("search-section");
  const verbSection = document.getElementById("verb-section");
  const nounSection = document.getElementById("noun-section");
  

  try {
    // error-handling     
    if (!wordInput) {
      searchSection.innerHTML = `
        <p class = "text-pink-800 flex justify-center items-center font-bold">Enter word to search</p>`;
    }
     

    // fetching-data 
    const res = await fetch(apiLink); //fetch data
    const data = await res.json(); //convert response to json format
    console.log(data);

    if (!res.ok) {
      searchSection.innerHTML = `
        <p class = "text-pink-800 flex justify-center items-center font-medium">
        Cannot fecth data! Please try another search</p>`;
      throw new Error(`word not found`);
    }

    // seacrh-section
    const word = data[0].word;
    const phonetic = data[0].phonetic || "";
    searchSection.innerHTML = `
        <h3 class="text-2xl sm:text-3xl font-bold text-pink-800">${word}</h3>
        <h4 class="text-normal sm:text-xl font-medium">${phonetic}</h4>`;

    //verb-section
    const verb = data[0].meanings[0].partOfSpeech;
    //definition - example 1
    const def0 = data[0].meanings[0].definitions[0].definition || "";
    const eg0 = data[0].meanings[0].definitions[0].example || "";
    //definition - example 2
    const def1 = data[0].meanings[0].definitions[1].definition || "";
    const eg1 = data[0].meanings[0].definitions[1].example || "";
    //definition - example 3
    const def2 = data[0].meanings[0].definitions[2].definition || "";
    const eg2 = data[0].meanings[0].definitions[2].example || "";
    //definition - example 4
    const def3 = data[0].meanings[0].definitions[3].definition || "";
    const eg3 = data[0].meanings[0].definitions[3].example || "";

    verbSection.innerHTML = `
     <div class="">
           <h4 class="text-xl font-bold italic">${verb}</h4>
          <hr class="" />
        </div>

        <div>
          <p class="text-lg mt-7 mb-4 sm:mx-2">Meaning</p>
          <ul class="list-disc marker:text-pink-800 mx-1 sm:mx-10">
            <li class="font-bold mb-4">
              ${def0}
              <p class="font-thin">${eg0}</p>
            </li>
            <li class="font-bold mb-4">
              ${def1}
              <p class="font-thin">${eg1}</p>
            </li>
            <li class="font-bold mb-4">
              ${def2}
              <p class="font-thin">${eg2}</p>
            </li>
            <li class="font-bold mb-4">
              ${def3}
              <p class="font-thin">${eg3}</p>
            </li>
          </ul>
        </div>`;

    //verb-section
    const noun = data[0].meanings[1].partOfSpeech;
    //definition - example 1
    const def10 = data[0].meanings[1].definitions[0].definition || "";
    const eg10 = data[0].meanings[1].definitions[0].example || "";
    //definition - example 2
    const def11 = data[0].meanings[1].definitions[1].definition || "";
    const eg11 = data[0].meanings[1].definitions[1].example || "";
    //definition - example 3
    const def12 = data[0].meanings[1].definitions[2].definition || "";
    const eg12 = data[0].meanings[0].definitions[2].example || "";
    //definition - example 4
    const def13 = data[0].meanings[1].definitions[3].definition || "";
    const eg13 = data[0].meanings[1].definitions[3].example || "";

    nounSection.innerHTML = `
     <div class="">
           <h4 class="text-xl font-bold italic">${noun}</h4>
          <hr class="" />
        </div>

        <div>
          <p class="text-lg mt-7 mb-4 sm:mx-2">Meaning</p>
          <ul class="list-disc marker:text-pink-800 mx-1 sm:mx-10">
            <li class="font-bold mb-4">
              ${def10}
              <p class="font-thin">${eg10}</p>
            </li>
            <li class="font-bold mb-4">
              ${def11}
              <p class="font-thin">${eg11}</p>
            </li>
            <li class="font-bold mb-4">
              ${def12}
              <p class="font-thin">${eg12}</p>
            </li>
            <li class="font-bold mb-4">
              ${def13}
              <p class="font-thin">${eg13}</p>
            </li>
          </ul>
        </div>`;
  } catch (error) { 
    //clears previous data
    verbSection.innerHTML = ""
    nounSection.innerHTML = ""

    console.log("API data not fetched : ", error);
  }
};
