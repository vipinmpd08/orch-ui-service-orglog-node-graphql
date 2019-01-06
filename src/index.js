const { GraphQLServer } = require('graphql-yoga')

let orLogs = [
  {
    jobLogId: '1',
    batchId: 'Batch-1',
    totalEvents: 15,
    priorityEvents : 5,
    eventsClassifications: `[{ "type": "EIBT", "count": 15 }, { "type": "TOBT", "count": 3 }, { "type": "AOG", "count": 2 }]`,
    quartzInstanceId: "Mohameds-MacBook-Pro.local15427003912961542700391281",
    status: "RUNNING",
    fromDate: "2018-11-20T07:54:08.041+0000",
    toDate: "2018-11-20T07:54:11.053+0000",
    noOfMisconnection: 5,
    noOfFlightDelays: 10
  },
  {
    jobLogId: '2',
    batchId: 'Batch-2',
    totalEvents: 15,
    priorityEvents : 5,
    eventsClassifications: `[{ "type": "EIBT", "count": 15 }, { "type": "TOBT", "count": 3 }, { "type": "AOG", "count": 2 }]`,
    quartzInstanceId: "Mohameds-MacBook-Pro.local15427003912961542700391281",
    status: "RUNNING",
    fromDate: "2018-11-20T07:54:08.041+0000",
    toDate: "2018-11-20T07:54:11.053+0000",
    noOfMisconnection: 5,
    noOfFlightDelays: 10
  },
  {
    jobLogId: '3',
    batchId: 'Batch-3',
    totalEvents: 15,
    priorityEvents : 5,
    eventsClassifications: `[{ "type": "EIBT", "count": 15 }, { "type": "TOBT", "count": 3 }, { "type": "AOG", "count": 2 }]`,
    quartzInstanceId: "Mohameds-MacBook-Pro.local15427003912961542700391281",
    status: "RUNNING",
    fromDate: "2018-11-20T07:54:08.041+0000",
    toDate: "2018-11-20T07:54:11.053+0000",
    noOfMisconnection: 5,
    noOfFlightDelays: 10
  },
  {
    jobLogId: '4',
    batchId: 'Batch-4',
    totalEvents: 15,
    priorityEvents : 5,
    eventsClassifications: `[{ "type": "EIBT", "count": 15 }, { "type": "TOBT", "count": 3 }, { "type": "AOG", "count": 2 }]`,
    quartzInstanceId: "Mohameds-MacBook-Pro.local15427003912961542700391281",
    status: "RUNNING",
    fromDate: "2018-11-20T07:54:08.041+0000",
    toDate: "2018-11-20T07:54:11.053+0000",
    noOfMisconnection: 5,
    noOfFlightDelays: 10
  },    
]

// 2
const resolvers = {
  Query: {
    get: () => orLogs
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      const newLink = {
        jobLogId: args.jobLogId,
        batchId: args.batchId,
        totalEvents: args.totalEvents,
      }
      orLogs.push(newLink)
      return newLink
    }
  },
  OrgLog: {
    jobLogId: (parent) => parent.jobLogId,
    batchId: (parent) => parent.batchId,
    totalEvents: (parent) => parent.totalEvents,
    eventsClassifications: (parent) => parent.eventsClassifications,
    quartzInstanceId: (parent) => parent.quartzInstanceId,
    status: (parent) => parent.status,
    fromDate: (parent) => parent.fromDate,
    toDate: (parent) => parent.toDate,
    noOfMisconnection: (parent) => parent.noOfMisconnection,
    noOfFlightDelays: (parent) => parent.noOfFlightDelays,
  }
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))