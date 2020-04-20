//动漫查询条件改变的action类型

export const actionTypes = {
  change: 'CHANGE'
}

//根据新的查询条件，产生一个action
export function change(newCondition) {
  return {
    type: actionTypes.change,
    payLoad: newCondition
  }
}
