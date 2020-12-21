/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
export const createDiagnosis = /* GraphQL */ `
  mutation CreateDiagnosis(
    $input: CreateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    createDiagnosis(input: $input, condition: $condition) {
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
export const updateDiagnosis = /* GraphQL */ `
  mutation UpdateDiagnosis(
    $input: UpdateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    updateDiagnosis(input: $input, condition: $condition) {
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
export const deleteDiagnosis = /* GraphQL */ `
  mutation DeleteDiagnosis(
    $input: DeleteDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    deleteDiagnosis(input: $input, condition: $condition) {
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
