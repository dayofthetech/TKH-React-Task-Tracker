/* component for displaying tasks */
// rfc shorcut for react snippet
// https://sentry.io/answers/unique-key-prop/
import React from 'react'

function DisplayTasks({tasks}) {
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
      {/* when creating or looping through a list
      React needs the key prop
       */}
      {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
export default DisplayTasks;
