
import React from 'react'

function SortPopup({ items, ...props }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    //setVisiblePopup ----эта ф-я необходима для изменения значения перемнной visiblePopup + оповещения react что эта переменная изменлась и д.б. ререндер 
    //visiblePopup--по умолчанию false (т.к. передали это значение в переменную visiblePopup через useState) и всплывающее окно <div className="sort__popup"> по умолчанию не показывается

    const [activeItem, setActiveItem] = React.useState(0)
    //как только popup откроется первое выделенное значение будет популярность, т.к. в useState передан индекс 0 массива items

    const sortRef = React.useRef(null)
    console.log(sortRef.current) // в косоле получим <div class="sort"> поскольку useRef возвращает объект с полем current в значении которого сидит DOM элемент, изначально при первом рендере в консоль попадет null т.к. она по дефолту в useRef(null)


    const activeLabel =items[activeItem]
    //из массива items по актиному индексу activeItem вытаскиваем значение и передаем в activeLabel


    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    }





    const toggleVisiblePopup = () => { setVisiblePopup(!visiblePopup) }
    //() => setVisiblePopup(!visiblePopup) ----инвертирует заначение visiblePopup на противоложное (true/false) при каждом клике по спану 

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }
    //!e.path.includes(sortRef.current)----т.е. был клик вне области блока sortRef, тогда вызываем setVisiblePopup (false) и таким образом скрывает выплывающее окно с фильтром
    //addEventListener --при клике будет возвращать обработчик клика, котор. будет сообщать что произошло событие клика и мы его можем отловить т.е. она хранится в первом аргументе ф-ии handleOutsideClick, т.е. е--это объект с полем path которое фвляется массивом с путем к DOM элементу на котором произошло событие

    React.useEffect(
        () => {
            document.body.addEventListener('click', handleOutsideClick)
        }, [])


    return (
        // <div ref={(ref) => { sortRef.current = ref }} className="sort">   анонимная ф-я первым параметром в виде ref получает ссылку на DOM элемент, но этот код можно записать проще (что и сделано ниже), передав просто sortRef вместо анинимной ф-ии.   current - это названия ключа у объекта который возвращает хук useRef и в значении этого ключа будет DOM элемент
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg 
                className ={visiblePopup ? 'rotated' : null}
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C" />
                </svg>
                <b>Сортировка по:</b>

                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>


            {
                visiblePopup && <div className="sort__popup">
                    {/* visiblePopup--по умолчанию false (т.к. передали это значение в переменную visiblePopup через useState) и всплывающее окно <div className="sort__popup"> по умолчанию не показывается т.к. не выполняется код справа*/}

                    <ul>
                        {
                            // items.map(item => <li key={item}> {item} </li>)
                            items &&
                            items.map((item, index) => (
                                <li
                                    onClick={() => onSelectItem(index)}
                                    className={activeItem === index ? "active" : null}
                                    key={`${item}_${index}`}>
                                    {item}
                                </li>))
                            //${item}_${index}______теперь item будут всегда уникальным,т.к. не будет одинаковых категорий, а index просто дополнит (уникализирует), то что будут ренедерится. Т.е. если добавить еще раз мясные то в консоле будет предупреждпение что мясные уже были и это вновь добавленный элемент списка
                            //items.map((item,index) => <li onClick={ onClicItem(item) }......при каждом ренедере в консоль будут сразу выскакивать все названия элементов массива!!!! Если надо чтобы выскакивало название только при клике, тогда надо применить ф-ию обертку    <li onClick={  () => onClicItem(item)   }
                            // className="active" делает кнопку с черной фоновой заливкой
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default SortPopup



