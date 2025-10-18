import { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    question: "What is a Virtual Warehouse in Snowflake?",
    options: [
      "A physical data storage location",
      "A cluster of compute resources that execute queries and DML operations",
      "A type of database schema",
      "A backup storage system"
    ],
    correctAnswer: 1,
    explanation: "A Virtual Warehouse is a cluster of compute resources (CPU, memory, and temporary storage) that Snowflake uses to execute queries and perform DML operations. It is separate from storage, allowing independent scaling of compute and storage resources.",
    category: "Architecture"
  },
  {
    id: 2,
    question: "Which of the following statements about Snowflake's Time Travel feature is TRUE?",
    options: [
      "Time Travel is only available for Enterprise Edition",
      "Time Travel allows querying historical data within a defined period",
      "Time Travel permanently stores all data changes",
      "Time Travel requires additional storage costs"
    ],
    correctAnswer: 1,
    explanation: "Time Travel allows you to access historical data (i.e., data that has been changed or deleted) at any point within a defined period. It's available in all Snowflake editions with retention periods up to 90 days (Enterprise Edition and higher), and it uses Snowflake's existing storage without additional costs beyond standard storage fees.",
    category: "Data Protection"
  },
  {
    id: 3,
    question: "What is the purpose of Snowflake's Zero-Copy Cloning feature?",
    options: [
      "To compress data and reduce storage costs",
      "To create a full copy of data that requires additional storage",
      "To create a metadata copy that doesn't duplicate the underlying data",
      "To automatically backup data every hour"
    ],
    correctAnswer: 2,
    explanation: "Zero-Copy Cloning creates a snapshot of a database, schema, or table by creating metadata pointers to the existing data rather than physically copying it. This means the clone is created almost instantaneously and requires no additional storage until changes are made to either the original or the clone.",
    category: "Data Management"
  },
  {
    id: 4,
    question: "Which Snowflake feature allows you to load data continuously as it arrives in a stage?",
    options: [
      "COPY INTO command",
      "Snowpipe",
      "Time Travel",
      "External Tables"
    ],
    correctAnswer: 1,
    explanation: "Snowpipe enables loading data from files as soon as they're available in a stage. It uses serverless compute resources and can be triggered automatically using cloud notifications (like AWS S3 events or Azure Event Grid), making it ideal for continuous, automated data ingestion.",
    category: "Data Loading"
  },
  {
    id: 5,
    question: "What is the smallest unit of data storage in Snowflake?",
    options: [
      "Row",
      "Block",
      "Micro-partition",
      "Page"
    ],
    correctAnswer: 2,
    explanation: "Snowflake stores data in micro-partitions, which are contiguous units of storage. Each micro-partition contains between 50 MB and 500 MB of uncompressed data. Snowflake automatically organizes data into micro-partitions and maintains metadata about all rows stored in each micro-partition, enabling efficient query pruning.",
    category: "Architecture"
  },
  {
    id: 6,
    question: "Which authentication method is NOT natively supported by Snowflake?",
    options: [
      "Key Pair Authentication",
      "OAuth",
      "SAML 2.0 (SSO)",
      "Biometric Authentication"
    ],
    correctAnswer: 3,
    explanation: "Snowflake natively supports several authentication methods including password-based authentication, multi-factor authentication (MFA), federated authentication (SAML 2.0/SSO), OAuth, and key pair authentication. However, biometric authentication is not a natively supported authentication method in Snowflake.",
    category: "Security"
  },
  {
    id: 7,
    question: "What happens when you suspend a Virtual Warehouse?",
    options: [
      "All data in the warehouse is deleted",
      "Queries currently running are cancelled",
      "The warehouse stops consuming compute credits but retains its configuration",
      "The warehouse is permanently removed"
    ],
    correctAnswer: 2,
    explanation: "When you suspend a Virtual Warehouse, it stops consuming compute credits while retaining its configuration. Any queries currently running will complete, but no new queries can be executed until the warehouse is resumed. This is useful for controlling costs when the warehouse is not needed.",
    category: "Resource Management"
  },
  {
    id: 8,
    question: "What is the purpose of a Snowflake Share?",
    options: [
      "To divide compute resources among users",
      "To provide secure, read-only access to database objects with other Snowflake accounts",
      "To split storage costs across departments",
      "To backup data automatically"
    ],
    correctAnswer: 1,
    explanation: "Snowflake Shares enable secure data sharing between Snowflake accounts without actually copying or transferring data. The data provider shares selected database objects with one or more consumer accounts, who can then access the shared data in real-time. This is read-only access and leverages Snowflake's architecture to provide instant, secure data sharing.",
    category: "Data Sharing"
  },
  {
    id: 9,
    question: "Which file format is NOT supported for loading data into Snowflake?",
    options: [
      "CSV",
      "JSON",
      "Parquet",
      "HTML"
    ],
    correctAnswer: 3,
    explanation: "Snowflake supports various structured and semi-structured file formats including CSV, JSON, Avro, ORC, Parquet, and XML. However, HTML is not a supported file format for loading data as it's primarily a markup language for web content rather than a data storage format.",
    category: "Data Loading"
  },
  {
    id: 10,
    question: "What is the maximum retention period for Time Travel in Snowflake Enterprise Edition?",
    options: [
      "1 day",
      "7 days",
      "30 days",
      "90 days"
    ],
    correctAnswer: 3,
    explanation: "In Snowflake Enterprise Edition (and higher), the maximum Time Travel retention period is 90 days. This allows you to query, clone, and restore data that has been changed or deleted within this period. Standard Edition has a maximum retention period of 1 day.",
    category: "Data Protection"
  },
  {
    id: 11,
    question: "What is the primary benefit of Snowflake's multi-cluster warehouse feature?",
    options: [
      "Reduces storage costs",
      "Automatically scales compute resources to handle concurrent queries",
      "Encrypts data at rest",
      "Provides automatic failover"
    ],
    correctAnswer: 1,
    explanation: "Multi-cluster warehouses automatically scale compute resources by adding or removing clusters based on the number of concurrent user queries and the query load. This ensures consistent query performance during peak usage times.",
    category: "Resource Management"
  },
  {
    id: 12,
    question: "Which Snowflake object is used to define access control?",
    options: [
      "Schema",
      "Role",
      "Stage",
      "Pipe"
    ],
    correctAnswer: 1,
    explanation: "Roles are used in Snowflake to define access control. Privileges are granted to roles, and roles are then assigned to users. Snowflake uses a role-based access control (RBAC) model.",
    category: "Security"
  },
  {
    id: 13,
    question: "What is a Stage in Snowflake?",
    options: [
      "A temporary compute resource",
      "A location where data files are stored before loading into Snowflake tables",
      "A backup of the database",
      "A type of view"
    ],
    correctAnswer: 1,
    explanation: "A Stage is a location where data files are stored before loading them into Snowflake tables. Stages can be internal (managed by Snowflake) or external (cloud storage like S3, Azure Blob Storage, or GCS).",
    category: "Data Loading"
  },
  {
    id: 14,
    question: "What does Snowflake's VARIANT data type store?",
    options: [
      "Only JSON data",
      "Only XML data",
      "Semi-structured data including JSON, Avro, ORC, Parquet, and XML",
      "Only numerical data"
    ],
    correctAnswer: 2,
    explanation: "The VARIANT data type is designed to store semi-structured data. It can hold values of any other type, including OBJECT and ARRAY, making it ideal for storing JSON, Avro, ORC, Parquet, and XML data.",
    category: "Data Types"
  },
  {
    id: 15,
    question: "What is Fail-safe in Snowflake?",
    options: [
      "A feature that prevents query failures",
      "A 7-day period for data recovery by Snowflake Support after Time Travel expires",
      "A backup warehouse that activates automatically",
      "A feature that prevents accidental deletions"
    ],
    correctAnswer: 1,
    explanation: "Fail-safe is a data recovery service that provides a 7-day period during which Snowflake Support can recover historical data after the Time Travel retention period has ended. Fail-safe is not user-accessible and requires contacting Snowflake Support.",
    category: "Data Protection"
  },
  {
    id: 16,
    question: "Which Snowflake edition offers up to 90 days of Time Travel?",
    options: [
      "Standard Edition",
      "Enterprise Edition",
      "Business Critical Edition",
      "Virtual Private Snowflake"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Edition and higher (including Business Critical and Virtual Private Snowflake) support Time Travel retention periods of up to 90 days. Standard Edition supports only 1 day of Time Travel.",
    category: "Data Protection"
  },
  {
    id: 17,
    question: "What is the purpose of the COPY command in Snowflake?",
    options: [
      "To clone a database",
      "To load data from staged files into tables",
      "To backup data automatically",
      "To copy compute resources"
    ],
    correctAnswer: 1,
    explanation: "The COPY command is used to load data from staged files into Snowflake tables. It's a bulk loading operation that can load data from internal or external stages in various file formats.",
    category: "Data Loading"
  },
  {
    id: 18,
    question: "What is a Snowflake Task?",
    options: [
      "A query optimization feature",
      "A scheduled SQL statement or procedure that can be executed automatically",
      "A type of virtual warehouse",
      "A data sharing object"
    ],
    correctAnswer: 1,
    explanation: "A Task is a Snowflake object that allows you to schedule the execution of SQL statements or stored procedures. Tasks can be run on a schedule or triggered by other tasks, enabling workflow automation.",
    category: "Automation"
  },
  {
    id: 19,
    question: "What is the result cache in Snowflake?",
    options: [
      "A cache that stores raw data files",
      "A cache that stores query results for 24 hours for identical queries",
      "A cache for user credentials",
      "A backup storage location"
    ],
    correctAnswer: 1,
    explanation: "The result cache stores the results of queries for 24 hours. If the same query is executed again within that period and the underlying data hasn't changed, Snowflake returns the cached results instantly without consuming compute resources.",
    category: "Performance"
  },
  {
    id: 20,
    question: "Which statement about Snowflake's pricing model is correct?",
    options: [
      "You pay for compute and storage together as a bundle",
      "You pay separately for compute (based on usage) and storage (based on amount stored)",
      "Storage is free, you only pay for compute",
      "Compute is free, you only pay for storage"
    ],
    correctAnswer: 1,
    explanation: "Snowflake uses a pay-as-you-go pricing model where compute and storage are priced separately. Compute costs are based on the time warehouses are running (measured in credits), while storage costs are based on the average amount of data stored per month.",
    category: "Pricing"
  },
  {
    id: 21,
    question: "What is the purpose of clustering keys in Snowflake?",
    options: [
      "To encrypt data",
      "To improve query performance on large tables by organizing micro-partitions",
      "To share data with other accounts",
      "To compress data"
    ],
    correctAnswer: 1,
    explanation: "Clustering keys define how data is physically organized in micro-partitions within a table. Properly defined clustering keys can significantly improve query performance on large tables by reducing the number of micro-partitions that need to be scanned.",
    category: "Performance"
  },
  {
    id: 22,
    question: "What is a Stream in Snowflake?",
    options: [
      "A real-time data visualization tool",
      "An object that records DML changes made to a table",
      "A type of stage",
      "A network connection protocol"
    ],
    correctAnswer: 1,
    explanation: "A Stream is a Snowflake object that records Data Manipulation Language (DML) changes (inserts, updates, deletes) made to a table. Streams enable change data capture (CDC) and are commonly used with Tasks to create data pipelines.",
    category: "Data Pipelines"
  },
  {
    id: 23,
    question: "Which warehouse size would you choose for the most compute-intensive workloads?",
    options: [
      "X-Small",
      "Small",
      "Large",
      "4X-Large"
    ],
    correctAnswer: 3,
    explanation: "Warehouses range from X-Small to 6X-Large. Larger warehouses have more compute resources and can handle more compute-intensive workloads. A 4X-Large warehouse is one of the largest standard sizes and is suitable for very compute-intensive operations.",
    category: "Resource Management"
  },
  {
    id: 24,
    question: "What does the ACCOUNTADMIN role have access to in Snowflake?",
    options: [
      "Only database objects",
      "Only user management",
      "All objects and operations in the account, including billing information",
      "Only read access to all data"
    ],
    correctAnswer: 2,
    explanation: "ACCOUNTADMIN is the most powerful role in Snowflake with full privileges across the entire account. It can manage users, roles, databases, warehouses, resource monitors, and has access to billing and account-level settings.",
    category: "Security"
  },
  {
    id: 25,
    question: "What is a Secure View in Snowflake?",
    options: [
      "A view that is automatically encrypted",
      "A view whose definition and details are hidden from unauthorized users",
      "A view that can only be accessed by ACCOUNTADMIN",
      "A view that is automatically backed up"
    ],
    correctAnswer: 1,
    explanation: "A Secure View prevents users from viewing the underlying definition and data access paths, protecting sensitive logic and data. The view definition is only visible to authorized users, and the internal query optimizer is restricted to prevent inference of the underlying data.",
    category: "Security"
  },
  {
    id: 26,
    question: "What is the difference between internal and external stages?",
    options: [
      "Internal stages are faster than external stages",
      "Internal stages are managed by Snowflake; external stages reference cloud storage",
      "External stages are more secure than internal stages",
      "Internal stages can only store CSV files"
    ],
    correctAnswer: 1,
    explanation: "Internal stages are storage locations managed by Snowflake (within Snowflake's infrastructure). External stages reference storage locations outside of Snowflake, such as AWS S3, Azure Blob Storage, or Google Cloud Storage.",
    category: "Data Loading"
  },
  {
    id: 27,
    question: "What happens to queries when you resize a running warehouse?",
    options: [
      "All running queries are cancelled",
      "Running queries continue on the current size; new queries use the new size",
      "All queries are paused and then resumed",
      "The warehouse must be suspended first"
    ],
    correctAnswer: 1,
    explanation: "When you resize a running warehouse, all currently executing queries continue to run using the original warehouse size. New queries submitted after the resize operation completes will use the new warehouse size.",
    category: "Resource Management"
  },
  {
    id: 28,
    question: "What is a Materialized View in Snowflake?",
    options: [
      "A regular view with better security",
      "A pre-computed view that stores query results and is automatically maintained",
      "A view that can only be created by ACCOUNTADMIN",
      "A temporary view that expires after 24 hours"
    ],
    correctAnswer: 1,
    explanation: "A Materialized View is a pre-computed view whose results are stored in a table-like structure. Snowflake automatically maintains and updates the materialized view when the base table data changes, improving query performance for repeated queries.",
    category: "Performance"
  },
  {
    id: 29,
    question: "Which metadata repository stores information about Snowflake objects?",
    options: [
      "Information Schema",
      "Data Dictionary",
      "System Catalog",
      "Meta Database"
    ],
    correctAnswer: 0,
    explanation: "The Information Schema is a set of system-defined views that provide metadata about objects in Snowflake, including databases, schemas, tables, columns, views, and other database objects. It follows the SQL standard for information schemas.",
    category: "Architecture"
  },
  {
    id: 30,
    question: "What is the purpose of a File Format object in Snowflake?",
    options: [
      "To compress files automatically",
      "To define parsing rules for loading or unloading data files",
      "To encrypt files in stages",
      "To schedule file loading operations"
    ],
    correctAnswer: 1,
    explanation: "A File Format object defines the format of data files (CSV, JSON, Parquet, etc.) and specifies parsing options such as delimiters, compression, date formats, and error handling. This makes it easy to reuse the same format settings across multiple COPY commands.",
    category: "Data Loading"
  },
  {
    id: 31,
    question: "What is the minimum warehouse size in Snowflake?",
    options: [
      "Nano",
      "Micro",
      "X-Small",
      "Small"
    ],
    correctAnswer: 2,
    explanation: "X-Small is the smallest warehouse size in Snowflake. Warehouses scale in multiples of two, going from X-Small to Small, Medium, Large, X-Large, 2X-Large, 3X-Large, 4X-Large, 5X-Large, and 6X-Large.",
    category: "Resource Management"
  },
  {
    id: 32,
    question: "Which type of table is best for storing temporary data that is only needed for the duration of a session?",
    options: [
      "Permanent Table",
      "Transient Table",
      "Temporary Table",
      "External Table"
    ],
    correctAnswer: 2,
    explanation: "Temporary Tables exist only for the duration of the session and are automatically dropped when the session ends. They don't have Fail-safe and are ideal for storing intermediate results or temporary data during ETL processes.",
    category: "Data Management"
  },
  {
    id: 33,
    question: "What is the primary difference between Transient and Permanent tables?",
    options: [
      "Transient tables are faster to query",
      "Transient tables do not have Fail-safe protection",
      "Transient tables cannot be cloned",
      "Transient tables are read-only"
    ],
    correctAnswer: 1,
    explanation: "Transient tables have Time Travel (up to 1 day) but do not have Fail-safe protection. This reduces storage costs compared to Permanent tables, which have both Time Travel and 7-day Fail-safe. Transient tables are useful for data that doesn't require the highest level of data protection.",
    category: "Data Management"
  },
  {
    id: 34,
    question: "What is the purpose of the GET command in Snowflake?",
    options: [
      "To retrieve query results",
      "To download files from a Snowflake stage to a local directory",
      "To obtain metadata about tables",
      "To get the current warehouse size"
    ],
    correctAnswer: 1,
    explanation: "The GET command downloads files from a Snowflake internal stage (user stage, table stage, or named internal stage) to a local directory. It's commonly used in SnowSQL or client applications to retrieve staged files.",
    category: "Data Loading"
  },
  {
    id: 35,
    question: "Which feature allows you to automatically suspend a warehouse after a period of inactivity?",
    options: [
      "Auto-pause",
      "Auto-suspend",
      "Auto-shutdown",
      "Auto-terminate"
    ],
    correctAnswer: 1,
    explanation: "Auto-suspend automatically suspends a warehouse after a specified period of inactivity (no queries running). This helps control costs by ensuring warehouses don't continue consuming credits when not in use.",
    category: "Resource Management"
  },
  {
    id: 36,
    question: "What is the purpose of a Resource Monitor in Snowflake?",
    options: [
      "To monitor query performance",
      "To control and monitor credit usage by warehouses",
      "To track user login activity",
      "To monitor data loading operations"
    ],
    correctAnswer: 1,
    explanation: "Resource Monitors allow you to set credit usage limits on account or individual warehouse level. They can trigger notifications or suspend warehouses when specified credit thresholds are reached, helping control and monitor costs.",
    category: "Resource Management"
  },
  {
    id: 37,
    question: "What is the Account Usage view in Snowflake?",
    options: [
      "A view showing current active users",
      "A set of views providing historical usage data for the entire account",
      "A dashboard for monitoring warehouse performance",
      "A report of data storage costs"
    ],
    correctAnswer: 1,
    explanation: "Account Usage views are system-defined views in the SNOWFLAKE database that provide historical data about account-level usage, including queries, logins, storage, data transfers, and more. They retain data for up to 365 days and have a latency of 45 minutes to 3 hours.",
    category: "Monitoring"
  },
  {
    id: 38,
    question: "Which Snowflake feature enables you to query data in external cloud storage without loading it?",
    options: [
      "External Stages",
      "External Tables",
      "External Views",
      "External Functions"
    ],
    correctAnswer: 1,
    explanation: "External Tables allow you to query data stored in files in external cloud storage (S3, Azure Blob, GCS) without loading the data into Snowflake. The data remains in the external storage and is read at query time.",
    category: "Data Loading"
  },
  {
    id: 39,
    question: "What is the maximum size of a single row in Snowflake?",
    options: [
      "16 KB",
      "16 MB",
      "128 MB",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: "The maximum size of a single row in Snowflake is 16 MB. This includes all columns in the row. If data exceeds this limit, you'll need to restructure it, possibly by splitting data across multiple rows or using file references.",
    category: "Architecture"
  },
  {
    id: 40,
    question: "What happens when you clone a database in Snowflake?",
    options: [
      "All data is physically copied, doubling storage costs",
      "A metadata copy is created with no additional storage until changes are made",
      "Only the schema is copied, not the data",
      "The original database is locked during cloning"
    ],
    correctAnswer: 1,
    explanation: "Cloning a database uses Zero-Copy Cloning, which creates a metadata copy that points to the original data. No physical data is copied initially, so there's no additional storage cost. Storage costs only increase as changes are made to either the original or the clone.",
    category: "Data Management"
  },
  {
    id: 41,
    question: "What is the purpose of Data Sharing in Snowflake?",
    options: [
      "To split storage costs between departments",
      "To share live data between Snowflake accounts without copying or moving data",
      "To backup data across regions",
      "To compress shared data automatically"
    ],
    correctAnswer: 1,
    explanation: "Data Sharing allows you to share live, read-only data between Snowflake accounts instantly without copying or transferring the data. The data provider creates a share containing database objects, and consumers can access the shared data in real-time.",
    category: "Data Sharing"
  },
  {
    id: 42,
    question: "Which caching layer stores raw data extracted from micro-partitions?",
    options: [
      "Result Cache",
      "Metadata Cache",
      "Local Disk Cache (SSD)",
      "Remote Disk Cache"
    ],
    correctAnswer: 2,
    explanation: "The Local Disk Cache (also called SSD cache or warehouse cache) stores raw data extracted from micro-partitions. It's local to each warehouse and persists for the life of the warehouse, improving performance for repeated queries that access the same data.",
    category: "Performance"
  },
  {
    id: 43,
    question: "What is the role hierarchy concept in Snowflake?",
    options: [
      "Roles cannot be assigned to other roles",
      "Roles can be granted to other roles, creating a hierarchy where higher roles inherit privileges",
      "Only ACCOUNTADMIN can have multiple roles",
      "Role hierarchy is limited to three levels"
    ],
    correctAnswer: 1,
    explanation: "Snowflake supports role hierarchies where roles can be granted to other roles. A role inherits all privileges from any roles granted to it, creating a hierarchy. This allows for flexible and scalable access control management.",
    category: "Security"
  },
  {
    id: 44,
    question: "What is the purpose of the PUT command in Snowflake?",
    options: [
      "To insert data directly into tables",
      "To upload files from a local directory to a Snowflake stage",
      "To update existing records",
      "To create new stages"
    ],
    correctAnswer: 1,
    explanation: "The PUT command uploads files from a local file system to a Snowflake internal stage (user, table, or named stage). It's commonly used in SnowSQL or other clients to stage data files before loading them into tables.",
    category: "Data Loading"
  },
  {
    id: 45,
    question: "What is a Data Marketplace in Snowflake?",
    options: [
      "A platform to buy and sell Snowflake credits",
      "A platform to discover and access third-party data and data services",
      "A tool for managing internal data shares",
      "A storage optimization service"
    ],
    correctAnswer: 1,
    explanation: "Snowflake Data Marketplace is a platform where users can discover, access, and purchase third-party data and data services from various providers. It enables secure data sharing and monetization directly within Snowflake.",
    category: "Data Sharing"
  },
  {
    id: 46,
    question: "What type of encryption does Snowflake use for data at rest?",
    options: [
      "No encryption",
      "AES 128-bit encryption",
      "AES 256-bit encryption",
      "RSA encryption"
    ],
    correctAnswer: 2,
    explanation: "Snowflake automatically encrypts all data at rest using AES 256-bit encryption. This encryption is transparent to users and included by default with no additional configuration or performance impact.",
    category: "Security"
  },
  {
    id: 47,
    question: "What is the default retention period for Time Travel in Standard Edition?",
    options: [
      "0 days (disabled)",
      "1 day",
      "7 days",
      "30 days"
    ],
    correctAnswer: 1,
    explanation: "In Snowflake Standard Edition, the default and maximum Time Travel retention period is 1 day. This can be configured at the account, database, schema, or table level, but cannot exceed 1 day in Standard Edition.",
    category: "Data Protection"
  },
  {
    id: 48,
    question: "Which command is used to unload data from Snowflake to a stage?",
    options: [
      "EXPORT",
      "UNLOAD",
      "COPY INTO <stage>",
      "EXTRACT"
    ],
    correctAnswer: 2,
    explanation: "The COPY INTO <stage> command unloads data from a Snowflake table to a stage (internal or external). The data is typically unloaded in formats like CSV, JSON, or Parquet for use in external systems.",
    category: "Data Loading"
  },
  {
    id: 49,
    question: "What is the purpose of Query Acceleration Service in Snowflake?",
    options: [
      "To automatically increase warehouse size",
      "To accelerate portions of queries that can benefit from additional compute resources",
      "To cache all query results permanently",
      "To compress query results"
    ],
    correctAnswer: 1,
    explanation: "Query Acceleration Service is an optional feature that can accelerate portions of query workloads. It automatically offloads parts of queries to shared compute resources, improving performance without requiring warehouse size increases.",
    category: "Performance"
  },
  {
    id: 50,
    question: "What is Network Policy in Snowflake used for?",
    options: [
      "To optimize network performance",
      "To restrict access to Snowflake based on IP addresses",
      "To configure data sharing bandwidth",
      "To set up VPN connections"
    ],
    correctAnswer: 1,
    explanation: "Network Policies allow administrators to restrict access to Snowflake accounts based on IP address whitelisting or blacklisting. This adds an additional layer of security by controlling which IP addresses can connect to your Snowflake account.",
    category: "Security"
  }
];
