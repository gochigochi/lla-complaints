import React from 'react'
import Layout from '../components/Layout/Layout'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default Root