// import Button from "./Button"
// import Header from "./Header"
// import Categories from "./Categories"

// //экспортируется не по умолачинию (без default) объект состоящий из импортов  Button, Header, Categories
// // export { Button:Button, 
// //     Header:Header, 
// //     Categories:Categories 
// // }


// export { Button, Header, Categories }









//упрощаем код одновременно импортируя и экспортируя
export {default as Button  } from "./Button"
export {default as Header  } from "./Header"
export {default as CategoriesWithHooks  } from "./CategoriesWithHooks"
export {default as CategoriesWithClass  } from "./CategoriesWithClass"



