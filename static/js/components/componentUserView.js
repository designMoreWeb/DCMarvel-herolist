import {superHeroLists} from './superHeroLists.js'
import {dcComicsButton} from './dcComicsButton.js'
import {marvelComicsButton} from './marvelComicsButton.js'
import {saveButton} from './saveButton.js'
import {cancelButton} from './cancelButton.js'
import{body} from './body.js'
export class heroListUserView{
    view(vnode){
        return('.user-view',[
            m(body,{
				name: vnode.attrs.name,
                onclick:(universe,pk) =>{vnode.attrs.addSuperHero(universe,pk)},
                saveSuperHeroSelection: () => {vnode.attrs.saveSuperHeroSelection()},
				cancelSuperHeroSelection: () => {vnode.attrs.cancelSuperHeroSelection()},
            }),
            m(superHeroLists,{
                heroes: vnode.attrs.heroes,
                add:vnode.attrs.add,
                remove:vnode.attrs.remove,
                remove:(removed,index)=>{
                    vnode.attrs.removeSuperHero(remove,index)
                }
            })
        ]);
    }
}


