import { gql } from 'apollo-boost';

const getLaunches = gql`
      query (
        $missionName: String
        $rocketName: String
        $launchYear: Int
      )
      {
        launches (
          missionName: $missionName
          rocketName: $rocketName
          launchYear: $launchYear
        ) {
          missionName
          rocketName
          launchDate
          videoLink
        }
      }
    `

  export default getLaunches;