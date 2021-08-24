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








//код на функциональной компоненте
function CategoriesWithHooks({ items, ...props }) {
  let [activeItem, setStateActiveItem] = useState(null)
  let onSelectItem = index => {
    setStateActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? "active" : ""} onClick={() => onSelectItem(null)}>Все</li>
        {
          // items.map(item => <li key={item}> {item} </li>)
          items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : null}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>))
          //${item}_${index}______теперь item будут всегда уникальным,т.к. не будет одинаковых категорий, а index просто дополнит (уникализирует), то что будут ренедерится. Т.е. если добавить еще раз мясные то в консоле будет предупреждпение что мясные уже были и это вновь добавленный элемент списка
          //items.map((item,index) => <li onClick={ onClicItem(item) }......при каждом ренедере в консоль будут сразу выскакивать все названия элементов массива!!!! Если надо чтобы выскакивало название только при клике, тогда надо применить ф-ию обертку    <li onClick={  () => onClicItem(item)   }
          // className="active" делает кнопку с черной фоновой заливкой
        }
      </ul>
    </div>
  )

}









export default CategoriesWithHooks

