import React, {useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {PaginationFooter} from "../../Molecules/PaginationFooter";
import TableHead from "../../Atoms/FileTableHead";
import {PaginationHead} from "../../Molecules/pagination/Pagination";


export const CustomTable = ({files}) => {
    let listShowFilesByPages = [1,3,5];
    const [limitShowFiles,setLimitShowFiles] = useState(listShowFilesByPages[0]);
    const [page,setPage]=useState(1);
    const [posStartArrayFiles, setPosStartArrayFiles] =useState(0);
    const [posEndArrayFiles, setPosEndArrayFiles] =useState(limitShowFiles);
    const [listFiles,setListFiles] = useState(files)

    const handleChangeLimitShowFiles = (value) =>{
        setLimitShowFiles(value);
    }

    //Filter files
    const handleChangeFilterFile = (fileName) =>{
        if (fileName !== ''){
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
        setPosEndArrayFiles(limitShowFiles*page);
        setPosStartArrayFiles((limitShowFiles*page)-limitShowFiles)
    },[page,limitShowFiles])


    return (<div>
            <PaginationHead
                listShowFilesByPages={listShowFilesByPages}
                handleLimitChange={handleChangeLimitShowFiles}
                handleChangeFilter={handleChangeFilterFile}
            />

            {renderTable(listFiles.slice(posStartArrayFiles,posEndArrayFiles))}

            <PaginationFooter
                limitShowFiles={limitShowFiles}
                totalFiles={files.length}
                handlePage={handleChangeCurrentPage}
            />
    </div>);

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
                <TableHead/>
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
           <TableHead/>
            <tbody>
                <tr><td colspan="4" className="text-center">No existen coincidencias</td></tr>
            </tbody>
        </Table>
    )
}




