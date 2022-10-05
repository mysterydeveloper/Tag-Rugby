import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CForm,
  CButton,
  CFormSelect,
} from '@coreui/react'
import React from 'react'

function handleSubmit(e) {
  e.preventDefault()
  console.log(e.target[0].value)
  console.log(e.target[1].value)
}
const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol xs={12}>
              <CFormInput placeholder="Name" aria-label="Name" />
            </CCol>
            <CCol xs={12}>
              <CFormSelect id="inlineFormSelectPref">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </CFormSelect>
            </CCol>
            <CCol xs={12}>
              <CButton type="submit">Submit</CButton>
            </CCol>
          </CForm>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Male Players</h3>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Player Name</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody></CTableBody>
          </CTable>
        </div>
        <div className="col">
          <h3>Female Players</h3>
          <CTable striped width="50%">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Player Name</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody></CTableBody>
          </CTable>
        </div>
      </div>
    </div>
  )
}

export default Register
