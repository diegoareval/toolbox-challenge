import React, {useEffect, useState} from "react";
import {calculatePages} from "../../../utils/pagination";
import {Col, Row} from "react-bootstrap";
import {PaginationTable} from "../PaginationTable";

/**
 * Component pagination footer
 * @param {Number} totalFiles
 * @param {Number} limitShowFiles
 * @param {Function} handlePage
 * @returns Component
 */
export const PaginationFooter = ({totalFiles,limitShowFiles,handlePage}) => {

    let initPage = 1;

    const [endPage, setEndPage] = useState(calculatePages(totalFiles,limitShowFiles));

    useEffect(()=>{
        setEndPage(calculatePages(totalFiles,limitShowFiles));
    },[totalFiles,limitShowFiles])

    return(<>
        <Row className="d-flex justify-content-between m-2 py-2 ">
            <Col  xs={6} sm={6} md={6} lg={4} xl={4} className="align-self-center">
                <label>Archivos: {limitShowFiles}/{totalFiles}</label>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3} className="d-flex justify-content-end align-self-center">
                <PaginationTable pageStart={initPage} pageCurrent={initPage} pageEnd={endPage} handleCurrentPage={handlePage}/>
            </Col>
        </Row>
    </>)
}
