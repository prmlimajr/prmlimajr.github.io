(function(){
  'use strict'

  const btn = document.querySelector('#btn');
  const input = document.querySelector('#searchInput');
  let everybody = [];
  let somePeople = [everybody[0],everybody[1]];
  let tabPeople = document.querySelector('#tabPeople');
  let tabData = document.querySelector('#tabData');
  let peopleCounter = document.querySelector('#counter');
  let dataTab = document.querySelector('#data');
  const numberFormat = new Intl.NumberFormat('pt-BR');

  window.addEventListener('load',()=>{
    fecthPeople();
  });

  btn.addEventListener('click', checksConditionsToSearch);

  input.addEventListener('keyup', ()=>{
    input.value.length > 0 ? enableButton() : disableButton();
  });

  async function fecthPeople(){
    const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    const json = await res.json();
    everybody = json.results.map(person => {
      const { gender, name, dob, picture } = person;
      return {
        gender: gender,
        name: `${name.first} ${name.last}`,
        age: dob.age,
        picture: picture.thumbnail
      }
    });
  };

  function renderSomePeople(){
    let peopleHTML = '<div>';
    somePeople.forEach(person =>{
      const personHTML = `
      <div class='person'>
        <div>
          <img src="${person.picture}" alt="${person.name}">
        </div>
        <div>
          <p>${person.name}, ${person.age} anos</p>
        </div>
      </div>
    `;
      peopleHTML += personHTML;
    });
    peopleHTML += '</div>';
    tabPeople.innerHTML = peopleHTML;
    handleHeaders();
    generateData();
  };

  function handleHeaders(){
    counter.textContent = `
    ${somePeople.length} usuário(s) encontrado(s)
    `;
    dataTab.textContent = 'Estatística';
  };

  function generateData(){
    let maleCount = 0;
    let femaleCount = 0;
    let ageSum = 0;
    let avgAge = 0;
    for(let i = 0; i < somePeople.length; i++){
      somePeople[i].gender === 'male' ? maleCount++ : femaleCount++;
      ageSum += somePeople[i].age;
    };
    avgAge = ageSum / somePeople.length;
    tabData.innerHTML = `
      <p>Sexo Masculino: ${maleCount}</p>
      <p>Sexo Feminino: ${femaleCount}</p>
      <p>Soma das Idades: ${numberFormat.format(ageSum)}</p>
      <p>Média das Idades: ${avgAge.toFixed(2)}</p>
    `
  };

  function checksConditionsToSearch(){
    somePeople = [];
    if(input.value.length === 0){
      return
    };
    everybody.map(person=> {
      if(person.name.toLowerCase().includes(input.value)){
        somePeople.push(person);
      }
      return somePeople;
    });
    renderSomePeople();
  };

  function disableButton(){
    btn.disabled = true;
    btn.classList.add('btn-disabled');
    btn.classList.remove('btn');
  };

  function enableButton(){
    if(input.value.length > 0){
      btn.disabled = false;
      btn.classList.remove('btn-disabled');
      btn.classList.add('btn');
    }
  };


})();