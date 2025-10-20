import { Question } from "@/types/quiz";

export const questions: Question[] = [
  // Domain 1: Interacting with Snowflake and Architecture (35% - Questions 1-18)
  {
    id: 1,
    question: "What is a key benefit of Snowflake's elastic storage capability?",
    options: [
      "Storage capacity is fixed and must be pre-allocated",
      "Storage automatically scales up or down based on data volume without manual intervention",
      "Storage is limited to structured data only",
      "Storage requires separate purchases for each database"
    ],
    correctAnswer: 1,
    explanation: "Elastic storage in Snowflake automatically scales based on the amount of data stored, without requiring manual provisioning or capacity planning. You only pay for what you use, and there are no storage limits or performance degradation as data grows.",
    category: "Architecture"
  },
  {
    id: 2,
    question: "What are the three layers of Snowflake's architecture?",
    options: [
      "Storage, Compute, and Cloud Services",
      "Database, Warehouse, and Query",
      "Frontend, Backend, and Cache",
      "Tables, Schemas, and Databases"
    ],
    correctAnswer: 0,
    explanation: "Snowflake's unique architecture consists of three layers: Storage (stores all data), Compute (virtual warehouses that process queries), and Cloud Services (coordinates activities, authentication, metadata management). This separation allows independent scaling of each layer.",
    category: "Architecture"
  },
  {
    id: 3,
    question: "Which interface in Snowflake allows you to write and execute both SQL and Python code in an interactive notebook environment?",
    options: [
      "Snowsight Worksheets",
      "Snowflake Notebooks",
      "Classic Console",
      "SnowSQL CLI"
    ],
    correctAnswer: 1,
    explanation: "Snowflake Notebooks provide an interactive environment where you can combine SQL and Python code, visualize results using Streamlit, and work with data in a collaborative notebook format. This is ideal for data science and exploratory analysis workflows.",
    category: "User Interface"
  },
  {
    id: 4,
    question: "In Snowsight, where can you find the history of all queries you have executed?",
    options: [
      "Query History tab",
      "Worksheet History",
      "Activity panel",
      "Monitoring dashboard"
    ],
    correctAnswer: 0,
    explanation: "The Query History tab in Snowsight provides a complete record of all queries executed, including execution time, rows returned, warehouse used, and performance metrics. This is useful for troubleshooting and monitoring query patterns.",
    category: "User Interface"
  },
  {
    id: 5,
    question: "What is the correct hierarchy of Snowflake objects from top to bottom?",
    options: [
      "Schema → Database → Table → Column",
      "Database → Schema → Table → Column",
      "Table → Schema → Database → Column",
      "Account → Warehouse → Database → Table"
    ],
    correctAnswer: 1,
    explanation: "The Snowflake object hierarchy is: Account → Database → Schema → Table/View → Columns. Databases contain schemas, schemas contain tables and views, and tables contain columns. This hierarchical structure helps organize and secure data.",
    category: "Architecture"
  },
  {
    id: 6,
    question: "Which Snowflake object provides the compute resources to execute queries and DML operations?",
    options: [
      "Database",
      "Schema",
      "Virtual Warehouse",
      "Stage"
    ],
    correctAnswer: 2,
    explanation: "Virtual Warehouses are clusters of compute resources (CPU, memory, and temporary storage) that execute queries and perform DML operations. Warehouses are independent of storage, allowing you to scale compute separately from data storage.",
    category: "Architecture"
  },
  {
    id: 7,
    question: "In Snowflake Notebooks, what does the cell execution status indicator show?",
    options: [
      "Only whether the cell completed successfully",
      "The execution order and current state (running, completed, or failed)",
      "Only the execution time",
      "The warehouse being used"
    ],
    correctAnswer: 1,
    explanation: "Cell execution status in Snowflake Notebooks shows the execution order number and the current state of the cell (running, completed, failed, or pending). This helps track the flow of notebook execution and identify issues.",
    category: "User Interface"
  },
  {
    id: 8,
    question: "What is the purpose of the INFORMATION_SCHEMA in Snowflake?",
    options: [
      "To store user data and tables",
      "To provide metadata about databases, tables, columns, and other objects",
      "To backup database information",
      "To store query results"
    ],
    correctAnswer: 1,
    explanation: "INFORMATION_SCHEMA is a system-defined schema that contains views providing metadata about objects in your account, such as databases, schemas, tables, columns, and views. It follows the SQL standard and is useful for discovering and documenting database structure.",
    category: "Architecture"
  },
  {
    id: 9,
    question: "Which statement about Snowflake's elastic compute is TRUE?",
    options: [
      "You must purchase compute capacity in advance for the entire year",
      "Compute resources can be started, stopped, and resized on-demand based on workload needs",
      "All queries share a single fixed compute resource",
      "Compute capacity cannot be changed once allocated"
    ],
    correctAnswer: 1,
    explanation: "Elastic compute in Snowflake means virtual warehouses can be created, resized, started, stopped, and deleted on-demand. Multiple warehouses can run simultaneously for different workloads, and you only pay for compute when warehouses are actively running.",
    category: "Architecture"
  },
  {
    id: 10,
    question: "In Snowsight, what feature allows you to visualize query results as charts and graphs?",
    options: [
      "Manual export to Excel",
      "Built-in data visualization and charting tools",
      "External BI tool integration only",
      "Custom Python scripts"
    ],
    correctAnswer: 1,
    explanation: "Snowsight includes built-in visualization capabilities that allow you to create charts, graphs, and dashboards directly from query results without needing external tools. This makes data exploration and sharing insights faster and more accessible.",
    category: "User Interface"
  },
  {
    id: 11,
    question: "What data types can be stored in a Snowflake table?",
    options: [
      "Only numeric and string types",
      "Numeric, string, date/time, boolean, semi-structured (VARIANT, ARRAY, OBJECT), and binary types",
      "Only structured data types",
      "Only text-based formats"
    ],
    correctAnswer: 1,
    explanation: "Snowflake supports a wide range of data types including numeric, string, date/time, boolean, binary, and semi-structured types (VARIANT, ARRAY, OBJECT). The VARIANT type is particularly powerful for storing JSON, XML, and other semi-structured data.",
    category: "Data Types"
  },
  {
    id: 12,
    question: "Which feature in Snowflake Notebooks allows you to create interactive data applications?",
    options: [
      "SQL only mode",
      "Streamlit visualization",
      "Static HTML export",
      "CSV download"
    ],
    correctAnswer: 1,
    explanation: "Snowflake Notebooks support Streamlit, which allows you to create interactive data applications and visualizations directly within the notebook. This enables building dashboards and interactive tools without leaving the Snowflake environment.",
    category: "User Interface"
  },
  {
    id: 13,
    question: "What is Python variable substitution in Snowflake Notebooks?",
    options: [
      "Converting Python code to SQL",
      "Using Python variables in SQL queries within the notebook",
      "Replacing Python with SQL",
      "Translating variable names"
    ],
    correctAnswer: 1,
    explanation: "Python variable substitution in Snowflake Notebooks allows you to use Python variables directly in SQL queries, making it easy to parameterize queries and pass data between Python and SQL code cells seamlessly.",
    category: "User Interface"
  },
  {
    id: 14,
    question: "What is a View in Snowflake?",
    options: [
      "A physical copy of data stored separately",
      "A saved query that acts as a virtual table",
      "A type of warehouse",
      "A backup of a table"
    ],
    correctAnswer: 1,
    explanation: "A View in Snowflake is a named query that acts as a virtual table. When you query a view, Snowflake executes the underlying SQL query. Views don't store data themselves but provide a way to simplify complex queries and control data access.",
    category: "Architecture"
  },
  {
    id: 15,
    question: "In Snowsight, what is the primary purpose of the Worksheets feature?",
    options: [
      "To create spreadsheets like Excel",
      "To write, execute, and save SQL queries with support for multiple tabs",
      "To only view data, not execute queries",
      "To manage user permissions"
    ],
    correctAnswer: 1,
    explanation: "Worksheets in Snowsight are used to write, execute, and save SQL queries. You can have multiple worksheet tabs, organize queries, share worksheets with team members, and view query results with visualization options.",
    category: "User Interface"
  },
  {
    id: 16,
    question: "What happens to a Virtual Warehouse when it is suspended?",
    options: [
      "All data is deleted",
      "It stops consuming compute credits but retains its configuration",
      "It is permanently removed",
      "Query history is lost"
    ],
    correctAnswer: 1,
    explanation: "When you suspend a virtual warehouse, it stops consuming compute credits while retaining all its configuration settings (size, auto-suspend, auto-resume, etc.). You can resume it at any time to continue processing queries.",
    category: "Resource Management"
  },
  {
    id: 17,
    question: "Which of the following is a benefit of Snowflake's cloud services layer?",
    options: [
      "It only stores data",
      "It coordinates activities like authentication, metadata management, query optimization, and security",
      "It only runs queries",
      "It replaces the need for virtual warehouses"
    ],
    correctAnswer: 1,
    explanation: "The cloud services layer manages critical infrastructure services including authentication, metadata management, query parsing and optimization, access control, and transaction management. It coordinates all activities across storage and compute layers.",
    category: "Architecture"
  },
  {
    id: 18,
    question: "In Snowflake, what does 'context' refer to when working with databases and schemas?",
    options: [
      "The query execution plan",
      "The current database and schema you're working in",
      "The warehouse size",
      "The user's role"
    ],
    correctAnswer: 1,
    explanation: "Context in Snowflake refers to your current working database and schema. Setting context with USE DATABASE and USE SCHEMA commands allows you to reference tables and objects without fully qualifying them (e.g., use 'table_name' instead of 'database.schema.table_name').",
    category: "Architecture"
  },

  // Domain 2: Identity and Data Access Management (15% - Questions 19-26)
  {
    id: 19,
    question: "What is Role-Based Access Control (RBAC) in Snowflake?",
    options: [
      "A system where access is granted directly to individual users",
      "A system where privileges are granted to roles, and roles are assigned to users",
      "A way to control warehouse sizes",
      "A data encryption method"
    ],
    correctAnswer: 1,
    explanation: "RBAC in Snowflake means that privileges are granted to roles rather than directly to users. Roles are then assigned to users. This makes access management scalable and easier to maintain, as you can manage permissions at the role level.",
    category: "Security"
  },
  {
    id: 20,
    question: "Which system-defined role has the most privileges in a Snowflake account?",
    options: [
      "SYSADMIN",
      "SECURITYADMIN",
      "ACCOUNTADMIN",
      "PUBLIC"
    ],
    correctAnswer: 2,
    explanation: "ACCOUNTADMIN is the most powerful role in Snowflake with privileges to perform all operations in the account, including managing billing, creating users and roles, and accessing all objects. It should be used carefully and assigned to a limited number of trusted users.",
    category: "Security"
  },
  {
    id: 21,
    question: "What is the PUBLIC role in Snowflake?",
    options: [
      "A role that grants admin access to everyone",
      "A role automatically granted to every user and can own objects accessible to all users",
      "A role only for external users",
      "A temporary guest role"
    ],
    correctAnswer: 1,
    explanation: "The PUBLIC role is automatically granted to every user in Snowflake. Any privileges granted to PUBLIC are available to all users. The PUBLIC schema in each database is owned by the PUBLIC role, making it accessible to all users by default.",
    category: "Security"
  },
  {
    id: 22,
    question: "What is the purpose of role hierarchy in Snowflake?",
    options: [
      "To organize warehouses by size",
      "To enable roles to inherit privileges from other roles",
      "To schedule query execution",
      "To backup databases"
    ],
    correctAnswer: 1,
    explanation: "Role hierarchy in Snowflake allows roles to inherit privileges from other roles. When Role A is granted to Role B, Role B inherits all privileges that Role A has. This creates a hierarchy that simplifies privilege management across complex organizations.",
    category: "Security"
  },
  {
    id: 23,
    question: "How do you transfer ownership of a database object to another role?",
    options: [
      "Delete and recreate the object",
      "Use the GRANT OWNERSHIP command",
      "Ownership cannot be transferred",
      "Contact Snowflake support"
    ],
    correctAnswer: 1,
    explanation: "The GRANT OWNERSHIP command transfers ownership of a database object from one role to another. Syntax: GRANT OWNERSHIP ON DATABASE database_name TO ROLE role_name. This is important for managing object lifecycle and access control.",
    category: "Security"
  },
  {
    id: 24,
    question: "What SQL command is used to set your current role in a session?",
    options: [
      "SET ROLE role_name;",
      "USE ROLE role_name;",
      "SWITCH ROLE role_name;",
      "CHANGE ROLE role_name;"
    ],
    correctAnswer: 1,
    explanation: "USE ROLE role_name; sets your current role for the session. All subsequent operations will be performed with the privileges granted to that role. You can switch roles at any time during a session if you have been granted multiple roles.",
    category: "Security"
  },
  {
    id: 25,
    question: "What is the difference between USAGE and SELECT privileges on a database?",
    options: [
      "They are the same privilege",
      "USAGE allows seeing the database exists; SELECT allows querying tables within it",
      "USAGE is for warehouses only",
      "SELECT grants admin rights"
    ],
    correctAnswer: 1,
    explanation: "USAGE privilege on a database or schema allows you to see that it exists and navigate into it. SELECT privilege on tables allows you to query data. You need both USAGE on the container (database/schema) and SELECT on tables to query data.",
    category: "Security"
  },
  {
    id: 26,
    question: "Which SQL command allows you to view all databases you have access to?",
    options: [
      "LIST DATABASES;",
      "SHOW DATABASES;",
      "GET DATABASES;",
      "DESCRIBE DATABASES;"
    ],
    correctAnswer: 1,
    explanation: "SHOW DATABASES; displays all databases in the account that you have privilege to see. Similarly, SHOW SCHEMAS;, SHOW TABLES;, and other SHOW commands help you explore objects you have access to in Snowflake.",
    category: "Security"
  },

  // Domain 3: Data Loading and Virtual Warehouses (40% - Questions 27-46)
  {
    id: 27,
    question: "What is a Stage in Snowflake?",
    options: [
      "A location where data files are stored before loading into tables",
      "A type of virtual warehouse",
      "A backup system",
      "A query optimization feature"
    ],
    correctAnswer: 0,
    explanation: "A Stage is a location where data files are stored before loading them into Snowflake tables. Stages can be internal (managed by Snowflake) or external (referencing cloud storage like S3, Azure Blob, or GCS).",
    category: "Data Loading"
  },
  {
    id: 28,
    question: "Which command is used to load data from a stage into a Snowflake table?",
    options: [
      "LOAD DATA",
      "COPY INTO",
      "INSERT INTO",
      "IMPORT TABLE"
    ],
    correctAnswer: 1,
    explanation: "COPY INTO is the primary command for loading data from staged files into Snowflake tables. It supports various file formats (CSV, JSON, Parquet, etc.) and provides options for error handling, data transformation, and validation.",
    category: "Data Loading"
  },
  {
    id: 29,
    question: "What type of data is stored in a VARIANT column?",
    options: [
      "Only JSON data",
      "Semi-structured data including JSON, XML, Avro, Parquet",
      "Only numeric data",
      "Encrypted data only"
    ],
    correctAnswer: 1,
    explanation: "The VARIANT data type stores semi-structured data and can hold any type of data including objects and arrays. It's commonly used for JSON, XML, Avro, Parquet, and other semi-structured formats, allowing flexible querying without defining a fixed schema.",
    category: "Data Types"
  },
  {
    id: 30,
    question: "How do you query a specific attribute from JSON data stored in a VARIANT column?",
    options: [
      "Use standard dot notation: column_name.attribute",
      "JSON data cannot be queried",
      "Convert to VARCHAR first",
      "Use XML functions"
    ],
    correctAnswer: 0,
    explanation: "Snowflake supports dot notation and bracket notation to query JSON data in VARIANT columns. For example: SELECT json_column:attribute, json_column['key'], or json_column:nested.attribute to access nested values. This makes working with semi-structured data intuitive.",
    category: "Data Loading"
  },
  {
    id: 31,
    question: "What is the difference between a standard warehouse and a multi-cluster warehouse?",
    options: [
      "No difference, just different names",
      "Standard has one cluster; multi-cluster can automatically add/remove clusters for concurrent queries",
      "Multi-cluster is always faster",
      "Standard is for reads, multi-cluster for writes"
    ],
    correctAnswer: 1,
    explanation: "A standard warehouse has a single cluster of compute resources. A multi-cluster warehouse can automatically add or remove clusters based on the number of concurrent queries, ensuring consistent performance during peak loads. Multi-cluster is available in Enterprise Edition and higher.",
    category: "Resource Management"
  },
  {
    id: 32,
    question: "What does 'scaling up' a warehouse mean?",
    options: [
      "Adding more clusters",
      "Increasing the warehouse size (e.g., Small to Medium)",
      "Adding more users",
      "Increasing storage capacity"
    ],
    correctAnswer: 1,
    explanation: "Scaling up means increasing the warehouse size (X-Small → Small → Medium → Large, etc.), which provides more compute resources per cluster. Scaling out means adding more clusters. Scaling up helps with query speed, while scaling out helps with concurrency.",
    category: "Resource Management"
  },
  {
    id: 33,
    question: "What does 'scaling out' a multi-cluster warehouse mean?",
    options: [
      "Making the warehouse size larger",
      "Adding more compute clusters to handle more concurrent users",
      "Increasing storage",
      "Reducing costs"
    ],
    correctAnswer: 1,
    explanation: "Scaling out means adding more clusters to a multi-cluster warehouse to handle increased concurrency (more simultaneous queries). This is automatic based on query load and the MAX_CLUSTER_COUNT setting. It improves performance for many concurrent users.",
    category: "Resource Management"
  },
  {
    id: 34,
    question: "Which command lists the files in a stage?",
    options: [
      "SHOW FILES",
      "LIST @stage_name",
      "GET @stage_name",
      "VIEW STAGE"
    ],
    correctAnswer: 1,
    explanation: "The LIST @stage_name command displays all files in a specified stage, including file names, sizes, and last modified timestamps. This is useful for verifying files are staged correctly before loading data.",
    category: "Data Loading"
  },
  {
    id: 35,
    question: "What is the purpose of file format objects in Snowflake?",
    options: [
      "To compress files",
      "To define how to parse and interpret data files during loading or unloading",
      "To encrypt files",
      "To backup files"
    ],
    correctAnswer: 1,
    explanation: "File format objects define parsing rules for loading or unloading data, such as field delimiters, date formats, null string values, compression type, and error handling. They can be reused across multiple COPY commands for consistency.",
    category: "Data Loading"
  },
  {
    id: 36,
    question: "In Snowsight, how can you load data into a table without writing SQL?",
    options: [
      "You must always use SQL",
      "Use the Load Data wizard in the UI",
      "Import from Excel only",
      "Contact support for data loading"
    ],
    correctAnswer: 1,
    explanation: "Snowsight provides a visual Load Data wizard that allows you to upload files, select target tables, configure file formats, and load data through a graphical interface without writing SQL. This makes data loading accessible to non-technical users.",
    category: "Data Loading"
  },
  {
    id: 37,
    question: "Which SQL command can you use to insert a single row into a table?",
    options: [
      "ADD ROW",
      "INSERT INTO table_name VALUES (...)",
      "CREATE ROW",
      "LOAD ROW"
    ],
    correctAnswer: 1,
    explanation: "INSERT INTO table_name VALUES (...) is the standard SQL command to insert rows. You can insert single or multiple rows in one statement. For bulk loading from files, COPY INTO is more efficient than multiple INSERT statements.",
    category: "Data Loading"
  },
  {
    id: 38,
    question: "What are directory tables used for in Snowflake?",
    options: [
      "To store user directories",
      "To organize and query metadata about files in stages, especially unstructured data",
      "To list database objects",
      "To manage user permissions"
    ],
    correctAnswer: 1,
    explanation: "Directory tables automatically catalog files in external stages, storing metadata like file names, sizes, and URLs. They enable querying metadata about unstructured files and generating pre-signed URLs for accessing file content.",
    category: "Data Loading"
  },
  {
    id: 39,
    question: "How do you access unstructured data files (like images or PDFs) stored in Snowflake stages?",
    options: [
      "Download them manually",
      "Use pre-signed URLs generated from directory tables",
      "Unstructured files cannot be accessed",
      "Convert them to CSV first"
    ],
    correctAnswer: 1,
    explanation: "You can query directory tables to get metadata about unstructured files and generate pre-signed URLs using functions like BUILD_SCOPED_FILE_URL(). These URLs provide temporary, secure access to files stored in stages.",
    category: "Data Loading"
  },
  {
    id: 40,
    question: "What does the Snowflake Cortex COMPLETE function do?",
    options: [
      "Completes SQL queries automatically",
      "Provides LLM-powered text completion and generation",
      "Completes data loading tasks",
      "Finishes suspended warehouses"
    ],
    correctAnswer: 1,
    explanation: "COMPLETE is a Snowflake Cortex LLM function that provides AI-powered text completion and generation capabilities. You can use it directly in SQL to generate text, answer questions, or create content based on prompts.",
    category: "AI/ML"
  },
  {
    id: 41,
    question: "What is the purpose of the Snowflake Cortex TRANSLATE function?",
    options: [
      "To translate SQL to Python",
      "To translate text between different languages using AI",
      "To convert data types",
      "To migrate data between tables"
    ],
    correctAnswer: 1,
    explanation: "The TRANSLATE function in Snowflake Cortex uses AI to translate text between languages. You can specify source and target languages and translate entire columns of text data directly within SQL queries.",
    category: "AI/ML"
  },
  {
    id: 42,
    question: "What does the Snowflake Cortex CLASSIFY_TEXT function do?",
    options: [
      "Sorts text alphabetically",
      "Classifies or categorizes text using machine learning",
      "Counts text length",
      "Encrypts text"
    ],
    correctAnswer: 1,
    explanation: "CLASSIFY_TEXT uses machine learning to classify or categorize text data. It can perform tasks like sentiment analysis, topic classification, or custom classification based on your specified categories, all within SQL.",
    category: "AI/ML"
  },
  {
    id: 43,
    question: "What is the purpose of the Snowflake Cortex PARSE_DOCUMENT function?",
    options: [
      "To format SQL code",
      "To extract text and structure from documents like PDFs using AI",
      "To parse JSON only",
      "To validate XML"
    ],
    correctAnswer: 1,
    explanation: "PARSE_DOCUMENT extracts text and structured information from documents like PDFs, images, or other unstructured file types using AI/ML. This makes document data queryable and analyzable within Snowflake.",
    category: "AI/ML"
  },
  {
    id: 44,
    question: "When loading CSV files with COPY INTO, what does the SKIP_HEADER option do?",
    options: [
      "Skips the entire file",
      "Skips the specified number of header rows in the file",
      "Skips error rows",
      "Skips the file format definition"
    ],
    correctAnswer: 1,
    explanation: "SKIP_HEADER = N tells COPY INTO to skip the first N rows of the file, typically used to skip column header rows in CSV files. For example, SKIP_HEADER = 1 skips the first row containing column names.",
    category: "Data Loading"
  },
  {
    id: 45,
    question: "What is warehouse sizing based on?",
    options: [
      "Number of users only",
      "Amount of compute resources (CPU, memory, cache) - ranging from X-Small to 6X-Large",
      "Storage capacity",
      "Number of databases"
    ],
    correctAnswer: 1,
    explanation: "Warehouse sizes (X-Small, Small, Medium, Large, X-Large, 2X-Large, 3X-Large, 4X-Large, 5X-Large, 6X-Large) determine the amount of compute resources allocated. Each size up doubles the resources and credit consumption. Choose size based on query complexity and performance needs.",
    category: "Resource Management"
  },
  {
    id: 46,
    question: "Which file formats can Snowflake natively load without transformation?",
    options: [
      "Only CSV files",
      "CSV, JSON, Avro, Parquet, ORC, XML",
      "Only text-based formats",
      "Only Excel files"
    ],
    correctAnswer: 1,
    explanation: "Snowflake can natively load multiple file formats including delimited text (CSV, TSV), JSON, Avro, Parquet, ORC, and XML. Each format has specific file format options to control parsing and loading behavior.",
    category: "Data Loading"
  },

  // Domain 4: Data Protection and Data Sharing (10% - Questions 47-50)
  {
    id: 47,
    question: "What is Time Travel in Snowflake?",
    options: [
      "A feature to schedule queries",
      "The ability to query, restore, and clone data from a previous point in time",
      "A performance optimization feature",
      "A data migration tool"
    ],
    correctAnswer: 1,
    explanation: "Time Travel allows you to access historical data (data that has been changed or deleted) at any point within a defined retention period. You can query data as it existed in the past, restore deleted objects, or clone objects from a specific point in time.",
    category: "Data Protection"
  },
  {
    id: 48,
    question: "What is Zero-Copy Cloning in Snowflake?",
    options: [
      "A feature that copies data slowly",
      "Creating a full copy of data that requires double storage",
      "Creating a snapshot of a database/schema/table without duplicating underlying data",
      "A backup method"
    ],
    correctAnswer: 2,
    explanation: "Zero-Copy Cloning creates a replica of a database, schema, or table by copying metadata and creating pointers to existing micro-partitions. No data is physically copied, so clones are created instantly and consume no additional storage until changes are made.",
    category: "Data Protection"
  },
  {
    id: 49,
    question: "What is Snowflake Marketplace?",
    options: [
      "A place to buy Snowflake licenses",
      "A platform to discover and access third-party data sets and data services",
      "A warehouse size selector",
      "An employee marketplace"
    ],
    correctAnswer: 1,
    explanation: "Snowflake Marketplace is a platform where you can discover, access, and seamlessly query third-party data sets and data services from data providers. Data is shared using Snowflake's secure data sharing, requiring no data movement or copying.",
    category: "Data Sharing"
  },
  {
    id: 50,
    question: "What is Secure Data Sharing in Snowflake?",
    options: [
      "Exporting data via encrypted email",
      "Sharing live data between Snowflake accounts without copying or transferring data",
      "A VPN connection",
      "Copying data to external storage"
    ],
    correctAnswer: 1,
    explanation: "Secure Data Sharing allows you to share selected database objects with other Snowflake accounts instantly and securely. Consumers query shared data in real-time from the provider's storage without any data copying or transfer. The provider pays for storage, consumers pay for compute.",
    category: "Data Sharing"
  }
];
