"use strict";

// To get you started
export class User {
  constructor(data) {
    this.firstName = data.first_name;
    this.relations = data.relations;
    this.pk = data.pk;
    this.superHeroes = {}; //creating the hero object
    for(let el of this.relations){
      this.requestSuperHero(el.hero, el.pk);
    }
    this.add =[] //adding the primary key of  superhero
    this.remove=[] //if the primary key is removed from the relationship
  }

  requestSuperHero(heroPk,pk){
    m.request(`/heroes/${heroPk}`)
      .then((result) =>{
        let obj ={};
        obj[pk] = result;
        this.superHeroes = Object.assign(this.superHeroes,obj);
      });
  }

  //creating removeSuperHero
  removeSuperHero(relPk, index){
    if(this.superHeroes[relPk]){
      delete this.superHeroes[relPk];
      this.remove.push(Number(relPk));
    }else{
      this.add.splice(index,1);
    }
  }
  //saving the hero selections 
  saveSuperHeroSelection(){
    const pks = this.add.map((el) =>{return el.pk});
    const operations = {
      add:pks,
      remove:this.remove
    }
    m.request({
      method:'PATCH',
      url:`/users/${this.pk}/edit/`,
      data:operations
    }).then((result)=>{
      this.superHeroes={};
      for(let el of result.relations){
        this.requestSuperHero(el.hero,el.pk);
      }
      this.add=[];
      this.remove=[];
    });
  }
  //canceling temp superhero list selection
  cancelSuperHeroSelection(){
    m.request(`/users/${this.pk}/`).then((result)=>{
      this.superHeroes = {};
      for (let el of result.relations){
        this.requestSuperHero(el.hero,el.pk);
      }
      this.add= [];
      this.remove = [];
    });
  }
  //request random super heros from dc/marvel
  requestRandomSuperHeroes(universe,pk){
    m.request(`/heroes/random`,
    {data:
      {
        universe:universe,pk:pk
      }
    }).then((result) =>{
      this.add.push(result)
    })
  }
}

