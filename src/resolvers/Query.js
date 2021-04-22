import findLaunches from '../services/SpaceX'

const Query = {
  launches(parent, args, ctx, info) {
    const queryResponse = findLaunches(args);
    return queryResponse;
  }
}

export { Query as default }