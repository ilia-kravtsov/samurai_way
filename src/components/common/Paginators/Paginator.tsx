import React, {FC, useState} from 'react';
import s from "./Paginator.module.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type UsersPresentType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
    portionSize: number
}

export const Paginator: FC<UsersPresentType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
debugger
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/portionSize);
    const [portionNumber, setProtionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={s.btnsContainer}>
                {portionNumber > 1 && <ChevronLeftIcon onClick={() => setProtionNumber(portionNumber - 1)} sx={{boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2);', height: '50px', width: '40px', cursor: 'pointer'}}>Left</ChevronLeftIcon>}
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                      .map(page => {
                          return <button onClick={() => onPageChanged(page)}
                                         className={currentPage === page ? s.selectedPage : ''}
                                         key={page}
                          >{page}</button>
                      })
                }
                {portionCount > portionNumber && <KeyboardArrowRightIcon onClick={() => setProtionNumber(portionNumber + 1)} sx={{boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2);', height: '50px', width: '40px', cursor: 'pointer'}}>Right</KeyboardArrowRightIcon>}
            </div>
    );
};
