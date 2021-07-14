const config = {
    "columns": {
        "Company Name": {
            "fixed": true,
            "dataType": "string",
            "dataField": "Company Name"
        },
        "City": {
            "fixed": false,
            "dataType": "string",
            "dataField": "City"
        },
        "State": {
            "fixed": false,
            "dataType": "string",
            "dataField": "State"
        },
        "Phone": {
            "fixed": false,
            "dataField": "Phone",
            "dataType": "phone"
        },
        "Fax": {
            "fixed": false,
            "dataField": "Fax",
            "dataType": "phone"
        }
    }
}

export default {
    getConfig() {
      return config;
    }
  };