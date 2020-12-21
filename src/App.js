import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createPatient, createDiagnosis } from './graphql/mutations'
import { listPatients, listDiagnosiss } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { patientId: '', name: '', diagnosis: {diagnosisId: '', type: '', notes: '', date: ''}, timesVisited: '', paid: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [patients, setPatients] = useState([])
  const [diagnoses, setDiagnoses] = useState([])

  useEffect(() => {
    fetchPatients()
    fetchDiagnoses()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchPatients() {
    try {
      const patientData = await API.graphql(graphqlOperation(listPatients))
      const patients = patientData.data.listPatients.items
      setPatients(patients)
    } catch (err) { console.log('error fetching patients') }
  }


  async function fetchDiagnosiss() {
    try {
      const diagnosisData = await API.graphql(graphqlOperation(listDiagnosiss))
      const diagnosiss = diagnosisData.data.listDiagnosiss.items
      setDiagnosiss(diagnosiss)
    } catch (err) { console.log('error fetching diagnosiss') }
  }

  async function addPatients() {
    try {
      if (!formState.name || !formState.description) return
      const patient = { ...formState }
      setPatients([...patients, patient])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPatients, {input: patient}))
    } catch (err) {
      console.log('error creating patient:', err)
    }
  }

  async function addDiagnosiss() {
    try {
      if (!formState.name || !formState.description) return
      const diagnosis = { ...formState }
      setDiagnosiss([...diagnosiss, diagnosis])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createDiagnosiss, {input: diagnosis}))
    } catch (err) {
      console.log('error creating diagnosis:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Patientss</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addPatients}>Create Patients</button>
      {
        patients.map((patient, index) => (
          <div key={patient.id ? patient.id : index} style={styles.patient}>
            <p style={styles.todoName}>{patient.name}</p>
            <p style={styles.todoDescription}>{patient.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  patient: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App