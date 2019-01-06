# orch-ui-service-orglog-node-graphql
UI Service for showing orchestrator logs using Node and GraphQL

# Steps to run this Service

1. Checkout the project using 'git clone'

2. 'npm install' to install the local dependencies

3. 'npm start' to run the GraphQL service in 4000 port

4. Visit 'http://localhost:4000' to use the use Playground with below request

{
get{
  batchId
  eventsClassifications
  jobLogId
  batchId
  totalEvents
  status
  fromDate
  toDate
  noOfMisconnection
  noOfFlightDelays
}
}
