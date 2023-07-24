// @ts-nocheck

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Badge,
  IconButton,
  SvgIcon,
  Stack,
} from "@mui/material";

import {
  BuildingIcon,
  MapIcon,
  EastIcon,
  CalendarTodayIcon,
  AccessTimeIcon,
  PeopleAltIcon,
} from "./Icons";

const theme = createTheme({
  typography: {
    fontFamily: ["Exo 2", "sans-serif"].join(","),
  },
});

export function EventCardaMedia(props) {
  /* 
  eventCardMedia: {
    containerSx
     media {
      sx : {},
      src
      alt
      eventStatus: {
       component = h3
          sx,
          children
    }
  }
  
  }*/
  return (
    <Box
      sx={{
        my: { xs: 2 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgba(255, 255, 255, 0.10)",
        borderRadius: "20px",
        backgroundColor: "#040914",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          borderColor: "rgba(255, 255, 255, 0.10)",
          borderRadius: "20px",
        }}
        image="/image-299.png"
        alt="Paella dish"
      />
      <EventCardStatus />
    </Box>
  );
}
export function EventCard() {
  /*  
    {
      EventCard : {
       containerSx: {}
      }
    }
    eventName
    /* 
  eventCardMedia: {
    containerSx
     media {
      sx : {},
      src
      alt
      
  }

       Day 
      Month
      Day
      Time 10 am CDT
      eventFormatName 
      capacity

      // 
      Day 
  Month
  Day
  Time 10 am CDT
  store
  cityLocation
  //

   containerSx
    lable
    lableSx
    IconsContainerSx
    IconsSx
  ....
  }*/

  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#040914", //040914
          color: "#fff",
          display: "grid",
          gridTemplateColumns: {
            md: `15rem 12rem auto auto`,
          },
          border: 1,
          borderColor: "rgba(255, 255, 255, 0.10)",
          borderRadius: "20px",
          px: { xs: 4, sm: 2, md: 2 },
        }}
      >
        <EventCardaMedia />

        <Box
          sx={{
            display: { md: `flex`, xs: `none` },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EventCardDate />
        </Box>

        <Box sx={{ pl: 2, pr: 5, py: { md: 5, xs: 0 } }}>
          <Typography
            sx={{
              fontSize: { md: `2.66rem`, xs: `1.2rem` },
              fontWeight: 700,
              pb: 2,
              lineHeight: 1.5,
            }}
          >
            Northeast Collectibles Competitive Kryptic Tower play
          </Typography>
          <EventBadgeStats />
          <CardActions sx={{ p: 0 }}>
            <EventCardLocation />
            <EventCardMore />
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
export function EventCardMore() {
  /*
    containerSx
    lable
    lableSx
    IconsContainerSx
    IconsSx
  */
  return (
    <Box
      sx={{
        display: { md: `flex`, xs: `none` },
        alignItems: "center",
        justifyContent: "end",
        textTransform: "none",
        flex: `1 1 0%`,
        fontSize: "1.5rem",
        color: "#5C6BC0",
        pt: 2,
        pl: { md: 0, xs: `0` },
      }}
    >
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#5C6BC0",
          display: { lg: "block", md: `none` },
          cursor: "pointer",
        }}
      >
        More info
      </Box>
      <Box
        component={"span"}
        sx={{
          ml: 1,
          borderRadius: "9999px",
          backgroundColor: "#5C6BC0",
          width: "50px",
          height: "50px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <EastIcon sx={{ color: "#fff" }} />
      </Box>
    </Box>
  );
}
export function EventCardStatus(props) {
  /*
     eventStatus: {
       component = h3
          sx,
          children
    }
  */
  return (
    <Box
      component="h3"
      sx={{
        borderRadius: `0px 0px 20px 20px`,
        background: "#02BA1F",
        position: "absolute",
        bottom: -20,
        width: "100%",
        textAlign: "center",
        py: 1,
      }}
    >
      In Progress
    </Box>
  );
}
export function EventCardDate() {
  /*
  Day 
  Month
  Day
  Time 10 am CDT
  */
  const commonStyles = {
    background: "inherit",
    border: 1,
    borderColor: "rgba(255, 255, 255, 0.30)",
    borderRadius: "20px",
    py: 1.4,
    px: 1.4,
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };
  return (
    <Box
      sx={{
        ...commonStyles,
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>Fri</Typography>
      <Typography
        sx={{
          color: "#02BA1F",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        Aug 23
      </Typography>

      <Typography sx={{ fontSize: "20px" }}>10 am CDT</Typography>
    </Box>
  );
}

export function EventBadgeStats() {
  return (
    /*
      eventFormatName 
      capacity
    */
    <Stack spacing={2} direction="row">
      <Badge
        sx={{
          px: { xs: 2, sm: 2 },
          py: 0.4,
          border: 1,
          borderColor: "rgba(255, 255, 255, 0.30)",
          borderRadius: "40px",
        }}
      >
        <Typography sx={{ fontSize: { md: `20px`, xs: `1.1rem` } }}>
          Constructed
        </Typography>
      </Badge>
      <Badge
        sx={{
          px: 2,
          py: 0.4,
          border: 1,
          borderColor: "rgba(255, 255, 255, 0.30)",
          borderRadius: "40px",
        }}
      >
        <Typography sx={{ fontSize: { md: `20px`, xs: `1.1rem` } }}>
          7/23 capacity
        </Typography>
      </Badge>
    </Stack>
  );
}

export function EventCardLocation() {
  /*
   Day 
  Month
  Day
  Time 10 am CDT
  store
  cityLocation
  */
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", md: "row", sm: "column" }}
      sx={{ py: 4 }}
    >
      <Badge sx={{ display: { md: `none`, xs: `flex` } }}>
        <CalendarTodayIcon sx={{ width: { xs: "20px", sm: "auto" } }} />
        <Typography sx={{ fontSize: { md: `20px`, xs: `1.1rem` }, pl: 2 }}>
          Sun July 23, 2023
        </Typography>
      </Badge>
      <Badge sx={{ display: { md: `none`, xs: `flex` } }}>
        <AccessTimeIcon sx={{ width: { xs: "20px", sm: "auto" } }} />
        <Typography sx={{ fontSize: { md: `20px`, xs: `1.1rem` }, pl: 2 }}>
          11:00 AM
        </Typography>
      </Badge>
      <Badge>
        <BuildingIcon sx={{ width: { xs: "20px", sm: "auto" } }} />
        <Typography
          sx={{ fontSize: { md: `20px`, xs: `1.1rem` }, pl: { xs: 1, sm: 2 } }}
        >
          Northeast Collectibles
        </Typography>
      </Badge>

      <Badge
        sx={{ alignItems: { md: "center" }, justifyContent: { md: "center" } }}
      >
        <MapIcon sx={{ width: { xs: "20px", sm: "auto" } }} />

        <Typography sx={{ fontSize: { md: `20px`, xs: `1.1rem` }, pl: 2 }}>
          Seymour, CT
        </Typography>
      </Badge>
    </Stack>
  );
}
