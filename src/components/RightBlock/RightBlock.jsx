import React from 'react';
import classes from "./RightBlock.module.css";

const RightBlock = () => {
    return (
        <div className={classes.rightBlock}>

            <div className='sort'>
                <div className={classes.grey}>

                </div>
                <span><b>Сортировать</b></span>
                <ul className={classes.sortBy}>
                    <li><input type='checkbox'/> - возрастанию цены</li>
                    <li><input type='checkbox'/> - по убыванию цены</li>
                    <li><input type='checkbox'/> - по времени в пути</li>
                </ul>
            </div>
            <div className={classes.filter}>
                <span><b>Фильтровать</b></span>
                <li><input type='checkbox'/> - 1 пересадка</li>
                <li><input type='checkbox'/> - без пересадок</li>
            </div>
            <div className='price'>

            </div>
            <div className='airline'>

            </div>
        </div>
    );
};

export default RightBlock;