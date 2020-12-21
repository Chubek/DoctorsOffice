/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateDiagnosis = /* GraphQL */ `
  subscription OnCreateDiagnosis {
    onCreateDiagnosis {
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
export const onUpdateDiagnosis = /* GraphQL */ `
  subscription OnUpdateDiagnosis {
    onUpdateDiagnosis {
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
export const onDeleteDiagnosis = /* GraphQL */ `
  subscription OnDeleteDiagnosis {
    onDeleteDiagnosis {
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
