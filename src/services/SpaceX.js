const axios = require('axios');

const findLaunches = async (queryFilters) => {
  const { missionName = '', launchYear = '', rocketName = ''} = queryFilters;
  const queryParameters = [missionName, rocketName];

  queryParameters.map(queryParameter => sanitizeForQuery(queryParameter));
  
  const spaceXResponse = await axios({
    url: `https://api.spacexdata.com/v3/launches?launch_year=${launchYear}&rocket_name=${rocketName}&mission_name=${missionName}`,
    method: 'get'
  });
  
  return spaceXResponse.data.map((response) => {
    const { mission_name, rocket, launch_date_local } = response;
    const video_link = response.links.video_link

    return {
      missionName: mission_name,
      rocketName: rocket.rocket_name,
      launchDate: launch_date_local,
      videoLink: video_link || 'No Link Found'
    }
  })
}

const sanitizeForQuery = (argument) => {
  const sanitizedArgument = argument.replace(' ', '+')
  return sanitizedArgument;
}

export { findLaunches as default }