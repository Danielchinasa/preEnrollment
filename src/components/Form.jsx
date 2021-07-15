import React, { Fragment } from "react";
import axios from "axios"; 

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    title: "",
    firstName: "",
    lastName: "",
    otherName: "",
    dob: "",
    sex: "",
    email: "",
    phoneNumber: "",
    trackId: "",
    nin: "",
    bvn: "",
    indegene: "",
    originState: "",
    lgId: "",
    WardId: "",
    houseAddress: "",
    residenceState: "",
    residenceLGA: "",
    industryId: "",
    specialtyId: "",
    maritalStatus: "",
    housingCondition: "",
    ownHouse: "",
    rentCost: "",
    houseCost: "",
    spokenLanguage: "",
    hasComputer: "",
    hasInternetSubscription: "",
    educationLevel: "",
    withDisability: "",
    disabilityType: "",
    withHealthInsurance: "",
    employmentStatus: "",
    ownBusiness: "",
    noOfBusiness: "",
    monthlyTurnover: "",
    businessAddress: "",
    annualTurnover: "",
    tin: "",
    timeToOffice: "",
    transportMeans: "",
    dailyExpenses: "",
    totalIncome: "",
    nokFirstName: "",
    nokOtherName: "",
    nokLastName: "",
    nokRelationship: "",
    nokPhone: "",
    nokAddress: "",
    user_id: "1"
      
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, username, password } = this.state;
//     alert(`Your registration detail: \n 
//              Email: ${email} \n 
//              Username: ${username} \n
//              Password: ${password}`);
//   };

  handleSubmit = event => {
    event.preventDefault();
    const user = {

    // title: "this.state.title",
    // firstName: "this.state.firstName",
    // lastName: "this.state.lastName",
    // otherName: this.state.otherName,
    // dob: this.state.dob,
    // sex: this.state.sex,
    // email: this.state.email,
    // phoneNumber: this.state.phoneNumber,
    // trackId: this.state.trackId,
    // nin: this.state.nin,
    // bvn: this.state.bvn,
    // indegene: true,
    // originState: "1",
    // lgId: "1",
    // WardId: "1",
    // houseAddress: this.state.houseAddress,
    // residenceState: "1",
    // residenceLGA: "1",
    // industryId: "1",
    // specialtyId: "1",
    // maritalStatus: this.state.maritalStatus,
    // housingCondition: "good",
    // ownHouse: false,
    // rentCost: '2000000',
    // houseCost: this.state.houseCost,
    // spokenLanguage: this.state.spokenLanguage,
    // hasComputer: true,
    // hasInternetSubscription: true,
    // educationLevel: this.state.educationLevel,
    // withDisability: false,
    // disabilityType: this.state.disabilityType,
    // withHealthInsurance: true,
    // employmentStatus: this.state.employmentStatus,
    // ownBusiness: true,
    // noOfBusiness: '2',
    // monthlyTurnover: '40000.0',
    // businessAddress: "Lakechad Crescent",
    // annualTurnover: '5000000000.0',
    // tin: '4000.0',
    // timeToOffice: this.state.timeToOffice,
    // transportMeans: this.state.transportMeans,
    // dailyExpenses: '300',
    // totalIncome: '2000.0',
    // nokFirstName: this.state.nokFirstName,
    // nokOtherName: this.state.nokOtherName,
    // nokLastName: this.state.lastName,
    // nokRelationship: this.state.nokRelationship,
    // nokPhone: this.state.nokPhone,
    // nokAddress: this.state.nokAddress,
    // user_id: "1"

    "title": this.state.title,
    "firstName": this.state.firstName,
    "lastName": this.state.lastName,
    "otherName": this.state.otherName,
    "dob": this.state.dob,
    "sex": this.state.sex,
    "email": this.state.email,
    "phoneNumber": this.state.phoneNumber,
    "trackId": this.state.trackId,
    "nin": this.state.nin,
    "bvn": this.state.bvn,
    "indegene": this.state.indegene,
    "originState": "1",
    "lgId": "1",
    "WardId": "1",
    "houseAddress": this.state.houseAddress,
    "residenceState": "1",
    "residenceLGA": "1",
    "industryId": "1",
    "specialtyId": "1",
    "maritalStatus": this.state.maritalStatus,
    "housingCondition": "good",
    "ownHouse": false,
    "rentCost": 2000000,
    "houseCost": 0.0,
    "spokenLanguage": this.state.spokenLanguage,
    "hasComputer": this.state.hasComputer,
    "hasInternetSubscription": this.state.hasInternetSubscription,
    "educationLevel": this.state.educationLevel,
    "withDisability": this.state.withDisability,
    "disabilityType": this.state.disabilityType,
    "withHealthInsurance": this.state.withHealthInsurance,
    "employmentStatus": this.state.employmentStatus,
    "ownBusiness": true,
    "noOfBusiness": 2,
    "monthlyTurnover": 40000.0,
    "businessAddress": "Lakechad Crescent",
    "annualTurnover": 5000000000.0,
    "tin": 4000.0,
    "timeToOffice": "2",
    "transportMeans": this.state.transportMeans,
    "dailyExpenses": 300,
    "totalIncome": 2000.0,
    "nokFirstName": this.state.nokFirstName,
    "nokOtherName": this.state.nokOtherName,
    "nokLastName": this.state.nokLastName,
    "nokRelationship": this.state.nokRelationship,
    "nokPhone": this.state.nokPhone,
    "nokAddress": this.state.nokAddress,
    "user_id": "1"
      
    }
    axios.post('http://34.220.108.192:8090/biodata', user )
      .then(res=>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.id)
        localStorage.setItem("userId", res.data.id);
        window.location = "/qrcode" //This line of code will redirect you once the submission is succeed
      })
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
          style={{ float: "left", marginTop: "10px" }}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-success"
          type="button"
          style={{ float: "right", marginTop: "10px" }}
          onClick={this._next}
        >
          Continue
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        {/* <p>Step {this.state.currentStep} </p> */}

        <form onSubmit = { this.handleSubmit }>
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <div class="row g-3 needs-validation">
        <div className="col-md-12 col-xl-7 form-group">
          <label htmlFor="username">Title <span className="text-danger">*</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.title}
            onChange={props.handleChange}
            id="email"
            name="title"
          >
            <option selected>Select Title </option>
            <option value="Master" onChange={props.handleChange}>
              Master
            </option>
            <option value="Mr" onChange={props.handleChange}>
              Mr.
            </option>
            <option value="Mrs" onChange={props.handleChange}>
              Mrs.
            </option>
            <option value="Miss" onChange={props.handleChange}>
              Miss
            </option>
          </select>
        </div>
        <div className="col-md-12 col-xl-6 form-group">
          <label htmlFor="firstName">First Name <span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={props.firstName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="otherName">Other Name</label>
          <input
            className="form-control"
            id="otherName"
            name="otherName"
            type="text"
            placeholder="Enter other Name"
            value={props.otherName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-8 form-group">
          <label htmlFor="lastName">Last Name<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="dob">DOB<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="dob"
            name="dob"
            type="date"
            placeholder="Enter you date of Birth"
            value={props.dob}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="sex">Gender<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.sex}
            onChange={props.handleChange}
            id="sex"
            name="sex"
          >
            <option selected>Select Sex</option>
            <option value="Male" onChange={props.handleChange}>
              Male
            </option>
            <option value="Female" onChange={props.handleChange}>
              Female
            </option>
            <option value="Other" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Marrital Status<span className="text-danger"> *</span> </label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.maritalStatus}
            onChange={props.handleChange}
            id="maritalStatus"
            name="maritalStatus"
          >
            <option selected>Select Status</option>
            <option value="Single" onChange={props.handleChange}>
              Single
            </option>
            <option value="Married" onChange={props.handleChange}>
              Married
            </option>
            <option value="Divorced" onChange={props.handleChange}>
              Divorced
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Religion<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.religion}
            onChange={props.handleChange}
            id="religion"
            name="religion"
          >
            <option selected>Select Religion</option>
            <option value="Christianity" onChange={props.handleChange}>
              Christianity
            </option>
            <option value="Islam" onChange={props.handleChange}>
              Islam
            </option>
            <option value="Other" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div class="p-2 mb-2 text-white" style={{ backgroundColor: "#adb5bd" }}>
          Contact Details
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="username">Phone<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="Enter phone"
            value={props.phoneNumber}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-8 form-group">
          <label htmlFor="username">NIN</label>
          <input
            className="form-control"
            id="nin"
            name="nin"
            type="text"
            placeholder="Enter NIN"
            value={props.nin}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Tracking Id</label>
          <input
            className="form-control"
            id="trackId"
            name="trackId"
            type="text"
            placeholder="Enter Track Id"
            value={props.trackId}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">BVN</label>
          <input
            className="form-control"
            id="bvn"
            name="bvn"
            type="text"
            placeholder="Enter bvn"
            value={props.bvn}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <Fragment>
      <div class="row g-3 needs-validation">
        <div className="col-md-6 form-group">
          <label htmlFor="username">State of Residence<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.residenceState}
            onChange={props.handleChange}
            id="residenceState"
            name="residenceState"
          >
            <option selected>Select State</option>
            <option value="1" onChange={props.handleChange}>
              Parent
            </option>
            <option value="2" onChange={props.handleChange}>
              Spouse
            </option>
            <option value="2" onChange={props.handleChange}>
              Child
            </option>
            <option value="2" onChange={props.handleChange}>
              Sibline
            </option>
            <option value="2" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="username">L.G.A<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.residenceLGA}
            onChange={props.handleChange}
            id="residenceLGA"
            name="residenceLGA"
          >
            <option selected>Select LGA</option>
            <option value="1" onChange={props.handleChange}>
              Parent
            </option>
            <option value="2" onChange={props.handleChange}>
              Spouse
            </option>
            <option value="2" onChange={props.handleChange}>
              Child
            </option>
            <option value="2" onChange={props.handleChange}>
              Sibline
            </option>
            <option value="2" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div className="col-md-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="indegene"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            Are you an Indegene?
          </label>
        </div>
        <div className="col-md-12 form-group">
          <label htmlFor="username">Address<span className="text-danger"> *</span></label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Address"
            name="houseAddress"
            value={props.houseAddress}
            onChange={props.handleChange}
          ></textarea>
        </div>
        <div class="p-2 mb-2 text-white" style={{ backgroundColor: "#adb5bd" }}>
          Next Of Kin Details
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="username">First Name<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="nokFirstName"
            name="nokFirstName"
            type="text"
            placeholder="Enter email"
            value={props.nokFirstName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="username">Other Name</label>
          <input
            className="form-control"
            id="nokOtherName"
            name="nokOtherName"
            type="text"
            placeholder="Enter Other Name"
            value={props.nokOtherName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-8 form-group">
          <label htmlFor="username">Last Name<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="nokLastName"
            name="nokLastName"
            type="text"
            placeholder="Enter Last Name"
            value={props.nokLastName}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Relationship<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.nokRelationship}
            onChange={props.handleChange}
            id="nokRelationship"
            name="nokRelationship"
          >
            <option selected>Select Relationship</option>
            <option value="Parent" onChange={props.handleChange}>
              Parent
            </option>
            <option value="Spouse" onChange={props.handleChange}>
              Spouse
            </option>
            <option value="Child" onChange={props.handleChange}>
              Child
            </option>
            <option value="Sibline" onChange={props.handleChange}>
              Sibline
            </option>
            <option value="Other" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">State of Residence<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.email}
            onChange={props.handleChange}
            id="email"
            name="email"
          >
            <option selected>Select State</option>
            <option value="1" onChange={props.handleChange}>
              Parent
            </option>
            <option value="2" onChange={props.handleChange}>
              Spouse
            </option>
            <option value="2" onChange={props.handleChange}>
              Child
            </option>
            <option value="2" onChange={props.handleChange}>
              Sibline
            </option>
            <option value="2" onChange={props.handleChange}>
              Other
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Phone<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="nokPhone"
            name="nokPhone"
            type="number"
            placeholder="Enter email"
            value={props.nokPhone}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-12 form-group">
          <label htmlFor="username">Address<span className="text-danger"> *</span></label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Next Of Kin Address"
            name="nokAddress"
            value={props.nokAddress}
            onChange={props.handleChange}
          ></textarea>
        </div>
        
      </div>
    </Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div class="row g-3 needs-validation">
      <div className="col-md-6 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="ownHouse"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            Do You Own a House?
          </label>
        </div>
        <div className="col-md-6 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="ownBusiness"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            Do You Own a Business?
          </label>
        </div>
        {/* <div className="col-md-6 form-group">
          <label htmlFor="username">House Status<span className="text-danger"> *</span></label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.ownHouse}
            onChange={props.handleChange}
            id="ownHouse"
            name="ownHouse"
          >
            <option selected>Select Status</option>
            <option value="own House" onChange={props.handleChange}>
              Own a House
            </option>
            <option value="On Rent" onChange={props.handleChange}>
              On Rent
            </option>
          </select>
        </div> */}
        <div className="col-md-7 form-group">
          <label htmlFor="username">Housing Cost<span className="text-danger"> *</span></label>
          <input
            className="form-control"
            id="houseCost"
            name="houseCost"
            type="number"
            placeholder="Enter phone"
            value={props.houseCost}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-5 form-group">
          <label htmlFor="username">Language Spoken</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.spokenLanguage}
            onChange={props.handleChange}
            id="spokenLanguage"
            name="spokenLanguage"
          >
            <option selected>Select Langauge</option>
            <option value="English" onChange={props.handleChange}>
              English
            </option>
            <option value="Hausa" onChange={props.handleChange}>
              Hausa
            </option>
            <option value="Other" onChange={props.handleChange}>
              Others
            </option>
          </select>
        </div>
        <div
          className="p-2 mb-2 text-white"
          style={{ backgroundColor: "#adb5bd" }}
        >
          Other Info
        </div>
        <div className="col-md-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="hasComputer"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            Own A Computer At Home?
          </label>
        </div>
        <div className="col-md-4 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="hasInternetSubscription"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            Have Internet Access?
          </label>
        </div>
        <div className="col-md-8 form-group">
          <label htmlFor="username">Educational Level</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.educationLevel}
            onChange={props.handleChange}
            id="educationLevel"
            name="educationLevel"
          >
            <option selected>Select Level</option>
            <option value="Primary School" onChange={props.handleChange}>
              Primary School
            </option>
            <option value="Secondary School" onChange={props.handleChange}>
              Secondary School
            </option>
            <option value="Graduate" onChange={props.handleChange}>
              Graduate
            </option>
            <option value="Post Graduate" onChange={props.handleChange}>
              Post Graduate
            </option>
          </select>
        </div>
        <div className="col-md-6 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="withDisability"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            With Disability?
          </label>
        </div>
        <div className="col-md-4 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck2"
            name="withHealthInsurance"
            data-toggle="switch"
            value="true"
            onChange={props.handleChange}
          />
          <label class="form-check-label" for="validationFormCheck2">
            With Health Insurance?
          </label>
        </div>
        <div className="col-md-8 form-group">
          <label htmlFor="username">Disability Type</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.disabilityType}
            onChange={props.handleChange}
            id="disabilityType"
            name="disabilityType"
          >
            <option selected>Select Type</option>
            <option value="None" onChange={props.handleChange}>
              None
            </option>
            <option value="Hearing Impairment" onChange={props.handleChange}>
              Hearing Impairment
            </option>
            <option value="Speech & Langauge Disability" onChange={props.handleChange}>
              Speech & Langauge Disability
            </option>
            <option value="Others" onChange={props.handleChange}>
              Others
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Occupation</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.employmentStatus}
            onChange={props.handleChange}
            id="employmentStatus"
            name="employmentStatus"
          >
            <option selected>Select Occupation</option>
            <option value="Unemployment" onChange={props.handleChange}>
              Unemployment
            </option>
            <option value="Veterans" onChange={props.handleChange}>
              Veterans
            </option>
            <option value="Employed" onChange={props.handleChange}>
              Employed
            </option>
            <option value="Self-Employed" onChange={props.handleChange}>
              Self-Employed
            </option>
            <option value="Student" onChange={props.handleChange}>
              Student
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Work Industry</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.email}
            onChange={props.handleChange}
            id="email"
            name="email"
          >
            <option selected>Select Industry</option>
            <option value="1" onChange={props.handleChange}>
              ICT
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Time To Work </label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.timeToOffice}
            onChange={props.handleChange}
            id="timeToOffice"
            name="timeToOffice"
          >
            <option selected>Select Approx. Time</option>
            <option value="30 Minutes" onChange={props.handleChange}>
              30 Minutes
            </option>
            <option value="1 Hour" onChange={props.handleChange}>
              1 Hour
            </option>
            <option value="2 Hours" onChange={props.handleChange}>
              2 Hours
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Means to Work</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.transportMeans}
            onChange={props.handleChange}
            id="transportMeans"
            name="transportMeans"
          >
            <option selected>Select Means</option>
            <option value="Private Vehicle" onChange={props.handleChange}>
              Private Vehicle
            </option>
            <option value="Public Vehicle" onChange={props.handleChange}>
              Public Vehicle
            </option>
            <option value="Walk" onChange={props.handleChange}>
              Walk
            </option>
          </select>
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="username">Expenditure Rate</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={props.dailyExpenses}
            onChange={props.handleChange}
            id="dailyExpenses"
            name="dailyExpenses"
          >
            <option selected>Select Rate</option>
            <option value="Below ₦1000" onChange={props.handleChange}>
              Below ₦1000
            </option>
            <option value="Above ₦1000 - Below ₦3000" onChange={props.handleChange}>
              Above ₦1000 - Below ₦3000 
            </option>
            <option value="Above ₦3000" onChange={props.handleChange}>
              Above ₦3000
            </option>
          </select>
        </div>
      </div>
      <button className="btn btn-success btn-block" style={{ float: "right" }}>
        Submit
      </button>
    </React.Fragment>
  );
}

export default Form;
