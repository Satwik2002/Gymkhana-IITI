import React from 'react';
import { Button, Box, Divider, Avatar } from '@mui/material';


function Profile() {
  return (
    <Box component="div" sx={{ bgcolor: '#E5E5E5' }}>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: 'absolute',
          height: '56px',
          width: '189px',
          left: '66px',
          top: '30px',
          borderRadius: '10px',
        }}
      >
        Add Section
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: 'absolute',
          height: '56px',
          width: '189px',
          left: '625px',
          top: '23px',
          borderRadius: '10px',
        }}
      >
        Preview
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: 'absolute',
          height: '55px',
          width: '189px',
          left: '860px',
          top: '25px',
          borderRadius: '10px',
        }}
      >
        Publish
      </Button>
      <Button
        disabled
        variant="contained"
        style={{
          position: 'absolute',
          backgroundColor: '#D7D1AC',
          height: '55px',
          width: '189px',
          left: '1095px',
          top: '23px',
          borderRadius: '10px',
        }}
      >
        Profile Page
      </Button>
      <Avatar
        src="/client/public/profile.png"
        style={{
          position: 'absolute',
          height: '76px',
          width: '81px',
          left: '1330px',
          top: '14px',
        }}
      />
      <Divider
        variant="middle"
        style={{
          position: 'absolute',
          width: '1322px',
          height: '0px',
          left: '59px',
          top: '110px',
          border: '1px solid #000000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '1345px',
          height: '845px',
          left: '47px',
          top: '141px',
          backgroundColor: '#D7D1AC',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '983px',
            height: '809px',
            left: '343px',
            top: '18px',
            backgroundColor: '#EFEBD1',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            width: '299px',
            height: '809px',
            left: '19px',
            top: '18px',
            backgroundColor: '#EFEBD1',
          }}
        ></div>
      </div>
    </Box>
  );
}

export default Profile;
