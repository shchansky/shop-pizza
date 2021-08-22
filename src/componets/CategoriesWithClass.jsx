import React, { useState } from 'react'

// function Categories() {
//     return (
//         <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           <li>Мясные</li>
//           <li>Вегетарианская</li>
//           <li>Гриль</li>
//           <li>Острые</li>
//           <li>Закрытые</li>
//         </ul>
//       </div>
//     )
// }


//код на функциональной компоненте
// function Categories({ items, ...props }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {
//           // items.map(item => <li key={item}> {item} </li>)
//           items.map((item, index) => <li onClick={() => props.onClicItem(item)} key={`${item}_${index}`}> {item} </li>)
//           //${item}_${index}______теперь item будут всегда уникальным,т.к. не будет одинаковых категорий, а index просто дополнит (уникализирует), то что будут ренедерится. Т.е. если добавить еще раз мясные то в консоле будет предупреждпение что мясные уже были и это вновь добавленный элемент списка

//           //items.map((item,index) => <li onClick={ props.onClicItem(item) }......при каждом ренедере в консоль будут сразу выскакивать все названия элементов массива!!!! Если надо чтобы выскакивало название только при клике, тогда надо применить ф-ию обертку    <li onClick={  () => props.onClicItem(item)   }
//         }
//       </ul>
//     </div>
//   )
// }




//код на классовой компоненте

class CategoriesWithClass extends React.Component {
   state = {
    activeItem: 0,
  }
  onSelectItem = index => {
    this.setState({ activeItem: index })
    //без this.setState можно обойтись так--но это грубый подход (необходим для понимания setState)--не используй его
    //this.state.activeItem = index---сказали js что надо изменить заначение activeItem на index
    //this.forceUpdate()----потом сказали это же реакту, forceUpdate произведет принудительный ререндер когда изменится значение в this.state.activeItem = index. Но ререндер будет происходить насильно, даже если это не нужно
  }
  render() {
    const { items, onClicItem } = this.props
    console.log(this.state)
    return (
      <div className="categories">
        <ul>
          <li>Все</li>
          {  
            items.map((item, index) => <li className={this.state.activeItem === index ? "active" : null} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}> {item} </li>)
            //${item}_${index}______теперь item будут всегда уникальным,т.к. не будет одинаковых категорий, а index просто дополнит (уникализирует), то что будут ренедерится. Т.е. если добавить еще раз мясные то в консоле будет предупреждпение что мясные уже были и это вновь добавленный элемент списка
            //items.map((item,index) => <li onClick={ onClicItem(item) }......при каждом ренедере в консоль будут сразу выскакивать все названия элементов массива!!!! Если надо чтобы выскакивало название только при клике, тогда надо применить ф-ию обертку    <li onClick={  () => onClicItem(item)   }
            // className="active" делает кнопку с черной фоновой заливкой
          }
        </ul>
      </div>
    )
  }
}

export default CategoriesWithClass

