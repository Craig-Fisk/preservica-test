import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Info, Delete } from "@mui/icons-material";
import { UserList } from "./types";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data as UserList;
}

export function UserListPage() {
  const [userList, setUserList] = useState<UserList>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setUserList(data);
    });
  }, []);

  return (
    <Container component="main">
      {userList &&
        userList.map((user) => {
          return (
            <Card key={user.id} sx={{ marginBottom: "24px" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs="auto">
                    <Typography variant="subtitle2" component="p">
                      Username:
                    </Typography>
                    <Typography>{user.username}</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="subtitle2" component="p">
                      Fullname:
                    </Typography>
                    <Typography>{user.name}</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="subtitle2" component="p">
                      Email Address:
                    </Typography>
                    <Typography>{user.email}</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="subtitle2" component="p">
                      Actions:
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<Info />}
                        size="small"
                      >
                        Details
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Delete />}
                        size="small"
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
    </Container>
  );
}
