export class saveButton {
  view(vnode) {
    return [
      m("button.action",{onclick: () => vnode.attrs.save()},"Save")
    ];
  }
}
