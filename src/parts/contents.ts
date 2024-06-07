import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _items: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    const num = 30
    for(let i = 0; i < num; i++) {
      const el = document.createElement('div')
      this.el.appendChild(el)

      const item = new Item({
        el: el,
      })
      this._items.push(item)
    }

  }

  protected _update():void {
    super._update()

    const x = Util.map(Math.sin(this._c * 0.01), -Func.sw() * 0.5, 0, -1, 1)
    Tween.set(this.el, {
      x: x,
    })
  }
}