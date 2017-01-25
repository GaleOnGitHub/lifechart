import React from 'react'
import MainLayout from './layouts/MainLayout'
import SettingsForm from '../chart/containers/SettingsForm'

const SettingsPage = ({router}) => (
  <MainLayout title={'Settings'}>
    <SettingsForm router={router}/>
  </MainLayout>
)

export default SettingsPage