import React from 'react';
import HeaderProfile from './HeaderProfile';
import { Card, CardHeader, Typography, Input, Button, CardActions } from '@mui/material';
import { height } from '@mui/system';

function Profile() {
  return (
    <div style={{ backgroundolor: '#E5E5E5' }}>
      <HeaderProfile />
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
        >
          <div
            style={{
              position: 'absolute',
              width: '937px',
              height: '269px',
              left: '31px',
              top: '26px',
              background: '#FEFFD7',
              border: ' 2px solid #D7D1AC',
              boxSizing: 'border-box',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '10px',
            }}
          >
            <label> Section 1 Header</label>
            {/* <div
              style={{
                position: "absolute",
                height: "172px",
                width: "231px",
                left: "26px",
                top: "72px",
                borderRadius: "10px",
                backgroundColor: "#D7D1AC"
              }}
            >

            </div> */}
            <Card
              sx={{
                maxWidth: '231px',
                bgcolor: '#D7D1AC',
                maxHeight: '172px',
                paddingX: '26px',
                borderRadius: '10px',
              }}
            >
              <CardHeader>
                <Typography gutterBottom variant="h5" component="div">
                  Upload Image
                </Typography>
                <CardActions>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
                </CardActions>
              </CardHeader>
            </Card>
          </div>
        </div>
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
    </div>
  );
}

export default Profile;
