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
  }
];
