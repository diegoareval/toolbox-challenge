import React, {useEffect, useState} from "react";
import {Pagination} from "react-bootstrap";
import {activePage} from "../../../utils/pagination";

export const PaginationTable = ({pageStart,pageCurrent,pageEnd, handleCurrentPage}) => {
    let pages = [];
    const [activeButtons,setActiveButtons] = useState(false);
    const [page,setPage] = useState({
        start: pageStart,
        current: pageCurrent,
        end: pageEnd
    });



    const handleFirst = () => {
        setPage({
            ...page,
            current: page.start
        })

        handleCurrentPage(page.start);
    }

    const handlePrev = () => {
        console.log("PREVPAGE",page);

        if (page.current > page.start){
            handleCurrentPage(--page.current);
        }else{
            alert("llego al principio de la paginas")
        }
    }

    const handleNext= () => {
        console.log("NEXTPAGE",page);
        if (page.current < page.end){
            handleCurrentPage(++page.current);
        }else{
            alert("llego al final de la paginas")
        }

    }

    const handleLast = () => {
        setPage({
            ...page,
            current: page.end
        })

        handleCurrentPage(page.end);
    }

    const handleChange = (numberPage) =>{
        console.log("CURRENT-PAGE",page);

        setPage({...page, current:numberPage});
        handleCurrentPage(numberPage);
    }


    for (let index = 1; index <= pageEnd; index++) {
        pages.push(
            <Pagination.Item
                active={activePage(page.current,index)}
                onClick={(e)=>handleChange(index)}
                key={index}
            >
                {index}
            </Pagination.Item>)
    }




    useEffect(()=>{
        if (pageEnd === 1){
            setActiveButtons(true)
        }else{
            setActiveButtons(false)
        }
    },[pageEnd])


    return (<>
        <Pagination>
            <Pagination.First onClick={handleFirst} disabled={activeButtons}/>
            <Pagination.Prev  onClick={handlePrev} disabled={activeButtons}/>
            {pages}
            <Pagination.Next onClick={handleNext} disabled={activeButtons}/>
            <Pagination.Last onClick={handleLast} disabled={activeButtons}/>
        </Pagination>
    </>)

}
