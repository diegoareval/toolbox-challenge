import React, {useContext} from 'react';
import {Col } from 'react-bootstrap';
import {GlobalStateContext} from 'context/DataContext';
import Header from 'components/Molecules/Header/Header';
import ContainerPage from 'components/Organisms/Container/Container';
import {NavbarBrand} from 'components/Organisms/Navbar/Navbar';
import {CustomTable} from 'components/Organisms/Table/Tables';
import Loading from 'components/Atoms/Loader/Loading';


export default function Home() {
    const listFiles = useContext(GlobalStateContext).files;

    if(listFiles && listFiles.length > 0){
        return(<>
            <Header>
                <NavbarBrand />
            </Header>
            <ContainerPage>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} >

                    <CustomTable files={listFiles} />

                </Col>
            </ContainerPage>
        </>)
    }else{
        return(
            <>
                <Loading />
            </>
        )
    }
}
