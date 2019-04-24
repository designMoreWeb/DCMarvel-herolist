export class marvelComicsButton {
  view(vnode) {
    return [
      m("button.action.marvel",{
          onclick: () => vnode.attrs.onclick("Marvel", 1)},"Marvel")
    ];
  }
}
