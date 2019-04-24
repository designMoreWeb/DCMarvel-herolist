export class body{
    view(vnode){
        return m("body",[
            m("name",vnode.attrs.name),
            m("button.action.dc",{
                onclick:() => vnode.attrs.onclick('DC',2)
                },"DC"
            ),
            m("button.action.marvel",{
                onclick:() => vnode.attrs.onclick('Marvel',1)
                },"Marvel"
            ),
            m("button.action",{
                onclick:() => vnode.attrs.saveSuperHeroSelection()
                },"Save"
            ),
            m("button.action",{
                onclick:() => vnode.attrs.cancelSuperHeroSelection()
                },"Cancel"
            )
        ]);
    }
}