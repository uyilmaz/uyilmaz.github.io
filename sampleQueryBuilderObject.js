{
  "group": {
    "operator": "AND",
    "rules": [
      {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "condition": "equals",
              "field": "Firstname",
              "data": "DDD"
            },
            {
              "condition": "equals",
              "field": "Firstname",
              "data": "EEE"
            }
          ]
        }
      },
      {
        "group": {
          "operator": "OR",
          "rules": [
            {
              "condition": "equals",
              "field": "Firstname",
              "data": "FFF"
            },
            {
              "condition": "equals",
              "field": "Firstname",
              "data": "GGG"
            }
          ]
        }
      },
      {
        "condition": "equals",
        "field": "Firstname",
        "data": "AAA"
      },
      {
        "condition": "in",
        "field": "Lastname",
        "data": "BBB"
      },
      {
        "condition": "or",
        "field": "Birthdate",
        "data": "CCC"
      },
      {
        "condition": "any",
        "field": "City",
        "data": "HHH"
      },
      {
        "condition": "between",
        "field": "Country",
        "data": "III"
      },
      {
        "condition": "lt",
        "field": "Firstname",
        "data": "JJJ"
      },
      {
        "condition": "gt",
        "field": "Firstname",
        "data": "KKK"
      },
      {
        "condition": "lte",
        "field": "Firstname",
        "data": "LLL"
      },
      {
        "condition": "gte",
        "field": "Firstname",
        "data": "MMM"
      }
    ]
  }
}