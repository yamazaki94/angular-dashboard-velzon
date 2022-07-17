import { Countries } from "src/app/enums/countries"
import { Nationalities } from "src/app/enums/nationality"

const data = {
    applicationTableDate : [
        {
            fullName : 'Madan Al Abri',
            gender : 'Male',
            nationality : 'Omani',
            email : 'Madan@email.com',
            contactNumber : '+9681224568',
            blsExpiryDate : '2029-02-06',
            aclsExpiryDate : '2029-05-06',
            status : 'Submitted',
            action: 'green'
        },
        {
            fullName : 'Saleh Mahfoudh',
            gender : 'Female',
            nationality : 'Omani',
            email : 'Saleh@email.com',
            contactNumber : '+9689994568',
            blsExpiryDate : '2028-02-16',
            aclsExpiryDate : '2028-01-16',
            status : 'Submitted',
            action: 'red'
        },
        {
            fullName : 'Madan Khan',
            gender : 'Male',
            nationality : 'Omani',
            email : 'Khan@email.com',
            contactNumber : '+9681743687',
            blsExpiryDate : '2025-12-26',
            aclsExpiryDate : '2025-05-05',
            status : 'Submitted',
            action: 'red'
        },
    ],
    statData : [
        {
        title: 'Total Applications',
        value: 65,
        icon: ' ri-file-edit-fill',
        persantage: '6.24',
        profit: 'up'
      }, {
        title: 'Applications Pending',
        value: 15,
        icon: 'ri-arrow-up-circle-fill',
        persantage: '3.67',
        profit: 'up'
      }, {
        title: 'Applications Approved',
        value: 35,
        icon: 'ri-arrow-down-circle-fill',
        persantage: '4.80',
        profit: 'down'
      }
    ],
    userDetails : {
      'residencyStatus' : 'Omani National',
      'isOmsbMember' : 'true',
      'membershipType' : 'Staff',
      'isEmployed' : 'true',
    
      
      'firstName' : 'Abbas',
      'thirdName' : 'Al',
      'familyName' : 'Ajmi',
      'fullNameInArabic' : 'عباس أل أجمع',
      'nationality' : 'Omani',
      
      'idNumber' : '97513256',
      // 'idLinkFront' : '',
      // 'idLinkBack' : '',
      'passportNumber' : '26934345',
      // 'passportLink' : '',
      'staffIdOrWorkId' : '24651923',
      // 'staffIdLink' : '',
    
      'profession' : 'Doctor',
      'primarySpecialty' : 'Medical',
      // 'ifOtherPrimarySpecialty' : '',
      'secondarySpecialty' : 'Other',
      'ifOtherSecondarySpecialty' : 'Other',
      'jobTitle' : 'OPD Consultant Doctor',
      'primaryWorkplaceSectorType' : 'Government',
      'primarySectorName' : 'Diwan Medical Service',
      // 'ifOtherPrimarySector' : '',
      'regionOfPrimaryWorkplace' : 'Value 1',
      // 'ifOtherRegionOfPrimaryWorkplace' : '',
      'secondaryWorkplaceSectorType' : 'Non-Applicable',
      // 'secondarySectorName' : '',
      // 'ifOtherSecondarySectorName' : '',
    
      'dataflowRef' : '#SC56-513213548',

      aclsCertificate: {
          expiryDate: 'Thu Jul 15 2032 00:00:00 GMT+0530 (India Standard Time)',
          uploadLink: ""
      },
      address: "25 Oman",
      age: 35,
      applyingYear: 2019,
      birthDate: 'Thu Jul 12 1984 00:00:00 GMT+0530 (India Standard Time)',
      blsCertificate: {
          expiryDate: 'Fri Jul 12 2030 00:00:00 GMT+0530 (India Standard Time)',
          uploadLink: ""
      },
      certificateUploadLink: "",
      completedResidencyProgramName: 'Value 1',
      nextOfKin: 'Abdel Maddali',
      contactNextOfKin: {
          countryCode: "OM",
          dialCode: "+968",
          e164Number: "+96852123456",
          internationalNumber: "+968 521 23456",
          nationalNumber: "521 23456",
          number: "52123456",
      },
      contactNumber: {
          countryCode: "OM",
          dialCode: "+968",
          e164Number: "+96813255618",
          internationalNumber: "+968 1325 5618",
          nationalNumber: "1325 5618",
          number: "13255618"
      },
      diseasesOrDisabilities: "Diabetes",
      education: [
          {
              country: "OM",
              dateOfGraduation: 'Thu Jul 29 2010 00:00:00 GMT+0530 (India Standard Time)',
              degreeObtained: "MBBS",
              gpa: "2.27",
              otherName: null,
              school: "Sultan_Qaboos_Univestiry",
          },
          {
              country: "OM",
              dateOfGraduation: 'Sat Jul 14 2012 00:00:00 GMT+0530 (India Standard Time)',
              degreeObtained: null,
              gpa: "1.29",
              otherName: null,
              school: "Oman_Medical_College",
          }
      ],
      email: "ajmi@gmail.com",
      examType: "MFD",
      fullName: "Abbas Al Ajmi",
      gender: "male",
      governorate: "value_1",
      haveDiseases: true,
      holdsEnglishProficiency: true,
      internship: [
          {
              endDate: 'Fri Jul 18 2014 00:00:00 GMT+0530 (India Standard Time)',
              institution: "Education Committee",
              position: "GFP",
              startDate: 'Fri Jul 09 2010 00:00:00 GMT+0530 (India Standard Time)'
          }
      ],
      isCompletedResidencyProgram: true,
      isDeclared: "",
      isMfdPassed: true,
      maritalStatus: "unmarried",
      mfdUploadLink: "",
      nationIdLink: "",
      nationIdNumber: "943456487",
      omsbSelectionExamScore: "20.5",
      overallScore: 20.1,
      placeOfBirth: "OM",
      sponsorshipLetterLink: "",
      wilayatOrRegion: "value_1",

  },
  gender: [
      { name: "Male", value: "male" },
      { name: "Female", value: "Female" },
    ],
    maritalStatus: [
      { name: "Married", value: "married" },
      { name: "Unmarried", value: "unmarried" },
    ],
    wilayatList: [
      { name: "Value 1", value: "value_1" },
      { name: "Value 2", value: "value_2" },
    ],
    examType: [
      { name: "OMSB Selection Exam", value: "OMSB_Selection_Exam" },
      { name: "MFD", value: "MFD" },
    ],
    governorateList: [
      { name: "Value 1", value: "value_1" },
      { name: "Value 2", value: "value_2" },
    ],
    educationInstitutesList: [
      { name: "Sultan Qaboos Univestiry", value: "Sultan_Qaboos_Univestiry" },
      { name: "Oman Medical College ", value: "Oman_Medical_College" },
      { name: "Arabian Gulf University ", value: "Arabian_Gulf_University" },
      {
        name: "Royal College of Surgeons in Ireland ",
        value: "Royal_College_of_Surgeons_in Ireland",
      },
      { name: "Other", value: "other" },
    ],
    degreeList: [
      { name: "MBBS", value: "MBBS" },
      { name: "BMBS", valu0e: "BMBS" },
      { name: "Other", value: "other" },
    ],
    currentPositionList: [
      { name: "Intern", value: "intern" },
      { name: "GFP", value: "GFP" },
      {
        name: "Medical Officer/ Medical House Officer ( MO/SHO)",
        value: "Medical_Officer/Medical_House_Officer_(MO/SHO)",
      },
    ],
    employmentStatus: [
      { name: "Employed", value: "employed" },
      { name: "Unemployed", value: "unemployed" },
    ],
    jobTitle: [
      { name: "Assistant", value: "doctor" },
      { name: "Medical Officer", value: "medical_officer" },
      { name: "Senior Medical Officer", value: "senior_medical_office" },
      { name: "Other", value: "other" },
    ],
    sectorType: [
      { name: "Government", value: "government" },
      { name: "Private", value: "private" },
    ],
    privateSectorList: [{ name: "Government", value: "government" }],
    positions : [ 'Intern', 'GFP', 'Medical Officer'
    ],
    trainingProgramsList : [
      { name: "None", value: "None" },
      { name: "Anesthesia", value: "Anesthesia" },
      { name: "Biochemistry", value: "Biochemistry" },
      { name: "Dermatology", value: "Dermatology" },
      { name: "Emergency Medicine", value: "Emergency Medicine" }
    ],
    countryList : Countries.countryList,
    nationalities : Nationalities.nationalities,
    age : getAges(),
    screeningStatus: [
      'Initial Approval by Employer & submitted for OMSB Review',
      'Initial Approval by Employer & submitted for OMSB Review (shortlisted for interview)',
      'Waiting List',
      'Not Approved by Employer',
      'Other'
    ]
}

function getAges() {
  let startAge = 18;
  let ageList = []
  while ( startAge <= 60 ) {
    ageList.push(startAge++);
  }
  return   ageList
}


export {data}