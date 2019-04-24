/*
Superhero list where they can be added from either univeres or 
removed from the user list individually
*/
export class superHeroLists{
    view(vnode){
        const superHeroItems = [];

        for(let key in vnode.attrs.heroes){
            const el = vnode.attrs.heroes[key];
            const item = m(superHeroListItem,{
                name:el.name,
                universe: el.universe.name,
                remove:(remove,index)=>{
                    vnode.attrs.remove(remove,index)
                },
                relPK:key,
                index:-1
            });
            superHeroItems.push(item);
        }
        //added superheroes as items
        const addSuperHeroes =  vnode.attrs.add.map((el,index) =>{
            return m(superHeroListItem, {
                name:el.name,
                universe: el.universe.name,
                remove:(remove,index)=>{
                    vnode.attrs.remove(remove,index)
                },
                relPK:-1, //triggers when the save button is clicked by user
                index:index
            });
        });
        return m(".hero-list", superHeroItems.concat(addSuperHeroes));
    }
}

/*defining the super hero list item class 
for each individual superhero who will be an item in the list
*/
class superHeroListItem{
    view(vnode){
        return m(`a.hero-list-item.${vnode.attrs.universe}`,
        vnode.attrs.name,[
                m('button.remove',
                {onclick:() =>{
                    vnode.attrs.remove(
                        vnode.attrs.relPK,vnode.attrs.index)}})
            ]);
        }
    }