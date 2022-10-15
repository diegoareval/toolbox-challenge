import React from 'react';
import { Form, Row, Col} from 'react-bootstrap';
import Input from "../../Atoms/Input";


/**
 * Render component Select and filter
 * @param {Array} listShowFilesByPages
 * @param {Function} handleLimitChange
 * @returns Component
 */
export const PaginationHead = ({listShowFilesByPages, handleLimitChange, handleChangeFilter}) => {

    return(<>
        <Row className="d-flex justify-content-between m-2 py-2  row">
            <Col  xs={6} sm={6} md={6} lg={4} xl={4} className="align-self-center">
                <Form.Label className="mb-0">Mostrar: </Form.Label>
                <Form.Select id="limitFiles" name="limitFiles" onChange={(e) => handleLimitChange(e.target.value)} className="mx-2">
                    {   listShowFilesByPages &&
                            listShowFilesByPages.map( (value,key) => <option value={value} key={key}>{value}</option> )
                    }
                </Form.Select>
                <Form.Label className="mb-0"> archivos. </Form.Label>
            </Col>
            <Col  xs={6} sm={6} md={6} lg={4} xl={4} className="align-self-center">
                <Input ariaLabel={"Filtrar: "} id="filterFile" onChange={handleChangeFilter}  placeholder="Ingrese nombre de archivo"/>
            </Col>
        </Row>
    </>)

}









