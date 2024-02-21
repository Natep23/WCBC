import React from 'react';
import Generalstack from "./navigation/generalStack";
import AdminStack from "./navigation/adminStack";
import { test } from './navigation/StackDirection';
import {CONVEX_URL} from '@env'
import {ConvexProvider, ConvexReactClient} from 'convex/react'



export default function App() {
    const convex = new ConvexReactClient(CONVEX_URL, {
        unsavedChangesWarning: false
    })
  return (
    <ConvexProvider client={convex}>
        {test ?  <Generalstack/> : <AdminStack/>}
    </ConvexProvider>
)}


