import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LaunchQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, { 
    fetchPolicy: 'no-cache',
    fetchOptions: {
      mode: 'no-cors',
    },
  });
  console.log("data = ", data);
  console.log("Error = ", error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <div>
        <h2>TEST</h2>
        {/* {data} */}
      </div>
    </div>


  )
}

export default Launches
