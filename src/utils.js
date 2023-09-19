
export const targetDataModel = [
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "company_name",
    label: "Company Name",
    validations: [{ validate: "required" }],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "company_domain_name",
    label: "Company domain name",
    validations: [
      { validate: "required" },
      {
        validate: "regex",
        // eslint-disable-next-line
        regex:
          "(https?:\\/\\/|(www\\.)){1}?[-a-zA-Z0-9@:%.\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%\\+.~#?&//=]*)",
        errorMessage:
          "Please use one of the following formats beginning with: https:// or www.",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "phone_number",
    label: "Phone Number",
    validations: [
      { validate: "required" },
      {
        validate: "regex",
        regex:
          "(\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)|00)\\d{3,14}$",
        errorMessage:
          "Please use one of the following formats beginning with +XX or 00XX.",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "city",
    label: "City",
    validations: [{ validate: "required" }],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "first_name",
    label: "First name",
    validations: [{ validate: "required" }],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "last_name",
    label: "Last name",
    validations: [{ validate: "required" }],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "email_address",
    label: "Email address",
    validations: [
      { validate: "required" },
      {
        validate: "unique",
      },
      {
        validate: "regex",
        // eslint-disable-next-line
        regex:
          "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",
        errorMessage: "Email",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "mobile_phone_number",
    label: "Mobile phone number",
    validations: [
      {
        validate: "regex",
        regex:
          "(\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)|00)\\d{3,14}$",
        errorMessage:
          "Please use one of the following formats beginning with +XX or 00XX.",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "deal_name",
    label: "Deal name",
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "deal_stage",
    label: "Deal stage",
  },
  {
    columnType: "category",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "pipeline",
    label: "Pipeline",
    validations: [
      {
        validate: "required",
      },
    ],
    dropdownOptions: [
      {
        label: "Pipeline No. 1",
        value: "pipeline_1",
        type: "string",
        alternativeMatches: ["pipeline 1", "No. 1"],
      },
      {
        label: "Pipeline No. 2",
        value: "pipeline_2",
        type: "string",
        alternativeMatches: ["pipeline 2", "No. 2"],
      },
      {
        label: "Pipeline No. 3",
        value: "pipeline_3",
        type: "string",
        alternativeMatches: ["pipeline 3", "No. 3"],
      },
      {
        label: "Pipeline No. 4",
        value: "pipeline_4",
        type: "string",
        alternativeMatches: ["pipeline 4", "No. 4"],
      },
      {
        label: "Pipeline No. 5",
        value: "pipeline_5",
        type: "string",
        alternativeMatches: ["pipeline 5", "No. 5"],
      },
      {
        label: "Pipeline No. 6",
        value: "pipeline_6",
        type: "string",
        alternativeMatches: ["pipeline 6", "No. 6"],
      },
      {
        label: "Pipeline No. 7",
        value: "pipeline_7",
        type: "string",
        alternativeMatches: ["pipeline 7", "No. 7"],
      },
      {
        label: "Pipeline No. 8",
        value: "pipeline_8",
        type: "string",
        alternativeMatches: ["pipeline 8", "No. 8"],
      },
      {
        label: "Pipeline No. 9",
        value: "pipeline_9",
        type: "string",
        alternativeMatches: ["pipeline 9", "No. 9"],
      },
      {
        label: "Pipeline No. 10",
        value: "pipeline_10",
        type: "string",
        alternativeMatches: ["pipeline 10", "No. 10"],
      },
    ],
  },
  {
    columnType: "int",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "amount",
    label: "Amount",
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "close_date",
    label: "Close date",
    validations: [
      {
        validate: "regex",
        regex:
          "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\.)(?:(?:0[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{4})$",
        errorMessage:
          "Please use a date format like the following one: dd.mm.yyyy",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "product_of_interest",
    label: "Product of interest",
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "point_of_contact",
    label: "Point of contact",
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "country",
    label: "Country",
    validations: [
      {
        validate: "required",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "street",
    label: "Street",
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "contacted_on",
    label: "Contacted on",
    validations: [
      {
        validate: "regex",
        regex:
          "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\.)(?:(?:0[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{4})$",
        errorMessage:
          "Please use a date format like the following one: dd.mm.yyyy",
      },
    ],
  },
  {
    columnType: "string",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "emplyee_ID",
    label: "Employee ID",
  },
  {
    columnType: "category",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    key: "department",
    label: "Department",
    dropdownOptions: [
      {
        label:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        value: "hr",
        type: "string",
      },
      {
        label:
          "Sales Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
        value: "sales",
        type: "string",
      },
      {
        label: "Marketing",
        value: "marketing",
        type: "string",
      },
      {
        label: "Product",
        value: "product",
        type: "string",
      },
      {
        label: "Design",
        value: "design",
        type: "string",
      },
      {
        label: "Housekeeping",
        value: "housekeeping",
        type: "string",
      },
      {
        label: "Board",
        value: "board",
        type: "string",
      },
    ],
  },
];
