export class dcComicsButton{
    view(vnode){
        return[
            m('button.action.dc',{onclick:() => vnode.attrs.onclick('DC',2)},"DC")
        ];
    }
}