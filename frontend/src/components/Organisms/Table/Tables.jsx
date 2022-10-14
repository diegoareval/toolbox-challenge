import React, {useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {PaginationHead, PaginationFooter} from 'components/Molecules/pagination/Pagination';
import './tables.css'


/**
 * Return component Table
 * @param {Array} files
 * @returns Component
 */
export const CustomTable = ({files}) => {

    let listShowFilesByPages = [1,3,5];

    const [limitShowFiles,setLimitShowFiles] = useState(listShowFilesByPages[0]);
    const [page,setPage]=useState(1);
    const [posStartArreFiles, setPosStartArreFiles] =useState(0);
    const [posEndArreFiles, setPosEndArreFiles] =useState(limitShowFiles);
    const [listFiles,setListFiles] = useState(files)

    const handleChangeLimitShowFiles = (value) =>{
        setLimitShowFiles(value);
    }

    //Filter files
    const handleChangeFilterFile = (fileName) =>{
        if (fileName != ''){
            setListFiles(
                files.filter((file) => file.file.includes(fileName))
            )
        }else{
            setListFiles(files)
        }
    }

    const handleChangeCurrentPage = (page) =>{
        setPage(page);
    }

    useEffect(()=>{
        setPosEndArreFiles(limitShowFiles*page);
        setPosStartArreFiles((limitShowFiles*page)-limitShowFiles)
    },[page,limitShowFiles])


    return (<>
            <PaginationHead
                listShowFilesByPages={listShowFilesByPages}
                handleLimitChange={handleChangeLimitShowFiles}
                handleChangeFilter={handleChangeFilterFile}
            />

            {renderTable(listFiles.slice(posStartArreFiles,posEndArreFiles))}

            <PaginationFooter
                limitShowFiles={limitShowFiles}
                totalFiles={files.length}
                handlePage={handleChangeCurrentPage}
            />
    </>);

}

/**
 * Renders Table component
 * @param {Object} obj
 * @returns Component
 */
function renderTable (obj) {

    if (obj.length > 0){
        return(
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        obj.map((data) => (
                            data.lines.map( (row, k) =>(
                                <tr key={k}>
                                    <td>{data.file}</td>
                                    <td>{row.text}</td>
                                    <td>{row.number}</td>
                                    <td>{row.hex}</td>
                                </tr>
                            ))
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    return(
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
            </thead>
            <tbody>
                <tr><td colspan="4" className="text-center">No existen coincidencias</td></tr>
            </tbody>
        </Table>
    )
}


