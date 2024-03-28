import pb from './dbConnection'

// operations
export const getAllOperations = async (params) => {
   // you can also fetch all records at once via getFullList
const records = await pb.collection('schedules_operations').getFullList({
   sort: '-created',
});

return records;
}

// schedules

export const addOperationToSchedule = async(data) => {

   const record = await pb.collection('tasks_for_schedule').create(data);
   return record
}


// tasks

export const getAllTasks = async (params) => {
   const records = await pb.collection('tasks_for_schedule').getFullList({
      sort: '-created',expand: 'belongs_to, operation'
  });
  return records
}