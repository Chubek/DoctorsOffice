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
      <h2>Insert Patients</h2>
      <input
        onChange={event => setInput('patientId', event.target.value)}
        style={styles.input}
        value={formState.patientId}
        placeholder="Patient ID"
      />
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Patient Name"
      />
      <input
        onChange={event => setInput('diagnosis.id', event.target.value)}
        style={styles.input}
        value={formState.diagnosis.diagnosisId}
        placeholder="Diagnosis ID"
      />
      <input
        onChange={event => setInput('diagnosis.type', event.target.value)}
        style={styles.input}
        value={formState.diagnosis.type}
        placeholder="Diagnosis Type"
      />
    <input
        onChange={event => setInput('diagnosis.notes', event.target.value)}
        style={styles.input}
        value={formState.diagnosis.notes}
        placeholder="Diagnosis Notes"
      />
    <input
        onChange={event => setInput('diagnosis.date', event.target.value)}
        style={styles.input}
        value={formState.diagnosis.date}
        placeholder="Diagnosis Date"
      />
    <input
        onChange={event => setInput('timesVisited', event.target.value)}
        style={styles.input}
        value={formState.timesVisited}
        placeholder="Times Visited"
      />
      <input
        onChange={event => setInput('paid', event.target.value)}
        style={styles.input}
        value={formState.paid}
        placeholder="Paid"
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