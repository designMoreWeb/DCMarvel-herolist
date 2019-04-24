export class cancelButton{
    view(vnode){
        return[
            m("button.action",{onclick: () => vnode.attrs.cancel()},"Cancel")
        ];
    }
}