/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      patientId
      name
      diagnosis {
        id
        diagnosisId
        type
        notes
        date
        createdAt
        updatedAt
      }
      timesVisited
      paid
      createdAt
      updatedAt
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patientId
        name
        timesVisited
        paid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiagnosis = /* GraphQL */ `
  query GetDiagnosis($id: ID!) {
    getDiagnosis(id: $id) {
      id
      diagnosisId
      type
      notes
      date
      createdAt
      updatedAt
    }
  }
`;
export const listDiagnosiss = /* GraphQL */ `
  query ListDiagnosiss(
    $filter: ModelDiagnosisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiagnosiss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        diagnosisId
        type
        notes
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
