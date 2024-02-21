import React from 'react';
import Generalstack from "./navigation/generalStack";
import AdminStack from "./navigation/adminStack";
import { test } from './navigation/StackDirection';



export default function App() {

  return test ?  <Generalstack/> : <AdminStack/>;
}


