'use strict';


class Question {
  static _All(){
    return this._All;
  }
}

save () {
  this.constructor._All.push(this)
}

static Find(id){
  return this._All[id-1]
}