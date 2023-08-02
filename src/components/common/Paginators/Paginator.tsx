import React, {FC} from 'react';
import s from "./Paginator.module.css";

type UsersPresentType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
}

export const Paginator: FC<UsersPresentType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let usersPages = []
    for (let i = 1; i <= pagesCount; i++) {
        usersPages.push(i)
    }

    return (
            <div className={s.btnsContainer}>
                {usersPages.map((page, i) => {
                    if ( i > -1 &&  i < 10) {
                        return <button onClick={() => onPageChanged(page)}
                                       className={currentPage === page ? s.selectedPage : ''}
                                       key={page}
                        >{page}</button>
                    }
                })}
            </div>
    );
};
