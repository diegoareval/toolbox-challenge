import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import {ROUTES} from "./path";

export default function Pages() {
  return (<>
    <Routes>
      <Route path={ROUTES.HOME} element={<Index />}/>
    </Routes>
  </>);
}
