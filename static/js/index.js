"use strict";

import "./mithril.js";
import { User } from "./models.js";
import { heroListUserView } from "./components/componentUserView.js";

let page = {
  oninit: function(vnode) {
    vnode.state.users = [];
    vnode.state.chosenUser = null;

    m.request("/users/").then(result => {
      vnode.state.users = result.map(u => new User(u));

      console.warn("Choosing to be the first available user");
      vnode.state.chosenUser = vnode.state.users[0];
    });
  },

  view: function(vnode) {
    return m(
      ".app",
      !vnode.state.chosenUser
        ? null
        : [
            m(heroListUserView, {
              name: vnode.state.chosenUser.firstName,
              superHeroes: vnode.state.chosenUser.superheroes,
              add: vnode.state.chosenUser.add,
              remove: vnode.state.chosenUser.remove,
              removeSuperHero: (relPk, idx) => {
                vnode.state.chosenUser.removeSuperHero(relPk, idx);
              },
              addSuperHero: (universe, pk) => {
                vnode.state.chosenUser.requestRandomSuperHeroes(universe, pk);
              },
              saveSuperHeroSelection: ops => {
                vnode.state.chosenUser.saveSuperHeroSelection(ops);
              },
              cancelSuperHeroSelection: () => {
                vnode.state.chosenUser.cancelSuperHeroSelection();
              }
            })
          ]
    );
  }
};

m.mount(document.body, page);
