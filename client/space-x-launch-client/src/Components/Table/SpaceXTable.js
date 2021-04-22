import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';
import { Query } from 'react-apollo';

import getLaunches from '../../HelperFunctions/Launches';
import TableHeadCell from './TableHeadCells';

const SpaceXTable = ({ variables }) => {
  const listofHeaders = [
    'Mission Name',
    'Rocket Name',
    'Launch Date',
    'Video Link'
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell headerCells={listofHeaders} />
        </TableRow>
      </TableHead>
      <TableBody>
        <Query query={getLaunches} variables={variables}>
          {({ data, loading, error }) => {
            if (loading) return <TableRow><TableCell>Loading...</TableCell></TableRow>
            if (error) return <TableRow><TableCell>Something went wrong</TableCell></TableRow>
            if (data === undefined) return <TableRow><TableCell>Something went wrong</TableCell></TableRow>
              
              return (
                data && data.launches.map((launch, index) => {
                  const utcToDate = new Date(launch.launchDate)
                  const formattedTime = utcToDate.toLocaleString();
                  return (
                    <TableRow key={index}>
                      <TableCell>{launch.missionName}</TableCell>
                      <TableCell>{launch.rocketName}</TableCell>
                      <TableCell>{formattedTime}</TableCell>
                      <TableCell>
                        <Link href={launch.videoLink} rel="noopener noreferrer" target="_blank">{launch.videoLink}</Link>
                      </TableCell>
                    </TableRow>
                  )
                })
              )
          }}
        </Query>
      </TableBody>
    </Table>
  )
}

export default SpaceXTable;