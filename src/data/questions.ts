import { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    question: "A data engineer needs to load 10 TB of historical data into Snowflake. The files are stored in an S3 bucket and need to be loaded daily. Which approach would be MOST cost-effective and efficient?",
    options: [
      "Use Snowpipe with auto-ingest for continuous loading",
      "Use COPY INTO with a large warehouse scheduled during off-peak hours",
      "Use INSERT statements with a medium warehouse",
      "Use Snowpipe REST API with manual triggers every hour"
    ],
    correctAnswer: 1,
    explanation: "For large batch loads of historical data on a daily schedule, COPY INTO with a large warehouse during off-peak hours is most cost-effective. Snowpipe is designed for continuous micro-batch loading and would be more expensive for bulk loads. Using a larger warehouse for bulk operations completes faster and can be more cost-effective than running a smaller warehouse longer.",
    category: "Data Loading"
  },
  {
    id: 2,
    question: "Your organization has a multi-cluster warehouse with MIN_CLUSTER_COUNT = 2 and MAX_CLUSTER_COUNT = 5. During peak hours, you notice query queueing even though only 3 clusters are running. What is the MOST likely cause?",
    options: [
      "The SCALING_POLICY is set to ECONOMY mode",
      "The warehouse size is too small",
      "The MAX_CLUSTER_COUNT is too low",
      "Time Travel is consuming cluster resources"
    ],
    correctAnswer: 0,
    explanation: "When SCALING_POLICY is set to ECONOMY, Snowflake favors conserving credits over warehouse availability, meaning it will allow some query queueing before spinning up additional clusters. With STANDARD mode, clusters spin up immediately to prevent queueing. The queueing behavior described is characteristic of ECONOMY mode.",
    category: "Resource Management"
  },
  {
    id: 3,
    question: "A table has been accidentally dropped. The table had a DATA_RETENTION_TIME_IN_DAYS of 10, and it was dropped 5 days ago. The account is on Enterprise Edition. What is the BEST way to recover the table?",
    options: [
      "Contact Snowflake Support to recover from Fail-safe",
      "Use UNDROP TABLE command",
      "Restore from a previous Zero-Copy Clone",
      "The table cannot be recovered"
    ],
    correctAnswer: 1,
    explanation: "Since the table was dropped only 5 days ago and had a 10-day retention period, it's still within the Time Travel window. The UNDROP TABLE command can restore dropped tables, schemas, and databases within their retention period. Fail-safe is only for recovery after Time Travel expires and requires Snowflake Support intervention.",
    category: "Data Protection"
  },
  {
    id: 4,
    question: "Which statement about Snowflake's micro-partitions is TRUE regarding their impact on query performance?",
    options: [
      "Micro-partitions are always 16 MB in size after compression",
      "Queries benefit from partition pruning based on metadata stored in the cloud services layer",
      "Users must manually define partition keys like in traditional databases",
      "Micro-partitions are only created for tables larger than 1 TB"
    ],
    correctAnswer: 1,
    explanation: "Snowflake automatically creates micro-partitions and maintains detailed metadata about the min/max values of each column in each micro-partition. This metadata is stored in the cloud services layer and enables automatic partition pruning during query execution, significantly improving performance without manual intervention.",
    category: "Architecture"
  },
  {
    id: 5,
    question: "A company wants to share live data with a customer who does NOT have a Snowflake account. What is the recommended approach?",
    options: [
      "Create a Reader Account and share data through it",
      "Export data to S3 and provide access credentials",
      "Create a regular Snowflake Share",
      "Use external tables pointing to customer's cloud storage"
    ],
    correctAnswer: 0,
    explanation: "Reader Accounts are specifically designed for sharing data with organizations that don't have their own Snowflake account. The data provider provisions and manages the Reader Account, and the consumer accesses shared data through it. The provider pays for compute used by the Reader Account.",
    category: "Data Sharing"
  },
  {
    id: 6,
    question: "You are loading JSON files into a table with a VARIANT column. After loading, queries filtering on specific JSON attributes are slow. What would MOST improve query performance?",
    options: [
      "Increase the warehouse size",
      "Create a materialized view extracting frequently accessed attributes",
      "Enable result caching",
      "Compress the JSON files before loading"
    ],
    correctAnswer: 1,
    explanation: "Creating a materialized view that extracts frequently queried attributes from the VARIANT column into regular columns allows Snowflake to leverage micro-partition pruning and clustering for those columns, dramatically improving query performance.",
    category: "Performance"
  },
  {
    id: 7,
    question: "When using the COPY INTO command with ON_ERROR = 'CONTINUE', what happens when the command encounters a file with formatting errors?",
    options: [
      "The entire COPY command fails and no data is loaded",
      "The file with errors is skipped entirely and other files are loaded",
      "Only the error rows in the file are skipped; valid rows in the same file are loaded",
      "The command pauses and waits for manual intervention"
    ],
    correctAnswer: 1,
    explanation: "With ON_ERROR = 'CONTINUE', if a file contains errors, that entire file is skipped and not loaded. The COPY operation continues with the remaining files.",
    category: "Data Loading"
  },
  {
    id: 8,
    question: "A Stream has been created on a table to capture changes. What happens to the Stream when a table is dropped and then restored using UNDROP?",
    options: [
      "The Stream automatically reconnects and continues tracking changes",
      "The Stream becomes stale and must be recreated",
      "The Stream retains all change history from before the drop",
      "The Stream is automatically dropped with the table"
    ],
    correctAnswer: 1,
    explanation: "When a source table is dropped, any Streams on that table become stale. Even if you use UNDROP to restore the table, the Stream remains stale and must be recreated.",
    category: "Data Pipelines"
  },
  {
    id: 9,
    question: "Your organization requires customer-managed encryption keys. Which edition supports Tri-Secret Secure?",
    options: [
      "Enterprise Edition",
      "Business Critical Edition",
      "Standard Edition",
      "All editions with AWS KMS"
    ],
    correctAnswer: 1,
    explanation: "Tri-Secret Secure is available only in Business Critical Edition that enables customer-managed encryption keys combined with Snowflake-managed keys.",
    category: "Security"
  },
  {
    id: 10,
    question: "A warehouse has AUTO_SUSPEND = 600. A query completes at 2:00 PM with no subsequent activity. When will the warehouse suspend?",
    options: [
      "At 2:10 PM",
      "At 2:08 PM",
      "At 2:11 PM",
      "Immediately after the query"
    ],
    correctAnswer: 0,
    explanation: "AUTO_SUSPEND is measured from when the warehouse last completed work. The warehouse suspends exactly 10 minutes (600 seconds) after 2:00 PM.",
    category: "Resource Management"
  },
  {
    id: 11,
    question: "Data arrives in S3 every 5 minutes (50 MB files) and must be queryable within 2 minutes. What's the BEST loading strategy?",
    options: [
      "Schedule a Task every 2 minutes with COPY INTO",
      "Use Snowpipe with S3 event notifications",
      "Use a medium warehouse with scheduled COPY every 5 minutes",
      "Use external tables"
    ],
    correctAnswer: 1,
    explanation: "Snowpipe with S3 event notifications provides near real-time loading (1-2 minutes) and is purpose-built for continuous streaming data ingestion.",
    category: "Data Loading"
  },
  {
    id: 12,
    question: "A 500M row table with daily updates/deletes shows degrading query performance. What maintenance would MOST help?",
    options: [
      "Run VACUUM TABLE",
      "Execute ALTER TABLE ... RECLUSTER",
      "Increase DATA_RETENTION_TIME_IN_DAYS",
      "Create indexes"
    ],
    correctAnswer: 1,
    explanation: "Heavy DML causes clustering degradation. ALTER TABLE ... RECLUSTER reorganizes micro-partitions to improve partition pruning and performance.",
    category: "Performance"
  },
  {
    id: 13,
    question: "In Secure Data Sharing, who pays for what?",
    options: [
      "Consumer pays for storage",
      "Consumer uses provider's warehouse",
      "Consumer pays only for compute to query shared data",
      "Data is copied to consumer's account"
    ],
    correctAnswer: 2,
    explanation: "No data is copied. Provider pays storage, consumer pays only for their own compute resources to query the shared data.",
    category: "Data Sharing"
  },
  {
    id: 14,
    question: "A task runs every 60 minutes but takes 75 minutes to complete. What happens?",
    options: [
      "Next run starts immediately after",
      "Next run is skipped to prevent overlap",
      "Both run in parallel",
      "Task auto-increases warehouse size"
    ],
    correctAnswer: 1,
    explanation: "Tasks don't run in parallel by default. If still running when next execution is scheduled, that execution is skipped to prevent overlap.",
    category: "Automation"
  },
  {
    id: 15,
    question: "For a 1B row table spanning 5 years with DATE column filters, what provides the MOST performance improvement?",
    options: [
      "Define clustering key on DATE column",
      "Create search optimization on DATE",
      "Increase warehouse from Large to X-Large",
      "Enable query acceleration"
    ],
    correctAnswer: 0,
    explanation: "Clustering keys on large tables enable aggressive partition pruning for range queries, potentially reducing scanned data by 90%+",
    category: "Performance"
  },
  {
    id: 16,
    question: "A table has DATA_RETENTION_TIME_IN_DAYS = 5 on Enterprise Edition. Can you query 7 days ago using Time Travel?",
    options: [
      "Yes, Enterprise supports up to 90 days",
      "No, retention is set to 5 days only",
      "Yes, using Fail-safe",
      "Yes, Time Travel auto-extends"
    ],
    correctAnswer: 1,
    explanation: "Even on Enterprise, actual retention is determined by the DATA_RETENTION_TIME_IN_DAYS parameter. With 5 days set, you cannot query 7 days ago.",
    category: "Data Protection"
  },
  {
    id: 17,
    question: "You clone a 10 TB database. Developers modify 500 GB. How much additional storage is consumed?",
    options: [
      "0 GB",
      "500 GB",
      "10 TB",
      "10.5 TB"
    ],
    correctAnswer: 1,
    explanation: "Zero-copy clones share micro-partitions initially. Only modified micro-partitions consume additional storage, approximately 500 GB in this case.",
    category: "Data Management"
  },
  {
    id: 18,
    question: "A stored procedure with dynamic SQL needs to access various schemas. What rights model should be used?",
    options: [
      "EXECUTE AS OWNER",
      "EXECUTE AS CALLER",
      "EXECUTE AS ROLE SYSADMIN",
      "EXECUTE AS ACCOUNTADMIN"
    ],
    correctAnswer: 0,
    explanation: "EXECUTE AS OWNER allows the procedure to run with owner's privileges, avoiding the need for every caller to have permissions to all accessed schemas.",
    category: "Security"
  },
  {
    id: 19,
    question: "EU data residency required. US client needs access. What's the correct approach?",
    options: [
      "Replicate to US region",
      "Use Secure Sharing in same region",
      "Export and transfer encrypted",
      "Create Reader Account in EU region"
    ],
    correctAnswer: 3,
    explanation: "Reader Account in the EU region maintains data residency while providing external access. Data never leaves the EU.",
    category: "Data Sharing"
  },
  {
    id: 20,
    question: "Query Profile shows 95% time in 'Bytes Sent Over Network'. What's the issue?",
    options: [
      "Warehouse undersized",
      "Large result set; add filters or LIMIT",
      "Poor clustering",
      "Network latency"
    ],
    correctAnswer: 1,
    explanation: "High network time indicates large result set transfer to client. Solution is reducing result set size, not increasing compute.",
    category: "Performance"
  },
  {
    id: 21,
    question: "Task DAG: TaskA -> TaskB -> TaskC. TaskB fails. What happens to TaskC?",
    options: [
      "TaskC executes normally",
      "TaskC is skipped",
      "TaskC waits for manual restart",
      "All restart from TaskA"
    ],
    correctAnswer: 1,
    explanation: "When a task fails, all downstream dependent tasks are skipped to prevent cascading data inconsistencies.",
    category: "Automation"
  },
  {
    id: 22,
    question: "COPY INTO with 10,000 files. How to load only new files?",
    options: [
      "VALIDATION_MODE = 'RETURN_ERRORS'",
      "FORCE = TRUE",
      "Default load history tracking",
      "ON_ERROR = 'SKIP_FILE'"
    ],
    correctAnswer: 2,
    explanation: "COPY INTO automatically tracks load history (64 days) and skips previously loaded files by default based on name, size, and checksum.",
    category: "Data Loading"
  },
  {
    id: 23,
    question: "Materialized view on frequently updated table. What's the compute impact?",
    options: [
      "No impact; free maintenance",
      "Background maintenance consumes credits",
      "Manual REFRESH required",
      "Each query pays double"
    ],
    correctAnswer: 1,
    explanation: "Snowflake automatically maintains materialized views using background compute resources that consume credits when base tables change.",
    category: "Performance"
  },
  {
    id: 24,
    question: "Grant SELECT on all future tables in a schema to a role. Correct syntax?",
    options: [
      "GRANT SELECT ON ALL TABLES IN SCHEMA",
      "GRANT SELECT ON FUTURE TABLES IN SCHEMA",
      "Create Task for auto-grants",
      "Set default privileges"
    ],
    correctAnswer: 1,
    explanation: "GRANT ON FUTURE TABLES grants privileges on tables created in the future. Use both ALL and FUTURE for existing and future tables.",
    category: "Security"
  },
  {
    id: 25,
    question: "Warehouse runs 24 hours with mixed workloads. Recent queries slower. Most likely cause?",
    options: [
      "Cache filled with irrelevant data",
      "Warehouse needs restart",
      "Micro-partition fragmentation",
      "Concurrent query limit reached"
    ],
    correctAnswer: 0,
    explanation: "Warehouse cache becomes filled with diverse query data over time, reducing cache efficiency. Suspending/resuming can help restore cache efficiency.",
    category: "Performance"
  },
  {
    id: 26,
    question: "Show masked PII to analysts but full values to privileged users. Best feature?",
    options: [
      "Separate masked tables",
      "Dynamic Data Masking policies",
      "Row Access Policies",
      "Secure views with CURRENT_ROLE()"
    ],
    correctAnswer: 1,
    explanation: "Dynamic Data Masking automatically masks column data based on user's role without requiring separate tables or views.",
    category: "Security"
  },
  {
    id: 27,
    question: "DELETE removes 40% of rows from 1 TB table. Immediate storage impact?",
    options: [
      "Reduces 40% immediately",
      "Remains same until Time Travel expires",
      "Increases temporarily",
      "Reduces after VACUUM"
    ],
    correctAnswer: 1,
    explanation: "Original micro-partitions retained for Time Travel/Fail-safe. Storage only reduces after data ages out (up to 97 days on Enterprise).",
    category: "Data Management"
  },
  {
    id: 28,
    question: "Stream created with APPEND_ONLY = TRUE. What changes are captured?",
    options: [
      "Only INSERT operations",
      "INSERT and UPDATE",
      "INSERT and DELETE",
      "All DML marked as appends"
    ],
    correctAnswer: 0,
    explanation: "APPEND_ONLY streams capture only INSERT operations, more efficient for append-only data patterns like logs.",
    category: "Data Pipelines"
  },
  {
    id: 29,
    question: "Which feature provides automatic connection failover and retry?",
    options: [
      "Multi-cluster warehouses",
      "Connection pooling",
      "Client redirect for connection resilience",
      "Database replication"
    ],
    correctAnswer: 2,
    explanation: "Snowflake's client redirect functionality automatically handles connection failures and redirects to available endpoints.",
    category: "Architecture"
  },
  {
    id: 30,
    question: "Search optimization enabled on table. How does it affect highly selective filters (<1% rows)?",
    options: [
      "No impact on selective queries",
      "Significantly improves equality and IN predicates",
      "Only helps with clustering keys",
      "Degrades performance"
    ],
    correctAnswer: 1,
    explanation: "Search Optimization Service dramatically improves highly selective point lookup queries (equality, IN, substring searches).",
    category: "Performance"
  },
  {
    id: 31,
    question: "Loading 1 GB: 1,000 small files (1 MB each) vs. 10 large files (100 MB each). Which is TRUE?",
    options: [
      "Small files load faster due to parallelism",
      "Large files preferred; small files create overhead",
      "File size doesn't impact performance",
      "Small files better for Snowpipe"
    ],
    correctAnswer: 1,
    explanation: "Snowflake recommends 100-250 MB files. Many small files create overhead and reduce efficiency. Consolidate into larger files.",
    category: "Data Loading"
  },
  {
    id: 32,
    question: "Role hierarchy: ROLE_A granted to ROLE_B, ROLE_B granted to ROLE_C. User with ROLE_C runs query. Which privileges available?",
    options: [
      "Only ROLE_C",
      "ROLE_C and ROLE_B only",
      "All three roles (A, B, C)",
      "None until explicit switch"
    ],
    correctAnswer: 2,
    explanation: "Privileges are additive and inherited. ROLE_C inherits all privileges from ROLE_B and ROLE_A through the role hierarchy.",
    category: "Security"
  },
  {
    id: 33,
    question: "External function calls AWS Lambda taking 30 seconds. What happens to query?",
    options: [
      "Query fails after 10 seconds",
      "Query waits for Lambda and incorporates results",
      "Query continues asynchronously",
      "External functions limited to 5 seconds"
    ],
    correctAnswer: 1,
    explanation: "External functions are synchronous - queries wait for external service to complete and return results within timeout limits.",
    category: "Architecture"
  },
  {
    id: 34,
    question: "VARIANT column with JSON. Queries extracting attributes are slow on large warehouse. Most effective optimization?",
    options: [
      "Enable clustering on VARIANT",
      "Extract attributes into materialized generated columns",
      "Convert VARIANT to VARCHAR",
      "Enable search optimization on VARIANT"
    ],
    correctAnswer: 1,
    explanation: "Materialized generated columns extract JSON attributes into regular columns, enabling partition pruning and clustering.",
    category: "Performance"
  },
  {
    id: 35,
    question: "Task with WAREHOUSE = NULL. What compute does it use?",
    options: [
      "Task fails - no warehouse",
      "Uses account default warehouse",
      "Uses Snowflake-managed serverless compute",
      "Uses child task warehouse"
    ],
    correctAnswer: 2,
    explanation: "WAREHOUSE = NULL means the task uses Snowflake-managed serverless compute resources, useful for lightweight orchestration.",
    category: "Automation"
  },
  {
    id: 36,
    question: "Join TABLE_A (1B rows) with TABLE_B (1,000 rows). Which join strategy most likely?",
    options: [
      "Merge join",
      "Nested loop join",
      "Broadcast join (broadcasting TABLE_B)",
      "Hash join with TABLE_A as build"
    ],
    correctAnswer: 2,
    explanation: "For large-small table joins, Snowflake typically broadcasts the small table to all nodes processing the large table.",
    category: "Performance"
  },
  {
    id: 37,
    question: "Automatically expire data older than 7 years for compliance. Best approach?",
    options: [
      "Set DATA_RETENTION_TIME_IN_DAYS = 2555",
      "Create Task running DELETE statements daily",
      "Use Stream to remove old records",
      "Partition and drop old partitions"
    ],
    correctAnswer: 1,
    explanation: "DATA_RETENTION controls Time Travel, not lifecycle. Use scheduled Task with DELETE for automatic data expiration.",
    category: "Data Management"
  },
  {
    id: 38,
    question: "Query with WHERE col_a IN (SELECT col_b FROM table_x). Poor performance. First optimization?",
    options: [
      "Replace with EXISTS subquery",
      "Materialize table_x in temp table",
      "Convert to JOIN",
      "Add indexes"
    ],
    correctAnswer: 2,
    explanation: "Snowflake optimizes JOINs better than subqueries in WHERE. Converting to JOIN allows better optimization and parallelization.",
    category: "Performance"
  },
  {
    id: 39,
    question: "Multiple databases to replicate. One 100 TB database rarely changes. Cost-effective strategy?",
    options: [
      "Replicate all on same schedule",
      "Different schedules based on change frequency",
      "Disable replication for static DB",
      "Enable continuous for all"
    ],
    correctAnswer: 1,
    explanation: "Replication only transfers changed data. Reduce frequency for static databases to balance RPO and costs.",
    category: "Data Management"
  },
  {
    id: 40,
    question: "Python UDF called for each row in 100M row table. Poor performance. Most likely cause?",
    options: [
      "Python slower than SQL",
      "UDFs cannot be parallelized",
      "Row-by-row overhead; consider vectorized UDFs",
      "Warehouse too small"
    ],
    correctAnswer: 2,
    explanation: "Scalar UDFs process one row at a time. Vectorized Python UDFs process batches using pandas, providing 10-100x improvement.",
    category: "Performance"
  },
  {
    id: 41,
    question: "Network policy restricts access. User works fine from office but not home. Likely reason?",
    options: [
      "Home IP blocked by network policy",
      "User needs VPN",
      "MFA required for remote",
      "Snowflake doesn't support residential IPs"
    ],
    correctAnswer: 0,
    explanation: "Network policies restrict by IP ranges. If policy only allows office IPs, home connections are blocked.",
    category: "Security"
  },
  {
    id: 42,
    question: "COPY INTO loads files, but later files in batch take longer. Most likely cause?",
    options: [
      "Warehouse fatigue",
      "Local disk cache fills up",
      "Network throttling",
      "Later files are larger"
    ],
    correctAnswer: 1,
    explanation: "Warehouse cache fills during bulk loads. As cache fills, performance degrades due to cache management overhead.",
    category: "Data Loading"
  },
  {
    id: 43,
    question: "Secure view joins multiple tables. Users with SELECT on view cannot query. Most likely issue?",
    options: [
      "Users need SELECT on underlying tables too",
      "Secure views require special privileges",
      "Need EXECUTE privilege",
      "Secure views cannot join tables"
    ],
    correctAnswer: 0,
    explanation: "Users need SELECT on both the view AND underlying tables (unless using definer's rights model).",
    category: "Security"
  },
  {
    id: 44,
    question: "Application generates 1,000 small INSERTs per second. Poor performance and high costs. Best optimization?",
    options: [
      "Use larger warehouse",
      "Batch inserts into larger transactions",
      "Create clustered index",
      "Enable auto-commit"
    ],
    correctAnswer: 1,
    explanation: "Snowflake optimized for bulk operations. Batch many rows into larger INSERT statements for better performance and lower costs.",
    category: "Performance"
  },
  {
    id: 45,
    question: "Materialized view on frequently updated table is often stale after weeks. What could cause this?",
    options: [
      "Materialized views don't auto-refresh",
      "Updates too frequent for maintenance",
      "Background service has insufficient resources",
      "Views expire after 30 days"
    ],
    correctAnswer: 2,
    explanation: "If base table updates very frequently or view is complex, background maintenance may not keep up, causing staleness.",
    category: "Performance"
  },
  {
    id: 46,
    question: "Loading complex nested XML files. Recommended approach?",
    options: [
      "Load into VARCHAR and parse with SQL",
      "Load into VARIANT; XML auto-parsed",
      "Pre-convert XML to JSON, load into VARIANT",
      "Use external tables for XML"
    ],
    correctAnswer: 2,
    explanation: "XML isn't automatically parsed like JSON. Convert to JSON before loading into VARIANT for efficient querying.",
    category: "Data Loading"
  },
  {
    id: 47,
    question: "Query runs in 5s on Small warehouse, 4s on X-Large (16x larger). Most likely explanation?",
    options: [
      "Query not parallelizable enough",
      "Result cache used second time",
      "X-Large has slower nodes",
      "Hit concurrency limit"
    ],
    correctAnswer: 0,
    explanation: "Not all queries benefit from larger warehouses. Fast, I/O-bound, or non-parallelizable queries won't see proportional improvements.",
    category: "Resource Management"
  },
  {
    id: 48,
    question: "Large table performs well in morning but degrades in afternoon. Most likely cause?",
    options: [
      "Cache cleared at noon",
      "Afternoon DML causes clustering degradation",
      "More concurrent users afternoon",
      "Time Travel overhead increases"
    ],
    correctAnswer: 1,
    explanation: "Heavy DML during the day causes clustering degradation over time, reducing query performance by afternoon.",
    category: "Performance"
  },
  {
    id: 49,
    question: "External stage with AUTO_REFRESH = TRUE. New files added but don't appear in queries. What's missing?",
    options: [
      "AUTO_REFRESH only works with internal stages",
      "Event notifications from cloud storage not configured",
      "External tables must be manually refreshed",
      "Need ALTER STAGE REFRESH"
    ],
    correctAnswer: 1,
    explanation: "AUTO_REFRESH requires configuring cloud storage event notifications (S3 Events, Azure Event Grid, GCS Pub/Sub) to Snowflake.",
    category: "Data Loading"
  },
  {
    id: 50,
    question: "Table with 5 years data. Queries typically filter last 30 days. Best design for performance and cost?",
    options: [
      "Clustering key on date",
      "Partition into separate current and historical tables",
      "Use search optimization",
      "Materialized view for last 30 days"
    ],
    correctAnswer: 1,
    explanation: "Separate hot (current) and cold (historical) data into different tables. Current table optimized for performance, historical for cost.",
    category: "Architecture"
  }
];
